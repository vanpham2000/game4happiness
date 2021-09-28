$(function() {
  console.log("document is ready!");

  $( "button" ).click(function(){
    console.log('clicked the button');
    $(this).toggle(100);
    var x = $( "#doge-meme-pic" ).position();
   
  });

$( "#doge-meme-pic" ).draggable({
 containment: "#containment-wrapper", scroll: false, 
  stop: function() {
   calculateWow();
  }
});

function calculateWow (){
  var x = $( "#doge-meme-pic" ).position();
  var wow = x.top  + x.left 
  
  if(wow < 500){
    var realConsoleLog = console.log;
    console.log = function () {
        var message = [].join.call(arguments, " ");
        $("#wow").text(message);
        realConsoleLog.apply(console, arguments);
    };
       console.log('not much wow (' + wow +  ')');
        
        
  }
  else {
    var realConsoleLog = console.log;
    console.log = function () {
        var message = [].join.call(arguments, " ");
        $("#wow").text(message);
        realConsoleLog.apply(console, arguments);
    };
    console.log('so much wow (' + wow +  ')!!!!');
       
    
  }
}

});


