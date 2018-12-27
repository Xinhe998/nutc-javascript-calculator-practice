String.prototype.LastSearch=function(reg){
    var i=1;
    while(i<this.length-1 && this.substring(this.length-i,this.length).search(reg)<0)i++;
    return (this.substring(this.length-i,this.length).search(reg)==0?this.length-i:-1);
}
String.prototype.CountSearch=function(reg){
    var i=0,count=0,value=this;
    while(value.length>0 && i<value.length){
        var index=value.substring(i,value.length).search(reg);
        if(index>-1){
            count++;
            value=value.substring(index,value.length);
        }
        i++;
    }
    return count;
}
Math.RoundDecimal=function(value,amount){
    var carry=10;
    for(var i=1;i<amount;i++)carry*=10;
    value=Math.round(value*carry);
    value=value/carry;
    console.log(value);
    return value;
}
Math.FloorDecimal=function(value,amount){
    var carry=10;
    for(var i=1;i<amount;i++)carry*=10;
    value=Math.floor(value*carry);
    value=value/carry;
    return value;
}
Math.CeilDecimal=function(value,amount){
    var carry=10;
    for(var i=1;i<amount;i++)carry*=10;
    value=Math.Ceil(value*carry);
    value=value/carry;
    return value;
}
function get_numeral_last(value,sign){
    return value.substring(value.LastSearch(sign)+1,value.length);
}
function get_numeral(value,sign){
    var sear=value.search(sign);
    return value.substring(0,(sear>-1?sear:value.length));
}
function Simple_Calculation(value1,value2,sign){
    switch (sign) {
        case "+":
            return Number(value1)+Number(value2);
            break;
        case "-":
            return Number(value1)-Number(value2);
            break;
        case "*":
            return Number(value1)*Number(value2);
            break;
        case "/":
            return Number(value1)/Number(value2);
            break;
        default:
            break;
    }
}
function Calculation_Controller(input){
    var numer1,
        sign_str,
        numer2,
        formula,
        ans,
        sign_reg=new Array(/[\*\/]/,/[\+\-]/),
        i=0;
    while(i<=1){
        while(input.search(sign_reg[i])>-1){
            var sign=input.search(sign_reg[i]);
            numer1=get_numeral_last(input.substring(0,sign),/[\+\-\*\/]/);
            sign_str=input.substring(sign,sign+1);
            numer2=get_numeral(input.substring(sign+1,input.length),/[\+\-\*\/]/);
            formula=numer1+sign_str+numer2;
            ans=Math.RoundDecimal(Simple_Calculation(numer1,numer2,sign_str),4);
            input=input.substring(0,input.indexOf(formula))+(isFinite(ans)?ans:0)+input.substring(input.indexOf(formula)+formula.length,input.length);
        }
        i++;
    }
    return input;
}
function Parentheses(input){
    var origin=input,formula;
    while(input.search(/[\(]/)>-1){
        input=input.substring(input.search(/[\(]/)+1,input.length);
    }
    while(input.search(/[\)]/)>-1){
        input=input.substring(0,input.search(/[\)]/));
    }
    formula=input;
    return origin.substring(0,origin.indexOf(formula)-1)+Calculation_Controller(input)+origin.substring(origin.indexOf(formula)+formula.length+1,origin.length);
}

$('#screen').attr("error","");
$(".numeral").click(function(){
    var this_value=$(this).html();
    var input_starte=$('#screen').html().trim();
    var last_input=input_starte.substring(input_starte.length-1,input_starte.length);
    var numer=get_numeral_last(input_starte,/[\(\)\+\-\*\/]/);
    if($('#screen').attr("error")!=""){
        $("#screen").html("");
        $('#screen').attr("error","");
    }
    if((input_starte=="" && !isNaN(this_value)) || this_value=="("){
        $("#screen").append((this_value=="(" && ((isFinite(last_input) && input_starte!="") || last_input==")")?"*"+this_value:this_value));
    }else if(this_value=="."){
        if(Number(numer)==0){
            
            if(numer.search(/[0\.]/)>-1){
                $("#screen").html(input_starte.substring(0,input_starte.length-numer.length));
            }
            $('#screen').append("0.");
        }else if(numer.indexOf(".")<0){
            $("#screen").append(this_value);
        }
    }else if(this_value=="&lt;X"){
        $('#screen').html(input_starte.substring(0,input_starte.length-1));
    }else if(this_value!=""){
        if(Number(numer+this_value)==0 && numer!="" && numer!="0."){
            $("#screen").html(input_starte.substring(0,input_starte.length-numer.length));
        }
        $("#screen").append(this_value);
    }
});
$(".sign").click(function(){
    var input_starte=$('#screen').html().trim();
    if(input_starte!="" && input_starte.LastSearch(/[\+\-\*\/]/)!=input_starte.length-1){
        if(input_starte.substring(input_starte.length-1,input_starte.length)=="."){
            $("#screen").html(input_starte.substring(0,input_starte.length-1));
        }
        $("#screen").append($(this).html());
    }
});
$(".clear").click(function(){
    $("#screen").html('');
    $('#screen').attr("error","");
});
$(".ans").click(function(){
    var input=$('#screen').html().trim();
    input=(input.LastSearch(/[\+\-\*\/]/)==input.length-1?input.substring(0,input.length-1):input);
    var befo=input.CountSearch(/[\(]/);
    while(befo!=input.CountSearch(/[\)]/))input+=")";
    var ans=0;
    try {
        ans=input;
        while(ans.search(/[\)\(]/)>-1){
            ans=Parentheses(ans);
        }
        ans=Calculation_Controller(ans);
        $('#screen').html(ans);
    } catch (error) {
        console.log(error);
        $('#screen').html("輸入錯誤");
        $('#screen').attr("error","錯誤");
    }
});