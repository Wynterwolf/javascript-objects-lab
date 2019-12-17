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
    
  //   1) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
  
const deleteFromObjectByKey = (key,object) => {
    const newObj = Object.assign({}, object);
    return delete newObj.key;
  };

//  2) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:

//   3) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:


const destructivelyDeleteFromObjectByKey = (object, key) => {};
