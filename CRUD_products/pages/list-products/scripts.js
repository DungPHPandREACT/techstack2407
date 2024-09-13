// -Json không phải kiểu dữ liệu, nó chỉ là định dạng dữ liệu
// -Json là kiểu dữ liệu string
// JSON.stringify(data) => chuyển đổi data sang định dạng json (kiểu dữ liệu string)
// JSON.parse(data) => chuyển đổi data từ định dạng json về kiểu dữ liệu ban đầu

const listProduct = JSON.parse(localStorage.getItem('listProduct')) || [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];
// Các input
const $idProduct = document.getElementById('id');
const $titleProduct = document.getElementById('title');
const $priceProduct = document.getElementById('price');
const $imageProduct = document.getElementById('image');
const $descriptionProduct = document.getElementById('description');
const $keyword = document.getElementById('keyword');
// Các button
const $btnCreateProduct = document.getElementById('create-product');
const $btnUpdateProduct = document.getElementById('update-product');
const $btnSearch = document.getElementById('search');
// Modal bootstrap
const myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
	keyboard: false,
});

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'VND',
});

// Bước 1: gán event cho button thêm mới
$btnCreateProduct.addEventListener('click', function () {
	// Trong hàm
	// Bước 2: lấy các thông tin người dùng đã nhập ở các ô input
	const id = $idProduct.value;
	const title = $titleProduct.value;
	const price = $priceProduct.value;
	const image = $imageProduct.value;
	const description = $descriptionProduct.value;
	// Bước 3: kiểm tra thông tin (optional)
	// Tự làm
	// Bước 4: tạo 1 object mới (tương đương với tạo 1 sản phẩm mới) chứa các thông tin người dùng vừa nhập
	const newProduct = {
		id: Number(id),
		title: title,
		price: Number(price),
		image: image,
		description: description,
	};
	// Bước 5: thêm sản phẩm vừa tạo vào trong danh sách sản phẩm đã có
	listProduct.push(newProduct);
	// Bước 6: sau khi tạo thành công thì sẽ reset input
	$idProduct.value = '';
	$titleProduct.value = '';
	$priceProduct.value = '';
	$imageProduct.value = '';
	$descriptionProduct.value = '';
	// Bước 7: lưu thông tin danh sách sản phẩm mới nhất vào trong local storage
	localStorage.setItem('listProduct', JSON.stringify(listProduct));
	// Bước 8: gọi lại hàm renderListProduct để in thông tin danh sách sản phẩm mới nhất
	renderListProduct();
	console.log(listProduct);
});

function renderListProduct(dataProduct) {
	// Nếu không truyền giá trị vào hàm thì dataProduct sẽ là undefined
	if (dataProduct === undefined) {
		dataProduct = listProduct;
	}

	let htmlProducts = '';

	for (let product of dataProduct) {
		htmlProducts += `
                <div class="col-3 mt-3" style="padding: 0px 12px">
					<div class="card" style="width: 18rem">
						<img
							src="${product.image}"
							class="card-img-top"
							alt="${product.title}"
                            style="width: 280px; height: 280px; object-fit: contain;"
						/>
						<div class="card-body">
							<h5 class="card-title">${product.title}</h5>
							<p class="card-text mt-1 mb-1">${formatter.format(product.price)}</p>
							<p class="card-text">${product.description}</p>
							<div>
								<button class="btn btn-primary">Xem chi tiết</button>
								<button onclick="addToCart(${
									product.id
								})" type="button" class="btn btn-secondary" style="margin-left: 8px"><i class="fa-solid fa-cart-plus"></i></button>
								<div class="btn-group">
								<button class="btn btn-secondary dropdown-toggle" type="button" style="margin-left: 8px" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
									<i class="fa-solid fa-ellipsis-vertical"></i>
								</button>
								<ul class="dropdown-menu" aria-labelledby="defaultDropdown">
									<li><a class="dropdown-item" href="#" onclick="getProductUpdate(${
										product.id
									})">Cập nhật</a></li>
									<li><a class="dropdown-item" href="#" onclick="deleteProduct(${
										product.id
									})">Xóa</a></li>
								</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
            `;
	}

	document.getElementById('container-products').innerHTML = htmlProducts;
}

renderListProduct();

// Bước 1: Gán function cho button add to cart
function addToCart(productId) {
	let productFind = null;
	// Bước 2: Khi function được gọi =>
	// xử lý để lấy được thông tin sản phẩm mà người dùng click
	for (let product of listProduct) {
		if (product.id === productId) {
			productFind = product;
		}
	}
	// Bước 3: Xử lý thông tin sản phẩm
	let indexProduct = -1;
	for (let i = 0; i < cart.length; i++) {
		if (productFind.id === cart[i].id) {
			indexProduct = i;
		}
	}
	// TH1: Nếu trong giỏ hàng chưa tồn tại sản phẩm
	// 	=> Thêm mới sản phẩm vào trong giỏ hàng
	if (indexProduct === -1) {
		const newProduct = {
			id: productFind.id,
			title: productFind.title,
			image: productFind.image,
			price: productFind.price,
			quantity: 1,
		};
		cart.push(newProduct);
	} else {
		// 	TH2: Nếu trong giỏ hàng đã tồn tại sản phẩm
		// 	=> Tăng số lượng lên
		cart[indexProduct].quantity = cart[indexProduct].quantity + 1;
	}
	// Bước 4: Sau khi xử lý dữ liệu => lưu thông tin vào trong local storage
	localStorage.setItem('cart', JSON.stringify(cart));
}

// Bước 1: Gán function cho button Xóa
function deleteProduct(productId) {
	console.log('productId: ', productId);
	// Bước 2: Khi function được gọi =>
	// xử lý để lấy được vị trí sản phẩm trong danh sách sản phẩm (index product trong listProduct)
	let indexProduct = -1;
	for (let i = 0; i < listProduct.length; i++) {
		if (listProduct[i].id === productId) {
			indexProduct = i;
		}
	}
	// Bước 3: Xóa sản phẩm khỏi danh sách (xóa phần tử khỏi mảng)
	listProduct.splice(indexProduct, 1);
	// Bước 4: Sau khi xử lý dữ liệu => lưu thông tin vào trong local storage
	localStorage.setItem('listProduct', JSON.stringify(listProduct));
	// Bước 5: Gọi lại hàm render để in ra dữ liệu mới nhất
	renderListProduct();
}

// -Giai đoạn 1: Là khi bấm vào button cập nhật => in thông tin của sản phẩm lên các input
// Bước 1: Gán function cho button Cập nhật
function getProductUpdate(productId) {
	console.log('productId: ', productId);
	let productFind = null;
	// Bước 2: Khi function được gọi =>
	// xử lý để lấy được thông tin sản phẩm mà người dùng click
	for (let product of listProduct) {
		if (product.id === productId) {
			productFind = product;
		}
	}
	// Bước 3: Đổ dữ liệu lên các input tương ứng
	// Mở modal lên
	myModal.show();
	$idProduct.value = productFind.id;
	$idProduct.disabled = true;
	$titleProduct.value = productFind.title;
	$priceProduct.value = productFind.price;
	$imageProduct.value = productFind.image;
	$descriptionProduct.value = productFind.description;
	// Bước 4: Show ra button "Cập nhật" và ẩn button "Thêm mới"
	$btnUpdateProduct.style.display = 'inline';
	$btnCreateProduct.style.display = 'none';
}

// -Giai đoạn 2:
// Bước 1: Gán function cho button Cập nhật trong modal
$btnUpdateProduct.addEventListener('click', function () {
	// Bước 2: Lấy các thông tin mà người dùng vừa chỉnh sửa
	const id = $idProduct.value;
	const title = $titleProduct.value;
	const price = $priceProduct.value;
	const image = $imageProduct.value;
	const description = $descriptionProduct.value;
	// Bước 3: Tìm vị trí của sản phẩm trong danh sách (tìm index product trong listProduct)
	let indexProduct = -1;
	for (let i = 0; i < listProduct.length; i++) {
		if (listProduct[i].id === Number(id)) {
			indexProduct = i;
		}
	}
	// Bước 4: Sửa thông tin sản phẩm
	listProduct[indexProduct].title = title;
	listProduct[indexProduct].price = price;
	listProduct[indexProduct].image = image;
	listProduct[indexProduct].description = description;
	// Bước 5: Sau khi xử lý dữ liệu => lưu thông tin vào trong local storage
	localStorage.setItem('listProduct', JSON.stringify(listProduct));
	// Bước 6: Gọi lại hàm renderListProduct để in ra thông tin sản phẩm mới nhất
	renderListProduct();
	// Bước 7: Khôi phục lại trạng thái ban đầu của giao diện
	// Đóng modal
	myModal.hide();
	// Reset lại dữ liệu về trạng thái ban đầu
	resetModal();
});

function resetModal() {
	// Ẩn button Cập nhật
	$btnUpdateProduct.style.display = 'none';
	// Show button Thêm mới
	$btnCreateProduct.style.display = 'inline';
	// Reset input
	$idProduct.value = '';
	$idProduct.disabled = false;
	$titleProduct.value = '';
	$priceProduct.value = '';
	$imageProduct.value = '';
	$descriptionProduct.value = '';
}

document
	.getElementById('staticBackdrop')
	.addEventListener('hide.bs.modal', function (event) {
		resetModal();
	});

// Cách 1: gán event cho sự kiện onclick của button Tìm kiếm => Thì khi click vào button mới trả về dữ liệu
// Bước 1: Gán sự kiện onclick cho button "Tìm kiếm"
function searchProduct() {
	// Bước 2: Khi function được gọi => lấy keyword người dùng vừa nhập ở input search
	const keyword = $keyword.value;
	// Bước 3: Lọc ra các dữ liệu thỏa mãn điều kiện
	const dataFilter = [];
	for (let product of listProduct) {
		if (product.title.toLowerCase().includes(keyword.toLowerCase()) === true) {
			dataFilter.push(product);
		}
	}
	console.log(dataFilter);
	// Bước 4: Gọi lại hàm renderListProduct và truyền dữ liệu vừa lọc được vào trong hàm
	renderListProduct(dataFilter);
}
$btnSearch.onclick = searchProduct;

// Cách 2: gán event cho sự kiện onchange hoặc oninput của input search => thì khi giá trị input thay đổi => trả về dữ liệu
$keyword.oninput = searchProduct;
