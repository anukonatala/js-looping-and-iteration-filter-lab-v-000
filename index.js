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

function fuzzyMatch(drivers, matchString){
  let matchedArray = [];
  for(let driver of drivers){
    let partString = driver.slice(0,2);
    if(partString == matchString){
      matchedArray.push(driver);
    }
  }
  return matchedArray;
}

function matchName(drivers, name){
  let matchedArray = [];
  for(let driver in drivers){
    let partString = driver.slice(0,2);
    if(partString == matchString){
      matchedArray.push(driver);
    }
  }
  return matchedArray;
}