<script>
// import { TinySlider } from "svelte-tiny-slider"
	export let data;
</script>

<h1>List from dunny</h1>

<p>Description list <a href = https://dummyjson.com/docs/products>https://dummyjson.com/docs/products</a></p>


{ #each data.products as product}
<div><img src = "{product.thumbnail}" alt="thumbnailFromList"> </div> 
<div>ID{product.id}</div>
<div>TITLE{product.title}</div>
<div>Description {product.description}</div>
<div>price {product.price} $</div>
{/each}


	
	 <h1 class="text-3xl font-bold underline">
		Hello world!
	  </h1>

	  <button class="btn">Button</button>


<!-- 
	  <TinySlider>
		{#each data.products.images as imageSrc}
		<img src="{imageSrc}" class="rounded-box" />
		{/each}
	  
		<div slot="controls" let:setIndex let:currentIndex>
		  {#each data.products.images as imageSrc}
			<button
			  class:active={i == currentIndex}
			  on:click={() => setIndex(i)}
			  on:focus={() => setIndex(i)}>
			  <img src={imageSrc} alt="" height=60 />
			</button>
		  {/each}
		</div>
	  </TinySlider> -->

	  <!-- <div class="overflow-x-auto">
		<table class="table">

		  <thead>
			<tr>
			  <th>
				<label>
				  <input type="checkbox" class="checkbox" />
				</label>
			  </th>
			  <th>Name</th>
			  <th>Job</th>
			  <th>Favorite Color</th>
			  <th></th>
			</tr>
		  </thead>
		  <tbody>
		
			{#each data.products.images as imageSrc}
			<p>{imageSrc}</p>
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
						<img src={imageSrc} alt="Avatar Tailwind CSS Component" />
					  </div>
					</div>
					<div>
					  <div class="font-bold">Hart Hagerty</div>
					  <div class="text-sm opacity-50">United States</div>
					</div>
				  </div>
				</td>
				<td>
				  Zemlak, Daniel and Leannon
				  <br/>
				  <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
				</td>
				<td>Purple</td>
				<th>
				  <button class="btn btn-ghost btn-xs">details</button>
				</th>
			  </tr>
	 {/each} 
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
					  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
					</div>
				  </div>
				  <div>
					<div class="font-bold">Hart Hagerty</div>
					<div class="text-sm opacity-50">United States</div>
				  </div>
				</div>
			  </td>
			  <td>
				Zemlak, Daniel and Leannon
				<br/>
				<span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
			  </td>
			  <td>Purple</td>
			  <th>
				<button class="btn btn-ghost btn-xs">details</button>
			  </th>
			</tr>
			
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
	  </div> -->
