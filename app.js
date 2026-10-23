function calculateBMI() {

let weight = Number(document.getElementById("weight").value);

let height = Number(document.getElementById("height").value);

let bmi = weight / (height * height);

document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2)
}
