$( document ).ready(function(){

    $("#btn-login").on("click", function(){
        event.preventDefault();
        let title = $("#title").val().trim();
        let description = $("#description").val().trim();
        let cost = parseInt($("#cost").val().trim());
        let address = $("#address").val().trim();
        let userid = $(this).attr("data-id");
        
        var newJob = {
            title:title,
            description:description,
            cost:cost,
            address:address,
            UserId:userid
        }

        $.post("/post", newJob, function(result){
            console.log("data sent");
        })
    })

    // $("#btn-signup").on("click", function(){
    //     event.preventDefault();
    //     let email = $("input[name='email']").val().trim();
    //     let firstanme = $("input[name='firstname']").val().trim();
    //     let lastname = $("input[name='lastname']").val().trim();
    //     let password = $("input[name='password']").val().trim();
    //     var data = {
    //         email:email,
    //         firstname:firstname,
    //         lastname:lastname,
    //         password:password
    //     }

    //     $.post("/signup", data, function(result){
    //         console.log("data sent");
    //     })
    // })

})