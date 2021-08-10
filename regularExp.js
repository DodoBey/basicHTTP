var password = "Aabna#"
var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*]).{6,32}$/;

var res = password.match( pattern );
if (res){
    console.log("Valid password")
}else{
    console.log("Not a valid password")
};