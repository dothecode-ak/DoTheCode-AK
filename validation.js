$(document).ready(function () {
    $("#finalclaim").click(() => {
        $(".bisleryError").html("");
        var name = String(document.getElementById("name").value)
        var email = String(document.getElementById("email").value);
        var mobile = String(document.getElementById("mobile").value);
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var mobileregex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        console.log(name);
        if (name == '' || name == null) {
            $('.bisleryError').html("Please enter name *")
        }
        else if (email == '' || email == null) {
            $('.bisleryError').html("Please email address *")
            return;
        }
        else if (!regex.test(email)) {
            $('.bisleryError').html("Please valid email address *")
            return;
        }
        else if (!mobileregex.test(mobile)) {
            $('.bisleryError').html("Plaese enter mobile no. *")
        }

        else {
            console.log("succes")
            $('canvas').show();
            $('.formDiv').hide();


        }

    })
})