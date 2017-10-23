/*
function deletepost(id) {
    alert('คุณต้องการลบ ' + id + ' ใช่');

    //Delete from back end
    $.ajax({
        url: "http://localhost:3000/posts/" + id, // post id
        type: "DELETE" // Use DELETE
    })

    //Delete from front end
    $("#post" + id).empty();
}

function editpost(id) {
    alert('Edit ' + text);

    $("#title" + id).prop('readonly', true);
    //Delete from back end
    $.ajax({
        url: "http://localhost:3000/posts/" + id, // post id
        type: "PUT" // Use DELETE
    })

    //Delete from front end
    $("#post" + id).empty();
}

/*
function editpost(id){
    alert('Edit ' + text);
$.ajax({
    type: 'PUT',
    //data: {name: 'Billy Bob', age: 28},
    url: "http://localhost:3000/posts/",
    success: function() {
      //no data...just a success (200) status code
      console.log('Friend Updated Successfully!');
    }
  });





$("#getdata").click(function () {
    $("#posts").empty();
    var url = "http://localhost:3000/posts";
    $.get(url, function (data) {
        console.log(data);
        var template = $('#template').html();
        for (var i = 0; i < data.length; i++) {
            var rendered = Mustache.render(template, data[i]);
            $("#posts").append(rendered);
            //  $("#text").val("");
        }
    });
});

$("#twit").click(function () {
    console.log("Inserted ");
    // $("#posts").empty();
    var newposts = {};
    newposts.id = null;
    newposts.title = $("#text").val();
    // console.log(newposts);
    var url = "http://localhost:3000/posts";
    $.post(url, newposts, function (data, status) {
        console.log("Inserted " + data);
        $("#text").val("");

    });

    // var template = $('#template').html();
    // var mytext = $("#text").val();
    // console.log("mytext : " + mytext);
    // var rendered = Mustache.render(template, mytext);
    // $("#posts").append(rendered);
    var url = "http://localhost:3000/posts";
    $.get(url, function (data) {
        console.log(data.length);
        var template = $('#template').html();
        for (var i = data.length; i <= data.length; i++) {
            var rendered = Mustache.render(template, data[i - 1]);
            $("#posts").append(rendered);
        }
    });
});
$("#clear").click(function () {
    $("#posts").empty();

});


$("#edit").click(function () {
    $("#posts").empty();

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


/*function myFunction() {
                          var x = document.createElement("INPUT");
                          x.setAttribute("type", "text");
                          x.setAttribute("value", "Hello World!");
                          document.body.appendChild(x);
                      }*/



function deletepost(id) {
    alert('delete ' + id);

    //Delete from back end
    $.ajax({
        url: "http://localhost:3000/posts/" + id, // post id
        type: "DELETE" // Use DELETE
    })

    //Delete from front end
    $("#post" + id).empty();
}


function editpost(id) {
    alert('Edit ' + id);
    $("#title" + id).prop('readonly', false);
    $.ajax({
        type: 'PUT',
        //data: {name: 'Billy Bob', age: 28},
        url: "http://localhost:3000/posts/",
        success: function () {
            //no data...just a success (200) status code
            console.log('Friend Updated Successfully!');
        }
    });
}

function savepost(id) {
    alert('Save' + id);
    $("#title" + id).prop('readonly', false);
    $.ajax({
        url: updateUrl,
        type: 'PUT',
        data: newuser,
        success: function (result) {
            console.log('Updated!');
        }
    });
}


$(function () {


    $("#getdata").click(function () {
        $("#posts").empty();
        var url = "http://localhost:3000/posts";
        $.get(url, function (data) {
            console.log(data);
            var template = $('#template').html();
            for (var i = 0; i < data.length; i++) {
                var rendered = Mustache.render(template, data[i]);
                $("#posts").append(rendered);
                //  $("#text").val("");
            }
        });
    });

    $("#twit").click(function () {
        // $("#posts").empty();
        var newposts = {};
        newposts.id = null;
        newposts.title = $("#text").val();
        // console.log(newposts);
        var url = "http://localhost:3000/posts";
        $.post(url, newposts, function (data, status) {
            console.log("Inserted " + data);
            $("#text").val("");

        });

        // var template = $('#template').html();
        // var mytext = $("#text").val();
        // console.log("mytext : " + mytext);
        // var rendered = Mustache.render(template, mytext);
        // $("#posts").append(rendered);
        var url = "http://localhost:3000/posts";
        $.get(url, function (data) {
            console.log(data.length);
            var template = $('#template').html();
            for (var i = data.length; i <= data.length; i++) {
                var rendered = Mustache.render(template, data[i - 1]);
                $("#posts").append(rendered);
            }
        });
    });
    $("#clear").click(function () {
        $("#posts").empty();

    });

});

$("#edit").click(function () {
    $("#posts").empty();

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


                    /*function myFunction() {
                                              var x = document.createElement("INPUT");
                                              x.setAttribute("type", "text");
                                              x.setAttribute("value", "Hello World!");
                                              document.body.appendChild(x);
                                          }*/
