const $listButton = document.getElementsByTagName('button');

for (let $button of $listButton) {
	$button.onclick = function () {
		$button.parentNode.parentNode.remove();
	};
}
