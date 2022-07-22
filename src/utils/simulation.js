const simulation = () => {
    let general = [
        {
          title: 'BMI',
          reading: 'Based on your BMI, you are moderately obese.'
        },
        {
          title: 'BF',
          reading: 'Based on your body fat percentage, you are obese.'
        },
        {
          title: 'WHE',
          reading: 'Based on your waist to height ratio, you are overweight.'
        },
        {
          title: 'WHI',
          reading: 'Your waist to hip ratio is good.'
        }
      ];
    
      let vitamins = [
        {
          vitamin: 'Vitamin A',
          recommendation: '900.0 mcg'
        },
        {
          vitamin: 'Vitamin C',
          recommendation: '90.0 mg'
        },
        {
          vitamin: 'Vitamin D',
          recommendation: '15.0 mcg'
        },
        {
          vitamin: 'Vitamin E',
          recommendation: '15.0 mg'
        },
        {
          vitamin: 'Vitamin K',
          recommendation: '120.0 mcg'
        },
        {
          vitamin: 'Vitamin B1',
          recommendation: '1.2 mg'
        },
        {
          vitamin: 'Vitamin B2',
          recommendation: '1.3 mg'
        },
        {
          vitamin: 'Vitamin B3',
          recommendation: '16.0 mg'
        },
        {
          vitamin: 'Vitamin B5',
          recommendation: '5.0 mg'
        },
        {
          vitamin: 'Vitamin B7',
          recommendation: '30.0 mcg'
        },
        {
          vitamin: 'Vitamin B6',
          recommendation: '1.3 mg'
        },
        {
          vitamin: 'Vitamin B12',
          recommendation: '2.4 mcg'
        },
        {
          vitamin: 'Vitamin B9',
          recommendation: '400.0 mcg'
        }
      ];
    
      let nutrients = [
        {
          nutrient: 'Calories',
          recommendation: '1458.19 kcal'
        },
        {
          nutrient: 'Carbs',
          recommendation: '145.82 g'
        },
        {
          nutrient: 'Protein',
          recommendation: '109.36 g'
        },
        {
          nutrient: 'Fat',
          recommendation: '48.61 g'
        },
        {
          nutrient: 'Water',
          recommendation: '119.50 oz'
        }
      ]
    
      let minerals = [
        {
          mineral: 'Choline',
          recommendation: '550.0 mg'
        },
        {
          mineral: 'Magnesium',
          recommendation: '420.0 mg'
        },
        {
          mineral: 'Calcium',
          recommendation: '1000.0 mg'
        },
        {
          mineral: 'Zinc',
          recommendation: '11.0 mg'
        },
        {
            mineral: 'Iron',
            recommendation: '8.0 mg'
        },
        {
          mineral: 'Copper',
          recommendation: '900.0 mcg'
        },
        {
          mineral: 'Selenium',
          recommendation: '55.0 mcg'
        },
        {
          mineral: 'Manganese',
          recommendation: '2.3 mg'
        },
        {
          mineral: 'Phosphorus',
          recommendation: '700.0 mg'
        },
        {
          mineral: 'Potassium',
          recommendation: '3400.0 mg'
        },
        {
          mineral: 'Iodine',
          recommendation: '150.0 mcg'
        },
        {
          mineral: 'Chromium',
          recommendation: '35.0 mcg'
        },
        {
          mineral: 'Molybdenum',
          recommendation: '45.0 mcg'
        },
        {
          mineral: 'Fluoride',
          recommendation: '4.0 mg'
        },
        {
          mineral: 'Sodium',
          recommendation: '2300.0 mg'
        },
        {
          mineral: 'Chloride',
          recommendation: '2.3 g'
        }
      ];
    
      let results = [];
      results[0] = general;
      results[1] = vitamins;
      results[2] = nutrients;
      results[3] = minerals;

      return results;
};

export default simulation;