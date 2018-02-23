// Make sure the document has loaded
$(document).ready(function() {
    var portfolioSubLinks = ["BRANDING, PACKAGING", "TYPOGRAPHY", "LOGO, LOGO MARKS", "SPREADS", "POSTERS", "LETTERING"];
    var imgsArr = ["breakfast-quote-handlettering.png", "chibo-logo.png", "cookie-sleeves.jpg", "swig-cups.jpg"];
    var index = 0;

    var intervalFunc = null;
    intervalManager(true, 5000);


    // get all the possible divs we are going to show
    var home = $("#home");
    var about = $("#about");
    var portfolio = $("#portfolio");
    var lettering = $("#lettering");
    var photography = $("#photography");
    var contact = $("#contact");

    // Clickable nav links
    var navlinks = $(".navbar-links");
    navlinks.each(function() {
        $(this).click(function() {
            var link = $(this).attr("data-show");
            if (link == "about") {
                home.hide("fast");
                portfolio.hide("fast");
                lettering.hide("fast");
                photography.hide("fast");
                contact.hide("fast");
                about.show("fast");
            }
            else if (link == "portfolio") {
                home.hide("fast");
                about.hide("fast");
                lettering.hide("fast");
                photography.hide("fast");
                contact.hide("fast");
                portfolio.show("fast");
            }
            else if (link == "lettering") {
                home.hide("fast");
                portfolio.hide("fast");
                about.hide("fast");
                photography.hide("fast");
                contact.hide("fast");
                lettering.show("fast");
            }
            else if (link == "photography") {
                home.hide("fast");
                portfolio.hide("fast");
                lettering.hide("fast");
                about.hide("fast");
                contact.hide("fast");
                photography.show("fast");
            }
            else if (link == "contact") {
                home.hide("fast");
                portfolio.hide("fast");
                lettering.hide("fast");
                photography.hide("fast");
                about.hide("fast");
                contact.show("fast");
            }
        });
    });

    // clickable home
    $("#home-page").click(function() {
        about.hide("fast");
        portfolio.hide("fast");
        lettering.hide("fast");
        photography.hide("fast");
        contact.hide("fast");
        home.show("fast");
    });

    // Clickable links for portfolio
    $(".clickable-links").click(function() {
        $(this).css("color", "#000");
        $(".clickable-links").not(this).each(function() {
            $(this).css("color", "#999")
        });
        // only cycle through indexes of array that have to do with was was clicked.

    });

    // when you click an arrow, simply change the index and the picture
    $(".clickable-arrow").click(function() {
        var imgCar = $("#imgCar");
        intervalManager(false);
        if ($(this).attr("data-arrow") == "next") {
            index++;
            if (index > imgsArr.length - 1) {
                index = 0; 
            }
            imgCar.hide("slow", function() {
                imgCar.attr("src", "images-files/" + imgsArr[index]);
            });
            imgCar.show("slow", intervalManager(true, 5000));
        }
        else {
            index--;
            if (index < 0) {
                index = imgsArr.length - 1;
            }
            imgCar.hide("slow", function() {
                imgCar.attr("src", "images-files/" + imgsArr[index]);
            });
            imgCar.show("slow", intervalManager(true, 5000));
        }
    });


    function runCarousel() {
        index++;
        var imgCar = $("#imgCar");
        if (index < imgsArr.length) {
            imgCar.hide("slow", function() {
                imgCar.attr("src", "images-files/" + imgsArr[index]);
            });
            imgCar.show("slow");   
        }
        else {
            index = 0;
            imgCar.hide("slow", function() {
                imgCar.attr("src", "images-files/" + imgsArr[index]);
            });
            imgCar.show("slow");
        }
    }

    function intervalManager(flag, time) {
        if (flag) {
            intervalFunc = setInterval(runCarousel, time);
        }
        else {
            clearInterval(intervalFunc);
        }
    }
});