
/*Se añade el smooth scrolling*/
$(function(){
    $("a").click(function(e){
      if (this.hash !== ""){
        e.preventDefault();
        var url = this.hash;
        $('html,body').animate({
          scrollTop: $(url).offset().top
        }, 800, function(){
          window.location.hash = url;
        });
      }
    });
});

$(function(){
$('[data-toggle="tooltip"]').tooltip();
});