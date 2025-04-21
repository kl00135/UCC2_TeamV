document.addEventListener("DOMContentLoaded", () => {
  const appointmentSelect = document.getElementById("selectedAppointment");
  if (appointmentSelect) {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.forEach(app => {
      const option = document.createElement("option");
      // Option value can be the appointment address
      option.value = app.address;
      option.text = `${app.name} - ${app.address} on ${app.date} at ${app.time}`;
      appointmentSelect.appendChild(option);
    });
  }
});

function showSuccessMessage(event) {
  event.preventDefault(); 
  document.getElementById('successModal').classList.remove('hidden'); 
  document.getElementById('rideForm').reset(); 
}

function closeSuccessModal() {
  document.getElementById('successModal').classList.add('hidden'); 
}
