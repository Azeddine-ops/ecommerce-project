 var productimg=document.getElementById("productimg");
            var Smallimg=document.getElementsByClassName("small-img");
            
Smallimg[0].onclick=function(){

    productimg.src=Smallimg[0].src;
}
Smallimg[1].onclick=function(){

productimg.src=Smallimg[1].src;
}
Smallimg[2].onclick=function(){

productimg.src=Smallimg[2].src;
}
Smallimg[3].onclick=function(){

productimg.src=Smallimg[3].src;
}
document.getElementById('add-to-cart-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.querySelector('h1').textContent;
    const price = parseFloat(document.querySelector('h4').textContent.replace('$', ''));
    const image = document.getElementById('productimg').src;
    const quantity = parseInt(document.querySelector('input[type="number"]').value);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ name, price, image, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    const messageBox = document.getElementById('message-box');
messageBox.textContent = `${name} added to cart`;
messageBox.style.display = 'block';

setTimeout(() => {
  messageBox.style.display = 'none';
}, 3000);

  });
