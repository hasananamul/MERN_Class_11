let mainDev = document.querySelector(".main_row");
let student_list = document.querySelector(".student_list");
let contact_list = document.querySelector(".contact_list");
devs.map((data) => {
  mainDev.innerHTML += `
        <div class="colm">
          <div class="card">
            ${data.photo}
            <div class="name"><h2> ${data.name}</h2></div>
            <div class="roll"><h3>ID : ${data.ID}</h3></div>
            <div class="skill"><h4>Skill : ${data.Skill}</h4></div>
            <div class="sallary"><h4>Sallary : ${data.Sallery}</h4></div>
            <div class="text">${data.text}</div>
          </div>
        </div>
    `;
});
student.map((data) => {
  student_list.innerHTML += `
  <tr>
    <td scope="row">${data.Roll}</td>
    <td>${data.Name}</td>
    <td>${data.Location}</td>
    <td>${data.Gender}</td>
    <td>${data.Age}</td>
    <td>${data.photo}</td>
  </tr>
  
  `;
});
contactList.map((data, index) => {
  contact_list.innerHTML += `
  <tr>
    <td scope="row">${index + 1}</td>
    <td scope="row">${data.Name}</td>
    <td>${data.PhoneNumber}</td>
    <td>${data.Relation}</td>
    <td>${data.Adress}</td>
  </tr>
    `;
});
