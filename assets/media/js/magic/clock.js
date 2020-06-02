(function () {
  var digit =
    [
      [
        [0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 0, 0]
      ],//0
      [
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1]
      ],//1
      [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
      ],//2
      [
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ],//3
      [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1]
      ],//4
      [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ],//5
      [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ],//6
      [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0]
      ],//7
      [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
      ],//8
      [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0]
      ],//9
      [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]//:
    ];

  var canvas = document.getElementById('canvasDiyBlock');

  if (canvas.getContext) {
    var cxt = canvas.getContext('2d');
    //声明canvas的宽高
    var H = 100, W = 700;
    canvas.height = H;
    canvas.width = W;
    cxt.fillStyle = '#f00';
    cxt.fillRect(10, 10, 50, 50);

    //存储时间数据
    var data = [];
    //存储运动的小球
    var balls = [];
    //设置粒子半径
    var R = canvas.height / 20 - 1;
    (function () {
      var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
      //存储时间数字，由十位小时、个位小时、冒号、十位分钟、个位分钟、冒号、十位秒钟、个位秒钟这7个数字组成
      data.push(temp[1], temp[2], 10, temp[3], temp[4], 10, temp[5], temp[6]);
    })();

    /*生成点阵数字*/
    function renderDigit(index, num) {
      for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
          if (digit[num][i][j] == 1) {
            cxt.beginPath();
            cxt.arc(14 * (R + 2) * index + j * 2 * (R + 1) + (R + 1), i * 2 * (R + 1) + (R + 1), R, 0, 2 * Math.PI);
            cxt.closePath();
            cxt.fill();
          }
        }
      }
    }

    /*更新时钟*/
    function updateDigitTime() {
      var changeNumArray = [];
      var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
      var NewData = [];
      NewData.push(temp[1], temp[2], 10, temp[3], temp[4], 10, temp[5], temp[6]);
      for (var i = data.length - 1; i >= 0; i--) {
        //时间发生变化
        if (NewData[i] !== data[i]) {
          //将变化的数字值和在data数组中的索引存储在changeNumArray数组中
          changeNumArray.push(i + '_' + (Number(data[i]) + 1) % 10);
        }
      }
      //增加小球
      for (var i = 0; i < changeNumArray.length; i++) {
        addBalls.apply(this, changeNumArray[i].split('_'));
      }
      data = NewData.concat();
    }

    /*更新小球状态*/
    function updateBalls() {
      for (var i = 0; i < balls.length; i++) {
        balls[i].stepY += balls[i].disY;
        balls[i].x += balls[i].stepX;
        balls[i].y += balls[i].stepY;
        if (balls[i].x > W + R || balls[i].y > H + R) {
          balls.splice(i, 1);
          i--;
        }
      }
    }

    /*增加要运动的小球*/
    function addBalls(index, num) {
      var numArray = [1, 2, 3];
      var colorArray = ["#3BE", "#09C", "#A6C", "#93C", "#9C0", "#690", "#FB3", "#F80", "#F44", "#C00"];
      for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
          if (digit[num][i][j] == 1) {
            var ball = {
              x: 14 * (R + 2) * index + j * 2 * (R + 1) + (R + 1),
              y: i * 2 * (R + 1) + (R + 1),
              stepX: Math.floor(Math.random() * 4 - 2),
              stepY: -2 * numArray[Math.floor(Math.random() * numArray.length)],
              color: colorArray[Math.floor(Math.random() * colorArray.length)],
              disY: 1
            };
            balls.push(ball);
          }
        }
      }
    }

    /*渲染*/
    function render() {
      //重置画布宽度，达到清空画布的效果
      canvas.height = 100;
      //渲染时钟
      for (var i = 0; i < data.length; i++) {
        renderDigit(i, data[i]);
      }
      //渲染小球
      for (var i = 0; i < balls.length; i++) {
        cxt.beginPath();
        cxt.arc(balls[i].x, balls[i].y, R, 0, 2 * Math.PI);
        cxt.fillStyle = balls[i].color;
        cxt.closePath();
        cxt.fill();
      }
    }

    clearInterval(oTimer);
    var oTimer = setInterval(function () {
      //更新时钟
      updateDigitTime();
      //更新小球状态
      updateBalls();
      //渲染
      render();
    }, 50);
  }
})();