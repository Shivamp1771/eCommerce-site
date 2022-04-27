<!-- made by Yang Cheng -->
"use strict";
let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
$(document).ready( () => {
    const searchText = $(".search-bar").find(':first-child');
    searchText.focus( () => {
        searchText.val('');
    });
    searchText.blur( () => {
        searchText.val('Search');
    });

    $("#emailSubForm").submit( event => {
        const element = $('#emailSub');
        const value = element.val().trim();
        if (value === "") {
            element.next().text("This field is required.");
            event.preventDefault();
        } else if ( !emailPattern.test(value) ) {
            element.next().text("Must be a valid email address.");
            event.preventDefault();
        } else {
            element.next().text("");
        }
        element.val(value);
    });
});