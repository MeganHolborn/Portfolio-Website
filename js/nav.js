$(document).on("scroll", function(){
    const navbarHeight = getComputedStyle(document.body).getPropertyValue('-navbar-height')
    if($(document).scrollTop() > navbarHeight)
    {
      $("#navbar").addClass("sticky");
    }
    else
    {
        $("#navbar").removeClass("sticky");
    }
});