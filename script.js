
function gpassword() {
    var pwLength =parseInt(document.getElementById("pwLength").value);
    if(isNaN(pwLength)) {
        alert("Please enter a valid character length.");
        return;
    }

    if(pwLength < 8 || pwLength > 128) {
        alert("Please enter a character length between 8 and 128.");
        return;
    }
//   var pwType = document.getElementById("pwType").options[document.getElementById("pwType").selectedIndex].value;
    
    var sp = new Array(" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    "0123456789",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz");
    var pwChars = "";
    if(document.getElementById("pwType0").checked) pwChars+= sp[0]; 
    if(document.getElementById("pwType1").checked) pwChars+= sp[1]; 
    if(document.getElementById("pwType2").checked) pwChars+= sp[2]; 
    if(document.getElementById("pwType3").checked) pwChars+= sp[3]; 

    if(pwChars == "") {
        alert("Please select at least one character type.");
        return;
    }

    var pass = "";
    for(i = 0 ; i < pwLength; i++) {
        pass+= pwChars.charAt(Math.floor(Math.random() * pwChars.length));
    }  
//    alert(pass);
document.getElementById("password").value = pass;
}
function copypass() {

copyText = document.getElementById("password");
copyText.select();
copyText.setSelectionRange(0, 99999);

document.execCommand("copy");

}