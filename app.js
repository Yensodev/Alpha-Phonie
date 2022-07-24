networks = {
	airtel: [
		"0701", "0708", "0802", "0808",
		"0812", "0901", "0902", "0904",
		"0907", "0912"
	],

	mtn: [
		"0703", "0704", "0706", "0803",
		"0806", "0810", "0813", "0814",
		"0816", "0903", "0906", "0913",
		"0916",
	],

	glo: [
		"0705", "0805", "0807", "0811",
		"0815", "0905", "0915",
	],

	etisalat: [
		"0809", "0817", "0818", "0909",
		"0908",
	]
}



function startApp() {

	darkMode = true
	theme = document.querySelector("#theme")
	theme.href = darkMode ? "bootstrap.min.css" : "bootstrap-light.min.css"
	inputTags = document.querySelectorAll(".input")
	inputTags.forEach(element => element.oninput = checkAndChange)

	document.querySelector("#theme-switch").onchange = () => {
		darkMode = !darkMode
		theme.href = darkMode ? "bootstrap.min.css" : "bootstrap-light.min.css"
	}
}



function checkAndChange(e) {

	value = e.target.value
	
	for (network in networks) {

		includes = networks[network].includes(value.slice(0, 4))

		if (includes && value !== "" && !isNaN(value)) {

			if (network == "airtel") {
				e.target.style.backgroundImage = "url('./pictures/airtel logo.jpg')"
				break
			}
			else if (network == "mtn") {
				e.target.style.backgroundImage = "url('./pictures/mtn logo.png')"
				break
			}
			else if (network == "glo") {
				e.target.style.backgroundImage = "url('./pictures/Globacom Limited Logo.png')"
				break
			}
			else if (network == "etisalat") {
				e.target.style.backgroundImage = "url('./pictures/9mobile logo.jpg')"
				break
			}
		}

		else e.target.style.backgroundImage = "none";
	}
}

document.addEventListener('DOMContentLoaded', startApp);
  
  // ======= DO NOT EDIT ============== //
//   export default startApp;
  // ======= EEND DO NOT EDIT ========= //