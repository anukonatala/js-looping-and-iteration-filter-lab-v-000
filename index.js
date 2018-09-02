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

fuzzyMatch(drivers, matchString){
  let matchedArray = [];
  for(let driver of drivers){
    let partString = driver.slice(0,2).toLowerCase();
    if(partString == matchString.toLowerCase()){
      matchedArray.push(driver);
    }
  }
  return matchedArray;
}