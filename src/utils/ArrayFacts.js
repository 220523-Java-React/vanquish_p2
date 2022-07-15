//Alternative object arrays

const minerals = [
    {
        name: "Choline",
        description: "Choline is an essential nutrient that is naturally present in some foods and available as a dietary supplement. Choline is a source of methyl groups needed for many steps in metabolism.",
        url: "https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/"
    },
    {
        name: "Magnesium",
        description: "Magnesium is an important part of the more than 300 enzymes found in your body. These enzymes are involved in processes that help to regulate many bodily functions, including the production of energy, body protein and muscle contractions.",
        url: "https://www.eatright.org/food/vitamins-and-supplements/types-of-vitamins-and-nutrients/magnesium"
    },
    {
        name: "Calcium",
        description: "Calcium is a mineral your body needs to build and maintain strong bones and to carry out many important functions. Calcium is the most abundant mineral in the body.",
        url: "https://ods.od.nih.gov/factsheets/Calcium-Consumer/"
    },
    {
        name: "Zinc",
        description: "Zinc, a nutrient found throughout your body, helps your immune system and metabolism function. Zinc is also important to wound healing and your sense of taste and smell.",
        url: "https://www.mayoclinic.org/drugs-supplements-zinc/art-20366112"
    },
    {
        name: "Copper",
        description: "Copper (Cu), chemical element, a reddish, extremely ductile metal of Group 11 (Ib) of the periodic table that is an unusually good conductor of electricity and heat. Copper is found in the free metallic state in nature.",
        url: "https://www.britannica.com/science/copper"
    },
    {
        name: "Selenium",
        description: "Selenium is a mineral found in the soil. Selenium naturally appears in water and some foods. While people only need a very small amount, selenium plays a key role in their metabolism.",
        url: "https://www.webmd.com/a-to-z-guides/supplement-guide-selenium"
    },
    {
        name: "Manganese",
        description: "Manganese is a trace mineral that is present in tiny amounts in the body. It is found mostly in bones, the liver, kidneys, and pancreas. Manganese helps the body form connective tissue, bones, blood clotting factors, and sex hormones. It also plays a role in fat and carbohydrate metabolism, calcium absorption, and blood sugar regulation. Manganese is also necessary for normal brain and nerve function.",
        url: "https://www.mountsinai.org/health-library/supplement/manganese"
    },
    {
        name: "Phosphorus",
        description: "Phosphorus is a mineral found in your bones. Along with calcium, phosphorus is needed to build strong healthy bones, as well as, keeping other parts of your body healthy.",
        url: "https://www.kidney.org/atoz/content/phosphorus"
    },
    {
        name: "Potassium",
        description: "Potassium is a mineral that your body needs to work properly. It is a type of electrolyte. It helps your nerves to function and muscles to contract. It helps your heartbeat stay regular. It also helps move nutrients into cells and waste products out of cells. A diet rich in potassium helps to offset some of sodium's harmful effects on blood pressure.",
        url: "https://medlineplus.gov/potassium.html"
    },
    {
        name: "Iodine",
        description: "Iodine is a mineral found in some foods. The body needs iodine to make thyroid hormones. These hormones control the body’s metabolism and many other important functions. The body also needs thyroid hormones for proper bone and brain development during pregnancy and infancy. Getting enough iodine is important for everyone, especially infants and women who are pregnant.",
        url: "https://ods.od.nih.gov/factsheets/Iodine-Consumer/"
    },
    {
        name: "Chromium",
        description: "Chromium, specifically, trivalent chromium -- is an essential trace element that's used by some people as a supplement. Perhaps most importantly, chromium forms a compound in the body that seems to enhance the effects of insulin and lower glucose levels. However, it also had risks and its use is somewhat controversial.",
        url: "https://www.webmd.com/diet/supplement-guide-chromium"
    },
    {
        name: "Molhybdenum",
        description: "Molhybdenum is an essential trace mineral. It is found in foods such as milk, cheese, cereal grains, legumes, nuts, leafy vegetables, and organ meats. Molybdenum works in the body to break down proteins and other substances. Molybdenum deficiency is very uncommon.",
        url: "https://www.webmd.com/vitamins/ai/ingredientmono-1249/molybdenum"
    },
    {
        name: "Fluoride",
        description: "Fluoride is a mineral that occurs naturally and is released from rocks into the soil, water, and air. Almost all water contains some fluoride, but usually not enough to prevent tooth decay. Fluoride can also be added to drinking water supplies as a public health measure for reducing cavities. Decisions about adding fluoride to drinking water are made at the state or local level.",
        url: "https://www.cdc.gov/fluoridation/faqs/about-fluoride.html"
    },
    {
        name: "Sodium",
        description: "Sodium chloride, is about 40% sodium and 60% chloride. It flavors food and is used as a binder and stabilizer. It is also a food preservative, as bacteria can't thrive in the presence of a high amount of salt. The human body requires a small amount of sodium to conduct nerve impulses, contract and relax muscles, and maintain the proper balance of water and minerals",
        url: "https://www.hsph.harvard.edu/nutritionsource/salt-and-sodium/"
    },
    {
        name: "Chloride",
        description: "You may have heard of electrolytes and the role they play in keeping you hydrated and healthy. One of the most important of these electrically charged minerals is chloride. It works with other electrolytes, such as sodium and potassium, to help balance acids and bases in your body.",
        url: "https://www.webmd.com/a-to-z-guides/what-is-a-chloride-test"
    }
];

const nutrients = [
    {
        name: "Calories",
        description: "Calories are essential for fueling the body. Whether you are trying to lose, maintain, or gain weight, tracking and understanding the science behind caloric intake is very important.",
        url: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/calories/art-20048065"
    },
    {
        name: "Carbs",
        description: "Carbs allow for the human body to be able to fuel itself through the day, especially if the day is extremely active. However, consuming too many carbs can have negative affects on the body.", 
        url: "https://www.betterhealth.vic.gov.au/health/healthyliving/weight-loss-and-carbohydrates"
    },
    {
        name: "Protein",
        description: "Protein is essential when it comes to helping build strength within your bones, muscles, cartilage and skin. It is also essential when it comes to building and repairing tissue.",
        url: "https://www.piedmont.org/living-better/why-is-protein-important-in-your-diet"
    },
    {
        name: "Fat",
        description: "Fat does not seem like somethign to be included in a diet, but it is actually very beneficial. Fats are responsible for helping your body absorb nutrients and produce important hormones.",
        url: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/dietary-fats#:~:text=Dietary%20fats%20are%20essential%20to,and%20produce%20important%20hormones%2C%20too."
    },
    {
        name: "Water",
        description: "Water is very important fopr many things. It can provide nutrients and oxygen to your cells. Or it can even do things like regulate body temperature and lubricate joints.",
        url: "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/water-essential-to-your-body"
    }
]

const vitamins = [
    {
        name: "Vitamin A",
        description: "Vitamin A is the name of a group of fat-soluble retinoids, primarily retinol and retinyl esters [1,2]. Vitamin A is involved in immune function, cellular communication, growth and development, and male and female reproduction.",
        url: "https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/"
    },
    {
        name: "Vitamin C",
        description: "Vitamin C, also known as L-ascorbic acid, is a water-soluble vitamin that is naturally present in some foods, added to others, and available as a dietary supplement. Humans, unlike most animals, are unable to synthesize vitamin C endogenously, so it is an essential dietary component.",
        url: "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"
    },
    {
        name: "Vitamin D",
        description: "Vitamin D (also referred to as “calciferol”) is a fat-soluble vitamin that is naturally present in a few foods, added to others, and available as a dietary supplement. It is also produced endogenously when ultraviolet (UV) rays from sunlight strike the skin and trigger vitamin D synthesis.",
        url: "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
    },
    {
        name: "Vitamin E",
        description: "Vitamin E is found naturally in some foods, added to others, and available as a dietary supplement. “Vitamin E” is the collective name for a group of fat-soluble compounds with distinctive antioxidant activities.",
        url: "https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/"
    },
    {
        name: "Vitamin K",
        description: "Vitamin K,” the generic name for a family of compounds with a common chemical structure of 2-methyl-1,4-naphthoquinone, is a fat-soluble vitamin that is naturally present in some foods and is available as a dietary supplement.",
        url: "https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/"
    },
    {
        name: "Vitamin B1",
        description: "https://www.webmd.com/vitamins/ai/ingredientmono-965/thiamine-vitamin-b1",
        url: "Thiamine (vitamin B1) is found in many foods and is used to treat low thiamine, beriberi, certain nerve diseases, and Wernicke-Korsakoff syndrome (WKS)."
    },
    {
        name: "Vitamin B2",
        description: "Vitamin B2 is a water-soluble vitamin, so it dissolves in water. All vitamins are either water soluble or fat soluble. Water-soluble vitamins are carried through the bloodstream, and whatever is not needed passes out of the body in urine.",
        url: "https://www.medicalnewstoday.com/articles/219561"
    },
    {
        name: "Vitamin B3",
        description: "As a cholesterol treatment, there are good studies showing that niacin can boost levels of good HDL cholesterol and lower triglycerides. Niacin also modestly lowers bad LDL cholesterol.",
        url: "https://www.webmd.com/diet/supplement-guide-niacin"
    },
    {
        name: "Vitamin B5",
        description: "Vitamin B5, also called pantothenic acid, is one of the most important vitamins for human life. It’s necessary for making blood cells, and it helps you convert the food you eat into energy.",
        url: "https://www.healthline.com/health/vitamin-watch-what-does-b5-do"
    },
    {
        name: "Vitamin B7",
        description: "Vitamin B7, more commonly known as biotin, is a water-soluble nutrient that is part of the B vitamin family. B vitamins help support adrenal function, help calm and maintain a healthy nervous system, and are necessary for key metabolic processes. Biotin is essential for the metabolism of carbohydrate and fat.",
        url: "https://www.drweil.com/vitamins-supplements-herbs/vitamins/vitamin-b7/"
    },
    {
        name: "Vitamin B6",
        description: "https://www.drweil.com/vitamins-supplements-herbs/vitamins/vitamin-b6/",
        url: "Vitamin B6, also called pyridoxine, is a water-soluble nutrient that is part of the B vitamin family. B vitamins, including vitamin B6, help support adrenal function, help calm and maintain a healthy nervous system, and are necessary for key metabolic processes. Vitamin B6 acts as a coenzyme in the breakdown and utilization of carbohydrates, fats and proteins."
    },
    {
        name: "Vitamin B12",
        description: "Vitamin B12, also known as cyanocobalamin or cobalamin, is a water-soluble vitamin that is part of the B vitamin family. These vitamins help support adrenal function, maintain a healthy nervous system, are necessary for key metabolic processes, and are important to DNA synthesis.",
        url: "https://www.drweil.com/vitamins-supplements-herbs/vitamins/vitamin-b12/"
    },
    {
        name: "Vitamin B9",
        description: "Vitamin B9, more commonly known as folate (naturally-occurring form of B9) or folic acid (a synthetic form), is a water-soluble vitamin that is part of the B vitamin family. B vitamins and folate help support adrenal function, help calm and maintain a healthy nervous system, and are necessary for key metabolic processes. Folate occurs naturally in foods, while folic acid is the synthetic form of folate.",
        url: "https://www.drweil.com/vitamins-supplements-herbs/vitamins/vitamin-b9/"
    }
]