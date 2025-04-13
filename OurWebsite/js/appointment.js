document.addEventListener("DOMContentLoaded", () => {
  const appointmentForm = document.getElementById("appointmentForm");
  const appointmentModal = document.getElementById("appointmentModal");
  const addAppointmentBtn = document.getElementById("addAppointmentBtn");
  const appointmentCardContainer = document.getElementById("appointmentCardContainer");
  
  // Load saved appointments from localStorage
  let storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  storedAppointments.forEach(app => {
    appendAppointmentCard(app);
  });
  
  addAppointmentBtn.addEventListener("click", () => {
    appointmentForm.reset();
    appointmentModal.classList.remove("hidden");
  });
  
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const name = document.getElementById("appointmentName").value;
    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value;
    const location = document.getElementById("appointmentLocation").value;
    const address = document.getElementById("appointmentAddress").value;
  
    if (!name || !date || !time || !location || !address) {
      alert("Please fill out all fields.");
      return;
    }
  
    const appointment = { name, date, time, location, address };
    storedAppointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(storedAppointments));
  
    appendAppointmentCard(appointment);
    appointmentModal.classList.add("hidden");
  });
  
  function appendAppointmentCard(app) {
    const newCard = document.createElement("div");
    newCard.classList.add("bg-white", "rounded-xl", "shadow-lg", "p-6", "m-2", "w-full", "flex-1");
  
    newCard.innerHTML = `
      <div class="flex justify-between items-start space-x-4">
        <div class="flex-1 mb-4">
          <h3 class="text-xl font-semibold text-purple-800 mb-2">${app.name}</h3>
          <p class="text-black mb-1"><strong>Date:</strong> ${app.date}</p>
          <p class="text-black mb-1"><strong>Time:</strong> ${app.time}</p>
          <p class="text-black mb-1"><strong>Location:</strong> ${app.location}</p>
          <p class="text-black"><strong>Address:</strong> ${app.address}</p>
        </div>
        <div class="flex gap-2 mt-1 items-center">
          <button class="edit-btn text-blue-600 hover:text-blue-800" title="Edit">✏️</button>
          <button class="delete-btn text-red-600 hover:text-red-800" title="Delete">🗑️</button>
        </div>
      </div>
    `;
  
    newCard.querySelector(".delete-btn").addEventListener("click", () => {
      newCard.remove();
      storedAppointments = storedAppointments.filter(a => {
        return !(a.name === app.name && a.date === app.date && a.time === app.time);
      });
      localStorage.setItem("appointments", JSON.stringify(storedAppointments));
    });
  
    newCard.querySelector(".edit-btn").addEventListener("click", () => {
      document.getElementById("appointmentName").value = app.name;
      document.getElementById("appointmentDate").value = app.date;
      document.getElementById("appointmentTime").value = app.time;
      document.getElementById("appointmentLocation").value = app.location;
      document.getElementById("appointmentAddress").value = app.address;
  
      newCard.remove();
      appointmentModal.classList.remove("hidden");
    });
  
    appointmentCardContainer.appendChild(newCard);
  }
  
  window.closeAppointmentModal = function () {
    appointmentModal.classList.add("hidden");
  };
});
