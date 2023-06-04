// const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2304-FTB-ET-WEB-FT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;



async function fetchAllPuppies() {
    try {
        let response = await fetch(`${APIURL}/players`)
        let translatedData = await response.json(); 
        let puppyData = translatedData.data.players;
        console.log(puppyData)
        return puppyData;
    } catch (error) {
        console.error("Error fetching all puppy players", error);
    }  
}

async function fetchSinglePuppy(puppyId) {
    try {

    } catch (error) {
        console.error(`Oh no, trouble fetching player #${puppyId}!`, error);
    }
}

async function addNewPuppy(puppyObj) {
    try {

    } catch (error) {
        console.error('Oops, something went wrong with adding that player!', error);
    }
};

async function removePuppy(puppyId) {
    try {

    } catch (error) {
        console.error(`Whoops, trouble removing player #${playerId} from the roster!`, error);
    }
}

async function renderPuppies() {

    let puppies = await fetchAllPuppies();
    let puppyContainer = document.getElementById('puppy-container');
    
    for (let i = 0; i < puppies.length; i++) {
        // console.log(puppies[i].name)
        let currentPuppy = puppies[i];

        let newPuppyElement = document.createElement("div");
        // newPuppyElement.innerText = currentPuppy.name + " - " + currentPuppy.breed;
        newPuppyElement.style.backgroundImage = `url(${currentPuppy.imageUrl})`;
        newPuppyElement.classList.add("single-puppy-element");
        let puppyInfo = document.createElement('h2');
        puppyInfo.innerText = currentPuppy.name;
        puppyInfo.classList.add("puppy-info")


        let detailsButton = document.createElement("button");
        detailsButton.innerText = "See Puppy Details";
        detailsButton.classList.add("details-button");

        detailsButton.addEventListener("click", () => {
            localStorage.setItem("puppyName", currentPuppy.name);
            localStorage.setItem("puppyBreed", currentPuppy.breed);
            localStorage.setItem("puppyImage", currentPuppy.imageUrl);

            window.location.href = "puppy-details.html";
        });

        puppyContainer.appendChild(puppyInfo);
        puppyContainer.appendChild(newPuppyElement);
        puppyContainer.appendChild(detailsButton);
        
    }


    
}

renderPuppies();