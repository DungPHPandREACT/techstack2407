$content = document.getElementById('content');
$btnCreate = document.getElementById('btn-create');
$listWork = document.getElementById('list-work');

$btnCreate.onclick = function () {
	const newWork = $content.value;

	// Cách 1:
	// $newTagLi = document.createElement('li');
	// $newTagLi.innerText = newWork;
	// $listWork.appendChild($newTagLi);

	// Cách 2:
	$listWork.innerHTML = $listWork.innerHTML + '<li>' + newWork + '</li>';

	// Clear input
	$content.value = '';
};
