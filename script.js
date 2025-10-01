function calculateBMI() {
  let weight = document.getElementById("weight").value.trim();
  let height = document.getElementById("height").value.trim();
  let result = document.getElementById("result");
  let error = document.getElementById("error");

  result.textContent = "";
  error.textContent = "";

  if (!weight || !height) {
    error.textContent = "Please enter weight and height.";
    return;
  }

  weight = parseFloat(weight);
  height = parseFloat(height);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 20) {
    error.textContent =
      "Enter valid positive numbers for weight and height.";
    return;
  }
  height = height / 100;

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  result.textContent = `Your BMI is ${bmi} (${category})`;
}

function changeBackground(option) {
  let body = document.body;
  if (option === 1) {
    body.style.background = 'url("bg1.jpg") no-repeat center center fixed';
  } else if (option === 2) {
    body.style.background = 'url("bg2.jpg") no-repeat center center fixed';
  } else if (option === 3) {
    body.style.background = 'url("bg3.jpg") no-repeat center center fixed';
  }
  body.style.backgroundSize = "cover";
}
