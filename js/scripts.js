$(document).ready(function(){
  $("form").submit(function(event) {

    var sentenceString = $("input#item1").val();
    alert("hi");
    var sentenceArray = sentenceString.split();
  });

  $("#reveal").append(sentenceString);

  event.preventDefault();
});
});
