const nums = process.argv.slice(2);
//edge cases
if (nums.length === 0){
  return false
}
let newNums = nums.filter(num => num > 0 || typeof num !== 'string')
 

console.log(newNums);

let time = 0;

newNums.forEach((num ,index) => {

  setTimeout(() => {
    process.stdout.write ('\x07')
  }, num * 1000);

})
