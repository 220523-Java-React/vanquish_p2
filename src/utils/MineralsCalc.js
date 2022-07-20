export default function MineralsCalc (age, gender){

    let minarr = {}
    
        if (age < 0.5) {
            minarr = {
                "Choline" : "125 mg",
                "Magnesium" : "30 mg",
                "Cagnesium" : "200 mg",
                "Zinc" : "2 mg",
                "Iron" : "0.27 mg",
                "Copper" : "200 mcg",
                "Selenium" : "20 mcg",
                "Manganese" : "0.6 mg",
                "Phosphorus" : "100 mg",
                "Potassium" : "400 mg",
                "Iodine" : "110 mcg",
                "Chromium" : "0.2 mcg",
                "Molybdenum" : "2 mcg",
                "Flouride" : "0.01 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "1.5 g",
            }
        }
        if (age >= 0.5 & age < 1){
            minarr = {
                "Choline" : "150 mg",
                "Magnesium" : "75 mg",
                "Cagnesium" : "260 mg",
                "Zinc" : "3 mg",
                "Iron" : "11 mg",
                "Copper" : "200 mcg",
                "Selenium" : "15 mcg",
                "Manganese" : "0.003 mg",
                "Phosphorus" : "275 mg",
                "Potassium" : "860 mg",
                "Iodine" : "130 mcg",
                "Chromium" : "5.5 mcg",
                "Molybdenum" : "3 mcg",
                "Flouride" : "0.5 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "1.5 g",
            }
        }
        if (age >= 1 && age < 4){
            minarr = {
                "Choline" : "200 mg",
                "Magnesium" : "80 mg",
                "Cagnesium" : "700 mg",
                "Zinc" : "3 mg",
                "Iron" : "7 mg",
                "Copper" : "340 mcg",
                "Selenium" : "20 mcg",
                "Manganese" : "1.2 mg",
                "Phosphorus" : "460 mg",
                "Potassium" : "2000 mg",
                "Iodine" : "90 mcg",
                "Chromium" : "11 mcg",
                "Molybdenum" : "17 mcg",
                "Flouride" : "0.6 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "1.5 g",
            }
        }
        if (age >= 4 && age < 9){
            minarr = {
                "Choline" : "250 mg",
                "Magnesium" : "130 mg",
                "Cagnesium" : "1000 mg",
                "Zinc" : "5 mg",
                "Iron" : "10 mg",
                "Copper" : "440 mcg",
                "Selenium" : "30 mcg",
                "Manganese" : "1.5 mg",
                "Phosphorus" : "500 mg",
                "Potassium" : "2300 mg",
                "Iodine" : "90 mcg",
                "Chromium" : "15 mcg",
                "Molybdenum" : "22 mcg",
                "Flouride" : "1.1 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "1.9 g",
            }
        }
        if (age >= 9 && age < 14 && gender == 1){
            minarr = {
                "Choline" : "375 mg",
                "Magnesium" : "240 mg",
                "Cagnesium" : "1300 mg",
                "Zinc" : "8 mg",
                "Iron" : "8 mg",
                "Copper" : "700 mcg",
                "Selenium" : "40 mcg",
                "Manganese" : "1.9 mg",
                "Phosphorus" : "1250 mg",
                "Potassium" : "2500 mg",
                "Iodine" : "120 mcg",
                "Chromium" : "25 mcg",
                "Molybdenum" : "34 mcg",
                "Flouride" : "2 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "2.3 g",
            }
        }
        if (age >= 9 && age < 14 && gender == 2){
            minarr = {
                "Choline" : "375 mg",
                "Magnesium" : "240 mg",
                "Cagnesium" : "1300 mg",
                "Zinc" : "8 mg",
                "Iron" : "8 mg",
                "Copper" : "700 mcg",
                "Selenium" : "40 mcg",
                "Manganese" : "1.6 mg",
                "Phosphorus" : "1250 mg",
                "Potassium" : "2300 mg",
                "Iodine" : "120 mcg",
                "Chromium" : "21 mcg",
                "Molybdenum" : "34 mcg",
                "Flouride" : "2 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "2.3 g",
            }
        }
        if (age >= 14 && age < 19 && gender == 1){
            minarr = {
                "Choline" : "550 mg",
                "Magnesium" : "410 mg",
                "Cagnesium" : "1300 mg",
                "Zinc" : "11 mg",
                "Iron" : "11 mg",
                "Copper" : "890 mcg",
                "Selenium" : "55 mcg",
                "Manganese" : "2.2 mg",
                "Phosphorus" : "1250 mg",
                "Potassium" : "3000 mg",
                "Iodine" : "150 mcg",
                "Chromium" : "35 mcg",
                "Molybdenum" : "43 mcg",
                "Flouride" : "3 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "2.3 g",
            }
        }
        if (age >= 14 && age < 19 && gender == 2){
            minarr = {
                "Choline" : "400 mg",
                "Magnesium" : "360 mg",
                "Cagnesium" : "1300 mg",
                "Zinc" : "9 mg",
                "Iron" : "15 mg",
                "Copper" : "890 mcg",
                "Selenium" : "55 mcg",
                "Manganese" : "1.6 mg",
                "Phosphorus" : "1250 mg",
                "Potassium" : "2300 mg",
                "Iodine" : "150 mcg",
                "Chromium" : "24 mcg",
                "Molybdenum" : "43 mcg",
                "Flouride" : "3 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "2.3 g",
            }
        }
        if (age >= 19 && age < 51 && gender == 1){
            minarr = {
                "Choline" : "550 mg",
                "Magnesium" : "420 mg",
                "Cagnesium" : "1000 mg",
                "Zinc" : "11 mg",
                "Iron" : "8 mg",
                "Copper" : "900 mcg",
                "Selenium" : "55 mcg",
                "Manganese" : "2.3 mg",
                "Phosphorus" : "700 mg",
                "Potassium" : "3400 mg",
                "Iodine" : "150 mcg",
                "Chromium" : "35 mcg",
                "Molybdenum" : "45 mcg",
                "Flouride" : "4 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "2.3 g",
            }
        }
        if (age >= 19 && age < 51 && gender == 2){
            minarr = {
                "Choline" : "425 mg",
                "Magnesium" : "320 mg",
                "Cagnesium" : "1000 mg",
                "Zinc" : "8 mg",
                "Iron" : "18 mg",
                "Copper" : "900 mcg",
                "Selenium" : "55 mcg",
                "Manganese" : "1.8 mg",
                "Phosphorus" : "700 mg",
                "Potassium" : "2600 mg",
                "Iodine" : "150 mcg",
                "Chromium" : "25 mcg",
                "Molybdenum" : "45 mcg",
                "Flouride" : "3 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "2.3 g",
            }
        }
        if (age >= 51 && age < 71 && gender == 1){
            minarr = {
                "Choline" : "550 mg",
                "Magnesium" : "420 mg",
                "Cagnesium" : "1000 mg",
                "Zinc" : "11 mg",
                "Iron" : "8 mg",
                "Copper" : "900 mcg",
                "Selenium" : "55 mcg",
                "Manganese" : "2.3 mg",
                "Phosphorus" : "700 mg",
                "Potassium" : "3400 mg",
                "Iodine" : "150 mcg",
                "Chromium" : "30 mcg",
                "Molybdenum" : "45 mcg",
                "Flouride" : "4 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "2 g",
            }
        }
        if (age >= 51 && age < 71 && gender == 2){
            minarr = {
                "Choline" : "425 mg",
                "Magnesium" : "320 mg",
                "Cagnesium" : "1200 mg",
                "Zinc" : "8 mg",
                "Iron" : "8 mg",
                "Copper" : "900 mcg",
                "Selenium" : "55 mcg",
                "Manganese" : "1.8 mg",
                "Phosphorus" : "700 mg",
                "Potassium" : "2600 mg",
                "Iodine" : "150 mcg",
                "Chromium" : "20 mcg",
                "Molybdenum" : "45 mcg",
                "Flouride" : "3 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "2 g",
            }
        }
        if (age >= 71 && gender == 1){
            minarr = {
                "Choline" : "550 mg",
                "Magnesium" : "420 mg",
                "Cagnesium" : "1200 mg",
                "Zinc" : "11 mg",
                "Iron" : "8 mg",
                "Copper" : "900 mcg",
                "Selenium" : "55 mcg",
                "Manganese" : "2.3 mg",
                "Phosphorus" : "700 mg",
                "Potassium" : "3400 mg",
                "Iodine" : "150 mcg",
                "Chromium" : "30 mcg",
                "Molybdenum" : "45 mcg",
                "Flouride" : "4 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "1.8 g",
            }
        }
        if (age >= 71 && gender == 2){
            minarr = {
                "Choline" : "425 mg",
                "Magnesium" : "420 mg",
                "Cagnesium" : "1200 mg",
                "Zinc" : "8 mg",
                "Iron" : "8 mg",
                "Copper" : "900 mcg",
                "Selenium" : "55 mcg",
                "Manganese" : "1.8 mg",
                "Phosphorus" : "700 mg",
                "Potassium" : "2600 mg",
                "Iodine" : "150 mcg",
                "Chromium" : "20 mcg",
                "Molybdenum" : "45 mcg",
                "Flouride" : "3 mg",
                "Sodium" : "2300 mg",
                "Chloride" : "1.8 mg",
            }
        }
    
        return minarr
    }