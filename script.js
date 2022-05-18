//fetch() method: It is defined on the window object,
//which we can use to perform request .
//This method will return promise...
// Promise will either be fullfilled or rejected.

fetch ('https://fakestoreapi.com/products').then((data)=>{
   // console.log(data);
   return data.json();
}).then((completeData)=>{
    //console.log(completeData);

    let data1="";

    completeData.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} class="images" alt="img">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;




}).catch((err)=>{
    console.log(err);
})