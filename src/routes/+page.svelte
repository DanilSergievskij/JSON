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