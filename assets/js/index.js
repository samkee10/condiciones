function bordergrow() {
    let bordergrow = document.querySelector('#imagen1');
    if (bordergrow.style.border == ''){
        bordergrow.style.border = 'solid 2px red';
    }
    else {
        bordergrow.style.border = '';
    } 
}




function verifyStickers() {
    let input1 = Number(document.querySelector('#sticker1').value);
    let input2 = Number(document.querySelector('#sticker2').value);
    let input3 = Number(document.querySelector('#sticker3').value);
    let total = input1 + input2 + input3 ;
    let text = document.querySelector('#p2');
    if(total <= 10) {text.textContent = `llevas ${total} stikers`}
    else if(total >10) {text.textContent = 'llevas demasiados stikers'}
}  



function password(){
    let select1 = document.querySelector('#select1').value;
    let select2 = document.querySelector('#select2').value;
    let select3 = document.querySelector('#select3').value;
    let total = select1+ select2+ select3;
    let result = document.querySelector('#p');
    if ( total==911) { 
        result.innerHTML='password 1 es correcto'
    }  
    else if( total==714) {
        result.innerHTML='password 2 es correcto'
    }    
    else {
        result.innerHTML='password incorrecto'
    }
}