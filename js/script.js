'use strict'; // 厳密なエラーチェックをするように設定

{
	const btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
		const results = ['大吉', '中吉', '凶', '末吉'];
		// const n = Math.floor(Math.random() * results.length); // results.lengthは配列の中身の数を表すので変更ミスが減る
		// btn.textContent = results[n];
		btn.textContent = results[Math.floor(Math.random() * results.length)]; // 上2行を1行にまとめた

		// switch (n) { // 配列にしてまとめた
		// 	case 0:
		// 		btn.textContent = '大吉';
		// 		break;
		// 	case 1:
		// 		btn.textContent = '中吉';
		// 		break;
		// 	case 2:
		// 		btn.textContent = '凶';
		// 		break;
		// }

// -----------確率の操作-----------------------

		// const n = Math.random();
		// if (n < 0.05) {
		// 	btn.textContent = '大吉'; // 5%の確率
		// } else if (n < 0.2) {
		// 	btn.textContent = '中吉'; // 15%
		// } else {
		// 	btn.textContent = '凶'; // 80%
		// }

// -----------確率の操作-----------------------
	});
}