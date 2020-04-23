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
        $('#task-1').append('<span>' + key + ': ' + booleanStudent[key] + '</span><span>' + ' // ' + '<span>');
    }

    /* CHAT */
    
    // Refs
    var input = $('.msg-input');
    var button = $('.msg-button');
    var chat = $('.chat');

    // Init Handlebars
    var source = $('#msg-template').html();
    var template = Handlebars.compile(source);
    
    // Inserisci nuovo messaggio
    button.click( function() {

        var msg = input.val().trim();
        
        // Dati dinamici preparati per il template Handlebars
        var data = {
            text: msg,
            way: 'sent',
            time: getTime()
        };

        // Bot response
        setTimeout(function() {

            // Variables
            var answer = 'Osserva attentamente, la risposta è nella domanda stessa';

            var data = {
                text: answer,
                way: 'received',
                time: getTime()
            };
            chat.append(template(data));            
        }, 1000);

        var html = template(data);
        chat.append(html);
        input.val('');
    });

    // Generazione orario
    function getTime() {
        var date = new Date();
        var hours = addZero(date.getHours());
        var minutes = addZero(date.getMinutes());
        return hours + ':' + minutes;
    }

    // Supporto a getTime per aggiungere 0 prima di ore/minuti
    function addZero(num) {
        return (num < 10 ? ('0' + num) : num);
    }

});