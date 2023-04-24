
// Budget Calculator

const formName = document.querySelector("#name")
const formBudget = document.querySelector("#budget")
const formSalary = document.querySelector("#salary")
const formLength = document.querySelector('#length')

const submitBtn = document.getElementById("submitButton")

const budgetResult = document.getElementById("budgetResult")
const salaryBox = document.getElementById("salaryBox")
const budgetBox = document.getElementById("budgetBox")
const lengthBox = document.getElementById("lengthBox")
const perDayBox = document.getElementById("perDayBox")


submitBtn.addEventListener("click", function() {
    if (formBudget.value === null || formSalary.value === null || formLength.value === null ) alert("Looks like a required field is empty.");
    
    //Calculating based off of 5% of annual salary
    var tripBudget = formSalary.value * 0.05

    
    var compareBudget = tripBudget - formBudget.value;
// Splitting budget across trip length
    var perDay = tripBudget / formLength.value

// Printing one based off whether user is below or above budget
var aboveBelow;

    if (compareBudget < 0) {
        aboveBelow = "less your preferred budget. Going a little bit above the recommended won't hurt."
    } else if (compareBudget >= 0){
        aboveBelow = "more than your preferred budget! You'll have a little extra to spend."
    }

    budgetResult.innerHTML = `Thanks for filling out the form ${formName.value}! 
    Taking the entered values, the recommended budget for your trip is $${tripBudget.toFixed(2)}, which is ${aboveBelow}`

        salaryBox.innerHTML = `$${formSalary.value.toLocaleString()}`
        budgetBox.innerHTML = `$${tripBudget.toFixed(2)}`
        lengthBox.innerHTML = `${formLength.value} Days`
        perDayBox.innerHTML = `$${perDay.toFixed(2)}`

        document.getElementById("budgetResult").style.display = "inline-block";

            document.getElementById("budgetBreakdown").style.display = "inline-block";
            document.getElementById("resultInfo").style.display = "inline-block";

            document.getElementById("budgetResult").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });


})


