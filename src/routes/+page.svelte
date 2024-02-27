<script>

import { enhance } from '$app/forms';
	export let data;
 let searchData=''
 let opendialog = false;
 let countProductCard = 0;
 let productsInCard = [];
 const addProductToCard = (productData)=> {
	productsInCard.push(productData)
	console.log(productsInCard)
}
 const searchFunc = () => {
	console.log ('searchFiled', searchData)
	fetch(`https://dummyjson.com/products/search?q=${searchData}`)
			.then((res) => res.json())
			.then((resData) => {
				data.products = resData.products
			});
 }
 let productDataFormDialog={}
 const getProductData = (product) => {
		console.log('product_25', product);
		productDataFormDialog = product;
		opendialog = true;
	}
</script>

<dialog class="modal" class:modal-open={opendialog}>
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={() => (opendialog=false)}>✕</button>
    </form>
   
    <div class="card card-compact  bg-base-100 shadow-xl"></div>
		<figure><img src={productDataFormDialog.thumbnail} alt="Shoes" /></figure>
		<div class="card-body">
		  <h2 class="card-title">{productDataFormDialog.title} </h2>
		  <p>{productDataFormDialog.description} </p>
		  <p> Remains:{productDataFormDialog.stock} </p>
		  <div class="card-actions justify-end">
			<div>{productDataFormDialog.price -
				(productDataFormDialog.price / 100) * productDataFormDialog.discountPercentage} $ </div>
			<button class="btn btn-primary" 
			on:click={addProductToCard(productDataFormDialog)}>Buy Now</button>
		  </div>
		</div>
	  </div>
</dialog>

<h1>List from dunny</h1>

<p>Description list <a href = https://dummyjson.com/docs/products>https://dummyjson.com/docs/products</a></p>


<div class="flex justify-between p-10">

<div class="join">
	
	<input class="input input-bordered join-item" 
	bind:value={searchData}
	placeholder="Search"/>
	<button class="btn join-item rounded-r-full" on:click={searchFunc}>Search</button>
	
  </div>
  <div class="indicator">
	<span class="indicator-item badge badge-secondary">{countProductCard}</span> 
	<button class="btn">Card</button>
  </div>
  </div>


<!-- { #each data.products as product}
<div><img src = "{product.thumbnail}" alt="thumbnailFromList"> </div> 
<div>ID{product.id}</div>
<div>TITLE{product.title}</div>
<div>Description {product.description}</div>
<div>price {product.price} $</div>
{/each} -->


	
	 <!-- <h1 class="text-3xl font-bold underline">
		Hello world!
	  </h1>

	  <button class="btn">Button</button> -->



	

	  <div class="overflow-x-auto">
		<table class="table">

		  <thead>
			<tr>
			  <th>
				<label>
				  <input type="checkbox" class="checkbox" />
				</label>
			  </th>
			  <th>Title</th>
			  <th>Description</th>
			  <th>Ratingr</th>
			  <th></th>
			</tr>
		  </thead>
		  <tbody>
		
			{#each data.products as product}
			<tr>
				<th>
				  <label>
					<input type="checkbox" class="checkbox" />
				  </label>
				</th>
				<td>
				  <div class="flex items-center gap-3">
					<div class="avatar">
					  <div class="mask mask-squircle w-12 h-12">
						<img src={product.thumbnail} alt="Avatar Tailwind CSS Component" />
					  </div>
					</div>
					<div>
					  <div class="font-bold">{product.title}</div>
					  <div class="text-sm opacity-50"></div>
					  <div class="text-sm opacity-50" style="text-decoration:line-through;color:red">{(product.price / 100) * product.discountPercentage + product.price} $</div>
					  <div class="text-sm opacity-50">{product.price} $</div>
					  <div class="text-sm opacity-50">{product.discountPercentage} %</div>
					</div>
				  </div>
				</td>
				<td>
				  description
				  <br/>
				  <span class="badge badge-ghost badge-sm">{product.brand}</span>
				</td>
				<td><div class="rating">
					<input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
					<input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
					<input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
					<input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
					<input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
				  </div></td>
				<th>
				  <button class="btn btn-ghost btn-xs" on:click={getProductData(product)}>details</button>
				</th>
			  </tr>
	 {/each} 
		
		  </tbody>
	
		  <tfoot>
			<tr>
			  <th></th>
			  <th>Name</th>
			  <th>Job</th>
			  <th>Favorite Color</th>
			  <th></th>
			</tr>
		  </tfoot>
		  
		</table>
	  </div>
	