let customer = [{
    name: 'Rahul',
    email: 'rahulroz@gmail.com',
    phone: '123456789',
    no_of_times_shopped: 6,
    purchase_history: [
        {
        date_of_purchase: '01/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    }, 
    {
        date_of_purchase: '02/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ],
    

    },
    {
        date_of_purchase: '03/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    }

],
},
{
    name: 'Anwesha',
    email: 'anwesharitsu@gmail.com',
    phone: '987654321',
    no_of_times_shopped: 3,
    purchase_history: [
        {
        date_of_purchase: '01/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    }, 
    {
        date_of_purchase: '02/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }

    ]
    },

]
},
{
    name: 'Ritsu',
    email: 'zeezan@gmail.com',
    phone: '0147852369',
    no_of_times_shopped: 5,
    purchase_history: [
        {
        date_of_purchase: '01/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    }, 
    {
        date_of_purchase: '02/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    },
    {
        date_of_purchase: '03/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        } 
    ]
    }

]
},
{
    name: 'Dorothea',
    email: 'taylor@gmail.com',
    phone: '58742587',
    no_of_times_shopped: 7,
    purchase_history: [
        {
        date_of_purchase: '01/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    }, 
    {
        date_of_purchase: '02/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    },
    {
        date_of_purchase: '03/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    },
    {
        date_of_purchase: '03/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }
    ]
    }

]
},
{
    name: 'Kiki',
    email: 'zenubuuu@gmail.com',
    phone: '587436914',
    no_of_times_shopped: 6,
    purchase_history: [
        {
        date_of_purchase: '01/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    }, 
    {
        date_of_purchase: '02/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    },
    {
        date_of_purchase: '03/07/2022',
        item_purchase: [
            {
            product_name: 'Samsung Galaxy Y',
            product_price: 12000
        }, 
        {
            product_name: 'Mixer',
            product_price: 4000
        }, 
    ]
    }

]
}


];

//customer details 

console.log('The customers are::');
let customer_details=customer.map(item=>{
    return {
        name:item.name,
        email:item.email,
        phone:item.phone,
        no_of_times_shopped:item.no_of_times_shopped
    }
});
console.log(customer_details);

//customer who shopped more than 5 times
console.log("Customer who shopped more than 5 items are");
customer
.filter(item=>item.no_of_times_shopped>5)
.map(item=>console.log(item.name+" "+item.no_of_times_shopped));

//name and total purchase amount each person did

console.log("Customer name and their total purchasing price");
for(let i=0;i<customer.length;i++){
    console.log(customer[i].name);
    let sum=0;
    for(let j=0;j<customer[i].purchase_history.length;j++){
        for(let k=0;k<customer[i].purchase_history[j].item_purchase.length;k++){

            sum=sum+customer[i].purchase_history[j].item_purchase[k].product_price;
        }
    }
    console.log("Total purchase price", sum);
}


