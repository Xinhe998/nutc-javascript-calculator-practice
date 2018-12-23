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
        
        if (symbolnum == 1) {
            $("input").val();
            $("input").val($("input").val() + $(this).val());
            symbolnum += 1;
            //alert(symbol);
        }
        else {
            if ($("input").val().indexOf("+") > 0){
                symbol="+";
                var split = $("input").val().split("+");
            }else if($("input").val().indexOf("-") > 0){
                var split = $("input").val().split("-");
                symbol="-";
            }else if($("input").val().indexOf("*") > 0){
                var split = $("input").val().split("*");
                symbol="*";
            }else if($("input").val().indexOf("/") > 0){
                var split = $("input").val().split("/");
                symbol="/";
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
            $("input").val(parseFloat(sum) + $(this).val());
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
        $("input").val();
        if ($("input").val().indexOf("+") > 0){
            symbol="+";
            var split = $("input").val().split("+");
        }else if($("input").val().indexOf("-") > 0){
            var split = $("input").val().split("-");
            symbol="-";
        }else if($("input").val().indexOf("*") > 0){
            var split = $("input").val().split("*");
            symbol="*";
        }else if($("input").val().indexOf("/") > 0){
            var split = $("input").val().split("/");
            symbol="/";
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
        $("input").val(parseFloat(sum));
        symbolnum = 1;
        dotcc = 0;
    });

    $("#dot").click(function () {
        $("input").val();
        var index1 =$("input").val().length;
        var x =$("input").val().substr((index1-1), 1);
        if (isNaN(x)==false && dotcc == 0){
            $("input").val($("input").val() + $(this).val());
            dotcc =1 ;
        }else {
            alert("錯誤");
        }
    });
});