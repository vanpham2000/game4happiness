$(function() {
    console.log("document is ready!");

    var userName, nameLength, nameMsg, nameReverse, Uname = ""; 

    $('#btnName').click(function() {
        userName = $('#userName').val(); 
        // console.log(userName); 
        // console.log($('#userName').val().length); 
        // console.log(getStringLength(userName)); 

        nameLength = getStringLength(userName);
        nameMsg = "The Length of your name is: ";
        $('#nameOutput').append(nameMsg + nameLength + "<br/>"); 

        // console.log(reverseString(userName)); 
        Uname = userName.toUpperCase();
        nameMsg = "Your Name UPPERCASE letters is: ";
        $('#nameOutput').append(nameMsg + Uname + "<br/>"); 
       

        nameReverse = reverseString(userName);
        nameMsg = "Your Name reversed letters is: ";
        $('#nameOutput').append(nameMsg + nameReverse + "<br/>"); 

        console.log((Uname) +" "+ (userName)); 
        

        stringArrayPosition(Uname + userName); 
        
        });

        $('#btnClear').click(function(){
            clearElement("#nameOutput", "html");
            clearElement("#userName", "input");
      })

    function getStringLength(stringVal){
        var stringLength = stringVal.length; 
       return stringLength; 
    }

    function toUpperCase(stringVal){
 var uppername =  stringVal.uppercase();
   return uppername

    }

    function reverseString(stringVal){
        var revString = stringVal.split("").reverse().join("");
       return revString; 
    }

    function thirdLetter(stringVal){
        
       return thirdString; var thirdString = stringVal[2]; 
    }

    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html(""); 
        }
        else if(elementType=="input"){
            $(elementId).val(" "); 
        }
      
        
    } 

    function stringArrayPosition(stringVal){

        for(i=0; i<stringVal.length; i++){
            console.log(i + " " + stringVal[i]);
        }


    }


  
    $('#btnClear').fadeOut(1); 
    $("button").click(function(){
        $("#btnClear").fadeIn(3000);
        
       
    
       
    });
});