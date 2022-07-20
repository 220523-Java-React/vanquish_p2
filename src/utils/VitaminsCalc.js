export default function VitaminsCalc (age, gender){

let vitarr = {}

    if (age < 0.5) {
        vitarr = {
            "Vitamin A" : "400 mcg",
            "Vitamin C" : "40 mg",
            "Vitamin D" : "10 mcg",
            "Vitamin E" : "4 mg",
            "Vitamin K" : "2 mcg",
            "Vitamin B1" : "0.2 mg",
            "Vitamin B2" : "0.3 mg",
            "Vitamin B3" : "2 mg",
            "Vitamin B5" : "1.7 mg",
            "Vitamin B7" : "5 mcg",
            "Vitamin B6" : "0.1 mg",
            "Vitamin B12" : "0.4 mcg",
            "Vitamin B9" : "65 mcg",
        }
    }
    if (age >= 0.5 & age < 1){
        vitarr = {
            "Vitamin A" : "500 mcg",
            "Vitamin C" : "50 mg",
            "Vitamin D" : "10 mcg",
            "Vitamin E" : "5 mg",
            "Vitamin K" : "2.5 mcg",
            "Vitamin B1" : "0.3 mg",
            "Vitamin B2" : "0.4 mg",
            "Vitamin B3" : "4 mg",
            "Vitamin B5" : "1.8 mg",
            "Vitamin B7" : "6 mcg",
            "Vitamin B6" : "0.3 mg",
            "Vitamin B12" : "0.5 mcg",
            "Vitamin B9" : "80 mcg",
        }
    }
    if (age >= 1 && age < 4){
        vitarr = {
            "Vitamin A" : "300 mcg",
            "Vitamin C" : "15 mg",
            "Vitamin D" : "15 mcg",
            "Vitamin E" : "6 mg",
            "Vitamin K" : "30 mcg",
            "Vitamin B1" : "0.5 mg",
            "Vitamin B2" : "0.5 mg",
            "Vitamin B3" : "6 mg",
            "Vitamin B5" : "2 mg",
            "Vitamin B7" : "8 mcg",
            "Vitamin B6" : "0.5 mg",
            "Vitamin B12" : "0.9 mcg",
            "Vitamin B9" : "150 mcg",
        }
    }
    if (age >= 4 && age < 9){
        vitarr = {
            "Vitamin A" : "400 mcg",
            "Vitamin C" : "25 mg",
            "Vitamin D" : "15 mcg",
            "Vitamin E" : "7 mg",
            "Vitamin K" : "55 mcg",
            "Vitamin B1" : "0.6 mg",
            "Vitamin B2" : "0.6 mg",
            "Vitamin B3" : "8 mg",
            "Vitamin B5" : "3 mg",
            "Vitamin B7" : "12 mcg",
            "Vitamin B6" : "0.6 mg",
            "Vitamin B12" : "1.2 mcg",
            "Vitamin B9" : "200 mcg",
        }
    }
    if (age >= 9 && age < 14 && gender == 1){
        vitarr = {
            "Vitamin A" : "600 mcg",
            "Vitamin C" : "45 mg",
            "Vitamin D" : "15 mcg",
            "Vitamin E" : "11 mg",
            "Vitamin K" : "60 mcg",
            "Vitamin B1" : "0.9 mg",
            "Vitamin B2" : "0.9 mg",
            "Vitamin B3" : "12 mg",
            "Vitamin B5" : "4 mg",
            "Vitamin B7" : "20 mcg",
            "Vitamin B6" : "1 mg",
            "Vitamin B12" : "1.8 mcg",
            "Vitamin B9" : "400 mcg",
        }
    }
    if (age >= 9 && age < 14 && gender == 2){
        vitarr = {
            "Vitamin A" : "600 mcg",
            "Vitamin C" : "45 mg",
            "Vitamin D" : "15 mcg",
            "Vitamin E" : "11 mg",
            "Vitamin K" : "60 mcg",
            "Vitamin B1" : "0.9 mg",
            "Vitamin B2" : "0.9 mg",
            "Vitamin B3" : "12 mg",
            "Vitamin B5" : "4 mg",
            "Vitamin B7" : "20 mcg",
            "Vitamin B6" : "1 mg",
            "Vitamin B12" : "1.8 mcg",
            "Vitamin B9" : "400 mcg",
        }
    }
    if (age >= 14 && age < 19 && gender == 1){
        vitarr = {
            "Vitamin A" : "900 mcg",
            "Vitamin C" : "75 mg",
            "Vitamin D" : "15 mcg",
            "Vitamin E" : "15 mg",
            "Vitamin K" : "75 mcg",
            "Vitamin B1" : "1.2 mg",
            "Vitamin B2" : "1.3 mg",
            "Vitamin B3" : "16 mg",
            "Vitamin B5" : "5 mg",
            "Vitamin B7" : "25 mcg",
            "Vitamin B6" : "1.3 mg",
            "Vitamin B12" : "2.4 mcg",
            "Vitamin B9" : "400 mcg",
        }
    }
    if (age >= 14 && age < 19 && gender == 2){
        vitarr = {
            "Vitamin A" : "700 mcg",
            "Vitamin C" : "65 mg",
            "Vitamin D" : "15 mcg",
            "Vitamin E" : "15 mg",
            "Vitamin K" : "75 mcg",
            "Vitamin B1" : "1 mg",
            "Vitamin B2" : "1 mg",
            "Vitamin B3" : "14 mg",
            "Vitamin B5" : "5 mg",
            "Vitamin B7" : "25 mcg",
            "Vitamin B6" : "1.2 mg",
            "Vitamin B12" : "2.4 mcg",
            "Vitamin B9" : "400 mcg",
        }
    }
    if (age >= 19 && age < 51 && gender == 1){
        vitarr = {
            "Vitamin A" : "900 mcg",
            "Vitamin C" : "90 mg",
            "Vitamin D" : "15 mcg",
            "Vitamin E" : "15 mg",
            "Vitamin K" : "120 mcg",
            "Vitamin B1" : "1.2 mg",
            "Vitamin B2" : "1.3 mg",
            "Vitamin B3" : "16 mg",
            "Vitamin B5" : "5 mg",
            "Vitamin B7" : "30 mcg",
            "Vitamin B6" : "1.3 mg",
            "Vitamin B12" : "2.4 mcg",
            "Vitamin B9" : "400 mcg",
        }
    }
    if (age >= 19 && age < 51 && gender == 2){
        vitarr = {
            "Vitamin A" : "700 mcg",
            "Vitamin C" : "75 mg",
            "Vitamin D" : "15 mcg",
            "Vitamin E" : "15 mg",
            "Vitamin K" : "90 mcg",
            "Vitamin B1" : "1.1 mg",
            "Vitamin B2" : "1.1 mg",
            "Vitamin B3" : "14 mg",
            "Vitamin B5" : "5 mg",
            "Vitamin B7" : "30 mcg",
            "Vitamin B6" : "1.3 mg",
            "Vitamin B12" : "2.4 mcg",
            "Vitamin B9" : "400 mcg",
        }
    }
    if (age >= 51 && age < 71 && gender == 1){
        vitarr = {
            "Vitamin A" : "900 mcg",
            "Vitamin C" : "90 mg",
            "Vitamin D" : "15 mcg",
            "Vitamin E" : "15 mg",
            "Vitamin K" : "120 mcg",
            "Vitamin B1" : "1.2 mg",
            "Vitamin B2" : "1.3 mg",
            "Vitamin B3" : "16 mg",
            "Vitamin B5" : "5 mg",
            "Vitamin B7" : "30 mcg",
            "Vitamin B6" : "1.7 mg",
            "Vitamin B12" : "2.4 mcg",
            "Vitamin B9" : "400 mcg",
        }
    }
    if (age >= 51 && age < 71 && gender == 2){
        vitarr = {
            "Vitamin A" : "700 mcg",
            "Vitamin C" : "75 mg",
            "Vitamin D" : "15 mcg",
            "Vitamin E" : "15 mg",
            "Vitamin K" : "90 mcg",
            "Vitamin B1" : "1.1 mg",
            "Vitamin B2" : "1.1 mg",
            "Vitamin B3" : "14 mg",
            "Vitamin B5" : "5 mg",
            "Vitamin B7" : "30 mcg",
            "Vitamin B6" : "1.5 mg",
            "Vitamin B12" : "2.4 mcg",
            "Vitamin B9" : "400 mcg",
        }
    }
    if (age >= 71 && gender == 1){
        vitarr = {
            "Vitamin A" : "900 mcg",
            "Vitamin C" : "90 mg",
            "Vitamin D" : "20 mcg",
            "Vitamin E" : "15 mg",
            "Vitamin K" : "120 mcg",
            "Vitamin B1" : "1.2 mg",
            "Vitamin B2" : "1.3 mg",
            "Vitamin B3" : "16 mg",
            "Vitamin B5" : "5 mg",
            "Vitamin B7" : "30 mcg",
            "Vitamin B6" : "1.7 mg",
            "Vitamin B12" : "2.4 mcg",
            "Vitamin B9" : "400 mcg",
        }
    }
    if (age >= 71 && gender == 2){
        vitarr = {
            "Vitamin A" : "700 mcg",
            "Vitamin C" : "75 mg",
            "Vitamin D" : "20 mcg",
            "Vitamin E" : "15 mg",
            "Vitamin K" : "90 mcg",
            "Vitamin B1" : "1.1 mg",
            "Vitamin B2" : "1.1 mg",
            "Vitamin B3" : "14 mg",
            "Vitamin B5" : "5 mg",
            "Vitamin B7" : "30 mcg",
            "Vitamin B6" : "1.5 mg",
            "Vitamin B12" : "2.4 mcg",
            "Vitamin B9" : "400 mcg",
        }
    }

    return vitarr
}