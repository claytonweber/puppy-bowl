console.log('puppy details');

window.onload = function () {
    let puppyName = localStorage.getItem("puppyName");
    let puppyBreed = localStorage.getItem("puppyBreed");
    let puppyImage = localStorage.getItem("puppyImage");

    let puppyDetailsContainer = document.getElementById("puppy-details-container");

    let newPuppyName = document.createElement('p');
    newPuppyName.innerText = puppyName;
    puppyDetailsContainer.appendChild(newPuppyName);

    let newPuppyBreed = document.createElement('p');
    newPuppyBreed.innerText = puppyBreed;
    puppyDetailsContainer.appendChild(newPuppyBreed);

    let newPuppyImage = document.createElement('img');
    newPuppyImage.src = puppyImage;
    puppyDetailsContainer.appendChild(newPuppyImage);
}