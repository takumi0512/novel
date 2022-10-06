
let q1 = "";
let q2 = "";
let q3 = "";
let q4 = "";
let q5 = "";
let q6 = "";
let q7 = "";
let q8 = "";
let q9 = "";
let q10 = "";


let q1a = document.getElementsByName("q1")
let q2a = document.getElementsByName("q2")
let q3a = document.getElementsByName("q3")
let q4a = document.getElementsByName("q4")
let q5a = document.getElementsByName("q5")
let q6a = document.getElementsByName("q6")
let q7a = document.getElementsByName("q7")
let q8a = document.getElementsByName("q8")
let q9a = document.getElementsByName("q9")
let q10a = document.getElementsByName("q10")



let btn = document.getElementById("button-last");

btn.addEventListener('click',()=>{


    for(let i=0; i<q1a.length; i++){
        if(q1a[i].checked){
            q1=Number(q1a[i].value);
            break;
        }
    }
    for(let i=0; i<q2a.length; i++){
        if(q2a[i].checked){
            q2=Number(q2a[i].value);
            break;
        }
    }
    for(let i=0; i<q3a.length; i++){
        if(q3a[i].checked){
            q3=Number(q3a[i].value);
            break;
        }
    }
    for(let i=0; i<q4a.length; i++){
        if(q4a[i].checked){
            q4=Number(q4a[i].value);
            break;
        }
    }
    for(let i=0; i<q5a.length; i++){
        if(q5a[i].checked){
            q5=Number(q5a[i].value);
            break;
        }
    }
    for(let i=0; i<q6a.length; i++){
        if(q6a[i].checked){
            q6=Number(q6a[i].value);
            break;
        }
    }
    for(let i=0; i<q7a.length; i++){
        if(q7a[i].checked){
            q7=Number(q7a[i].value);
            break;
        }
    }
    for(let i=0; i<q8a.length; i++){
        if(q8a[i].checked){
            q8=Number(q8a[i].value);
            break;
        }
    }
    for(let i=0; i<q9a.length; i++){
        if(q9a[i].checked){
            q9=Number(q9a[i].value);
            break;
        }
    }
    for(let i=0; i<q10a.length; i++){
        if(q10a[i].checked){
            q10=Number(q10a[i].value);
            break;
        }
    }
    

    let level = q1+q2+q5+q6+q9;
    let move = q3+q7+q8;
    let after = q4+q10;

    sessionStorage.setItem('level',level);
    sessionStorage.setItem('move',move);
    sessionStorage.setItem('after',after);


    if(q1!=="" && q2!=="" && q3!=="" && q4!=="" && q5!=="" && q6!=="" && q7!=="" && q8!=="" && q9!=="" && q10!==""){
        location = "./index2.html"
    } else {
        window.alert("全ての質問に答えてください");
    }

});
