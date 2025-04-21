document.addEventListener("DOMContentLoaded", () => {
    const prescriptionForm = document.getElementById("prescriptionForm");
    const prescriptionModal = document.getElementById("prescriptionModal");
    const addPrescriptionBtn = document.getElementById("addPrescriptionBtn");
    const prescriptionCardContainer = document.getElementById("prescriptionCardContainer");
  
    addPrescriptionBtn.addEventListener("click", () => {
      prescriptionForm.reset();
      prescriptionModal.classList.remove("hidden");
    });
  
    prescriptionForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const medicationName = document.getElementById("medicationName").value;
      const dosage = document.getElementById("dosage").value;
      const prescribingDoctor = document.getElementById("prescribingDoctor").value;
      const pharmacy = document.getElementById("pharmacy").value;
  
      if (!medicationName || !dosage || !prescribingDoctor || !pharmacy) {
        alert("Please fill out all fields.");
        return;
      }
  
      const newCard = document.createElement("div");
      newCard.classList.add("bg-white", "rounded-xl", "shadow-lg", "p-6", "m-2", "w-full");
  
      newCard.innerHTML = `
        <div class="flex justify-between items-start space-x-4">
          <div class="flex-1 mb-4">
            <h3 class="text-xl font-semibold text-purple-800 mb-2">${medicationName}</h3>
            <p class="text-black mb-1"><strong>Dosage:</strong> ${dosage}</p>
            <p class="text-black mb-1"><strong>Doctor:</strong> ${prescribingDoctor}</p>
            <p class="text-black"><strong>Pharmacy:</strong> ${pharmacy}</p>
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
        document.getElementById("medicationName").value = medicationName;
        document.getElementById("dosage").value = dosage;
        document.getElementById("prescribingDoctor").value = prescribingDoctor;
        document.getElementById("pharmacy").value = pharmacy;
  
        newCard.remove();
        prescriptionModal.classList.remove("hidden");
      });
  
      prescriptionCardContainer.appendChild(newCard);
      prescriptionModal.classList.add("hidden");
    });
  });
  
  function closePrescriptionModal() {
    document.getElementById("prescriptionModal").classList.add("hidden");
  }