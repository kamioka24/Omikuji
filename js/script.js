'use strict'; // 厳密なエラーチェックをするように設定

{
	const btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
		btn.textContent = 'hit!';
	});
}