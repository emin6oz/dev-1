$(document).ready(function () {

  
  

    var city = [
      "Mechelen",
      "Antwerp",
      "Brussels",
      "leige",
      "Bruge",
      "Leuven",
      "Ghent",
      "Oostende",
    ];
    $("#city").select2({
      data: city,
    });

     $('#menu-bar').click(function() {
        $('.navbar').toggleClass('active');
    });

    // Show alert on help button click
    $(".help").click(function() {
        alert("phone: 839292848489\n email: help@mydocradar.com");
    });
  });

  //script for sorting doctor tabs
  $(function () {
    $("div.tags-container").tagSort({
      selector: ".item",
      tagWrapper: "span",
      displaySelector: ".item-tags",
      displaySeperator: " / ",
      inclusive: false,
      fadeTime: 200,
    });
  });


//   $(document).ready(function() {
//     // Toggle mobile menu
//     $('#menu-bar').click(function() {
//         $('.navbar').toggleClass('active');
//     });

//     // Show alert on help button click
//     $(".help").click(function() {
//         alert("phone: 839292848489\n email: help@mydocradar.com");
//     });
// });


  // document.addEventListener("DOMContentLoaded", function () {
  //   const menuIcon = document.getElementById("menu-bar");
  //   const navbar = document.querySelector(".navbar");

  //   // Toggle the active class to show/hide the menu
  //   menuIcon.addEventListener("click", () => {
  //     navbar.classList.toggle("active");
  //   });
  // });

  $(document).ready(function() {
    // Toggle mobile menu
    $('#menu-bar').click(function() {
        $('.navbar').toggleClass('active');
    });

    // Show alert on help button click
    $(".help").click(function() {
        alert("phone: 839292848489\n email: help@mydocradar.com");
    });
});