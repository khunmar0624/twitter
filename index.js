$(function(){
    $("#getdata").click(function(){
        $("#posts").empty();
        var url = "http://localhost:3000/posts";
        $.get(url, function(data){
            console.log(data);  
            var template = $('#template').html();
            for(var i=0;i<data.length;i++){
                var rendered = Mustache.render(template, data[i]);
                $("#posts").append(rendered);
            }
        });
    });

    $("#twit").click(function(){
        // $("#posts").empty();
        var newposts = {};
        newposts.id = null;
        newposts.title = $("#text").val();
        // console.log(newposts);
        var url = "http://localhost:3000/posts";
        $.post(url, newposts, function (data, status) {
            console.log("Inserted " + data);
        });

        // var template = $('#template').html();
        // var mytext = $("#text").val();
        // console.log("mytext : " + mytext);
        // var rendered = Mustache.render(template, mytext);
        // $("#posts").append(rendered);
        var url = "http://localhost:3000/posts";
        $.get(url, function(data){
            console.log(data.length);  
            var template = $('#template').html();
            for(var i=data.length;i<=data.length;i++){
                var rendered = Mustache.render(template, data[i-1]);
                $("#posts").append(rendered);
            }
        });
    });
    $("#clear").click(function(){
        $("#posts").empty();
       
        });
    });
/*function deleteEmpty(clear){
        for(var k in clear)
         if(k == "children"){
             if(obj[k]){
                     deleteEmpty(obj[k]);
             }else{
                   delete clear.children;
              } 
         }
    }

    for(var i=0;i<data.length;i++){
        deleteEmpty(a.children[i])
}*/
    

