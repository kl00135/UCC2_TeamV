document.getElementById('editPrescriptionsBtn').addEventListener('click', function() {
    document.getElementById('editPrescriptionModal').classList.remove('hidden'); 
});

function closeModal() {
    document.getElementById('editPrescriptionModal').classList.add('hidden'); 
    document.getElementById('successMessage').classList.add('hidden'); 
}

document.getElementById('prescriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('successMessage').classList.remove('hidden');
});