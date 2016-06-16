$(document).ready(function() {
  $("form").submit(function(event) {

    var userInput1 = parseInt($("#countBy").val());
    var userInput2 = parseInt($("#countTo").val());

    console.log(userInput1);
    console.log(userInput2);

    var total = 0
    var array = [];

    for (var index = 0; index < userInput2; index += userInput1) {
      array.push(index);

    };

    console.log(array);

    event.preventDefault();

  });
});
