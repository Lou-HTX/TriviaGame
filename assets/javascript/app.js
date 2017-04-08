run();
var counter = 30;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 4;
// var unknown = $("input[type=radio][name='a']").is(':checked');
// var noSelection = $("input:radio[name='a']").is(":checked");
// var notSelected = !$("input[name='a']:checked").val();
var input = $("input");


  function decrement() {
    counter--;
    $("#show-number").html("Time Remaining: " + counter + " Seconds");
    if (counter <= 0) {
      score();
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

    for (var i = input.length; i--;) {
        input[i].onchange = function() {
          aOne = (this.value);
            console.log(aOne);
        if (aOne === "hobbit" || aOne === "honda" || aOne === "motobecane" || aOne === "pinto") {
          correct++;
          unanswered--;
          }
        else if (aOne !== "hobbit" || aOne !== "honda" || aOne !== "motobecane" || aOne !== "pinto") {
          incorrect++;
          unanswered--;
          }
        }
    }



    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    $("#done").on("click", score);

    function score() {
      stop();
      $("#score").html("<h2> Total Correct: " + correct + "</h2>");
      $("#score").append("<h2> Total Incorrect: " + incorrect + "</h2>");
      $("#score_button").html("");
      $("#score").append("<h2> Total Unanswered: " + unanswered + "</h2>");
    }

    // console.log(notSelected);
    // if (notSelected === true) {
    //   unanswered++;
    //   console.log(unanswered);
    //   }
    //   else {
    //     unanswered--;
    //   }

    // if (notSelected === true) {
    //     unanswered++;
    //     console.log(unanswered);
    //   }
    // else if (notSelected === false) {
    //   console.log(unanswered);
    //   unanswered--;
    //
    // }


/*
$( "input[type=radio][name='a']:checked" ).val();
var input = $("input").val([]);
for (var i = 0; i < input.length; i++){
  // console.log(input[i].value);
  }
var maxi = input[0].value;
var targa = input[1].value;
var hobbit = input[2].value;
var magnum = input[3].value;
var honda = input[4].value;
var tsm = input[5].value;
var puch = input[6].value;
var vespa = input[7].value;
var motobecane = input[8].value;
var ciao = input[9].value;
var sprint = input[10].value;
var pinto = input[11].value;
*/
// for (var i = qOne.length; i--;) {
//     qOne[i].onchange = function() {
//       aOne = (this.value);
//         // alert(this.value);
//         console.log(aOne);
//     if (aOne === "hobbit") {
//       correct++;
//       }
//     else if (aOne === "maxi" || aOne === "targa") {
//       incorrect++;
//       }
//     }
// }

// for (var i = input.length; i--;) {
//   var maxi = input[0].value;
//   var targa = input[1].value;
//   var hobbit = input[2].value;
//   var magnum = input[3].value;
//   var honda = input[4].value;
//   var tsm = input[5].value;
//   var puch = input[6].value;
//   var vespa = input[7].value;
//   var motobecane = input[8].value;
//   var ciao = input[9].value;
//   var sprint = input[10].value;
//   var pinto = input[11].value;
// }
    // input[i].onchange = function() {



      // aOne = (this.value);
        // alert(this.value);
    // if (input[2].value === "hobbit") {
    //   correct++;
    //   console.log("hobbit was selected");
    //   }
    // else if (hobbit === "maxi" || aOne === "targa") {
    //   incorrect++;
    //   }



// console.log(maxi);
// console.log(input.length);
// console.log(input[2]);

// var test = document.getElementsByName('d');
// for (var i = test.length; i--;) {
//   // console.log(test[i]);
//   console.log(test[i].value);
//     test[i].onchange = function() {
//       aFour = (this.value);
//         console.log(this.value);
//     }}
//
// console.log("test " + test);
// console.log(test[i]);
// var pinto = test[2].value;
// console.log(pinto);
// var hobbit = input[2];
// var hobbitTwo = $("input").val("hobbit");
// console.log(hobbit);
// console.log(hobbitTwo);
// $(hobbit).on("click", correct++);
// console.log(correct);


// $('input').click(function() {
//    if($('#hobbit').is(':checked')) { alert("it's checked"); }
// });

//
// $('input').click(function() {
//    if($('#hobbit').is(':checked')) {
//       correct++;
//       incorrect--;
//       console.log("correct: " + correct);
//     }
//     else if ($('#honda').is(':checked')){
//       correct++;
//       incorrect--;
//       console.log("correct: " + correct);
//     }
//     else if ($('#motobecane').is(':checked')){
//       correct++;
//       incorrect--;
//       console.log("correct: " + correct);
//     }
//     else if ($('#pinto').is(':checked')){
//       correct++;
//       incorrect--;
//       console.log("correct: " + correct);
//     }
//
// });

// $(document).ready(function(){
//   $('#submit_button').click(function() {
//     if (!$("input[name='name']:checked").val()) {
//        alert('Nothing is checked!');
//         return false;
//     }
//     else {
//       alert('One of the radio buttons is checked!');
//     }
//   });
// });


// if (noSelection == false) {
//   unanswered++;
//   console.log("no answer");
// }


// .val([]);

// var qTwo = document.getElementsByName('b');
// var qThree = document.getElementsByName('c');
// // var qFour = document.getElementsByName('d');
//


//
//   for (var i = qTwo.length; i--;) {
//       qTwo[i].onchange = function() {
//         aTwo = (this.value);
//           // alert(this.value);
//           console.log(aTwo);
//       if (aTwo === "hobbit") {
//         correct++;
//         }
//       else if (aTwo === "maxi" || aTwo === "targa") {
//         incorrect++;
//         }
//       }
//   }
//
//   for (var i = qThree.length; i--;) {
//       qThree[i].onchange = function() {
//         aThree = (this.value);
//           // alert(this.value);
//           console.log(aThree);
//       if (aThree === "hobbit") {
//         correct++;
//         }
//       else if (aThree === "maxi" || aThree === "targa") {
//         incorrect++;
//         }
//       }
  // }

  // for (var i = qFour.length; i--;) {
  //     qFour[i].onchange = function() {
  //       aFour = (this.value);
  //         // alert(this.value);
  //         console.log(aFour);
  //     if (aFour === "hobbit") {
  //       correct++;
  //       }
  //     else if (aFour === "maxi" || aFour === "targa") {
  //       incorrect++;
  //       }
  //     }
  // }





// if (!$("input[name='a']:checked").val()) {
//   unanswered++;
//   //  alert('Nothing is checked!');
//  }
// else {
//   console.log($("input[name='a']:checked").val());
//   // alert('One of the radio buttons is checked!');
//   }


//  if (!$("input[name='a']:checked").val()) {
//   unanswered++
//    console.log('Nothing is checked!');
// }
// else {
//   // alert('One of the radio buttons is checked!');
// }

// var unknown = $("input[type=radio][name='a']").is(':checked');
// console.log(unknown);
// if (unknown === false) {
//   unanswered++;
// }
// $("#score").append("<h2> Total Unanswered: " + unanswered + "</h2>");


// var qOne = document.getElementsByName("a");
