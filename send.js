document.addEventListener('DOMContentLoaded',function(event){ 
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
   
    //def var
    var x1=Math.floor( (Math.random()*window.innerWidth) +1);
    var y1=Math.floor( (Math.random()*window.innerHeight) +1);
    var x2=Math.floor( (Math.random()*window.innerWidth) +1);
    var y2=Math.floor( (Math.random()*window.innerHeight) +1);
    var x3=Math.floor( (Math.random()*window.innerWidth) +1);
    var y3=Math.floor( (Math.random()*window.innerHeight) +1);
   // var x1=prompt('enter x1 co-ordinate of triangle.');
   // var y1=prompt('enter y1 co-ordinate of triangle.');
   // var x2=prompt('enter x2 co-ordinate of triangle.');
   // var y2=prompt('enter y2 co-ordinate of triangle.');
   // var x3=prompt('enter x3 co-ordinate of triangle.');
   // var y3=prompt('enter y3 co-ordinate of triangle.');
   // var x=prompt('enter x co-ordinate of starting.');
   // var y= prompt('enter y co-ordinate of starting.');
 
   var x =0;
   var y=0;
 
   console.log(x1,y1,x2,y2,x3,y3)
   //calling for triangle
   drawTriangle(x1,y1,x2,y2,x3,y3,ctx)
  
   //calling for starting point
   drawPoint(x,y,ctx)
   
   //loop
   for(var i=0;i<5500;i++)
   {
     const rand = Math.floor( (Math.random()*6) +1) 
 
     if(rand == 1 || rand == 2)
     {
        x=(x+x1)/2;
        y=(y+y1)/2;
        drawPoint(x,y,ctx);
     }
     else if(rand == 3 || rand == 4)
    {
      x=(x+x2)/2;
      y=(y+y2)/2;
      drawPoint(x,y,ctx);
    }
    else 
    {
     x=(x+x3)/2;
     y=(y+y3)/2;
      drawPoint(x,y,ctx);
    }
 
   }
 
 
})

function drawPoint(x,y,ctx){
   
    //point 
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, Math.PI*2, true);   //x,y //radius // starting angle // end angle 
    ctx.closePath();
    ctx.fillStyle = "#00e1f5";
    ctx.fill();
 }
 function drawTriangle(x1,y1,x2,y2,x3,y3,ctx){
     //triangle
 
     ctx.beginPath();
     ctx.moveTo(x1,y1)        //point A
     ctx.lineTo(x2,y2);   // point B
     ctx.lineTo(x3,y3);    //point C 
     ctx.closePath();
     ctx.lineWidth = 6;
     ctx.stroke();
 
 }