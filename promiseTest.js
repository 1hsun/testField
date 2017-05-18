Promise.resolve(value);//same as following
function() => new Promise(function(resolve){
	resolve(value)//return value
}

Promise.reject(error)//same as following
Promise.reject(new Error("BOOM!")).catch(function(error){
    console.error(error);
});