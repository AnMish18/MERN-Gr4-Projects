let employee={
    firstname: "Alexis",
    email: "alexis2000@gmail.com",
    phoneNumber:7606085751,
};
employee.details=function(){
    return this.firstname+" has the email "+this.email+" and registered phone number "+this.phoneNumber;
}
console.log(employee.details());
function totalSalary(basicSalary)
{
	let hra, spa;
	var deduct;
	hra = 0.15 * basicSalary;
	spa = 0.20 * basicSalary;
	if (basicSalary>80000)
	{
		deduct=0.30*basicSalary;

	}
	else if (basicSalary>70000)
	{
		deduct=0.20*basicSalary;
	}
	else if (basicSalary>50000)
	{
		deduct=0.15*basicSalary;
	}
    else if(basicSalary>40000){
        deduct=0.10*basicSalary;
    }
	let totGross;
	
	totGross = basicSalary + hra + spa -deduct;					
	return totGross;
}
	let basicSalary = 45000;
	console.log("The basic salary of the employee is", basicSalary);
	console.log("The aggregate salary::",totalSalary(basicSalary));

