export function checkForm(form, setStep) {
    return;
    // let arr = Object.entries(form);
    // arr.forEach(i => {
    //     i[]
    // })
    // const err = [];
    // console.log(arr);
}

export const inputsObj = [
    { title: "שם פרטי", require: true, name: "first_name", type: "text", placeholder: "איך קוראים לך?" },
    { title: "שם משפחה", require: true, name: "last_name", type: "text", placeholder: "מה שם משפחתך?" },
    { title: "כתובת", require: true, name: "address_1", type: "text", placeholder: "רחוב ומספר" },
    { title: "עיר", require: true, name: "city", type: "text", placeholder: "באיזה עיר?" },
    { title: "מספר נייד", require: true, name: "phone", type: "tel", placeholder: "מספר הפלאפון" },
    { title: 'כתובת דוא"ל לצורך אישור הזמנה', require: true, name: "email", type: "email", placeholder: "כתובת תקנית" }
]