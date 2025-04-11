document.addEventListener("DOMContentLoaded", () => {
    const appointmentForm = document.getElementById("appointmentForm");
    const appointmentModal = document.getElementById("appointmentModal");
    const addAppointmentBtn = document.getElementById("addAppointmentBtn");
    const appointmentCardContainer = document.getElementById("appointmentCardContainer");
  
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
  
      if (!name || !date || !time || !location) {
        alert("Please fill out all fields.");
        return;
      }
  
      const newCard = document.createElement("div");
      newCard.classList.add(
        "bg-white", "rounded-xl", "shadow-lg", "p-6", "m-2", "w-full", "flex-1"
      );
      
      newCard.innerHTML = `
        <div class="flex justify-between items-start space-x-4">
          <div class="flex-1 mb-4">
            <h3 class="text-xl font-semibold text-purple-800 mb-2">${name}</h3>
            <p class="text-black mb-1"><strong>Date:</strong> ${date}</p>
            <p class="text-black mb-1"><strong>Time:</strong> ${time}</p>
            <p class="text-black"><strong>Location:</strong> ${location}</p>
          </div>
          <div class="flex gap-2 mt-1 items-center">
            <button class="edit-btn text-blue-600 hover:text-blue-800" title="Edit">✏️</button>
            <button class="delete-btn text-red-600 hover:text-red-800" title="Delete">🗑️</button>
          </div>
        </div>
      `;
  
      
      newCard.querySelector(".delete-btn").addEventListener("click", () => {
        newCard.remove();
      });
  
      
      newCard.querySelector(".edit-btn").addEventListener("click", () => {
        document.getElementById("appointmentName").value = name;
        document.getElementById("appointmentDate").value = date;
        document.getElementById("appointmentTime").value = time;
        document.getElementById("appointmentLocation").value = location;
  
        newCard.remove(); 
        appointmentModal.classList.remove("hidden");
      });
  
      appointmentCardContainer.appendChild(newCard);
      appointmentModal.classList.add("hidden");
    });
  });
  
  function closeAppointmentModal() {
    document.getElementById("appointmentModal").classList.add("hidden");
  }