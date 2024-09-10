let num = prompt("Eded daxil edin");
let sum = 0;
let i = 100;

while(i < 1000){
    if(i % num === 0 ){
        sum += i;
    }
    i++;
}
console.log("Boluneni olan butun ucreqemli ededlerin cemi : "+ sum);
