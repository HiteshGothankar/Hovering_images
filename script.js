var elem = document.querySelectorAll(".elem")


elem.forEach(function (val) {

    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1
    });

    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0
        val.style.backgroundColor = "black"
    });

    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x+"px"
        val.style.backgroundColor = "aqua"
    });

})
