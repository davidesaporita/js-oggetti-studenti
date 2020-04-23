/**
 * 
 * Oggetti
 * Descrizione:
 * Creare un oggetto che descriva uno studente
 * lo studente avrà  le seguenti proprietà: nome, cognome e età.
 * Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
 * 
 * OPZIONALE (in una cartella a parte dal codice per l’esercizio degli oggetti)
 * Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.
 * 
 */

$(document).ready( function() {

    // Definizione variabili e oggetti
    var booleanStudent = {
        name: 'True',
        surname: 'False',
        age: 1
    };

    for ( var key in booleanStudent ) {
        $('#task-1').append('<h5>' + key + ': ' + booleanStudent[key] + '</h5>');
    }

});