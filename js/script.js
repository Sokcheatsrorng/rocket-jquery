
    // $("#launch-button").on("click", function() {
    //   $("#rocket").css({
    //     "transform": "translateY(-150%)",
    //     "transition-duration": "0.2s"
    //   });
    // });
  
    // $("#unlaunch-button").on("click", function() {
    //   $("#rocket").css({
    //     "transform": "translateY(0%)",
    //     "transition-duration": "1s"
    //   });
    // });
    $("#confess").hide();
    $("#launch-button").on("click", function() {
        $("#rocket").css({
          "transform": "translateY(-150%)",
          "transition-duration": "0.2s",
          "transition-timing-function": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
        });
        $("#confess").slideDown();
        $("rocket").addClass("spiningRocket");
      });
      $("#unlaunch-button").on("click", function() {
        $("#rocket").css({
          "transform": "translateY(0%)",
          "transition-duration": "2s",
          "transition-timing-function": "ease"
        });
        $("#confess").slideUp();
      });


        
 