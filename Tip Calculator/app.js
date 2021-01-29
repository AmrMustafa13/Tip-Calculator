// our function

function getOutputValue() {
    // getting the selectors
    let billAmount = document.querySelector("#bill-amount").value
    let service = document.querySelector("#service").value
    let numOfPeople = document.querySelector("#people").value
    let output = document.querySelector(".output")
    // checking validation of the inputs
    if (billAmount.trim() == "" || service == "null" || numOfPeople.trim() == "")
        alert("Make sure to enter all the values");
    else if (isNaN(billAmount.trim()) || isNaN(numOfPeople.trim()))
        alert("Make sure to enter numbers");
    else if (billAmount.trim() <= 0 || numOfPeople.trim() <= 0)
        alert("Make sure to enter positive values");
    else {
        if (numOfPeople.trim() != 1)
            output.innerHTML = `${(billAmount * (service / 100)) / numOfPeople} $ <br> Each`;
        else
            output.innerHTML = `${(billAmount * (service / 100)) / numOfPeople} $`;
    }
}

// adding the event listener

let calculateBtn = document.querySelector("#calculate")
calculateBtn.addEventListener("click", getOutputValue)