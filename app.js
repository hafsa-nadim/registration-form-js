var savedData = ""; // store data here so Show can use it later

// 1. Runs when you click Submit
function formSubmit() {
  event.preventDefault(); // stop page from reloading

  // Get gender
  var gender = "Not selected";
  if(document.getElementById('female').checked){
    gender = "Female";
  }
  if(document.getElementById('male').checked){
    gender = "Male";
  }

  // Get all selected skills
  var skillsList = "";
  var skillsSelect = document.getElementById('skills');
  for(var i = 0; i < skillsSelect.options.length; i++){
    if(skillsSelect.options[i].selected){
      skillsList = skillsList + skillsSelect.options[i].value + ", ";
    }
  }
  if(skillsList == ""){
    skillsList = "None";
  }

  // Save all data in 1 string. \n = new line
  savedData = 
  "Name: " + document.getElementById('name').value + "\n" +
  "Father Name: " + document.getElementById('fname').value + "\n" +
  "Age: " + document.getElementById('age').value + "\n" +
  "Gender: " + gender + "\n" +
  "Phone No: " + document.getElementById('phone').value + "\n" +
  "Email: " + document.getElementById('email').value + "\n" +
  "Address: " + document.getElementById('address').value + "\n" +
  "Education: " + document.getElementById('edu').value + "\n" +
  "Skills: " + skillsList;

  alert("Form Submitted!");
}

// 2. Runs when you click Show Output
function show() {
  // Create a <p> tag if it doesn't exist yet
  var output = document.getElementById('output');
  if(output == null){
    output = document.createElement('p');
    output.id = 'output';
    output.style.whiteSpace = 'pre-line'; // this makes \n show as new lines
    output.style.textAlign = 'left'; // align the text to left
    output.style.marginTop = '20px';
    document.body.appendChild(output);
  }

  if(savedData == ""){
    output.innerText = "No data yet. Submit first.";
  } else {
    output.innerText = savedData;
  }
}

// 3. Runs when you click Clear Output
function clearOutput() {
  var output = document.getElementById('output');
  if(output!= null){
    output.innerText = ""; // clear the text
  }
  document.getElementById('name').form.reset(); // clear all inputs too
  savedData = ""; // clear saved data
}
