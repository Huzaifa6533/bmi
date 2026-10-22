let weight = parseInt(prompt("Enter your weight (kg)"));
let height = parseFloat(prompt("Enter your height (m)"));
let gender = prompt("Enter your gender as M or F")
let bmiCategory;


// BMI CALCULATION

let bmi = weight / height ** 2;

if (bmi < 18.5){
    bmiCategory = "Underweight"
} else if (bmi > 30) {
    bmiCategory = "Obese"
} else {
    bmiCategory = "Healthy or Overweight"
}

// OUTPUT

console.log(`Your BMI Is: ${bmi} which is ${bmiCategory}`);
