import { fail, redirect } from '@sveltejs/kit';
import bcrypt from "bcrypt";
const users = [
    {
        email: 'sergievskij@gmail.com',
        password: '$2b$10$SJag1WLcFRQb.FR5TysBJeu0t7bnHiYmTaCBG5w3FtmzxtoX0.3Yq'
    },
    {
        email: 'channelmonitor@gmail.com',
        password: '$2b$10$SJag1WLcFRQb.FR5TysBJeu0t7bnHiYmTaCBG5w3FtmzxtoX0.3Yq'
    }
]
let logedUser = {}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  if (Object.values(logedUser).length) {
    redirect(302, '/');
}
return {users, user:logedUser};
}

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

export const actions = {
   login: async (event) => {
    const formData = Object.fromEntries(await event.request.formData());
    console.log('formData', formData);
    const errorsObj = {};
    const findedUser = users.find((user) => user.email === formData.email);
    if (!validateEmail(formData.email)) {
       errorsObj.email = 'Email is not valid ';

    }
   
    if (findedUser === undefined ) {
      errorsObj.password = 'User is not register';
    }
    if (!formData.password.length){
      errorsObj.password = 'Password is not correct';
    }
    if (Object.values(errorsObj).length) {
      return fail(400, errorsObj)
    }
    
    const isPasswordCompare = bcrypt.compareSync(formData.password, findedUser?.password);
    if (isPasswordCompare) {
      logedUser = findedUser;
      
    }
    if (Object.values(errorsObj).length) {
        return fail(400, errorsObj);
    }
    
      redirect(302, '/');

   },
   register: async (event) => {
    const formData = Object.fromEntries(await event.request.formData());
    const findedUser = users.find((user) => user.email === formData.email);
    if (findedUser !== undefined) {
      return fail(400, { message: 'User is now register!' });
    }
    const errorsObj = {};
    if (!validateEmail(formData.email)) {
      errorsObj.email = 'Email is not valid!';
    }

    if (!formData.password || formData.password.length < 6) {
      errorsObj.password = 'Password is more 6 character!';
    }

    if (Object.values(errorsObj).length) {
      return fail(400, errorsObj);
    }

    if (validateEmail(formData.email)) {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(myPlaintextPassword, salt);  
      const findedUser = users.find((user) => user.email === formData.email);
      console.log('findedUser', findedUser);
      if (findedUser === undefined && formData.password) {
        const newUser = {
          email: formData.email,
          password: hash
        };
        users.push(newUser);
        logedUser = newUser;
      }
    }
    redirect(302, '/');
  }
};