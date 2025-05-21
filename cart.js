document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const tableBody = document.querySelector('table').getElementsByTagName('tbody')[0] || document.querySelector('table');
    let total = 0;

    cart.forEach(product => {
        const subtotal = product.price * product.quantity;
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="cart-info">
                    <img src="${product.image}">
                    <div>
                        <p>${product.name}</p>
                        <small>Price: $${product.price.toFixed(2)}</small>
                        <br>
                        <a href="#" class="remove-btn" data-name="${product.name}">Remove</a>
                    </div>
                </div>
            </td>
            <td><input type="number" value="${product.quantity}" min="1" data-name="${product.name}" class="quantity-input"></td>
            <td>$${subtotal.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    // تحديث الإجمالي
    document.querySelector('.total-price table').innerHTML = `
        <tr><td>Subtotal</td><td>$${total.toFixed(2)}</td></tr>
        <tr><td>Taxes</td><td>$${(total * 0.15).toFixed(2)}</td></tr>
        <tr><td>Total</td><td>$${(total * 1.15).toFixed(2)}</td></tr>
    `;

    // حذف عنصر من السلة
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            e.preventDefault();
            const name = e.target.getAttribute('data-name');

            cart = cart.filter(item => item.name !== name); // حذف المنتج
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload(); // إعادة تحميل الصفحة
        }
    });
});
document.addEventListener('change', function (e) {
  if (e.target.classList.contains('quantity-input')) {
    const newQuantity = parseInt(e.target.value);
    const name = e.target.getAttribute('data-name');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updatedCart = cart.map(item => {
      if (item.name === name) {
        item.quantity = newQuantity;
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    location.reload(); // أو يمكن تحديث القيم بدون إعادة تحميل
  }
});
document.addEventListener('input', function(e) {
  if (e.target.classList.contains('quantity-input')) {
    const name = e.target.getAttribute('data-name');
    const newQuantity = parseInt(e.target.value);

    if (isNaN(newQuantity) || newQuantity < 1) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updatedCart = cart.map(item => {
      if (item.name === name) {
        item.quantity = newQuantity;
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    location.reload(); // لإعادة حساب المجموع وتحديث العرض
  }
});
document.getElementById('clear-cart-btn').addEventListener('click', function () {
  if (confirm('Are you sure you want to clear the cart?')) {
    localStorage.removeItem('cart');
    location.reload();
  }
});
document.addEventListener('change', function(e) {
  if (e.target.classList.contains('quantity-input')) {
    const name = e.target.getAttribute('data-name');
    const newQuantity = parseInt(e.target.value);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const item = cart.find(p => p.name === name);
    if (item) {
      item.quantity = newQuantity;
      localStorage.setItem('cart', JSON.stringify(cart));
      location.reload(); // لإعادة تحميل الصفحة بالتحديثات الجديدة
    }
  }
});
