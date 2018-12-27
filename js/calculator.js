
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
        sum=Number(eval(sum));
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
    if(e==".")
    {
        if(sum.indexOf(".")>-1)
        {
            /*if(sum.substring(sum.length -1,sum.length)!=e)
            {*/
                if(sum.substring(sum.length -1,sum.length).search(reg)>-1){//符號
                    sum=sum+"0.";
                }else if(sum.substring(sum.length -1,sum.length)!="."){
                    sum+=e;
                }
            /*}*/
        }else{
            sum+=e;
        }
    }else{
        if($("#show").val().search(reg)>-1)
        {
            r=sum.substring(0,sum.search(reg));
            l=sum.substring(sum.search(reg)+1,sum.length);
            s=sum.substring(sum.search(reg),sum.search(reg)+1);
            
            console.log(r,s,l);
            cal(Number(r),l,s,e)
            sum=num;
        }else{
            sum+=e;
        }
    }
}
function cal(r,l,s,e)
{
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