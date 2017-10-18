var x;
var y;
var score;
var display;
var char_number;

		function take_value(click_number) {

				if(x == undefined || x == '')
				{
					char_number = 1;
					x = click_number.target.value;
				}
				else
				{
					char_number = char_number + 1;

						if(char_number == 23){
								alert("Maksymalna liczba znakow");
								clear_all();
						}

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
			x = '';
			char_number = 0;

		}
