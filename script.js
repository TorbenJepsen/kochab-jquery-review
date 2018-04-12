// call jQuery- this is the first step to get js to read jQuery. Important!
$(document).ready(onReady);

console.log('jQuery Lecture');

function onReady() {
    console.log('jQuery is Ready');
    $('h1').addClass('funny');
    $('h1').css('color', 'red');
    
    // getters and setters
    console.log($('h2').text()); // get text value of h2
    $('h2').text('You have been set!!!');

    //inputs (also, getter and setter)
    $('#nameInput').val(); //setter for input. Inputs always need .val!
    console.log($('#nameInput').val()); //getter for the value from the input

    //events
    // event handler
    $('#addPersonButton').on('click', function() {
        // console.log($('#nameInput').val());
       let name = $('#nameInput').val();
       $('#newNames').append('<li>' + name + ' ' + '<button class ="deleteButton">Delete</button>' + '</li>');
        console.log($('#nameInput').val());
        $('#nameInput').val('');

    });

    $('#newNames').on('click', '.deleteButton', function() {
        console.log('Delete Button was clicked.');
        $(this).parent().remove();
    });

    $('#secondButton').on('click', function() {
        console.log('I was clicked!');
    });
}