// link : https://apivogelspotten.onrender.com/vogelspotten/

const vogelSelect = document.querySelector("#vogelSelect");

const count = document.querySelector("#count");

const plusBtn = document.querySelector("#plusBtn");

function vogelDropdown() {
  fetch("https://apivogelspotten.onrender.com/vogelspotten/")
    .then((r) => r.json())
    .then((vogels) =>
      vogels.forEach((v) => {
        const newOption = document.createElement("option");
        newOption.value = v.soort;
        newOption.innerHTML = v.soort;
        vogelSelect.appendChild(newOption);
      })
    );
}

const options = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(),
};

function teller(v) {
  fetch("https://apivogelspotten.onrender.com/vogelspotten/", options)
    .then((r) => r.json())
    .then(
      (data = {
        id: v.value,
        aantalkeerGespot: count.value,
      })
    );
  console.log(v);
}

vogelSelect.addEventListener("change", (e) => {
  //   console.log(e.target.value);
  teller(e.target.value);
});

plusBtn.addEventListener("click", (e) => {
  count.value = count.value + 1;
  //   console.log(count.value);
  count.innerHTML = count.value;
  //   console.log(count.innerHTML);
  teller(vogelSelect.value);
});
count.value = 0;
vogelDropdown();
