let food = [
  {
    id: 1,
    name: "Udupi Gardenia",
    cuisine: "South Indian, North Indian",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hm9alpsl6gvphjgfyyxc",
    star:"bi bi-star-half",
    ratings: "4.4",
    preparation: "45 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 2,
    name: "Srinidhi Veg Food Court",
    cuisine: " South Indian",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pljxtoxjtpn8wecz2icg",
    ratings: "3.4",
    preparation: "37 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 3,
    name: "Third Wave Coffee",
    cuisine: " Beverages, Bakery",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0dca660dbdf2e04f9b861c4426ffd41e",
    ratings: "2.2",
    preparation: "25 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 4,
    name: "Madurai Idly Shop",
    cuisine: " South Indian",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ntuo17tgujgaabprbhfj",
    ratings: "4.4",
    preparation: "40 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 5,
    name: "Royal Donne Biryani",
    cuisine: "Biryani, Chinese",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/whinpapa0ltdpemkwqj0",
    ratings: "3.9",
    preparation: "45 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 6,
    name: "McDonald's",
    cuisine: "Burgers, Beverages",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ee5f8e06b300efc07c9fe3f4df40dfc4",
    ratings: "4.4",
    preparation: "35 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 7,
    name: "Bakingo",
    cuisine: " Beverages, Desserts",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zf2wklnad7kyvgk98thl",
    ratings: "3.3",
    preparation: "25 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 8,
    name: "Mrs Iyengar's Kitchen",
    cuisine: "South Indian, Jain",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a8kat3hsu3fasmedhigp",
    ratings: "4.0",
    preparation: "40 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 9,
    name: "Mani's Dum Biryani",
    cuisine: "North Indian, Hyderabadi",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ndlmfkgwt4yrgjqss8u3",
    ratings: "3.9",
    preparation: "45 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 10,
    name: "Anu Momos Chinese Kitchen",
    cuisine: "Chinese",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ocsapohbzangojolgvtt",
    ratings: "2.4",
    preparation: "30 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 11,
    name: "Kolkata Famous Katti Rolls",
    cuisine: "Punjabi",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zxczitdem6qq8hv1mt0a",
    ratings: "3.6",
    preparation: "25 mins",
    eachone: "Rs.200 for two",
  },
  {
    id: 12,
    name: "Beijing Bites",
    cuisine: "Chinese, Thai",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/py9b9lfxb8buvtgpq1kd",
    ratings: "4.2",
    preparation: "40 mins",
    eachone: "Rs.200 for two",
  },
];

let cont = document.querySelector(".container");

let cards = document.createElement("div");
cards.classList.add("row");
cont.appendChild(cards);

food.forEach(function (e) {
  let div = document.createElement("div");
  div.classList.add("col");
  cards.appendChild(div);

  let div2 = document.createElement("div");
  div2.classList.add("col-card");
  div.appendChild(div2);

  let img = document.createElement("img");
  img.src = e.imgUrl;
  div2.appendChild(img);

  let head = document.createElement("h2");
  head.innerText = e.name;
  div2.appendChild(head);

  let para = document.createElement("p");
  para.innerText = e.cuisine;
  div2.appendChild(para);

  // =============INNER DIV==============
  let innerdiv = document.createElement("div");
  innerdiv.classList.add("inner-row");
  div2.appendChild(innerdiv);

  // let innercol = document.createElement("div");
  // innercol.classList.add("inner-col");
  // innerdiv.appendChild(innercol);

  // let icon = document.createElement("i");
  // icon.classList.add("bi bi-star-half");
  // innerdiv.appendChild(icon);

  let atag = document.createElement("p");
  atag.innerText = e.ratings;
  innerdiv.appendChild(atag);

// ratings color 

 ratings();
  function ratings(){
    if(e.ratings>=4.0){
      		atag.style.border="1px solid white";
      	atag.style.backgroundColor="green";
        atag.style.color="white"
      	}
      	else if((e.ratings>=2.5) && (e.ratings<=3.9)){
      		atag.style.border="1px solid white";
      		atag.style.backgroundColor="orange";
          atag.style.color="white"
      	}
      	else if(e.ratings<=2.4){
      		atag.style.border="1px solid white";
      		atag.style.backgroundColor="red";
          atag.style.color="white"
      	}
  }

  let innerhead = document.createElement("h4");
  innerhead.innerText = e.preparation;
  innerdiv.appendChild(innerhead);

  let innerhead2 = document.createElement("h4");
  innerhead2.innerText = e.eachone;
  innerdiv.appendChild(innerhead2);
});


