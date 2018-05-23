$( document ).ready(function(){

    $("#btn-login").on("click", function(){
        event.preventDefault();
        let title = $("#title").val().trim();
        let description = $("#description").val().trim();
        let cost = parseInt($("#cost").val().trim());

        var newJob = {
            title:title,
            description:description,
            cost:cost,
            address:"blabla",
            UserId:1
        }

        $.post("/post", newJob, function(result){
            console.log("data sent");
        })
    })

})