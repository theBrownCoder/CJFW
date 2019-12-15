function create_account() {
    ///////////////////// VARIABLE CREATION///////////////////////////
    // create variables
    'use strict';
    var fname, lname, email, phone, ext, pword;
    fname = document.getElementsByName('First Name').value;
    lname = document.getElementsByName('Last Name').value;
    email = document.getElementsByName('Email').value;
    phone = document.getElementsByName('Phone').value;
    ext = document.getElementsByName('Extension').value;
    pword = document.getElementsByName('Password').value;
    cpwd = document.getElementsByName('Confirm Password').value;

    // store input of each textbox
    console.log(fname + lname);
    // prompt("Value inside the text boxes is: " + fname + " " + lname);
    return;






    /////////////////// REQUIRED VARIABLES://////////////////////////////////////////////////////////////////////////////////////////// 

    // first name
    // last name
    // email address
    // phone number
    // password, and confirm password

    //////////////////// VALIDATION TESTS://////////////////////////////////////////////////////////////////////////////////////////////

    // validate name textboxes formatting (letters & no integers or special characters)

    // validate email textbox formatting (text@domain's name.[extension])

    // validate phone number textbox formatting (###-###-####)

    // validate extension textbox formatting (####)
    //     then append a comma(,) to the beginning of the extension variable

    // USE PASSWORD SERVICE TO 
}