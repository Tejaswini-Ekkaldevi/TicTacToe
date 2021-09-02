let cnt = 1;
function Gameboard(current) {

  
    if(cnt<=9){
    if(cnt%2 == 0){
        document.getElementById(current.id).innerHTML="O";
    }
    else{
        document.getElementById(current.id).innerHTML="X";
    }
    cnt++;
    if(checkWinner()){
        if((get('div1')=='X' && get('div2')=='X' && get('div3')=='X') || 
            (get('div1')=='X' && get('div4')=='X' && get('div7')=='X') ||

            (get('div1')=='X' && get('div5')=='X' && get('div9')=='X') || 
            (get('div2')=='X' && get('div5')=='X' && get('div8')=='X') ||

            (get('div3')=='X' && get('div6')=='X' && get('div9')=='X') || 
            (get('div3')=='X' && get('div5')=='X' && get('div7')=='X') ||

            (get('div4')=='X' && get('div5')=='X' && get('div6')=='X') || 
            (get('div7')=='X' && get('div8')=='X' && get('div9')=='X'))
        {
            console.log("X Won The Game");
        }
        else{
            console.log("O Won The Game");
        }
    }
}
    else{
        alert("Match Over!");
        reset();
    }

}

function reset(){
    for(let i=1;i<=9;i++)
    {
        document.getElementById('div'+i).innerHTML="";

    }
}

function checkWinner(){
    if((get('div1')!='' && get('div2')!='' && get('div3')!='' && get('div1')==get('div2')  && get('div2') == get('div3'))   ||
        (get('div1')!='' && get('div4')!='' && get('div7')!='' && get('div1')==get('div4')  && get('div4') == get('div7'))  ||
        (get('div2')!='' && get('div5')!='' && get('div8')!='' && get('div2')==get('div5')  && get('div5') == get('div8'))  ||
        (get('div3')!='' && get('div6')!='' && get('div9')!='' && get('div3')==get('div6')  && get('div6') == get('div9'))  ||

        (get('div1')!='' && get('div5')!='' && get('div9')!='' && get('div1')==get('div5')  && get('div5') == get('div9'))  ||
        (get('div3')!='' && get('div5')!='' && get('div7')!='' && get('div3')==get('div5')  && get('div5') == get('div7'))  ||

        (get('div4')!='' && get('div5')!='' && get('div6')!='' && get('div4')==get('div5')  && get('div5') == get('div6'))  ||
        (get('div7')!='' && get('div8')!='' && get('div9')!='' && get('div7')==get('div8')  && get('div8') == get('div9')))
        {    
        return true;
    }



}
function get(div){
    return document.getElementById(div).innerHTML;
}
