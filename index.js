var recipes = {
  cake: "choco",
  pie: "cherry"
};

const updateObjectWithKeyAndValue = (object, key, value) => 
  Object.assign({}, object, { [key]: value });
  
const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) =>
  Object.assign();
  
const destructivelyDeleteFromObjectByKey = (object, key) => {};
