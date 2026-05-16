const reverseString = str => {
// kugn mag reverse ka string, kailangan sha e sulod una sa array, gamit ta split para ma sulod sha sa array nya mabungkag sha kada characters 
// din reverse, e join daun sha balik
  let reversed = str.split("").reverse().join("");

  return reversed;
}


console.log(reverseString("Greetings from Earth"));