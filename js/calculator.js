var judge=false;
$(document).ready(function(){
    $(".bt").click(function(){
       (!isNaN($(this).val()) || $(this).val()=="." )? _number($(this).val()) : _symbol($(this).val()) ;
    });
});

function _number(num){
    var input_data;
    if( $("#input_data").val().indexOf("+")>=0 )
        input_data=$("#input_data").val().split("+");
    else if( $("#input_data").val().indexOf("-")>=0 )
        input_data=$("#input_data").val().split("-");
    else if( $("#input_data").val().indexOf("*")>=0 )
        input_data=$("#input_data").val().split("*");
    else if( $("#input_data").val().indexOf("/")>=0 )
            input_data=$("#input_data").val().split("/");
    else
        input_data=[input_data=$("#input_data").val()];
    if(judge==false){ 
        //if( $("#input_data").val().indexOf(".")>=0 && num==".")
        if( input_data[input_data.length-1].indexOf(".")>=0 && num==".")
            return;
        else
            ($("#input_data").val()!="0" || num==".")? $("#input_data").val( $("#input_data").val()+num ) : $("#input_data").val(num);
    }else{
        $("#input_data").val(num);
        judge=false;
    }
}

function _symbol(sym){
    if(sym=="="){
        $("#input_data").val( eval( $("#input_data").val() ) );
        judge=true;
        return;
    }
    if(sym=="C"){
        $("#input_data").val("0");
        judge=false;
        return;
    }
    if(sym=="⇦"){
        $("#input_data").val( $("#input_data").val().substring( 0 , $("#input_data").val().length -1) );
        return;
    }
    if (isNaN($("#input_data").val())  ) {
        if( !isNaN( $("#input_data").val().substring( $("#input_data").val().length - 1 ) ) )
            $("#input_data").val( eval(  $("#input_data").val())  + sym );
        else 
            $("#input_data").val( $("#input_data").val().substring( 0 , $("#input_data").val().length -1) + sym ) ;
        judge=false;
    }else{
        $("#input_data").val( $("#input_data").val() + sym );
        judge=false;
    }
}