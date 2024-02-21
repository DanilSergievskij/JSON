<script>

import { enhance } from '$app/forms';
	export let data;
 let searchData=''

 const searchFunc = () => {
	console.log ('searchFiled', searchData)
	fetch(`https://dummyjson.com/products/search?q=${searchData}`)
			.then((res) => res.json())
			.then((resData) => {
				data.products = resData.products
			});
 }
	
</script>

<h1>List from dunny</h1>

<p>Description list <a href = https://dummyjson.com/docs/products>https://dummyjson.com/docs/products</a></p>

<div class="join">
	<input class="input input-bordered join-item" 
	bind:value={searchData}
	placeholder="Search"/>
	<button class="btn join-item rounded-r-full" on:click={searchFunc}>Search</button>
	
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
				  <button class="btn btn-ghost btn-xs">details</button>
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
	