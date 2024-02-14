<script>
   	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>List from dunny</h1>

<p>Description list <a href = https://dummyjson.com/docs/products>https://dummyjson.com/docs/products</a></p>

<div><img src = "{data.products.thumbnail}" alt="thumbnailFromList"> </div> 
<div>ID{data.products.id}</div>
<div>TITLE{data.products.title}</div>
<div>Description {data.products.description}</div>
<div>price {data.products.price} $</div>

{#each data.products.images as imageSrc}
     <div><img src={imageSrc} alt=productImage/></div>
	 {/each} 
	
	 <h1 class="text-3xl font-bold underline">
		Hello world!
	  </h1>

	  <button class="btn">Button</button>

	  <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
		{#each data.products.images as imageSrc}
		<div class="carousel-item">
			<img src="{imageSrc}" class="rounded-box" />
		  </div> 
	 {/each} 
		
	  </div>

