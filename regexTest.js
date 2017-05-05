var num = '0987-933-990',
	name = 'Jon Snow';

function phoneNum(data){
	// return data
	if (data.match(/0[0-9]{3}-[0-9]{3}-[0-9]{3}/))
		return "Awesome :)"
	else 
		return "No Good :("
}
function nameCk(data){
	//初字大寫
	if(data.match(/(^[A-Z]{1}\w+\s[A-Z]{1}\w+)$/))
		return "all due :)"
	else
		return "wrong bro :("
}

// console.log(phoneNum(num))
console.log(nameCk(name))