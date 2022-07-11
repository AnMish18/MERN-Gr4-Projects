const readlineSync = require("readline-sync");
let person={	
	totalSalary: function(){
		let hra;
		let spa;
		hra=0.15*this.basicSalary;
		spa=0.20*this.basicSalary;
		let deduct;
		let total = this.basicSalary + hra + spa;	
		if (total>40000 && total<=50000){
			deduct=0.10*this.basicSalary;
		}
		else if (total>50000 && total<=70000){
			deduct=0.15*this.basicSalary;
		}
		else if (total>70000 && total<=90000){
			deduct = 0.20*this.basicSalary;
		}		
		else if(total>90000){
            deduct=0.30*this.basicSalary;
		}		
		let grossSalary = total - deduct;
		return grossSalary;
	}
};
person.name = readlineSync.question("Enter name : ");
person.email = readlineSync.question("E-mail : ");
person.phoneNumber = readlineSync.question("Enter your number : ");
person.basicSalary = readlineSync.question("Enter salary of employee : ");
person.basicSalary = Number(person.basicSalary);
console.log(`Name : `+person.name);
console.log(`E-mail : `+person.email);
console.log(`Phone Number :`+person.phoneNumber);
console.log(`Basic Salary : `+person.basicSalary);
let total = person.totalSalary();
console.log(`Total Salary : `+total);
