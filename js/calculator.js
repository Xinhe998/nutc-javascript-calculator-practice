
var sum="";
var obj="";
var num="";
var reg=/[\+\-\*\/]/;
var r="",l="",s="";
$("button").click(function()
{
    obj=$(this).val();
    if(obj=="back"){//回鍵
        sum=sum.substring(0,sum.length-1)
    }else if(obj=="clean"){
        num="";
        sum="";
    }else if(obj=="equals"){
        sum=eval(sum);
    }else if(isNaN(obj)==false){
        number(obj);
    }else{
        symbol(obj);
    }
    $("#show").val(sum);
})
function number(e)
{
    sum+=e;
}
function symbol(e)
{
    var show=$("#show").val();
    var c=false;
    if(e==".")
    {
        if(sum.indexOf(".")>-1)
        {
            if(sum.substring(sum.length -1,sum.length)!=e)
            {
                if(sum.substring(sum.length -1,sum.length).search(reg)>-1){
                    sum=sum+"0.";
                }else{
                    sum+=e;
                }
            }
        }else{
            sum+=e;
        }
    }else{
        console.log(sum);
        if(sum.search(reg)>-1)
        {
            console.log(sum.substring(sum.search(reg)+1,sum.length));
            r=sum.substring(0,sum.search(reg));
            l=sum.substring(sum.search(reg)+1,sum.length);
            s=sum.substring(sum.search(reg),sum.search(reg)+1);
            cal(Number(r),l,s,e)
            sum=num;
        }else{
            sum+=e;
        }
    }
}
function cal(r,l,s,e)
{
    console.log(r,s,l,e);
    switch (s)
    {
        case "/" :
            num = (Number(r) / Number(l)) + e;
        break ;
        case "*" :
            num = (Number(r) * Number(l)) + e ;
        break ;
        case "-" :
            num = (Number(r) - Number(l)) + e ;
        break ;
        case "+" :
            num = (Number(r) + Number(l)) + e ;
        break ;
    }
}