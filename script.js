// complete the given function

function palindrome(str){
str.join(" ");
const n = str.length;
	var a= n;
	for(let i = 0; i<n; i++){
		if(str.charAt(i) != str.charAt(n)){
			return false;
		}
		n--;
	}
	return true;
}
module.exports = palindrome
