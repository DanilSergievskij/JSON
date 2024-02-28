<script>

import { enhance } from '$app/forms';
	export let data;
 let searchData=''
 let opendialog = false;
 let isopenCardSideBar = false;
 let countProductCard = 0;
 let productsInCard = [];
 let productSumm = 0;
 const addProductToCard = (productData)=> {
	productsInCard.push(productData)
	console.log(productsInCard)
	countProductCard=countProductCard+1;
	productsInCard=productsInCard;
	productSumm = productSumm + productData.price -
				(productData.price / 100) * productData.discountPercentage;
};
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
	<button class="btn" on:click={() => (isopenCardSideBar=!isopenCardSideBar)}>
		<svg class="h-6 v-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg></button>
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



	  <div class="drawer drawer-end " class:drawer-open="{isopenCardSideBar}">
		<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content ">
		  <!-- Page content here -->
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
		</div> 
		<div class="drawer-side z-10">
		  <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
		  <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			{#each productsInCard as product}
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
			{/each}
		<div>Summ: {productSumm}</div>
		  </ul>


		</div>
	  </div>


	