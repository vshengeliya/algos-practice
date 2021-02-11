/*

isAnagram(s1, s2) (returns bool)

Examples:
'abc' , 'bca' -> TRUE
'T-shirt' , 'thirst' -> TRUE
'dormitory' , 'Dirty Room' -> TRUE
'Tom Marvolo Riddle' , 'I am Lord Voldemort' -> TRUE

// create helper function that cleans up the str
// pass those 2 strs to an anagram function
// return true or false 

*/

function anagram(str1, str2){
	
	return clean(str1) === clean(str2)
}

function clean(str){
	
	 return str
	.replace(/[^\w]/g, '')
	.toLowerCase()
	.split('')
	.sort()
	.join('')
};

console.log(anagram('Tom Marvolo Riddle' , 'Lord Voldemort'))
/*

max_anagrams(words) (returns int)


['abc', 'bca', 'aab', 'baa', 'cab'] -> 3
['abc', 'bca', 'aab', 'baa'] -> 2
['abc', 'aab', 'baa'] -> 2
['abc', 'baa'] -> 1
['a', 'b', 'c'] -> 1

//create a loop that check if the str in a loop has an anagram
// if yes - increment the number of anagrams
// else  - do nothing
// if there is no anamgrams in array return 1



['abc', 'abc', 'aab', 'aab', 'abc']

*/

function maxAnagrams(arr) {
	
	let max = 0;
	
	let cleanArray =[];
	
	for (str of arr){
		cleanArray.push(clean(str))
	};
	
	let obj = {};
	
	for (str of cleanArray){
		if(!obj[str]){
			obj[str] = 1;
		} else{
			obj[str]++;
		}
	}
	
	for (let str in obj){
		if(obj[str] > max){
			max = obj[str]
		}
	}
	
  return max
	
}

console.log(maxAnagrams(['abc', 'bca', 'aab', 'baa', 'cab']))