function calculate()
{
	//Getting the input values which are string (type = "number" doesn´t matter)
	var first 		= document.getElementById('first_attr').value;
	var second 		= document.getElementById('second_attr').value;
	
	
	if(first !== "")
	{
		//Convering to integer
		first = parseInt(first);
	}
	
	if(second !== "")
	{
		//Convering to integer
		second = parseInt(second);
	}

	//Testing truthiness
	unwanted(first, second);	
	wanted(first, second);
}



//Ignores any falsy arguments
function unwanted(first, second)
{
	//Preparing results
	var uw_result_one = document.getElementById('unw_first');
	var uw_result_two = document.getElementById('unw_second');
	
	if(!first)
	{
		first = 200;
		//Shows result in browser
		uw_result_one.innerHTML = first;
	}
	else
	{
		uw_result_one.innerHTML = "To see an unwanted result enter 0 for \"first\" or empty it!"
	}
	
	
	if(!second)
	{
		//Shows result in browser
		second = 300;
		uw_result_two.innerHTML = second;
	}
	else
	{
		uw_result_two.innerHTML = "To see an unwanted result enter 0 for \"second\" or empty it!"
	}
	
}




//A more ideal way to verify undefined
function wanted(first, second)
{
	if(typeof first === "undefined")
	{
		first = 200;
	}
	if(typeof second === "undefined")
	{
		second = 300;
	}
	
	//Preparing results
	var w_result_one = document.getElementById('w_first');
	var w_result_two = document.getElementById('w_second');
	
	//Show result in browser
	w_result_one.innerHTML = first;
	w_result_two.innerHTML = second;
	
}