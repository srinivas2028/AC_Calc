

function disp(v1){
    var prev=$("#result").val();
    prev+=v1;
    $("#result").val(prev);
    
}

$(document).ready(function(){
    $(".btn").click(function(){
        $(this).addClass(play_A());
    })
});
function sty(ele){
    $(document).ready(function(){
        // console.log('#n'+'ele');
        $('#n'+ele).addClass("btn-style2");
        setTimeout(() => {
            $('#n'+ele).removeClass("btn-style2");}, 300);
});
}

$(document).ready(function(){
    $(".btn").click(function(){
        $(this).addClass("btn-style2");
        setTimeout(() => {
            $(this).removeClass("btn-style2");}, 300);
    });
});


function solve(){
    var prev=$("#result").val();
    var res=eval(prev);

    $("#result").val(res);
    
}

function clr(){
    $("#result").val('');
}
function del(){
    var p=$("#result").val();
    p=p.slice(0,p.length-1);
    $("#result").val(p);
}
function play_A(){
    var aud=new Audio('https://github.com/Akhilchary/AC_Calc/blob/main/Click2.mp3');
    aud.play();
}


document.addEventListener("keydown",function(event){
    
    var ele=event.key;
    var eleCharCode=ele.charCodeAt(0);
    // console.log(eleCharCode+" "+ele);
    if(eleCharCode>=48 && eleCharCode<=57){
        sty(ele);
        disp(ele);
        play_A();
        sty(ele);
    }
    else if(eleCharCode==37 || eleCharCode==42||eleCharCode==43||eleCharCode==45||eleCharCode==46||eleCharCode==47||eleCharCode==40||eleCharCode==41){
        disp(ele);
        play_A();
        sty(eleCharCode);
    }
    else if(eleCharCode==69){
        solve();
        play_A();
        sty();
    }
    else if(ele==="Backspace"){del();play_A();sty('08');}
    else if(ele==="Delete"){clr();play_A();sty('127');}
    
});
    
