// Code your solution in this file
function findMatching(drivers, name){
  let matchedArray = [];
  for(let driver of drivers){
    let changedDriver = driver.toLowerCase();
    if(changedDriver == name.toLowerCase()){
      matchedArray.push(driver);
    }
  }
  return matchedArray;
}