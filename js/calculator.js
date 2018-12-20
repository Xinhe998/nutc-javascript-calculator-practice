
var sum="";
$("button").click(function(){
    var obj="";
    obj=$(this).val();
    if(obj=="back"){
        sum=sum.substring(0,sum.length-1)
    }else if(obj=="clean"){
        sum=""
    }else if(obj=="equals"){
        sum=eval(sum);
    }else{
        sum+=obj;
    }
    $("#show").val(sum);
});