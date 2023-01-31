// Start a jQuery to draw from the HTML button with the ID grade
$("#grade").click(function () {
    // Set the values from the form to variables to use for calculations
    let fAssignment = $('#assignments').val() * .5;
    let fGroup_proj = $('#group_project').val() * .1;
    let fQuizzes = $('#quizzes').val() * .1;
    let fMidterm = $('#midterm').val() * .1;
    let fFinal = $('#final').val() * .1;
    let fIntex = $('#intex').val() * .1;
    // Make calculations of what the grade in the class will be
    let fGrade = fAssignment + fGroup_proj + fQuizzes + fMidterm + fFinal + fIntex;
    // Round the grade
    fGrade = fGrade.toFixed(2);
    // Set a lettergrade variable
    let sLetterGrade = "";
    // determine what letter grade was earned
    if (fGrade >= 94) {
        sLetterGrade = 'A';
    } else if (fGrade >= 90) {
        sLetterGrade = 'A-';
    } else if (fGrade >= 87) {
        sLetterGrade = 'B+';
    } else if (fGrade >= 84) {
        sLetterGrade = 'B';
    } else if (fGrade >= 80) {
        sLetterGrade = 'B-';
    } else if (fGrade >= 77) {
        sLetterGrade = 'C+';
    } else if (fGrade >= 74) {
        sLetterGrade = 'C';
    } else if (fGrade >= 70) {
        sLetterGrade = 'C-';
    } else if (fGrade >= 67) {
        sLetterGrade = 'D+';
    } else if (fGrade >= 64) {
        sLetterGrade = 'D';
    } else if (fGrade >= 60) {
        sLetterGrade = 'D-';
    } else {
        sLetterGrade = 'E';
    }
    // Put together the message that will be written to the page
    let sMessage = ('Your final grade would be ' + fGrade + '%\nYou earned a(n) ' + sLetterGrade);
    // Write the message using jQuery
    $('#message').html('\n\n' + sMessage);
})