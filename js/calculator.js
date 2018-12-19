String.prototype.LastSearch=function(reg){
    var i=1;
    while(i<this.length-1 && this.substring(this.length-i,this.length).search(reg)<0)i++;
    return (this.substring(this.length-i,this.length).search(reg)==0?this.length-i:-1);
}
function get_numeral(value,sign){
    return value.substring(value.LastSearch(sign)+1,value.length);
}
$('#screen').attr("error","");
$(".numeral").click(function(){
    var this_value=$(this).html();
    var input_starte=$('#screen').html().trim();
    var numer=get_numeral(input_starte,/[\+\-\*\/]/);
    if((input_starte=="" && !isNaN(this_value)) || this_value=="("){
        $("#screen").append(this_value);
    }else if(this_value=="."){
        if(Number(numer)==0){
            $('#screen').append("0.");
        }else if(numer.indexOf(".")<0){
            $("#screen").append(this_value);
        }
    }else if(this_value=="&lt;X"){
        $('#screen').html(input_starte.substring(0,input_starte.length-1));
    }else if(this_value!=""){
        if(Number(numer)==0 && numer!="" && numer!="0."){
            $("#screen").html(input_starte.substring(0,input_starte.length-numer.length));
        }else if($('#screen').attr("error")!=""){
            $("#screen").html("");
            $('#screen').attr("error","");
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
    try {
        var ans=eval(input);
        if(isFinite(ans)){
            $('#screen').html(ans);
        }else{
            $('#screen').html("輸入錯誤");
            $('#screen').attr("error","錯誤");
        }   
    } catch (error) {
        $('#screen').html("輸入錯誤");
        $('#screen').attr("error","錯誤");
    }
});