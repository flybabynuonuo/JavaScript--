window.onload= function(){
    ScrollBtnObj = document.getElementById("ScrollBtn");
    ScrollBtnObj.onclick = function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
    };
};