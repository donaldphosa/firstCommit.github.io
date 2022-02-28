
const form = document.getElementById("form");

function returnmessage()
{
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const messages = document.getElementById("messages");

    if(email.value.length < 9){
        email.style.border = "1px solid red";
        message.style.display = "block";
        email.focus();
        return false;
        
    }
    if(email.value.length > 9)
    { email.style.border = "1px solid green";
    messages.style.display = "block";
    email.focus();
    return true;

    }

}