function updateDriverWithKeyAndValue(driver, key, value){
return Object.assign({},driver,{[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
return  Object.assign(driver,{[key]:value});

}
function deleteFromDriverByKey(driver, key){

  const newdriver = Object.assign({}, driver);

  delete newdriver[key];
return newdriver;
}
function destructivelyDeleteFromDriverByKey(driver, key){

  delete driver[key];
  return driver;
}


const driver = {};
console.log(driver)
