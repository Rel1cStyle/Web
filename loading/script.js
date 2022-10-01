var isCompleteLoading = false

function Timeout(passVal, ms) {
	return new Promise(resolve =>
		setTimeout(() => {
			  resolve(passVal);
		}, ms)
	)
}

// 読み込み完了時
function completeLoading() {
	// ヒーローヘッダーアニメーション
	textAnim();
	isCompleteLoading = true
}

$(function(){
	// 読み込みが完了したら実行する
	$(window).on("load", function(){
		// ローディングアニメーションをフェードアウト
		$(".loader").delay(600).fadeOut(600);
		// 背景色をフェードアウト
		$(".loader-bg").delay(900).fadeOut(800);
		setTimeout(function(){completeLoading();}, 900)
	})
});

// ページの読み込みが完了していなくても、5秒後に読み込み画面を非表示にする
setTimeout(function(){
	$(".loader-bg").fadeOut(600);
	// 読み込み完了後の処理が行われていない場合、処理を行う
	if (isCompleteLoading == false) {
		completeLoading();
	}
}, 5000)