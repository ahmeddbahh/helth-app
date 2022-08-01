var local = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";

function requiredErorr(fieldName) {
    if (local == "ar") return `${fieldName} مطلوب  `;
    return `${fieldName} is required`;
}

function requiredIfErorr(...fileds) {
    if (local == "ar") return `${fileds.toString()} مطلوبين معا `;
    return `${fileds.toString()} is required Together`;
}

function inputError(label) {
    if (local == "ar") return ` ${label} غير صحيح`;
    return `${label} is not valid`;
}

function notExistError(label) {
    if (local == "ar") return `${label}  موجود بالفعل`;
    return `${label} already exists`;
}

function minLengthError(fieldName, min) {
    if (local == "ar") return `${fieldName} لا يمكن ان يكون اقل من  ${min} احرف`;
    return `${fieldName} must be more than ${min} charcters`;
}

function maxLengthError(fieldName, min) {
    if (local == "ar") return `${fieldName} لا يمكن ان يكون اكثر من  ${min} احرف`;
    return `${fieldName} must be less than ${min} charcters`;
}

function minValueError(fieldName, min) {
    if (local == "ar") return `${fieldName} لا يمكن ان يكون اقل من  ${min}`;
    return `${fieldName} must be more than ${min}`;
}

function maxValueError(fieldName, min) {
    if (local == "ar") return `${fieldName} لا يمكن ان يكون اكثر من  ${min}`;
    return `${fieldName} must be less than ${min}`;
}

function alphaError(fieldName) {
    if (local == "ar") return `${fieldName} يجب ان يكون احرف فقط `;
    return `${fieldName} must only be characters`;
}

function englishError(fieldName) {
    if (local == "ar") return `${fieldName} يجب ان يكون احرف انجليزية فقط `;
    return `${fieldName} must only be english characters`;
}

function arabicError(fieldName) {
    if (local == "ar") return `${fieldName} يجب ان يكون احرف عربية فقط `;
    return `${fieldName} must only be arabic characters`;
}

function numericError(fieldName) {
    if (local == "ar") return `${fieldName} يجب ان يكون ارقام فقط `;
    return `${fieldName} must only be numbers`;
}

function alphaNumericError(fieldName) {
    if (local == "ar") return `${fieldName} يجب ان يكون احرف او ارقام فقط `;
    return `${fieldName} must only be characters or numbers`;
}

function sameAsError(fieldName) {
    if (local == "ar") return `${fieldName} ليس متطابق `;
    return `${fieldName} isn't matched`;
}

function htmlTagsError(fieldName) {
    if (local == "ar") return `${fieldName}  لا يجب ان يحتوي علي HTML tags `;
    return `${fieldName} can't contain HTML tags`;
}

function imageTypeError() {
    if (local == "ar") return `امتداد الصورة غير صحيح(.png,.jpg,.jpeg)`;
    return `Image type not valid ,allowed extensions(.png,.jpg,.jpeg)`;
}

function fileTypeError() {
    if (local == "ar") return `امتداد الملف غير صحيح(.png,.jpg,.jpeg,.pdf.docx..)`;
    return `file type not valid ,allowed extensions(.png,.jpg,.jpeg)`;
}

function imageSizeError(size) {
    if (local == "ar") return ` لايجب ان يزيد حجم الصورة عن ${size}MB`;
    return `Image size must be less than ${size}MB`;
}

function fileSizeError(size) {
    if (local == "ar") return ` لايجب ان يزيد حجم الملق عن ${size}MB`;
    return `file size must be less than ${size}MB`;
}

function unauthorizedError() {
    if (local == "ar")
        return `البريد الاكتروني / رقم الموبيل او كلمه المرور غير صحيح`;
    return `Email Adress / Mobile or password is not right`;
}

function notFoundError(label) {
    if (local == "ar") return `${label} غير موجود`;
    return `${label} Not Exist`;
}

module.exports = {
    requiredErorr,
    requiredIfErorr,
    inputError,
    notExistError,
    minLengthError,
    maxLengthError,
    minValueError,
    maxValueError,
    alphaError,
    englishError,
    arabicError,
    numericError,
    alphaNumericError,
    sameAsError,
    htmlTagsError,
    imageTypeError,
    imageSizeError,
    unauthorizedError,
    notFoundError,
    fileTypeError,
    fileSizeError
};