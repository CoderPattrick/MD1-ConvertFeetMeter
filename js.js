// meter = 0.305 * foot
// foot = 3.279 * meter
function toMeter(n){
    let result = n*0.305;
    document.getElementById("meter").value=result;
}
function toFeet(n){
    let result = n*3.279;
    document.getElementById("feet").value=result;
}

