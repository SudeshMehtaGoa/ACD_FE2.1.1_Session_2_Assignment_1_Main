/* Arrow Function */
var funCalculateAge = function (strUserName, numUserBirthYear) {
    var numUserAge;
    numUserAge = (new Date().getFullYear()) - numUserBirthYear;
    return ("Hello " + strUserName + ", your age is " + numUserAge);
};
/* Function called by button on HTML */
function funCalculateAgePublic() {
    var strUsername;
    var numUserBirthDate;
    var strAgeMessage;
    strUsername = document.getElementById("txtUserName").value;
    numUserBirthDate = parseFloat(document.getElementById("txtUserBirthYear").value);
    strAgeMessage = funCalculateAge(strUsername, numUserBirthDate);
    document.getElementById("lblMessage").innerHTML = strAgeMessage;
}
