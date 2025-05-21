document.addEventListener('DOMContentLoaded', function () {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const summary = document.getElementById('order-summary');

  if (cart.length === 0) {
    summary.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let subtotal = 0;
  let html = "<ul style='list-style: none; padding: 0;'>";

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    html += `
      <li style="margin-bottom: 10px;">
        ${item.quantity} × ${item.name} - $${itemTotal.toFixed(2)}
      </li>
    `;
  });

  const taxes = subtotal * 0.15;
  const total = subtotal + taxes;

  html += `
    </ul>
    <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
    <p><strong>Taxes (15%):</strong> $${taxes.toFixed(2)}</p>
    <p><strong>Total:</strong> $${total.toFixed(2)}</p>
  `;

  summary.innerHTML = html;
});

// تأكيد الطلب
document.getElementById('checkout-form').addEventListener('submit', function (e) {
  e.preventDefault();

  alert("Thank you! Your order has been placed.");

  localStorage.removeItem('cart'); // حذف السلة بعد الطلب
  window.location.href = 'fcb.html'; // العودة إلى الصفحة الرئيسية أو صفحة تأكيد
});
