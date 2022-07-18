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

//IBW - FOR MALE
ibw = (50 + (0.91 * ((height * hScale) - 152.4))) * wScale;

//IBW - FOR FEMALE 
ibw = (45.5 + (0.91 * ((height * hScale) - 152.4))) * wScale;

//US 
bmi = (703 * weight) / (height * height);
//METRIC
bmi = (weight / (height * height)) * 10000;

//BFP - FOR MALE
bfp = (495 / (1.0324 - 0.19077 * Math.log10((waist - neck)*hScale) + 0.15456 * Math.log10(height))) - 450;

//BFP - FOR FEMALE
bfp = (495 / (1.29579 - 0.35004 * Math.log10((waist + hip - neck)*hScale) + 0.22100 * Math.log10(height))) - 450;

fm = (bfp * .01) * weight;
lm = weight - fm;
whe = waist / height;
whi = waist / hip;

//BMR - FOR MALE
bmr = 66 + (6.3 * (weight / wScale)) + (12.9 * (height / hScale)) - (6.8 * age);

//BMR - FOR FEMALE
bmr = 655 + (4.3 * (weight / wScale)) + (4.7 * (height / hScale)) - (4.7 * age);

water = (weight * (0.5));