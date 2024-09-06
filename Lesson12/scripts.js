// Selector đến phần tử bằng id
// document.getElementById('id');
// const selectorWithId = document.getElementById('heading');
// console.log(selectorWithId);
// console.log(document.getElementById('test'));

// Selector đến phần tử bằng class
// document.getElementsByClassName('class');
// const selectorWithClass = document.getElementsByClassName('heading');
// console.log(selectorWithClass);
// console.log(document.getElementsByClassName('test'));

// Selector đến phần tử bằng tag name
// document.getElementsByTagName('tag');
// const selectorWithTagName = document.getElementsByTagName('h1');
// console.log(selectorWithTagName);

// Selector kết hợp các yếu tố
// h1#heading => tìm kiếm thẻ h1 có id là heading
// h1.heading => tìm kiếm thẻ h1 có class là heading
// h1 .heading => tìm kiếm thẻ có class là heading và nằm bên trong thẻ h1
// document.querySelector('selector'); => Trả về phần tử đầu tiên hợp lệ mà nó tìm thấy
// const selectorWithQuerySelector = document.querySelector('h1.heading');
// console.log(selectorWithQuerySelector);

// document.querySelectorAll('selector'); => Trả về tất cả các phần tử hợp lệ mà nó tìm thấy
// const selectorWithQuerySelectorAll = document.querySelectorAll('h1.heading');
// console.log(selectorWithQuerySelectorAll);

// element.innerHTML = new_html_content: thay đổi nội dung bên trong element.
// const $h1 = document.getElementById('heading');
// console.log($h1.innerHTML);
// $h1.innerHTML = '<a href="#">Nội dung thẻ h1</a>';

// element.innerText = new_html_content: thay đổi nội dung văn bản bên trong element.
// const $h2 = document.getElementsByClassName('heading')[2];
// console.log($h2.innerText);
// $h2.innerText = '<a href="#">Nội dung thẻ h2</a>';

// element.attribute = new_value: thay đổi giá trị một thuộc tính của element.
const $a = document.querySelector('#link');
// $a.href = 'https://www.youtube.com';
// console.log($a.href);

// element.setAttribute(attribute, value): thay đổi giá trị một thuộc tính của element.
// $a.setAttribute('data-href', 'https://www.youtube.com');

// element.getAttribute(attribute): lấy giá trị của một thuộc tính của element.
// const contentAttribute = $a.getAttribute('data-href');
// console.log(contentAttribute);

// element.removeAttribute(attribute): xóa một thuộc tính của element.
// $a.removeAttribute('data-href');

// element.style.attribute = new_value: thay đổi style của element.
// const $h1 = document.querySelector('#heading');
// $h1.style.color = 'red';
// $h1.style.fontSize = '20px';

// Thêm mới element
// const $h1 = document.createElement('h1'); //tạo mới 1 thẻ h1
// $h1.innerText = 'Nội dung cho thẻ h1 vừa tạo ra'; //thay đổi nội dung cho thẻ h1

// document.body.appendChild($h1); //thêm vào cuối trong thẻ body

// document.getElementById('link').remove(); //xóa phần tử đang được selector đến

// Thao tác với class
// const $h2 = document.getElementsByTagName('h2')[0];
// $h2.classList.add('test-add-class'); //thêm 1 class vào trong element
// $h2.classList.remove('heading'); //xóa 1 class bên trong element

// $h2.classList.toggle('test-toggle');
//nếu có class đấy rồi => xóa đi, nếu chưa có class đấy => thêm vào

// Event
function logger(tagName) {
	console.log('tagName: ', tagName);
	alert('Đang click vào ' + tagName);
}

// document.getElementById('btn').onclick = function () {
// 	alert('Sự kiện onclick1');
// };

// document.getElementById('btn').onclick = function () {
// 	alert('Sự kiện onclick2');
// };

let count = 1;

function click1() {
	alert('Sự kiện onclick1');
}

function click2() {
	count = count + 1;
	alert('Sự kiện onclick2');

	if (count === 2) {
		document.getElementById('btn').removeEventListener('click', click1);
	}
}

document.getElementById('btn').addEventListener('click', click1);

document.getElementById('btn').addEventListener('click', click2);

// Xử lý click vào button => lấy content trong input

document.getElementById('btn-get-content').onclick = function () {
    const $input = document.getElementById('content').value;
	console.log('clicked');
	console.log($input);
};

// Event onchange
document.getElementById('content').onchange = function () {
	console.log('changed');
};

// Event oninput
document.getElementById('content').oninput = function () {
	console.log('evnet oninput được chạy');
};
