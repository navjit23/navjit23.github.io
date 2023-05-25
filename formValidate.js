
 /* Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
    console.log("validate ok");
	// Hides all error elements on the page
	hideErrors();
	

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();
        console.log("all good");
		

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}
    console.log("not good");

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;


}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {
    console.log("formhaserror ok");

    let errorFlag = false;
    let inputFields1 = ["fullname", "phoneNumber", "email"];

    for (let i=0; i< inputFields1.length; i++){
		if(! formFieldHasInput(inputFields1[i]))
			{
                console.log(i);
			document.getElementById(inputFields1[i]+ "_error").style.display = "block";
			if(!errorFlag){
				document.getElementById(inputFields1[i]).focus();		

				
			}
			errorFlag = true;
			}
		
		}

        //check for email address validation
	var regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
	let emailValue = document.getElementById("email").value;
	if (!regexEmail.test(emailValue) ){
		document.getElementById("emailformat_error").style.display = "block";
		if(!errorFlag){
			document.getElementById("email").focus();
		}
		errorFlag = true;
	}

    //check for phone number
    let pNum = document.getElementById("phoneNumber").value;
    /*if (pNum.length !== 10 ){
        document.getElementById("phoneNumberFormat_error").display.style = "block";
        errorFlag = true;
    }*/



	return errorFlag;
}



/*
 * Hides all of the error elements.
 */
function hideErrors() {
    console.log("hide error ok");
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
* checks if the input field has input
*/
function formFieldHasInput(formField){
	let formInput = document.getElementById(formField).value;

	if(formInput == null || formInput == "" ){
		return false;
	}
   

	return true
}

function resetForm(){

    hideErrors();
    let inputFields = ["fullname", "phoneNumber", "email", "textbox"]; 

    for(let i=0; i< inputFields.length; i++){
        document.getElementById(inputFields[i]).value = "";

    }
   document.getElementById(inputFields[0]).focus();

}




/*
 * Handles the load event of the document.
 */
function load() {
    //adding hideErrors() so the errors are hidden when page is loaded.
	hideErrors();

    // Add event listener for the form submit
	document.getElementById("contact").addEventListener("submit", validate);
    //document.getElementById("submit").addEventListener("click", validate);

	// Add event listener for the clear button
	document.getElementById("clear").addEventListener("click", resetForm)

}


// Add document load event listener
document.addEventListener("DOMContentLoaded", load);