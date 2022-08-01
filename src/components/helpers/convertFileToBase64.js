function convertFileToBase64(file) {
    return new Promise (resolve  =>{
        let base = null;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            base = reader.result
            resolve(base)
        };
    })
    

}

module.exports = {
    convertFileToBase64: convertFileToBase64,
}