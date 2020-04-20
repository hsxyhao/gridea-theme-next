!function(w, d, a) {
  var texts = [];
  function disappear() {
    for (let i = 0; i < texts.length; i++) {
      const elem = texts[i];
      if (elem.opacity > 0) {
        elem.top -= 1;
        elem.opacity -= 0.01;
        elem.el.style.cssText = `position: absolute;font-weight: bold;color: #ff6651; z-index: 999999999;top: ${elem.top}px;left:${elem.left}px;opacity: ${elem.opacity};`;
      } else {
        texts.splice(elem, 1);
        elem && elem.remove();
      }
    }
    w.requestAnimationFrame(disappear);
  }
  var a_idx = 0;
  d.body.addEventListener('click', function(e) {
    var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
    let textSpan = d.createElement('span')
    textSpan.textContent = a[a_idx];
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    texts.push({
      el: textSpan,
      top: y - 20,
      left: x,
      opacity: 1
    })
    d.body.appendChild(textSpan);
    w.requestAnimationFrame = function() {
      return w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame || function(e) {
          setTimeout(e, 1e3 / 60)
      }
    }();
    w.requestAnimationFrame(disappear);
  })
}(window, document);