// 5. Xây dựng chương trình quản lý kho hàng như sau:
// -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.

const storage = {
	name: 'Fake Storage',
	address: 'HN',
	owner: 'Dung Tien',
	items: [
		{
			id: 1,
			name: 'Product 1',
			category: 'Furniture',
			price: 20,
		},
		{
			id: 2,
			name: 'Product 2',
			category: 'Device',
			price: 110,
		},
		{
			id: 3,
			name: 'Product 3',
			category: 'Cloth',
			price: 2,
		},
	],
};

// *Xây dựng chương trình tương tác với kho hàng. Nhập vào action là yêu cầu ứng với các thao tác:
//     Action 1 -> Ý nghĩa: Sửa thông tin kho hàng
//     Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho
//     Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng
//     Action 4 -> Ý nghĩa: Xóa mặt hàng
//     Action 0 -> Ý nghĩa: Kết thúc chương trình
// -Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác.
// -Mô tả chi tiết
// +action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
// +action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại. In ra thông tin các mặt hàng đang có trong kho.
// +action = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
// +action = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.

function updateStorage() {
	let name, address, owner;
	// let address = prompt('Nhập lại địa chỉ: ');
	// let owner = prompt('Nhập lại người sở hữu');

	// Validate dữ liệu đầu vào của name
	do {
		name = prompt('Nhập lại tên kho hàng: ');
	} while (name.length < 2);
	// Validate dữ liệu đầu vào của address
	do {
		address = prompt('Nhập lại địa chỉ: ');
	} while (address.length < 2);
	// Validate dữ liệu đầu vào của owner
	do {
		owner = prompt('Nhập lại người sở hữu ');
	} while (owner.length < 2);

	storage['name'] = name;
	storage['address'] = address;
	storage['owner'] = owner;

	console.log(storage);
}
// updateStorage();

function createItem() {
	let id, name, category, price;
	let isExistId;

	// Validate mã mặt hàng
	do {
		id = prompt('Nhập mã mặt hàng: ');
		id = Number(id);

		isExistId = false;

		for (let item of storage.items) {
			if (item.id === id) {
				isExistId = true;
			}
		}
	} while (id < 0 || isExistId === true);

	// Validate tên sản phẩm
	do {
		name = prompt('Nhập tên sản phẩm: ');
	} while (name.length < 2);

	// Validate loại sản phẩm
	do {
		category = prompt('Nhập loại sản phẩm: ');
	} while (category.length < 2);

	// Validate giá tiền
	do {
		price = prompt('Nhập giá tiền sản phẩm: ');
		price = Number(price);
	} while (price < 0);

	const newItem = {
		id: id,
		name: name,
		category: category,
		price: price,
	};

	storage.items.push(newItem);

	console.log(storage.items);
}
// createItem();

function searchItem() {
	let keyword = prompt('Nhập từ khóa: ');
	let isExistItem = false;
	for (let item of storage.items) {
		if (item.name.toLowerCase().includes(keyword.toLowerCase()) === true) {
			console.log(item);
			isExistItem = true;
		}
	}

	if (isExistItem === false) {
		console.log(storage.items);
	}
}
// searchItem();

function deleteItem() {
	let id = prompt('Nhập mã mặt hàng cần xóa: ');
	id = Number(id);

	for (let index = 0; index < storage.items.length; index++) {
		if (storage.items[index].id === id) {
			storage.items.splice(index, 1);
		}
	}

	console.log(storage.items);
}
// deleteItem();

let action;

do {
	action = prompt('Nhập action: ');
	action = Number(action);

	if (action === 1) {
		updateStorage();
	}
	if (action === 2) {
		createItem();
	}

	if (action === 3) {
		searchItem();
	}

	if (action === 4) {
		deleteItem();
	}
} while (action !== 0);
