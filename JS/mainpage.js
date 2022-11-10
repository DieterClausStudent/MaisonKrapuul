let email = document.getElementById("email").innerText ;

if(!email.includes("@")){
    alert("u heeft geen correct email afgegeven, gelieve een emailadres met een @ op te geven ");
    email.value = "";
}