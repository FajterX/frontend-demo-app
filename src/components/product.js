function renderProduct(product) {
    return `
	    <div class="product">
	    	<img class="product__image" src="${product.image.url}">
	    	<div class="product__info">
		        <h1 class="product__title">${product.name}</h1>
		        <div>${parsePrice(product.price)}</div>
		        <div class="product__desc">${product.description.text}</div>
	    	</div>
	    </div>
    `
} 