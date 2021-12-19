let ball=document.getElementById('ball');
let t=ball.style.top;
let b=ball.style.bottom;
let l=ball.style.left;
let r=ball.style.right;

let t_val=0;

let l_val=0;

ball.style.transition="0.9s"

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {

        // up arrow
        

        
        if(t_val>0){
            t_val=t_val-5;
            ball.style.marginTop=t_val+"vh";

        }
        
        
    }
    else if (e.keyCode == '40') {
        // down arrow
        

        if(t_val<70){
            t_val=t_val+5;

            ball.style.marginTop=t_val+"vh";

        }

       

        
        
        
        
        
    }
    else if (e.keyCode == '37') {

        
        if(l_val>0){
            l_val=l_val-5;
            ball.style.marginLeft=l_val+"vw";
           
        }
        
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow

      
       if(l_val<84){
           l_val=l_val+5;
           ball.style.marginLeft=l_val+"vw";

       }
       
       
    }

}

