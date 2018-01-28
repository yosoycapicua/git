
document.addEventListener(
	"DOMContentLoaded",
	function (event) {
		function sayHello(event) {
			console.log(this);
			console.log(event);
			// console.log(document.getElementsByTagName("button")[0]);

			// this.textContent = "Said it!";
			document.getElementsByTagName("button")[0].textContent = "Already said it";
			var name = document.getElementById("name").value;
			var message = "<h2>Hello " + name + "!</h2>";

			document.getElementById("content").innerHTML = message;

			if (name === "student") {
				document.querySelector("h1").textContent += " and still 10 to go!";
			} else {}
		}

		document.querySelector("button").addEventListener("click", sayHello);
		// document.querySelector("button").onclick = sayHello;
		document.querySelector("body").addEventListener(
			"mousemove",
			function logMouseMovements (event) {
				if (event.shiftKey === true) {
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY);
				}

			}
		);


	}
);
