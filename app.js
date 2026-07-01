var data = "";

function formSubmit() {
  event.preventDefault();

  var g = document.getElementById('male').checked? "Male" : document.getElementById('female').checked? "Female" : "Not selected";
  
  var s = [];
  var skills = document.getElementById('skills').options;
  for(var i=0; i<skills.length; i++) if(skills[i].selected) s.push(skills[i].value);

  data = "Name: " + name.value + "\nFather Name: " + fname.value + "\nAge: " + age.value + 
         "\nGender: " + g + "\nPhone No: " + phone.value + "\nEmail: " + email.value + 
         "\nAddress: " + address.value + "\nEducation: " + edu.value + 
         "\nSkills: " + (s.length? s.join(", ") : "None");

  alert("Form Submitted!");
}

function show() {
  var out = document.getElementById('output') || document.body.appendChild(Object.assign(document.createElement('p'), {id:'output'}));
  out.style.whiteSpace = 'pre-line';
  out.style.marginTop = '20px';
  out.innerText = data || "No data yet. Submit first.";
}

function clearOutput() {
  if(document.getElementById('output')) document.getElementById('output').innerText = "";
  document.forms[0].reset();
  data = "";
}
