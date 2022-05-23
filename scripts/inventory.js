let data=JSON.parse(localStorage.getItem("products"))||[]

data.forEach(function(elem){
    let product=document.createElement("div")

    let type=document.createElement("p")
    type.innerText=elem.type;

    let  desc=document.createElement("p")
    desc.innerText=elem.desc;

    let price=document.createElement("p")
    price.innerText=elem.price

    let image=document.createElement("img")
    image.src=elem.image


    let remove=document.createElement("button")
    remove.innerText="Remove Product"
    remove.id="remove_product"

    product.append(image,type,desc,price,remove)

    document.querySelector("#all_products").append(product)


})

document.querySelector("#remove_product").addEventListener("click",remove)

function remove(){

}