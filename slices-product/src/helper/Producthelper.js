

function getProduct(id, products) {
    console.log("Herer:" + products);
    return products.filter(product => { return product.id === parseInt(id) })[0];
}


export { getProduct };