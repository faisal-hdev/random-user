const loadData = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displayPerson(data.results[0]));
};

const displayPerson = (person) => {
  const { name, picture, email, location, dob } = person;
  const { street, city } = location;
  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = `
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${picture.large}" class="w-100 rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Name : ${name.title} ${name.first} ${name.last} </h5>
              <h6 class="card-title">${email} </h6>
              <h6 class="card-title">Date of birth : ${dob.date} </h6>
              <h6 class="card-title">Age : ${dob.age} </h6>
              <p class="card-text">
               Location : ${street.number} ${street.name}
              </p>
              <p class="card-text">
              City : ${city}
             </p>
            </div>
          </div>
        </div>
      </div>
  `;
};
