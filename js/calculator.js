$(document).ready(function () {
    var symbolnum = 1;
    var symbol = "";
    var num = 0;
    var dotcc = 0;
    $(".btn").click(function () {
        num = $(this).val();
        $("input").val();
        $("input").val($("input").val() + num);
        //alert(num);
    });


    $(".symbol").click(function () {
        var index1 = $("input").val().length;
        var x = $("input").val().substr((index1 - 1), 1);
        if (isNaN(x) == true) {
            alert("錯誤");
        } else {
            if (symbolnum == 1) {
                $("input").val();
                $("input").val($("input").val() + $(this).val());
                symbolnum += 1;
                //alert(symbol);
            }
            else {
                var sum = split();
                $("input").val(parseFloat(sum) + $(this).val());
            }
        }
        dotcc = 0;
    });

    $("#clear").click(function () {
        $("input").val();
        $("input").val("");
        symbolnum = 1;
        dotcc = 0;
    });

    $("#with").click(function () {
        var index1 = $("input").val().length;
        var x = $("input").val().substr((index1 - 1), 1);
        if (isNaN(x) == true) {
            alert("錯誤");
        }
        else {
            var sum = split();
            $("input").val(parseFloat(sum));
            symbolnum = 1;
            dotcc = 0;
        }
    });

    $("#dot").click(function () {
        $("input").val();
        var index1 = $("input").val().length;
        var x = $("input").val().substr((index1 - 1), 1);
        if (index1==0){
            $("input").val("0" + $(this).val());
        }else if ($("input").val().indexOf(".") > 0){
            alert("錯誤");
        }else if (isNaN(x) == true && dotcc != 0) {
            alert("錯誤");
        } else {
            $("input").val($("input").val() + $(this).val());
            dotcc = 1;
        }
    });
    $("#back").click(function () {
        var index1 = $("input").val().length;
        var x = $("input").val().substr((index1 - 1), 1);
        if (x == "." && dotcc != 0) {
            dotcc = 0;
        } else if (isNaN(x) == true && symbolnum != 1) {
            symbolnum = 1;
        }
        var str = $("input").val();
        $("input").val(str.substr(0, (str.length - 1)));
    });

    function split() {
        $("input").val();
        if (isNaN($("input").val()) == false){
            sum = $("input").val();
        }else {
            if ($("input").val().indexOf("+") > 0) {
                symbol = "+";
                var split = $("input").val().split("+");
            } else if ($("input").val().indexOf("-") > 0) {
                var split = $("input").val().split("-");
                symbol = "-";
            } else if ($("input").val().indexOf("*") > 0) {
                var split = $("input").val().split("*");
                symbol = "*";
            } else if ($("input").val().indexOf("/") > 0) {
                var split = $("input").val().split("/");
                symbol = "/";
            }
            for (var i = 0; i < split.length; i++) {
                split[i] = parseFloat(split[i]);
            }
            var sum = split[0];
            switch (symbol) {
                case "+":
                    for (var i = 1; i < split.length; i++) {
                        sum += split[i];
                    }
                    //alert(sum);
                    break;
                case "-":
                    for (var i = 1; i < split.length; i++) {
                        sum -= split[i];
                    }
                    break;
                case "*":
                    for (var i = 1; i < split.length; i++) {
                        sum *= split[i];
                    }
                    break;
                case "/":
                    for (var i = 1; i < split.length; i++) {
                        sum /= split[i];
                    }
                    break;
            }
        }
        return sum;
    }
});