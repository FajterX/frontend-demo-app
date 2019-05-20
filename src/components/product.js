function renderProduct(product) {
    return `
	    <div class="product">
	        <h1>${product.name}</h1>
	        <div>${parsePrice(product.price)}</div>
	        <div>${product.description.text}</div>
	    </div>
    `
} 