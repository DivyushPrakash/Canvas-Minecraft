var canvas=new fabric.Canvas("myCanvas");
var steveXposition=10;
var steveYposition=10;
var steve="";
 var block="";

function setupsteve(){
    fabric.Image.fromURL("player.png",function(Img){
      steve=Img;
      steve.scaleToWidth(150);  
      steve.scaleToHeight(150);
      steve.set({
          top:steveYposition,
          left:steveXposition
      });
      canvas.add(steve);
    });
}

function setupblocks(blockimagevariable){
fabric.Image.fromURL(blockimagevariable,function(Img){
    block=Img;
    block.scaleToWidth(30);
    block.scaleToHeight(30);
    block.set({
top:steveXposition,
left:steveYposition
    });
    canvas.add(block)
});

}

window.addEventListener("keydown",drawblocks);
 function drawblocks(e){
     pressedkeycode=e.keyCode;
     console.log(pressedkeycode);


     if(pressedkeycode=="38"){
         up();
         console.log("up");
     }

     if(pressedkeycode=="40"){
        down();
        console.log("down");
    }

    if(pressedkeycode=="37"){
        left();
        console.log("left");
    }

    if(pressedkeycode=="39"){
        right();
        console.log("right");
    }

    if(pressedkeycode=="81"){
        setupblocks("Q.jpg");
        console.log("Q pressed");
    }

    if(pressedkeycode=="71"){
        setupblocks("G.png");
        console.log("G pressed");
    }

    if(pressedkeycode=="68"){
        setupblocks("D.png");
        console.log("D pressed");
    }

    if(pressedkeycode=="89"){
        setupblocks("W.jpg");
        console.log("W pressed");
    }

    if(pressedkeycode=="89"){
        setupblocks("Y.png");
        console.log("Y pressed");
    }

    if(pressedkeycode=="81"){
        setupblocks("Q.jpg");
        console.log("Q pressed");
    }

    if(pressedkeycode=="66"){
        setupblocks("B.jpg");
        console.log("B pressed");
    }

    if(pressedkeycode=="65"){
        setupblocks("A.png");
        console.log("A pressed");
    }

    if(pressedkeycode=="84"){
        setupblocks("T.jpg");
        console.log("T pressed");
    }
 }

 function up(){
    if(steveYposition>0){
        steveYposition=steveYposition-10;
        console.log("X="+steveXposition+",Y="+steveYposition);
        canvas.remove(steve);
        setupsteve();

    } 
 }

 function down(){
    if(steveYposition<600){
        steveYposition=steveYposition+10;
        console.log("X="+steveXposition+",Y="+steveYposition);
        canvas.remove(steve);
        setupsteve();
        
    } 
 }

 function left(){
    if(steveXposition>0){
        steveXposition=steveXposition-10;
        console.log("X="+steveXposition+",Y="+steveYposition);
        canvas.remove(steve);
        setupsteve();
        
    } 
 }

 function right(){
    if(steveXposition<780){
        steveXposition=steveXposition+10;
        console.log("X="+steveXposition+",Y="+steveYposition);
        canvas.remove(steve);
        setupsteve();
        
    } 
 }