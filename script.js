function textAnim() {
	// テキストアニメーション
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