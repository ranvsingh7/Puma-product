//store the products array in localstorage as "products"
function Addproduct(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}


function addproduct(event){
event.preventDefault()
let products=document.getElementById("products");
let type=products.type.value;
let desc=products.desc.value;
let price=products.price.value;
let image=products.image.value;

// console.log(type,desc,price,image)
let p1=new Addproduct(type,desc,price,image)
console.log(p1)
let data=JSON.parse(localStorage.getItem("products"))||[]
data.push(p1);

localStorage.setItem("products",JSON.stringify(data));

document.querySelector("#type").value=null
document.querySelector("#desc").value=null
document.querySelector("#price").value=null
document.querySelector("#image").value=null

}
