// Code your solution in this file
findMatching(drivers, name){
  let matchedArray = [];
  for(let driver of drivers){
    let changedDriver = driver.toLowerCase();
    if(driver.toLowerCase() == name.toLowerCase()){
      matchedArray.push(driver);
    }
  }
  return matchedArray;
}