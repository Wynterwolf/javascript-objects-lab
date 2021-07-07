var recipes = {
  cake: "choco",
  pie: "cherry"
};

//returns object with the original key value and new key value pair

const updateObjectWithKeyAndValue = (object, key, value) => 
  Object.assign({}, object, { [key]: value });
  
const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) =>
  Object.assign(object, object, {[key]:value}, {[key]: value });
  
  // also
  
  /* const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) =>
    Object.assign(object, {[key]: value }); */
    
//1) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new obj (it is non-destructive):
  
const deleteFromObjectByKey = (key,object) => {
  var newObj = Object.assign({}, object);
    delete newObj.key;
      return object;
};
  

//2) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair

//3) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:


const destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key];
    return object;
};

var updateObjectWithKeyAndValue = (object, key, value) => Object.assign(object,{key:value})
