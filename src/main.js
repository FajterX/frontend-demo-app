    
const response = getProductList();
const listingElement = document.querySelector('#listing');

const products = response.products
    .map( product => renderProduct(product))
    .forEach( productHTML => {
        listingElement.innerHTML += productHTML
    })

function parsePrice(price) {
	var amount = price.amount.replace(".", ",")
	if(price.currency === 'PLN') return amount + ' PLN'
	else return price.currency + ' ' + amount
}