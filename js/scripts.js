var toDos = []
var dones = []



$(document).ready(function() {
  $("form#add-task").submit(function(event) {
    var thisToDo
    event.preventDefault();
    var taskName = $("#task").val();
    $("#task").val("");
    toDos.push(taskName);

    $(".to-do-list li").remove();
    toDos.forEach( function (todo) {
      $(".to-do-list").append("<li>" + todo + "</li>");
      $(".to-do-list").last().click(function(li) {
        dones.push(todo);
        toDos.splice(toDos.indexOf(todo),1);
        $(li.target).remove();
        $('done-list li').remove();
        dones.forEach( function(done) {
          $(".done-list").append("<li>" + done + "</li>");
          $(".done-list").last().click(function(li) {
            $(li.target).remove();
            dones.splice(dones.indexOf(done),1);
          });
        });
      });
    });
  });
});
