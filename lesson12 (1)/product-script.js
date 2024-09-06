document.addEventListener('DOMContentLoaded', function () {
    var cartItemsContainer = document.getElementById('cart-items');
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length > 0) {
        var itemsHtml = cart.map(function (item, index) {
            return `
                <div class="cart-item">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <div>Price: $${item.price.toFixed(2)}</div>
                        <div>Quantity: ${item.quantity}</div>
                        <div>Total: $${(item.price * item.quantity).toFixed(2)}</div>
                        <button class="remove-item" data-index="${index}">Remove</button>
                    </div>
                </div>
            `;
        }).join('');

        cartItemsContainer.innerHTML = itemsHtml;

        // Add event listeners to the remove buttons
        var removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var itemIndex = this.getAttribute('data-index');
                removeItemFromCart(itemIndex);
            });
        });
    } else {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }

    function removeItemFromCart(index) {
        cart.splice(index, 1); // Remove the item from the cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart back to localStorage
        location.reload(); // Reload the page to update the cart display
    }
});
