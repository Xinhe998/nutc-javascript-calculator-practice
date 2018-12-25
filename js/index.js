
$(function () {
    var a = 0;
    var b = "";
    var relChange = false;
    var rel = 0;
    function init() {
        a = 0;
        b = "";
        relChange = false;
    }
    function lastmove() {
        switch (b) {
            case "+":
                rel = parseFloat($("#result").html()) + a;
                $("#result").html(rel);
                break;
            case "-":
                rel = parseFloat($("#result").html()) - a;
                $("#result").html(rel);
                break;
            case "*":
                rel = parseFloat($("#result").html()) * a;
                $("#result").html(rel);
                break;
            case "/":
                rel = parseFloat($("#result").html()) / a;
                $("#result").html(rel);
                break;
        }
    }
    $("td").each(function () {
        $(this).click(function () {
            switch ($(this).text()) {
                case "+":
                    lastmove();
                    b = "+";
                    if (a != 0) {
                        rel = parseFloat($("#result").html()) + a;
                        relChange = true;
                    }
                    $("#result").html(rel);
                    a = 0;
                    break;
                case "-":
                    lastmove();
                    b = "-";
                    if (a != 0 && !relChange) {
                        rel = parseFloat($("#result").html()) + a;
                        relChange = true;
                    }
                    $("#result").html(rel);
                    a = 0;
                    break;
                case "*":
                    lastmove();
                    b = "*";
                    if (a != 0 && !relChange) {
                        rel = parseFloat($("#result").html()) + a;
                    }
                    $("#result").html(rel);
                    a = 0;
                    break;
                case "/":
                    lastmove();
                    b = "/";
                    if (a != 0 && !relChange) {
                        rel = parseFloat($("#result").html()) + a;
                    }
                    $("#result").html(rel);
                    a = 0;
                    break;
                case "=":
                    lastmove();
                    init();
                    break;
                case ".":
                    a = a + ".";
                    break;
                case "C":
                    init();
                    rel = 0;
                    $("#result").html(rel);
                    break;
                default:
                    a = parseFloat(a + $(this).text());
                    break;
            }
            if ($(this).text() != "=" && $(this).text() != "C") {
                $("#Calculation").html($("#Calculation").html() + $(this).text());
            } else {
                $("#Calculation").html("");
            }
            console.log($(this).text());
        });
    });
});
