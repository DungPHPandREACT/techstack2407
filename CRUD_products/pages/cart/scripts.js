const $container_cart = document.getElementById('container-cart');
const $total_price = document.getElementById('total-price');

const cart = JSON.parse(localStorage.getItem('cart')) || [];

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'VND',
});

function renderCart() {
	let htmlCart = '';
	let totalPrice = 0;

	for (let item of cart) {
		totalPrice = totalPrice + item.price * item.quantity;
		htmlCart += `
        <tr>
			<td class="p-4" style="width: 400px">
				<div class="media align-items-center d-flex">
					<img
						src="${item.image}"
						class="d-block ui-w-40 ui-bordered mr-4"
						alt=""
					/>
					<div class="media-body" style="margin-left: 12px">
						<a href="#" class="d-block text-dark">${item.title}</a>
					</div>
				</div>
			</td>
			<td class="text-right font-weight-semibold align-middle p-4">
				${formatter.format(item.price)}
			</td>
			<td class="align-middle p-4">
				<input
					type="text"
					class="form-control text-center"
					value=${item.quantity}
				/>
			</td>
			<td class="text-right font-weight-semibold align-middle p-4">
				${formatter.format(item.quantity * item.price)}
			</td>
			<td class="text-center align-middle px-0">
				<a
					href="#"
					class="shop-tooltip close float-none text-danger"
					title=""
					data-original-title="Remove"
				>×</a>
			</td>
		</tr>
        `;
	}

	$container_cart.innerHTML = htmlCart;
	$total_price.innerHTML = `<strong>${formatter.format(totalPrice)} VND</strong>`;
}

renderCart();
