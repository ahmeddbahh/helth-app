function CheckIfObjectChange(obj1,obj2){
    if (JSON.stringify(obj1) == JSON.stringify(obj2))
        return false 
    return true
}
module.exports = {
    CheckIfObjectChange:CheckIfObjectChange,
}