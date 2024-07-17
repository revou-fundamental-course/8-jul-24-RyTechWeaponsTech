function calculateBMI() {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const resultDiv = document.getElementById("result");

  // konversi ke dt float
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "Please enter valid height & weight";
  }

  const bmi = weight / (height / 100) ** 2;
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "American";
  }

  resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}

function clearFields() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").innerHTML = "";
}
