$(document).ready(function() {
    // This will run when user scroll the screen
    $(window).scroll(function() {
        if (this.scrollY > 50)
            $('.navbar').addClass("scroll");
        else
            $('.navbar').removeClass("scroll");
    })

    // Toggle Button Working
    $(".toggle").click(function() {
        $('ul').toggleClass("active");
        $(".toggle").toggleClass("close");
    })
});