const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );

// ローディング表示処理
function startLoading() {
	$('.js-loading').fadeIn(500, function(){
		$('.js-loading img').fadeIn(1200);
		});
}

// ローディング画面非表示処理
function endLoading() {
	$('.js-loading img').fadeOut(1200, function(){
	$('.js-loading').fadeOut(500);
	});
}

const main = async function() {
	// ローディング画面
	startLoading();
	// 読み込みが完了したら実行
	$(window).on('load',function () {
		// ロードが10秒以内で終わる場合、読み込み完了後ローディング画面を非表示にする
		endLoading();
	});

	// 10秒経過した段階で、上記の処理を上書き、強制終了
	setTimeout('endLoading()', 10000);

	// テキストアニメーション
	await sleep(2300)
	const animationTargetElements = document.querySelectorAll(".textAnimation");
	var tindex = 1;
	for (let i = 0; i < animationTargetElements.length; i++) {
		const targetElement = animationTargetElements[i],
				texts = targetElement.textContent,
				textsArray = [];

		targetElement.textContent = "";

		for (let j = 0; j < texts.split("").length; j++) {
			const t = texts.split("")[j]
			if (t == " ") {
				textsArray.push(" ");
			} else if (tindex == texts.split("").length) {
				textsArray.push('<span><span id="tAnmLast" style="animation-delay: ' + (j * .1) + 's;">' + t + '</span></span>')
			} else {
				textsArray.push('<span><span style="animation-delay: ' + (j * .1) + 's;">' + t + '</span></span>')
			}
			tindex += 1;
		}

		for (let k = 0; k < textsArray.length; k++) {
			targetElement.innerHTML += textsArray[k];
		}
	}
}

main()