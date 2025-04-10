document.getElementById('editAppointmentsBtn').addEventListener('click', function() {
    document.getElementById('editAppointmentModal').classList.remove('hidden'); 
});

function closeAppointmentModal() {
    document.getElementById('editAppointmentModal').classList.add('hidden'); 
    document.getElementById('appointmentSuccess').classList.add('hidden'); 
}

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('appointmentSuccess').classList.remove('hidden');
});