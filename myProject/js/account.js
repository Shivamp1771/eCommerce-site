"use strict";
$(document).ready(() => {
    form_validation();
});

//for form validation
function form_validation(){ 
  $.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
  });
  jQuery.validator.addMethod("cdnPostal", function(postal, element) {
    return this.optional(element) || 
    postal.match(/[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/);
  }, "Please specify a valid postal code.");  
  
    $("#UserProfileForm").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        rules: {
          firstname: {
            maxlength: 15,
            letters: true,
            required: true
          },
          lastname: {
            maxlength: 15,
            letters: true,
            required: true
          },
          phone: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          addressline1: {
            required: true
          },
          addressline2: {
            required: true
          },
          city: {
            maxlength: 15,
            required: true
          },
          province: {
            maxlength: 15,
            required: true
          },
          postalcode: {
            required: true,
            cdnPostal: true
          },
          country: {
            maxlength: 15,
            required: true
          }
        },
        messages: {
          firstname: "Enter valid first name",
          lastname: "Enter valid last name",
          phone: "Enter valid phone format",
          email: "Enter a valid email address",
          addressline1: "Enter address line1",
          addressline2: "Enter address line2",
          city: "Enter city",
          province: "Enter province",
          postalcode: "Enter valid postalcode",
          country: "Enter country"
        },
        submitHandler: function(form) {
          window.alert('User profile updated successfully');
          form.submit();
      }
    });
}
