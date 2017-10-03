// TODO: add your solutions here!
// display combination of 2 arguments  //11

function combine(x, y){

	var adding= x+y;
	console.log(adding);
}

combine("hello ", "world");






// display an argument phrase n times //22
function fun(a,b){

	for(var i=0; i<b; i++){
		console.log(a);

	}
}
fun(2,3);


//building power function //33

function power(a, b){

	console.log(a**b);
}

//function 4 Pythagorean //44
function areaOfCircle(r){
	var r=3.1415926;
	console.log((r**2)*r);
}
areaOfCircle(3)
//Pythagorean Theorem: a2 + b2 = c2 //55

function pythagorean(a,b){
	var c= (a*a+b*b);
	console.log(c);

}
pythagorean(5,6);


//Is X Evenly Divisible by Y ? //66

function isEven(x,y){
	if(x %y === 0){
		console.log("hello my world");
	}
}
isEven(24,8);

//count the number of occurence//77

var vowel=[a,e,i,o,u,y];


function isItvowel(letter){
	var count=0;
	for(var i=0; i<vowel.length; i++){
		if(letter[i]=== "a", "e", "i","o","u","y"){
			count++;
	}
}



var upAndDown=(count.toUpperCase() +count.toLowercase(0));

console.log(upAndDown);

//does wdi contain //88

var find=["9","Bart","tail","11","wdi"];

	function findWdi(arr){
		for(var i=0; i<find.length; i++ ){
			if(arr[i]= "wdi"){
				return true;
			}else{
				return false;
			}
		}
	}


// find the longest word 99
var word=indLongestWord("The rain in Spain falls mainly on the plain"); // => "mainly"
findLongestWord("abcdefghijkl"); // => "abcdefghijkl"
		
function findLongestWord(sentence) {
	var longestLength = -1;
	var longestIndex = -1;
	var letter = sentence.split(" ");
	for (var i = 0; i < letter.length; i++) {
		if (letter[i].length > longestLength) {
			longestLength = letter[i].length;
			longestIndex = i;
		}
	}
	return letter[i];
}
// make a triangle 10
function printTriangle(star){
	for(var i = 1; i <= star; i++){
		var stars = '';
		for(var a = 0; a < i; a++){
			stars += '*';
		}
		console.log(stars);
	}
};
