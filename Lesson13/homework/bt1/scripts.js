const $img = document.getElementById('img');
const $url = document.getElementById('url');
const $width = document.getElementById('width');
const $height = document.getElementById('height');
const $radius = document.getElementById('radius');
const $alt = document.getElementById('alt');

$url.onchange = function () {
	const newUrl = $url.value;
	console.log(newUrl);

	$img.src = newUrl;
};

$width.oninput = function () {
	const newWidth = $width.value;

	$img.style.width = newWidth + 'px';
};

$height.oninput = function () {
	const newHeight = $height.value;

	$img.style.height = newHeight + 'px';
};

$radius.oninput = function () {
	const newRadius = $radius.value;

	$img.style.borderRadius = newRadius + 'px';
};

$alt.oninput = function () {
	const newAlt = $alt.value;

	$img.alt = newAlt;
};
