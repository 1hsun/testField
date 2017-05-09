var str = "exactly"

//to keep system unstuck,use callback async
function main(data,cb){
	cb(data)
}
function print(input){
	console.log(input)
}
main(str,print)