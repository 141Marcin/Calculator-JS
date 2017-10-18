var x;
var y;
var score;
var display;

		function take_value(click_number) {

				if(x == undefined)
				{
					x = click_number.target.value;
				}
				else
				{
					x = x + click_number.target.value;
				}

				display = document.getElementById("display");
				display.textContent = x;

		}

		function take_equal() {

			score = eval(x);
			display.textContent =  score;
		}


		function clear_all(){
			display.textContent = ".";
			x = null;

		}
