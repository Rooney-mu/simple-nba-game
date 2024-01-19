let news=document.getElementById('new');

function sgOne(){

    let sgOne=document.getElementById('player1');
sgOne.innerHTML='JORDAN';
}
function sgTwo(){

    let sgTwo=document.getElementById('player1');
sgTwo.innerHTML='KOBE';
}
function sgThre(){

    let sgThre=document.getElementById('player1');
sgThre.innerHTML='KLAY';
}
function sgFour(){

    let sgFour=document.getElementById('player1');
sgFour.innerHTML='HARDEN';
}
function sgFive(){

    let sgFive=document.getElementById('player1');
sgFive.innerHTML='WADE';
}
function pfOne(){

    let pfOne=document.getElementById('player2');
pfOne.innerHTML='DUNCAN';
}
function pfTwo(){

    let pfTwo=document.getElementById('player2');
pfTwo.innerHTML='BARKLEY';
}
function pfThre(){

    let pfThre=document.getElementById('player2');
pfThre.innerHTML='RODMAN';
}
function pfFour(){

    let pfFour=document.getElementById('player2');
pfFour.innerHTML='NOWITZKI';
}
function pfFive(){

    let pfFive=document.getElementById('player2');
pfFive.innerHTML='GIANNIS';
}
function pgOne(){

    let pgOne=document.getElementById('player3');
pgOne.innerHTML='PAUL';
}
function pgTwo(){

    let pgTwo=document.getElementById('player3');
pgTwo.innerHTML='LILLARD';
}
function pgThre(){

    let pgThre=document.getElementById('player3');
pgThre.innerHTML='KYRIE';
}
function pgFour(){

    let pgFour=document.getElementById('player3');
pgFour.innerHTML='MAGIC';
}
function pgFive(){

    let pgFive=document.getElementById('player3');
pgFive.innerHTML='CURRY';
}
function sfOne(){

    let sfOne=document.getElementById('player4');
sfOne.innerHTML='BUTLER';
}
function sfTwo(){

    let sfTwo=document.getElementById('player4');
sfTwo.innerHTML='DURANT';
}
function sfThre(){

    let sfThre=document.getElementById('player4');
sfThre.innerHTML='PIPPEN';
}
function sfFour(){

    let sfFour=document.getElementById('player4');
sfFour.innerHTML='LARRY';
}
function sfFive(){

    let sfFive=document.getElementById('player4');
sfFive.innerHTML='JAMES';
}function ceOne(){

    let ceOne=document.getElementById('player5');
ceOne.innerHTML='JOEL';
}
function ceTwo(){

    let ceTwo=document.getElementById('player5');
ceTwo.innerHTML='JOKIC';
}
function ceThre(){

    let ceThre=document.getElementById('player5');
ceThre.innerHTML='KAREEM';
}
function ceFour(){

    let ceFour=document.getElementById('player5');
ceFour.innerHTML='RUSSELL';
}
function ceFive(){

    let ceFive=document.getElementById('player5');
ceFive.innerHTML='WALTON';
}
function sgSix(){
    let selector=Math.floor(Math.random()*5);
    if(selector>=0&&selector<=1){
        let six=document.getElementById('player6');
        six.innerHTML='jordan';
    }else if(selector<=2&&selector>=1){
        let sixO=document.getElementById('player6');
        sixO.innerHTML='KOBE';
    } else if(selector<=3&&selector>=2){
        let six1=document.getElementById('player6');
        six1.innerHTML='klay';
    }else if(selector<=4&&selector>=3){
        let six2=document.getElementById('player6');
        six2.innerHTML='HARDEN';
    }else if(selector<=5&&selector>=4){
        let six3=document.getElementById('player6');
        six3.innerHTML='WADE';
    }
    return sgSix();
}
function PfSev(){
    let selector=Math.floor(Math.random()*5);
    if(selector>=0&&selector<=1){
        let sev=document.getElementById('player7');
        sev.innerHTML='DUNCAN';
    }else if(selector<=2&&selector>=1){
        let sevO=document.getElementById('player7');
        sevO.innerHTML='BARKLEY';
    } else if(selector<=3&&selector>=2){
        let sev1=document.getElementById('player7');
        sev1.innerHTML='RODMAN';
    }else if(selector<=4&&selector>=3){
        let sev2=document.getElementById('player7');
        sev2.innerHTML='NOWITZKI';
    }else if(selector<=5&&selector>=4){
        let sev3=document.getElementById('player7');
        sev3.innerHTML='GIANNIS';
    }
    return PfSev();
}
function pgEig(){
    let selector=Math.floor(Math.random()*5);
    if(selector>=0&&selector<=1){
        let Eig=document.getElementById('player8')
      Eig.innerHTML='PAUL';
    }else if(selector<=2&&selector>=1){
        let EigO=document.getElementById('player8');
        EigO.innerHTML='LILLARD';
    } else if(selector<=3&&selector>=2){
        let Eig1=document.getElementById('player8');
        Eig1.innerHTML='KYRIE';
    }else if(selector<=4&&selector>=3){
        let Eig2=document.getElementById('player8');
        Eig2.innerHTML='MAGIC';
    }else if(selector<=5&&selector>=4){
        let Eig3=document.getElementById('player8');
        Eig3.innerHTML='CURRY';
    }

    return pgEig();
}
function sfNine(){
    let selector=Math.floor(Math.random()*5);
    if(selector>=0&&selector<=1){
        let nine=document.getElementById('player9')
      nine.innerHTML='BUTLER';
    }else if(selector<=2&&selector>=1){
        let nineO=document.getElementById('player9');
        nineO.innerHTML='DURANT';
    } else if(selector<=3&&selector>=2){
        let nine1=document.getElementById('player9');
        nine1.innerHTML='PIPPEN';
    }else if(selector<=4&&selector>=3){
        let nine2=document.getElementById('player9');
        nine2.innerHTML='LARRY';
    }else if(selector<=5&&selector>=4){
        let nine3=document.getElementById('player9');
        nine3.innerHTML='JAMES';
    }
    
    return sfNine();
}
function ceTen(){
    let selector=Math.floor(Math.random()*5);
    if(selector>=0&&selector<=1){
        let ten=document.getElementById('player10')
      ten.innerHTML='JOEL';
    }else if(selector<=2&&selector>=1){
        let tenO=document.getElementById('player10');
        tenO.innerHTML='JOKIC';
    } else if(selector<=3&&selector>=2){
        let ten1=document.getElementById('player10');
        ten1.innerHTML='KAREEM';
    }else if(selector<=4&&selector>=3){
        let ten2=document.getElementById('player10');
        ten2.innerHTML='RUSSEL';
    }else if(selector<=5&&selector>=4){
        let ten3=document.getElementById('player10');
        ten3.innerHTML='WALTON';
    }
    
    
    return ceTen();
}
if (value>=20){
    news.innerHTML="you win";

}