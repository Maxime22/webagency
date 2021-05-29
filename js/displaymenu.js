window.onload = function () {
    
    var bouton = document.getElementById('btnMenu');
    var nav = document.getElementById('nav');

    bouton.onclick = function (e) {
        if (nav.style.display == "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    };


};

window.onresize = function() { /* Because there were a bug when the menu was not displayed in the mobile status (when we enlarged the window) */
    
    var larg = (document.body.clientWidth);

    if(larg <= 768){
        nav.style.display = "none";
    }else{
        nav.style.display = "block";
    }

}