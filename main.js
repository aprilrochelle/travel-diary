const destinations = [
    {
        title: 'San Jose del Cabo, Mexico',
        image: "https://img2.10bestmedia.com/Images/Photos/348105/23130742-1916694298355905-9055669475985693397-n_54_990x660.jpg",
        description: "With its 18th-century Spanish colonial architecture and laid-back local scene, San Jose del Cabo provides a low-key Baja Peninsula counterpart to fun-loving Cabo San Lucas 20 miles south."
    },
    {
        title: 'Willemstad, Curacao',
        image: "https://curacaotogo.com/wp-content/uploads/Downtown-Curacao.jpg",
        description: "The lively capital of Curacao is a welcoming, upbeat destination with two distinct historic districts divided by the lovely St. Anna Bay."
    },
    {
        title: 'Rome, Italy',
        image: "https://www.roadaffair.com/wp-content/uploads/2017/09/colosseum-rome-italy-shutterstock_433413835.jpg",
        description: "Rome wasn't built in a day--and you'll need much more than a day to take in this timeless city. The city is a real-life collage of piazzas, open-air markets, and astonishing historic sites."
    },
    {
        title: "Sydney, Australia",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2e/15/sydney.jpg",
        description: "Sydney offers plenty of historical and contemporary Australian flavor. The marvelous Sydney Opera House looks like a great origami sailboat, floating peacefully in a harbor."
    },
    {
        title: "Johannesburg, South Africa",
        image: "https://www.thenational.ae/image/policy:1.628870:1505550236/wk15-mkop-johannesburg01.jpg?f=16x9&w=1024&$p$f$w=0d52206",
        description: "Johannesburg is the place to go to mix big-city culture, shopping, dining and nightlife with outdoor adventures, up-close wildlife encounters and visits to historical sites."
    },
]

const printToDom = (domString, divId) => {
    const printTo = document.getElementById(divId);
    printTo.innerHTML += domString;
}

const domStringBuilder = (travelArray) => {
    let domString = '';
    travelArray.forEach((travelSpot) => {
        domString += `<div class="travel-card">`;
        domString +=    `<h3 class="travel-header">${travelSpot.title}</h3>`;
        domString +=    `<img src="${travelSpot.image}" alt="Photo of ${travelSpot.title}" width="250">`;
        domString +=    `<p>${travelSpot.description}</p>`;
        domString +=    `<textarea name="${travelSpot.title}" rows="4" cols="30"></textarea>`;
        domString +=    `<button class="card-button">Add Entry</button>`;
        domString += `</div>`;
    });
    printToDom(domString,'card-holder');
}

const doStuff = (e) => {
    diaryOutput(e);
    changeColor(e);
}

const diaryOutput = (e) => {
    const buttonClicked = e.target;
    let diaryEntry = '';
        diaryEntry += `<div class="diary-card">`;
        diaryEntry +=   `<h4>${buttonClicked.parentNode.children[0].innerHTML}</h4>`;
        diaryEntry +=   `<p>${buttonClicked.parentNode.children[3].value}</p>`;
        diaryEntry +=   `<button class="delete-btn">Delete Entry</button>`;
        diaryEntry += `</div>`;
    printToDom(diaryEntry,'diary-output');
    eventListener2();
}

const changeColor = (e) => {
    const cardColored = e.target.parentNode;
    cardColored.classList.add('recolored');
}

const deleteEntry = (e) => {
    const divToDisappear = e.target.parentNode;
    divToDisappear.classList.add('deleted');
}

const eventListener1 = () => {
    const cardBtn = document.getElementsByClassName('card-button');
    for (let i = 0; i < cardBtn.length; i++) {
        cardBtn[i].addEventListener('click', doStuff);
    }    
}

const eventListener2 = () => {
    const deleteBtns = document.getElementsByClassName('delete-btn');
    for (let j=0; j<deleteBtns.length; j++) {
        deleteBtns[j].addEventListener('click', deleteEntry);
    }
}

const startApp = () => {
    domStringBuilder(destinations);
    eventListener1();
}

startApp();
