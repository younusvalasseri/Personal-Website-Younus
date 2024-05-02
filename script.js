// JavaScript the fields checking null or not
function validate() {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var inputAddress = document.getElementById("inputAddress").value;
    event.preventDefault();
    if (name == "") {

        alert("Must fill the Required fields");
        document.getElementById("name").focus();
        $("#name").css("border-color", "red");

        return false;
    } else {
        $("#name").css("border-color", "");
    }
    if (phone == "") {
        alert("Must fill the Phone field");
        document.getElementById("phone").focus();
        $("#phone").css("border-color", "red");
        return false;
    } else {
        $("#phone").css("border-color", "");
    }
    if (inputAddress == "") {
        alert("Must fill the Address field");
        document.getElementById("inputAddress").focus();
        $("#inputAddress").css("border-color", "red");
        return false;
    } else {
        $("#inputAddress").css("border-color", "");
    }
    if (name != "" && phone != "" && inputAddress != "") {
        // ajax query for  validation passes, submit the form data
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzhaKv1CAGpRG7U4QRfXKefHsnpHqnaNhfD2S8A5gW4K-OIQRikFctVeqeEjCGW1Tb2hw/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully");
                // Clear form fields if needed
                $('#submit-form')[0].reset();

            },
            error: function (err) {
                alert("Something went wrong. Please try again later.");
            }
        });

        return true;
    }
}

// jQuery for email validation
$(document).ready(function () {

    // Function to handle form validation emailtype
    $("#submit-form").submit(function (event) {
        $("#submit - form").validate({
            rules: {
                emailId: {
                    email: true
                },
                state: {
                    required: true
                }
            }
        })
    });

});




// JavaScript for card movement
function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateScrollCards() {
    let cards = document.querySelectorAll('.scroll-down-animation');

    cards.forEach(function (card) {
        if (isInViewport(card)) {
            card.classList.add('animation-active');
        }
    });
}

window.addEventListener('DOMContentLoaded', animateScrollCards);
window.addEventListener('scroll', animateScrollCards);

$(document).ready(function () {
    //Show one Bootstrap carousel item in mobile [duplicate]
    $("#photoCarousel").carousel();
    if ($(window).width() < 991) {
        $('.col-lg-6').unwrap().addClass('row');
        $('.col-lg-12:first').addClass('active');
    }
});
