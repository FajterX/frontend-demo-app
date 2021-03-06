    
const response = getProductList();
const listingElement = document.querySelector('#listing');

const products = response.products
    .map(renderProduct)
    .forEach( productHTML => {
        listingElement.innerHTML += productHTML
    })

function parsePrice(price) {
	if(price.currency === 'PLN') return price.amount.replace(".", ",") + ' PLN'
	else return price.currency + ' ' + price.amount
}