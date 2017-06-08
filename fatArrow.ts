/* Arrow Function */
let funCalculateAge = (strUserName:string,numUserBirthYear:number):string => {
    let numUserAge:number;
    numUserAge = (new Date().getFullYear())-numUserBirthYear;
    return ("Hello " + strUserName + ", your age is " + numUserAge);
}

/* Function called by button on HTML */
function funCalculateAgePublic () {
    let strUsername : string;
    let numUserBirthDate : number;
    let strAgeMessage : string;
    strUsername = (<HTMLInputElement>document.getElementById("txtUserName")).value;
    numUserBirthDate = parseFloat((<HTMLInputElement>document.getElementById("txtUserBirthYear")).value);
    strAgeMessage = funCalculateAge(strUsername,numUserBirthDate);
    (<HTMLInputElement>document.getElementById("lblMessage")).innerHTML = strAgeMessage;
}