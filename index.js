var contactRef = firebase.database().ref().child("contactForm");

document.getElementById('displayform1').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var Name = getINputVal('name');
    var Address = getINputVal('address');
    var Phone = getINputVal('phone');
    var Refference = getINputVal('reff');
    var WorkD = getINputVal('workD');

    saveForm(name,address,phone,reff,workD);

    document.getElementById()
}