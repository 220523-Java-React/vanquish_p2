export default function CalculatorTest(age, gender, height, weight, neck, waist, hip){

    //IF US, hSCALE = 2.54, wSCALE = 2.205
    //IF METRIC, hSCALE = 1, wScale = 1

    let hScale = 1; let wScale = 1; 
    let m = "kg"; let n = "cm";

    if(measurement == "inlbs") {
        hScale = 2.54;
        wScale = 2.54;
        m = "lbs"; 
        n = "in";
    }

    //BSA - FOR BOTH MALE AND FEMALE
    bsa = Math.sqrt(((height * hScale) * (weight / wScale)) / 3600);
    //BMI - FOR BOTH MALE AND FEMALE USING US SYSTEM
    bmi = (703 * weight) / (height * height);
    //BMI - FOR BOTH MALE AND FEMALE USING METRIC SYSTEM
    bmi = (weight / (height * height)) * 10000;

    if(gender == "male"){
        //IBW - FOR MALE
        ibw = (50 + (0.91 * ((height * hScale) - 152.4))) * wScale;
        //BFP - FOR MALE
        bfp = (495 / (1.0324 - 0.19077 * Math.log10((waist - neck)*hScale) + 0.15456 * Math.log10(height))) - 450;
        //BMR - FOR MALE
        bmr = 66 + (6.3 * (weight / wScale)) + (12.9 * (height / hScale)) - (6.8 * age);
    } else {
        //IBW - FOR FEMALE 
        ibw = (45.5 + (0.91 * ((height * hScale) - 152.4))) * wScale;
        //BFP - FOR FEMALE
        bfp = (495 / (1.29579 - 0.35004 * Math.log10((waist + hip - neck)*hScale) + 0.22100 * Math.log10(height))) - 450;
        //BMR - FOR FEMALE
        bmr = 655 + (4.3 * (weight / wScale)) + (4.7 * (height / hScale)) - (4.7 * age);
    }
    
    fm = (bfp * .01) * weight;
    lm = weight - fm;
    whe = waist / height;
    whi = waist / hip;
    water = (weight * (0.5));

    let userInputArray = {

    }
    return userInputArray;
}

export function BmiReader(gender, bmi){
    //Body Mass Index, Male = Female
    bmiRead = "Based On Your BMI, You Are ";

    if (bmi < 15) bmiRead += "Very Severely Underweight.";
    if (bmi >= 15 && bmi < 16) bmiRead += "Severely Underweight.";
    if (bmi >= 16 && bmi < 18.5) bmiRead += "Underweight.";
    if (bmi >= 18.5 && bmi < 25) bmiRead += "Normal.";
    if (bmi > 25 && bmi < 30) bmiRead += "Overweight.";
    if (bmi >= 30 && bmi < 35) bmiRead += "Moderately Obese.";
    if (bmi >= 35 && bmi < 40) bmiRead += "Severely Obese.";
    if (bmi >= 40) bmiRead += "Very Severely Obese.";

    return <p>bmiRead</p>
}

export function BfCalc(gender, bfp){
    //Body Fat Percentage, Male = Female - 7
    bfRead = "Based On Your Body Fat Percentage, You "

    let mbf = 0;
    if(gender == "male") mbf = 7;

    if (bfp < (14-mbf)) bfRead += "Have Only Essential Fat.";
    if (bfp >= (14-mbf) && bfp < (21-mbf)) bfRead += "Are An Athlete.";
    if (bfp >= (21-mbf) && bfp < (25-mbf)) bfRead += "Are Fit";
    if (bfp >= (25-mbf) && bfp < (32-mbf)) bfRead += "Are Average";
    if (bfp >= (32-mbf)) bfRead += "Are Obese";
}

export function WheReader(whe, gender){
//Waist to Height Ratio, Male = Female / 0.92
    wheRead = "Based On Your Waist To Height Ratio, You Are "

    let mwhe = 1; 
    if(gender == "male") mwhe = 0.92;

    if (whe >= (0.58/mwhe)) wheRead += "Highly Obese.";
    if (whe < (0.58/mwhe) && whe >= (0.54/mwhe)) wheRead += "Extremely Overweight.";
    if (whe < (0.54/mwhe) && whe >= (0.49/mwhe)) wheRead += "Overweight.";
    if (whe < (0.49/mwhe) && whe >= 0.46) wheRead += "Healthy.";
    if (whe < 0.46 && whe >= 0.42) wheRead += "Slender And Healthy.";
    if (whe < 0.42 && whe >= 0.35) wheRead += "Extremely Slim.";
    if (whe < 0.35) wheRead += "Abnormally Slim.";

    return <p>wheRead</p>;
}

export function WhiReader(gender, whi){
    //Waist to Hip Ratio, Male = Female - 0.1
    whiRead = "Your Waist To Hip Ratio Is "

    let mwhi = 0
    if(gender == "male") mwhi = 0.1;

    if (whi < (0.85-mwhi)) whiRead += "Excellent.";
    if (whi >= (0.85-mwhi) && whi < (0.90-mwhi)) whiRead += "Good.";
    if (whi >= (0.90-mwhi) && whi < (0.95-mwhi)) whiRead += "Average.";
    if (whi >= (0.95-mwhi)) whiRead += "Bad.";

    return <p>whiRead</p>;
}

export function ActiveCalc(active, plan, bmr, water){

    let start = bmr * (1.2 + (0.175*(active-1)));
    let need = start * (0.6 + (0.2*(plan-1)));
    let water = water + (12*(active-1));

    return need, water;
}

export function MacroCalc(need){
    carbs = (need * .4) / 4;
    proteins = (need * .3) / 4;
    fats = (need * 0.3) / 9;

    return carbs, proteins, fats;
}

export function vitaminsReader(age){
    
}