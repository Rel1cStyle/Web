// ローディング表示処理
async function showLoading() {
	console.log("Show loading screen")
	$('#loading-sc.js-loading').fadeIn(500, function(){
		$('#loading-sc.js-loading img').fadeIn(1200);
	});
}

// ローディング画面非表示処理
function closeLoading() {
	console.log("Close loading screen")
	$('#loading-sc.js-loading img').fadeOut(1200, function(){
		$('#loading-sc.js-loading').fadeOut(500)
	});
}

function startLoading() {
	// ローディング画面
	showLoading();
	// 読み込みが完了したら実行
	$(window).on('load',function () {
		// ロードが10秒以内で終わる場合、読み込み完了後ローディング画面を非表示にする
		closeLoading();
	});
	// 10秒経過した段階で、上記の処理を上書き、強制終了
	//setTimeout('closeLoading();', 10000);
}