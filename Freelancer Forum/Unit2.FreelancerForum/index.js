// initial freelancers
const freelancers = [
    {name: "Alice", occupation: "Writer", startingPrice: 30},
    {name: "Bob", occupation: "Teacher", startingPrice: 50},
    {name: "Carol", occupation: "Programmer", startingPrice: 70}
];

// additional freelancers to add
const newfreelancers = [
    {name: "Gary", occupation: "Bookkeeper", startingPrice: 30},
    {name: "David", occupation: "Paralegal", startingPrice: 100},
    {name: "Edward", occupation: "Photographer", startingPrice: 60}
];

function init() {
  renderFreelancers();              // Initial table display
  updateAveragePrice();            // Initial average price display
  
}

function renderFreelancers() {
    // this selects the HTML element with the ID freelancer
    const tabularData = document.querySelector("#freelancer");

    // map() loops through the freelancers array
    const listElements = freelancers.map((freelancer) => {

        // generates an empty table row
        const row = document.createElement("tr");

        // creates name cell and sets its content
        const listName = document.createElement("td");
        listName.innerHTML = freelancer.name;

        // creates occupation cell and sets its content
        const listOccupation = document.createElement("td");
        listOccupation.innerHTML = freelancer.occupation;

        // creates starting price cell and sets its content using a template literal
        const listStartingPrice = document.createElement("td");
        listStartingPrice.innerHTML = `$${freelancer.startingPrice}`;

        // adds all three table cells data to the row
        row.appendChild(listName);
        row.appendChild(listOccupation);
        row.appendChild(listStartingPrice);

        return row;
    });

    // replace existing content with the new rows and inserts them into the actual HTML page
    // (...listElements) is called a spread syntax or also know as spread operator
    tabularData.replaceChildren(...listElements);
}

// generate and add a random freelancer
function randomFreelancer() {

    // picks a random freelancer from newfreelancers
    // adds the random freelancer to the initial list
    const randomChoice = newfreelancers[Math.floor(Math.random() * newfreelancers.length)];
    freelancers.push(randomChoice);

    // update table and average price
    renderFreelancers();
    updateAveragePrice();

}

function updateAveragePrice() {
    let total = 0;

    // loop through each freelancer and add their starting price to the total
    for (const freelancer of freelancers) {
        total += freelancer.startingPrice;
    }

    // calculate the average by dividing the total by the number of freelancers
    const average = total / freelancers.length;

    // targets the HTML element with the ID "average-price" and updates its text
    document.querySelector("#average-price").textContent = 
        "The average starting price is $" + average.toFixed(2);

}

// sets the interval to 2 seconds and adds a new random freelancer to the initial list
setInterval(randomFreelancer, 2000);

// initial display
init();
