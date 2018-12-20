$(document).ready(function() {
    $("button").click(function() {
        $("input").val();
        //var num=$("input").val()+
        $("input").val($("input").val()+$(this).val());
    });
});