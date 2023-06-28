
//opening the text box 
$(document).ready(function() {
    // Handle click event on the text link
    $("#text-link").click(function(e) {
      e.preventDefault();
      $("#text-div").toggle(); // Toggle the visibility of the div box
    });

    // Handle click event on the OK button
    $("#add-text").click(function() {
      var text = $("#text-string").val();
      console.log("Text:", text); // Perform further actions with the entered text
    });
});
  