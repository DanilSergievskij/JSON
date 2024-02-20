/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const request = await fetch('https://dummyjson.com/products?limit=20')
	const response = await request.json();
	console.log('response', response)
	return {
		products: response.products
	};
}