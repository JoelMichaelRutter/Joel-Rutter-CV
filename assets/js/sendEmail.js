function sendMail(contactForm) {
    emailjs.send("service_xwogrjm","Joel-Rutter-CV-Form",{
        "from_name": contactForm.name.value,
        "message": contactForm.message.value,
        "from_email": contactForm.email.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                if (response.status === 200) {
                    let successMessage = "<h5>Your message was sent successfully!</h5>";
                    document.getElementById("conf-message-sent").innerHTML = successMessage;
                }
            },
            function(error) {
                console.log("FAILED", error)
                errorMessage ="<h5>ooops, something's wrong, please try again later :(</h5>"
                document.getElementById("conf-message-sent").innerHTML = errorMessage;
            }
        );

    return false;
};