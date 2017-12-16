// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.

//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require turbolinks
//= require_tree .
// OAuth.initialize('your_app_public_key');
//
// OAuth.popup("favebook", function(err, res) {
//     res.get('/1.1/account/verify_credentials.json')
//         .done(function(result) {
//             console.log(result.screen_name);
//         });
// });


OAuth.initialize('Xe4PQDvjjSERBO9PpT3S6Dcgvcw')
OAuth.popup('facebook').done(function(result) {
    console.log(result)
    // do some stuff with result
})
