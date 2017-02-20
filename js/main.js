/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).on('ready', function(){
  
//   allows to use the 'lettersonly' rule
  jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please"); 
  
//   enables tooltips
  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
  
//  validating form 
  $("#order-form").validate({
    submitHandler: function(form){
      form.submit();
  },
    
    rules: {
      "your-name":{
        required: true,
        maxlength: 128,
        lettersonly: true
    },
      
      "your-address":{
        required: true
      },
      
      "your-city":{
        required: true
      },
      
      "your-state":{
        required: true,
        maxlength: 2,
        lettersonly: true
      },
      
      "your-zip":{
        required: true,
        digits: true,
        minlenghth: 5
      },
      
      "card-holder-name":{
          required: true,
          maxlength: 128,
          lettersonly: true
      },
      
      "card-number":{
        required: true,
        creditcard: true
    },
      
      "expiry-month":{
        required: true
      },
      
      "expiry-year":{
        required: true
      },
      
      "cvv":{
        required: true,
        digits: true,
        maxlength: 3
      },
      
      "shipping-method":{
        required: true
      },
      
      "comments":{
        required: false,
        maxlength: 500
      }
    }
    
    
    
  });

});
// closing document ready tag