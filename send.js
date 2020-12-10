document.addEventListener('DOMContentLoaded',function(event){ 
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
   var x =0;
   var y=0;
  var a = parseInt( prompt('Enter number of vertices'))   //number of vertices
  var arr = drawPolygon(ctx,a)
   //calling for starting point
   drawPoint(x,y,ctx)
   
   //loop
   if(arr)       //once we have recevied arr we start drawing points
   { 
    for(var i=0;i<10000;i++)
    {
      
     setTimeout( () => {    
      const rand = Math.floor( (Math.random()*a))              //gives random val between 0-a
       x = (x+arr[0][rand])/2 
       y = (y +arr[1][rand])/2
       drawPoint(x,y,ctx);
     },100)                           //setting delay after eachpoint
      
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
 function drawPolygon(ctx,a){
      
      // to draw polygon of diff vertices we first consider a circle of radius R with coordinate of center as 
      //x =width of screen/2 and y = height of screen/2


     const angle  = (2*Math.PI)/a;       //angle between  each side 
     const radius = 350;                  
     var arrX=[]                        
     var arrY=[]
     var cenX = window.innerWidth/2
     var cenY = window.innerHeight/2
     if(a)
     {
        ctx.beginPath()
        ctx.translate(cenX,cenY);
        ctx.moveTo(radius,0);
        arrX[0] = radius
        arrY[0] = 0
        for (var i = 1; i < a; i++) {
          arrX[i]=   radius*Math.cos(angle*i)                  // formula used rcos(theta),rsin(theta)
          arrY[i]=  radius*Math.sin(angle*i)
          ctx.lineTo(radius*Math.cos(angle*i),radius*Math.sin(angle*i));
        }
        ctx.closePath();
        ctx.lineWidth = 6;
        ctx.stroke();
   
     }

     return [arrX,arrY]            //returing array considering arrX and arrY
      
 }