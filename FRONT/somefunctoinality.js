$(document).ready(function(){
  $(".first-name").change(function(){
    let first_name = $("#fname").val();
    console.log(first_name);
  });

  $("#passwordi").change(function(){
    let second_name = $("#passwordi").val();
    console.log(second_name);
  })

  $(".button-btn").click(function(){
    console.log("clicked");


    $(".items").css('background-color','blue');


  });

  $(".show-hide-password").click(function(){
    $(".first-name").val('tetettetetetettet');

    let password = $("#passwordi").val();
      let attr = $("#passwordi").attr('type');

      if (attr == 'password') {
        console.log("pass");
        $("#passwordi").attr('type', 'text');
          $(".show-hide-password").text("hide");
      }
      else {
          console.log("text");
        $("#passwordi").attr('type', 'password');
          $(".show-hide-password").text("show");
      }
  });
});
