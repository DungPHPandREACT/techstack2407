const listProduct = [];
// Các input
const $idProduct = document.getElementById('id');
const $titleProduct = document.getElementById('title');
const $priceProduct = document.getElementById('price');
const $imageProduct = document.getElementById('image');
const $descriptionProduct = document.getElementById('description');
// Các button
const $btnCreateProduct = document.getElementById('create-product');

console.log(listProduct);
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
		id: id,
		title: title,
		price: price,
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
	console.log(listProduct);
});
