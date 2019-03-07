//function for view tables
$.get("/tables", function(data) {
    for (var i = 0; i < data.length; i++) {
        var listGroupItem;
        listGroupItem.text("Name: " + data[i].name);
        listGroupItem.text("Email: " + data[i].email);
        listGroupItem.text("Phone: " + data[i].phone);

      $("#").append(listGroupItem);
    }
  });

  $.get("/tables", function(data) {
    for (var i = 0; i < data.length; i++) {
        var listGroupItem;
        listGroupItem.text("Name: " + data[i].name);
        listGroupItem.text("Email: " + data[i].email);
        listGroupItem.text("Phone: " + data[i].phone);

      $("#").append(listGroupItem);
    }
  });


//function for reservations

$("#").on("click", function() {
    event.preventDefault();

    var newCostumer = {
        name: $("#").val().trim(),
        email: $("#").val().trim(),
        phone: $("#").val().trim(),
    };

    $.post("https://pure-bayou-95145.herokuapp.com/", newCostumer)
        .then(function(data) {
        console.log(data);
        });

})