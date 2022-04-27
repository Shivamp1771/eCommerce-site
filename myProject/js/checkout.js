$(document).ready(() => {
  form_validation();
});
console.log("hey there");

// load cart price
let price = localStorage["__FPtotalPrice"];
console.log(price);

// clear cart data if checkout successful
localStorage["__FPmycart"] = "[]";
localStorage["__FPtotalPrice"] = 0;

    document.getElementById("cname").placeholder = "Name";
    document.getElementById("ccnum").placeholder = "1111-2222-3333-4444";
    document.getElementById("expmonth").placeholder = "Month";
    document.getElementById("expyear").placeholder = "YYYY";
    document.getElementById("cvv").placeholder = "NNN";
  
  function form_validation(){ 
    // Field or Property valdiation
    $("#purchase_form").validate({
      rules: {
        cardname: {
          required: true
        },
        cardnumber: {
          required: true,
          creditcard: true,
          minlength: 13,
          maxlength: 16,
          digits: true,
        },
        expmonth: {
          required: true,
          range: [1, 12]
        },
        expyear: {
          required: true,
          digits: true,
          date: true,
          minlength: 4,
          maxlength: 4,
          range: [2021, 9999]
        },
        cvv: {
          required: true,
          digits: true,
          minlength: 3,
          maxlength: 3
        }
      },
      messages: {
        cardname: "Please enter name",
        cardnumber: "Please enter a valid format",
        expmonth: "Enter a valid month",
        expyear: "Enter a valid year",
        cvv: "Please enter number"
      }
    });
  }