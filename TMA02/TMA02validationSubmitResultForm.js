function validateForm() {
    return (validateRunnerId() && validateEventId() && validateDate() && validateFinishTime() && validatePosition() && validateCategoryId() && validateAgegrade() && validatePersonalBest());
}
//check for the RunnerID value
function validateRunnerId(ID) 
{
    var ID = document.getElementById('RunnerId').value;
    var legalEntry = /^\d{1,4}?$/;
	
    if (ID.length == 0) 
	{
		alert("The RunnerId cannot be empty");
        return false;
    }
    else if ((!legalEntry.test(ID)) || (ID == 0)) 
	{
		alert("The RunnerId must be a number from 1 to 9999");
        return false;
    }
    else 
	{
        return true;
    }
}
//check for the EventID value
function validateEventId(ID) 	
{
    var ID = document.getElementById('EventId').value;
    var legalEntry = /^\d{1,4}?$/;

    if (ID.length == 0) 
	{
		alert("The EventId cannot be empty");
        return false;
    }
    else if ((!legalEntry.test(ID)) || (ID == 0)) 
	{
		alert("The EventId must be a number from 1 to 9999");
        return false;
    }
    else 
	{
        return true;
    }
}
//check for the Date value
function validateDate(ymd) {
    var ymd = document.getElementById('Date').value;
    var legalEntry = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

    if (ymd.length == 0) {
        alert( "The date cannot be empty");
        return false;
    }

    else if (!legalEntry.test(ymd)) {

        alert("The date must be in format YYYY-MM-DD");
        return false;
        }

    else {
        return true;
        }
}
//check for the FinishTime value
function validateFinishTime(tm) {
    var tm = document.getElementById('FinishTime').value;
    var legalEntry = /^\d\d\:[0-5][0-9]\:[0-5][0-9]$/

    if (tm.length == 0) {
        alert("The finish time cannot be empty");
        return false;
    }

    else if (!legalEntry.test(tm)) {
        alert("The finish time must be in format HH:MM:SS");
        return false;
        }

    else {
        return true;
        }
}
//check for the Position value
function validatePosition(pos) {
    var pos = document.getElementById('Position').value;
	var legalEntry = /^[1-9]{1}$|^[1-9]{1}[0-9]{1}$|^[1-9]{1}[0-9]{1}[0-9]{1}$|^[1-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}$|^[1]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0]{1}$|^10000$/
    
	if (pos.length == 0) {
		pos.value = "0";
    }
    else if (!legalEntry.test(pos)) {
        alert("The position must be a number from 1 to 10000");
        return false;
        }
    else {
        return true;
        }
}
//check for the CategoryId value
function validateCategoryId(ID) {
    var ID = document.getElementById('CategoryID').value;
	var legalEntry = /^[1-9]{1}$|^[1-9]{1}[0-9]{1}$|^100$/

    if (ID.length == 0) {
		ID.value = "0";
    }
    else if (!legalEntry.test(ID)) {
        alert("The CategoryId must be a number from 1 to 100");
        return false;
        }
    else {
        return true;
        }
}
//check for the AgeGrade value
function validateAgegrade(agrade) {
    var agrade = document.getElementById('AgeGrade').value;
    var legalEntry =/\d+\.\d{2}/;
	
    if (agrade.length == 0) {
		agrade.value = "0";
    }
    else if (!legalEntry.test(agrade)) {
        alert("The age grade must be decimal number of maximum 2 integers and 2 decimals");
        return false;
        }
    else {
        return true;
        }
}
//check for the PersonalBest value
function validatePersonalBest(pbest) {
    var pbest = document.getElementById('PB').value;
    var legalEntry = /^(0|1)$/;

    if (pbest.length == 0) {
        pbest.value = "0";
    }
    else if (!legalEntry.test(pbest)) {
        alert("The PB can only be 0 for false and 1 for true");
        return false;
        }
    else {
        return true;
        }
}



