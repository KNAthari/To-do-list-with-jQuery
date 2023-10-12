$(document).ready(function(){
    console.log("ready");
    $("#add").click(function(){addTask()
    
    })
    function addTask(){
        //Getting the input value from the user
        var input = $("#newTask").val()
        //put the value in the list item
        $("ul").append("<li>" + input + "</li>");

        $("li").click(function(){
            $(this).toggleClass("crossOff");
    });

        $("#newTask").val("")
        
    }
    
});     