function calculateBMI() {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const resultDiv = document.getElementById("muncul");

  // konversi ke dt float
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = `<div class="container">Please enter valid height & weight</div>`;
  }

  const bmi = weight / (height / 100) ** 2;
  let category = "";
  let explanation = "";

  if (bmi < 18.5) {
    category = "Underweight";
    explanation =
      "It is very recommended if you start eating more protein to bulk up your body and to gain weight";
  } else if (bmi < 25) {
    category = "Normal weight";
    explanation = "Keep it up! Stay fit and don't eat too much or too less!";
  } else if (bmi < 30) {
    category = "Overweight";
    explanation =
      "Try to do exercise like morning jogs and maybe some indoor workouts";
  } else {
    category = "Obese";
    explanation = `<div class="late">it's too late...</div>`;
  }

  resultDiv.innerHTML = `<div class="container2">
      <div id="result">Your BMI is ${bmi.toFixed(2)} (${category})</div>
      <div id="explanation">You are in the category of ${category} <br> ${explanation}</div>
    </div>`;
}

function clearFields() {
  document.getElementById("height").value = ``;
  document.getElementById("weight").value = ``;
  document.getElementById("muncul").innerHTML = ``;
}
