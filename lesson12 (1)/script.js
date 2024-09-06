document.getElementById('add-to-cart').addEventListener('click', function() {
    var quantity = document.getElementById('quantity').value;
    if (quantity > 0) {
        // Create
        var product = {
            // id: 'product123', 
            name: 'Lorem ipsum dolor',
            price: 129.01,
            quantity: parseInt(quantity)
        };

        // Get existing
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Add 
        cart.push(product);
        
        // Save 
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect 
        window.location.href = 'cart.html';
    } else {
        alert('Please enter a valid quantity.');
    }
});