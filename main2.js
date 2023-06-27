let foodItems = [
  {
    id: 1,
    name: "Paneer 65",
    amount: 320,
    imageUrl: "image/FI-1.jpeg",
  },
  {
    id: 1,
    name: "Donne Chicken Biryani",
    amount: 210,
    imageUrl: "image/FI-2.jpeg",
  },
  {
    id: 1,
    name: "Poori (2pcs)",
    amount: 70,
    imageUrl: "image/FI-1.jpeg",
  },
  {
    id: 1,
    name: "Coke Tin 330 Ml",
    amount: 66.66,
    imageUrl: "image/FI-1.jpeg",
  },
  {
    id: 1,
    name: "Mineral Water 1l",
    amount: 19.05,
    imageUrl: "image/FI-1.jpeg",
  },
];

let cont = document.querySelector(".container");

let rowDiv = document.createElement("div");
rowDiv.classList.add("row");
cont.appendChild(rowDiv);

foodItems.forEach(function(e){
  let colDiv = document.createElement("div");
colDiv.classList.add("col");
rowDiv.appendChild(colDiv);

let cardDiv = document.createElement("div");
cardDiv.classList.add("col-card");
colDiv.appendChild(cardDiv);

let lDiv=document.createElement("div");
cardDiv.appendChild(lDiv)


let head = document.createElement("h2");
head.innerHTML = e.name;
lDiv.appendChild(head);

let amountTag = document.createElement("p");
amountTag.innerHTML ="Rs."+ e.amount;
lDiv.appendChild(amountTag);


let rDiv=document.createElement("div");
cardDiv.appendChild(rDiv)
// add to cart section

let cartDiv = document.createElement("p");
cartDiv.classList.add("qnty-sec");
rDiv.appendChild(cartDiv);

let decreDiv = document.createElement("span");
decreDiv.innerHTML = "-";
decreDiv.setAttribute("onclick", "sub(this)");
cartDiv.appendChild(decreDiv);

let zeroDiv = document.createElement("span");
zeroDiv.classList.add("leastVal");
zeroDiv.innerHTML = "0";
cartDiv.appendChild(zeroDiv);

let increDiv = document.createElement("span");
increDiv.innerHTML = "+";
increDiv.setAttribute("onclick", "add(this)");
cartDiv.appendChild(increDiv);

})

// add function
function add(e) {
  e.parentElement.childNodes.forEach(function (cv) {
  if(cv.classList.contains('leastVal')){
    var a = parseInt(cv.innerHTML)
    cv.innerHTML=++a
      }
    })
}
// sub function
function sub(e) {
  e.parentElement.childNodes.forEach(function (cv) {
  if(cv.classList.contains('leastVal')){
    var a = parseInt(cv.innerHTML)
   if(a>0){
      cv.innerHTML=--a
    }
      }
      
    })
    
}

function homeClick(){
  window.location='./index.html'
}
