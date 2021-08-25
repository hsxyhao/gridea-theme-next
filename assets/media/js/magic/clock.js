(function(){
  var WINDOW_WIDTH = 820;
  var WINDOW_HEIGHT = 250;
  var RADIUS = 7; 
  var NUMBER_GAP = 10;
  var u=0.65; 
  var context;
  var balls = [];
  const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]; //褰╄壊灏忕悆鐨勯鑹�
  var currentNums = []; 
  var digit =
      [
          [
              [0,0,1,1,1,0,0],
              [0,1,1,0,1,1,0],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [0,1,1,0,1,1,0],
              [0,0,1,1,1,0,0]
          ],//0
          [
              [0,0,0,1,1,0,0],
              [0,1,1,1,1,0,0],
              [0,0,0,1,1,0,0],
              [0,0,0,1,1,0,0],
              [0,0,0,1,1,0,0],
              [0,0,0,1,1,0,0],
              [0,0,0,1,1,0,0],
              [0,0,0,1,1,0,0],
              [0,0,0,1,1,0,0],
              [1,1,1,1,1,1,1]
          ],//1
          [
              [0,1,1,1,1,1,0],
              [1,1,0,0,0,1,1],
              [0,0,0,0,0,1,1],
              [0,0,0,0,1,1,0],
              [0,0,0,1,1,0,0],
              [0,0,1,1,0,0,0],
              [0,1,1,0,0,0,0],
              [1,1,0,0,0,0,0],
              [1,1,0,0,0,1,1],
              [1,1,1,1,1,1,1]
          ],//2
          [
              [1,1,1,1,1,1,1],
              [0,0,0,0,0,1,1],
              [0,0,0,0,1,1,0],
              [0,0,0,1,1,0,0],
              [0,0,1,1,1,0,0],
              [0,0,0,0,1,1,0],
              [0,0,0,0,0,1,1],
              [0,0,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [0,1,1,1,1,1,0]
          ],//3
          [
              [0,0,0,0,1,1,0],
              [0,0,0,1,1,1,0],
              [0,0,1,1,1,1,0],
              [0,1,1,0,1,1,0],
              [1,1,0,0,1,1,0],
              [1,1,1,1,1,1,1],
              [0,0,0,0,1,1,0],
              [0,0,0,0,1,1,0],
              [0,0,0,0,1,1,0],
              [0,0,0,1,1,1,1]
          ],//4
          [
              [1,1,1,1,1,1,1],
              [1,1,0,0,0,0,0],
              [1,1,0,0,0,0,0],
              [1,1,1,1,1,1,0],
              [0,0,0,0,0,1,1],
              [0,0,0,0,0,1,1],
              [0,0,0,0,0,1,1],
              [0,0,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [0,1,1,1,1,1,0]
          ],//5
          [
              [0,0,0,0,1,1,0],
              [0,0,1,1,0,0,0],
              [0,1,1,0,0,0,0],
              [1,1,0,0,0,0,0],
              [1,1,0,1,1,1,0],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [0,1,1,1,1,1,0]
          ],//6
          [
              [1,1,1,1,1,1,1],
              [1,1,0,0,0,1,1],
              [0,0,0,0,1,1,0],
              [0,0,0,0,1,1,0],
              [0,0,0,1,1,0,0],
              [0,0,0,1,1,0,0],
              [0,0,1,1,0,0,0],
              [0,0,1,1,0,0,0],
              [0,0,1,1,0,0,0],
              [0,0,1,1,0,0,0]
          ],//7
          [
              [0,1,1,1,1,1,0],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [0,1,1,1,1,1,0],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [0,1,1,1,1,1,0]
          ],//8
          [
              [0,1,1,1,1,1,0],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [1,1,0,0,0,1,1],
              [0,1,1,1,0,1,1],
              [0,0,0,0,0,1,1],
              [0,0,0,0,0,1,1],
              [0,0,0,0,1,1,0],
              [0,0,0,1,1,0,0],
              [0,1,1,0,0,0,0]
          ],//9
          [
              [0,0,0,0],
              [0,0,0,0],
              [0,1,1,0],
              [0,1,1,0],
              [0,0,0,0],
              [0,0,0,0],
              [0,1,1,0],
              [0,1,1,0],
              [0,0,0,0],
              [0,0,0,0]
          ]//:
      ];

  function drawDatetime(cxt){
      var nums = [];

      context.fillStyle="#005eac"
      var date = new Date();
      var offsetX = 70, offsetY = 30;
      var hours = date.getHours();
      var num1 = Math.floor(hours/10);
      var num2 = hours%10;
      nums.push({num: num1});
      nums.push({num: num2});
      nums.push({num: 10}); 
      var minutes = date.getMinutes();
      var num1 = Math.floor(minutes/10);
      var num2 = minutes%10;
      nums.push({num: num1});
      nums.push({num: num2});
      nums.push({num: 10}); 
      var seconds = date.getSeconds();
      var num1 = Math.floor(seconds/10);
      var num2 = seconds%10;
      nums.push({num: num1});
      nums.push({num: num2});

      for(var x = 0;x<nums.length;x++){
          nums[x].offsetX = offsetX;
          offsetX = drawSingleNumber(offsetX,offsetY, nums[x].num,cxt);
          if(x<nums.length-1){
              if((nums[x].num!=10) &&(nums[x+1].num!=10)){
                  offsetX+=NUMBER_GAP;
              }
          }
      }

      if(currentNums.length ==0){
          currentNums = nums;
      }else{
          for(var index = 0;index<currentNums.length;index++){
              if(currentNums[index].num!=nums[index].num){
                  addBalls(nums[index]);
                  currentNums[index].num=nums[index].num;
              }
          }
      }
      renderBalls(cxt);
      updateBalls();

      return date;
  }

  function addBalls (item) {
      var num = item.num;
      var numMatrix = digit[num];
      for(var y = 0;y<numMatrix.length;y++){
          for(var x = 0;x<numMatrix[y].length;x++){
              if(numMatrix[y][x]==1){
                  var ball={
                      offsetX:item.offsetX+RADIUS+RADIUS*2*x,
                      offsetY:30+RADIUS+RADIUS*2*y,
                      color:colors[Math.floor(Math.random()*colors.length)],
                      g:1.5+Math.random(),
                      vx:Math.pow(-1, Math.ceil(Math.random()*10))*4+Math.random(),
                      vy:-5
                  }
                  balls.push(ball);
              }
          }
      }
  }

  function renderBalls(cxt){
      for(var index = 0;index<balls.length;index++){
          cxt.beginPath();
          cxt.fillStyle=balls[index].color;
          cxt.arc(balls[index].offsetX, balls[index].offsetY, RADIUS, 0, 2*Math.PI);
          cxt.fill();
      }
  }

  function updateBalls () {
      var i =0;
      for(var index = 0;index<balls.length;index++){
          var ball = balls[index];
          ball.offsetX += ball.vx;
          ball.offsetY += ball.vy;
          ball.vy+=ball.g;
          if(ball.offsetY > (WINDOW_HEIGHT-RADIUS)){
              ball.offsetY= WINDOW_HEIGHT-RADIUS;
              ball.vy=-ball.vy*u;
          }
          if(ball.offsetX>RADIUS&&ball.offsetX<(WINDOW_WIDTH-RADIUS)){

              balls[i]=balls[index];
              i++;
          }
      }
      for(;i<balls.length;i++){
          balls.pop();
      }
  }
  function drawSingleNumber(offsetX, offsetY, num, cxt){
      var numMatrix = digit[num];
      for(var y = 0;y<numMatrix.length;y++){
          for(var x = 0;x<numMatrix[y].length;x++){
              if(numMatrix[y][x]==1){
                  cxt.beginPath();
                  cxt.arc(offsetX+RADIUS+RADIUS*2*x,offsetY+RADIUS+RADIUS*2*y,RADIUS,0,2*Math.PI);
                  cxt.fill();
              }
          }
      }
      cxt.beginPath();
      offsetX += numMatrix[0].length*RADIUS*2;
      return offsetX;
  }

  var canvas = document.getElementById("canvasDiyBlock");
  canvas.width=WINDOW_WIDTH;
  canvas.height=WINDOW_HEIGHT;
  context = canvas.getContext("2d");

  var currentDate = new Date();

  setInterval(function(){
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      drawDatetime(context);
  }, 50)
})();