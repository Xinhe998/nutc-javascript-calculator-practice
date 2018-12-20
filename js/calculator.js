function getNum(num) { //Number 0~9
    var pre_result = $("#result").val();
    var aft_result = pre_result + num;
    $("#result").val(aft_result);
}

function clearnum() { //clear all
    $("#result").val('');
}

function back() { //backspace
    $("#result").val(function(i, val) {
        return val.substr(0, val.length - 1);
    });
}

function cal(sym) {
    var s, count_plus,
        count_minus,
        plus_result = 0,
        minus_result = 0,
        arr
    s = $("#result").val();
    count_plus = s.match(/[+]/g)
    count_minus = s.match(/[-]/g)
    switch (sym) {
        case '+':

            if (s.split("+").length == 1) { //如字串只有一個數字按加號即在數字加+
                s += '+';
            } else if (s.split("+").length > 1 && count_plus.length == 1 || count_minus.length == 1) { //如字串有兩個數字(e.g.5+4)按加號即把字串split存成陣列再value相加
                arr = s.split("+")
                $.each(arr, function(j, arrval) {
                    console.log(plus_result)
                    plus_result += parseInt(arrval);
                })
                s = plus_result + "+";
            } else {
                s += ""
            }
            return $("#result").val(s);
        case '-':
            // s = $("#result").val()
            // if (s.split("-").length == 1) { //如字串只有一個數字按加號即在數字加-
            //     s += '-';
            // } else if (s.split("-").length > 1 && count_minus.length == 1 || count_plus.length == 1) { //如字串有兩個數字(e.g.5+4)按加號即把字串split存成陣列再value相加
            //     arr = s.split("-")
            //     $.each(arr, function(j, arrval) {
            //         console.log(minus_result)
            //         minus_result = -parseInt(arrval) - minus_result;
            //     })
            //     s = minus_result + "-";
            // } else {
            //     s += ""
            // }
            // return $("#result").val(s);
        case '*':
        case '/':

    }
}