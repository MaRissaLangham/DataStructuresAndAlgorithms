//*********************************************
// Title: Introduction to Arrays Lecture Notes
// Date: 12/13/2019
//*********************************************


// Into to Arrays

const strings = ['a', 'b', 'c', 'd']; //4*4 = 16 bytes of storage

//push 
strings.push('e') //Adds 'e' to the end of the array (O(1))

//pop
strings.pop() //Removes the last item (e) in the array (O(1))
strings.pop() //Removes the last item  (d) in the array (O(1))


//unshift
strings.unshift('x') //Adds 'x' to the beginning of the array (O(n))

//splice
strings.splice(2, 0, 'alien') //Adds 'alien' to the 2nd index of the array (O(n))

//Display Array
console.log(strings)


//lookup O(1) (access)
//push O(1) (push, pop)
//insert O(n) (unshift, splice)
//delete O(n) (splice)