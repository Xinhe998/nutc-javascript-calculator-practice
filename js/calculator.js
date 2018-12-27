function getNum(num) { //Number 0~9
    var r = $("#result").val();
    var lastword = r.substr(r.length - 1);
    if (lastword == "0" && r.length == 1) { //0不能一直按
        $("#result").val();
    } else {
        $("#result").val(function(i, val) {
            return val + num;
        });
    }
}

function clearNum() { //clear all
    $("#result").val("");
}

function back() { //backspace
    $("#result").val(function(i, val) {
        return val.substr(0, val.length - 1);
    });
}

function equal() {
    var r = $("#result").val();
    var lastword = r.substr(r.length - 1);
    var s
    if (lastword == "+" || lastword == "-" || lastword == "*" || lastword == "/" || lastword == ".") {
        s = r.substr(0, r.length - 1)
        $("#result").val(eval(s));
    } else {
        $("#result").val(eval($("#result").val()));
    }
}

function cal(sym) { //+ * /
    var r = $("#result").val();
    var lastword = r.substr(r.length - 1);
    if (r == "") { //空的時候不能點運算符號
        $("#result").val("");
    } else if (lastword == "+" || lastword == "*" || lastword == "/" || lastword == ".") { //運算符號不能重複一直點
        $("#result").val();
    } else {
        $("#result").val(function(i, val) {
            return val + sym
        });
    }
}

function minus(minussym) { //-
    var r = $("#result").val();
    var lastword = r.substr(r.length - 1);
    if (lastword == "+" || lastword == "-" || lastword == "*" || lastword == "/" || lastword == ".") {
        $("#result").val();
    } else {
        $("#result").val(function(i, val) {
            return val + minussym
        });
    }
}

function left(bracketsym) { //左括號
    var r = $("#result").val();
    var lastword = r.substr(r.length - 1);
    if (lastword == "0" || lastword == "1" || lastword == "2" || lastword == "3" || lastword == "4" || lastword == "5" || lastword == "6" || lastword == "7" || lastword == "8" || lastword == "9" || lastword == "(" || lastword == ")") {
        $("#result").val(); //前面不可是數字或括號
    } else {
        $("#result").val(function(i, val) {
            return val + bracketsym
        });
    }
}

function right(bracketsym) { //右括號
    var r = $("#result").val();
    var lastword = r.substr(r.length - 1);
    if (r == "") {
        $("#result").val("");
    } else if (lastword == "+" || lastword == "-" || lastword == "*" || lastword == "/" || lastword == "." || lastword == "(" || lastword == ")") {
        $("#result").val(); //前面不可是運算符號或括號
    } else if (r.indexOf('(') == -1) { //前面如果沒有左括號維持一樣結果
        $("#result").val();
    } else {
        $("#result").val(function(i, val) {
            return val + bracketsym
        });
    }
}