$(function () {
    var patientsList = [
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Paweł", lastName: "Tracz" },
        { firstName: "Michał", lastName: "Kościelny" },
    ];

    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});
//tekst dodatkowy

function addPatient(patient) {
    $("#patients-list")
        .append(
        $("<li/>")
            .text(patient.firstName + " " + patient.lastName)
        );
}