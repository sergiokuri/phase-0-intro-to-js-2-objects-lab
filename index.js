// Write your solution in this file!
const employee = {
name: "Sergio",
streetadress: "15W 16st"

}

function updateEmployeeWithKeyAndValue(object, key, value){
let newemployee = {...object};

newemployee[key] = value;
return newemployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
object[key] = value
return object;

}

function deleteFromEmployeeByKey(object, key, value){
    let deletekey = {...object};
    delete object.key
    return deletekey;
    
    }

function destructivelyDeleteFromEmployeeByKey(object, key, value) {
    delete object.key.value



}