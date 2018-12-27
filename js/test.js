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

function equalresult() {
    var r = $("#result").val();
    return $("#result").val(eval(r));
}

function Setsym(sym) {
    var s,
        negative
    var symarr = ['\\+', '-', '\\*', '/']
        // var switch_boo = false;
    s = $("#result").val();

    if (s.substr(0, 1) == "-") {
        return $("#result").val(eval(s));
    } else {
        for (var i = 0; i <= 3; i++) {
            if (s.search(symarr[i]) != -1) {
                calnum(symarr[i], sym)
            }
        }
    }

    for (var i = 0; i <= 3; i++) {
        if (s.search(symarr[i]) == -1) {
            console.log("只有一個數字")
            s += sym;
            return $("#result").val(s);
        }
    }

}

function calnum(pre_sym, new_sym) {
    var s, arr, sum_result = 0,
        avg_result = 1

    s = $("#result").val();
    switch (pre_sym) {
        case '\\+':
            arr = s.split("+")
                // $.each(arr, function(j, arrval) {

            if (arr[0] > 0) {
                sum_result = Number(arr[0]) + Number(arr[1]);
            } else if (arr[0] < 0) {
                sum_result = Number(arr[1]) + Number(arr[0]);
            } else {
                sum_result = arr[0].substr(0, arr[0].length - 1)
            }
            // })
            s = Number(sum_result) + new_sym;
            return $("#result").val(s)
        case '-':
            arr = s.split("-")
            sum_result = arr[0] - arr[1]
            s = sum_result + new_sym;
            return $("#result").val(s);
        case '\\*':
            arr = s.split("*")
            $.each(arr, function(j, arrval) {
                console.log(avg_result)
                avg_result *= parseInt(arrval);
            })
            s = avg_result + new_sym;
            return $("#result").val(s);
        case '/':
            arr = s.split("/")
            $.each(arr, function(j, arrval) {
                console.log(avg_result)
                avg_result /= parseInt(arrval);
            })
            s = avg_result + new_sym;
            return $("#result").val(s);
    }
}