//creation of factory functions
function item_detail(ip_product_name,ip_product_price){
    return{
        product_name: ip_product_name,
        product_price: ip_product_price 
    }
    
}
function purchase(ip_dop,ip_item_details,ip_no_of_products){
    return{
        date_of_purchase: ip_dop,
        item_detail: ip_item_details,
        no_of_products: ip_no_of_products
    }
}
function customer(ip_name, ip_email,ip_phone,ip_shop_freq,ip_purchase){
    return{
        name: ip_name,
        email: ip_email,
        phone: ip_phone,
        no_of_times_shopped: ip_shop_freq,
        purchase: ip_purchase
    }
}
//input
let customer_list=[];
for(let i=0;i<5;i++){
    let name = prompt(`For customer number ${i+1}\nEnter name`);
    let email = prompt(`Enter email-id`);
    let phone = prompt(`Enter phone number`);
    let no_of_times_shopped = Number(prompt(`Enter number of times ${name} has shopped`));
    let purchase_list=[];
    for(let j=0;j<no_of_times_shopped;j++){
        let date_of_purchase = prompt(`For purchase ${j+1}, enter date of purchase`);
        let no_of_products = Number(prompt(`For purchase ${j+1}, enter number of products purchased`));
        let item_list=[];
        for(let k=0;k<no_of_products;k++){
            let product_name = prompt(`Enter product name ${k+1}`);
            let product_price = Number(prompt(`Enter price of ${product_name}`));
            item_list.push(item_detail(product_name,product_price));
        
        }
        purchase_list.push(purchase(date_of_purchase,item_list,no_of_products));
    }
    customer_list.push(customer(name,email,phone,no_of_times_shopped,purchase_list));
}

console.log(customer_list);

//name of customers who have shopped more than 5 times
console.log(`\nNames of customers who have shopped more than 5 times are: \n`);
for(i=0;i<5;i++){
    if(customer_list[i].no_of_times_shopped>5){
        console.log(customer_list[i].name);
    }
}

console.log(`The total shopping each customer has done is:\n `);
for(i=0;i<5;i++){
    let sum = 0;
    console.log(`\n${customer_list[i].name}: `);
    for(j=0;j<customer_list[i].no_of_times_shopped;j++){
        for(k=0;k<customer_list[i].purchase[j].no_of_products;k++){
            sum = sum + customer_list[i].purchase[j].item_detail[k].product_price;
        }
    }
    console.log(sum);
}