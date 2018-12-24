
        function getNum(num){
            $("#showResBox").val(function(i,val){
                return val + num 
            })
        }
        function clearRes(){
            document.getElementById("showResBox").value = "";
        }

        function cal(calSymbol){
            var boxRes=$("#showResBox").val();
            var lastSym=boxRes.substr(boxRes.length-1);

            if($("#showResBox").val()==""){
                $("#showResBox").val("");
            }else if(lastSym=="+"||lastSym=="-"||lastSym=="*"||lastSym=="/"||lastSym=="."){
                $("#showResBox").val("");}
                else{$("#showResBox").val(function(i,val){
                    return val + calSymbol 
                });
                }
            }

            function minus(minuss){
                var boxRes =$("#showResBox").val();
                var lastSym=boxRes.substr(boxRes.length-1);
                if(lastSym=="+"||lastSym=="-"||lastSym=="*"||lastSym=="/"||lastSym=="."){
                    $("#showResBox").val(""); 
                }else{$("#showResBox").val(function(i,val){
                    return val + minuss
                });
                }
            }

            function equal(){
                var boxRes =$("#showResBox").val();
                var lastSym=boxRes.substr(boxRes.length-1);
                document.getElementById("showResBox").value = eval(document.getElementById("showResBox").value);
               
        }

        function del(){
            $("#showResBox").val(function(i,val){
                return val.substr(0,val.length-1)
            });
        }
    
