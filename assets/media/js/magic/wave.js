document.onclick = function(e) {
    var symbol = document.createElement("div");
    symbol.style.position = "absolute";
    symbol.style.left = (e.pageX) + "px";
    symbol.style.top = (e.pageY) + "px";
    symbol.style.zIndex = 9999;
    symbol.style.transition="all 1.5s";
    symbol.style.border="1px red solid";
    symbol.style.borderColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`; // 随机颜色
    symbol.style.borderRadius="100%";
    symbol.style.width = "0px";
    symbol.style.height = "0px";
    symbol.addEventListener("transitionend",function(et){ // 动画结束移除dom
    if(et.propertyName == "opacity" && et.srcElement.style.opacity==0)
      et.srcElement.remove();
    });
    document.body.appendChild(symbol);
    requestAnimationFrame(()=>{
      symbol.style.width = "80px";
      symbol.style.margin = "-7px -40px";
      symbol.style.height = "14px";
      symbol.style.opacity = 0;
    });
};