let n=Number(prompt('Enter number of elements'));
let a=new Array();
for(let i=0;i<n;i++){
    let k=Number(prompt(`Enter element ${i}`));
    a.push(k);
}
console.log(a);
let sum=0;
for(let i=0;i<n;i++){
    if(a[i]>0 && a[i]%2==0 &&a[i]%3==0){
        console.log(`${a[i]} `);
        sum+=a[i];
    }
}
console.log('Sum is ' +sum);
