function Fibbonaci(){
    entry = Number(document.getElementById("entry").value) ;
    let num = [1,2];
    let c = 1;
    let x;
    let y;
    do{
        long = num.length - 1
        c++
        if (c<entry && entry!=0){
            x = num[long];
            y = x + num[long - 1];
            num.push(y);
        }
        else if (entry==0){
            window.alert("Please Enter the number of digits required.") ;
            num = null;
            break;
        } 
        else{
            break;
        }
    }while (true);
    document.getElementById("myH1").textContent = num;
    document.getElementById("labl").textContent = `The Series for the number ${entry} is: `;
}
function FibbonaciSingle(){
    entry = Number(document.getElementById("entry2").value) ;
    let num = [1,2];
    let c = 1;
    let x;
    let y;
    do{
        long = num.length - 1
        c++
        if (c<entry && entry!=0){
            x = num[long];
            y = x + num[long - 1];
            num.push(y);
        }
        else if (entry==0){
            window.alert("Please Enter the number.") ;
            num = null;
            break;
        } 
        else{
            break;
        }
    }while (true);
    document.getElementById("myH2").textContent = num[num.length - 1];
    document.getElementById("labl").textContent = `The ${entry}th numbere is: `;
}


