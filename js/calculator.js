
var sum="";
var obj="";
var num="";
var reg=/[\+\-\*\/]/;
var r="",l="",s="";
$("button").click(function()
{
    obj=$(this).val();
    if(isNaN(obj)==false)
        number(obj);
    else
        symbol(obj);

    $("#show").val(sum);
})
function number(e)
{
    num+=e;
    sum=num;
}
function symbol(e)
{
    var show=$("#show").val();
    if(show.search(reg)>=0)
    {
        r=show.substring(0,show.search(reg));
        l=show.substring(show.search(reg)+1,show.length);
        s=show.substring(show.search(reg),show.search(reg)+1);
        cal(r,l,s,e)
    }else{
        num+=e;
    }
    sum=num;
}
function cal(r,l,s,e)
{
    console.log(r,s,l,e);
    switch (s)
    {
        case "/" :
            num = (r / l) + e;
        break ;
        case "*" :
            num = (r * l) + e ;
        break ;
        case "-" :
            num = (r - l) + e ;
        break ;
        case "+" :
            num = (Number(r) + Number(l)) + e ;
        break ;
    }
}