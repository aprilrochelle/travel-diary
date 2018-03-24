const destinations = [
    {
        title: 'Mexico',
        image: "https://img2.10bestmedia.com/Images/Photos/348105/23130742-1916694298355905-9055669475985693397-n_54_990x660.jpg",
        description: "With its 18th-century Spanish colonial architecture and laid-back local scene, San Jose del Cabo provides a low-key Baja Peninsula counterpart to fun-loving Cabo San Lucas 20 miles south."
    },
    {
        title: 'Curacao',
        image: "https://curacaotogo.com/wp-content/uploads/Downtown-Curacao.jpg",
        description: "The lively capital of Curacao is a welcoming, upbeat destination with two distinct historic districts divided by the lovely St. Anna Bay."
    },
    {
        title: 'Rome',
        image: "https://www.roadaffair.com/wp-content/uploads/2017/09/colosseum-rome-italy-shutterstock_433413835.jpg",
        description: "Rome wasn't built in a day--and you'll need much more than a day to take in this timeless city. The city is a real-life collage of piazzas, open-air markets, and astonishing historic sites."
    },
    {
        title: "Sydney",
        image: "https://latte-analytics.sydney.edu.au/wp-content/uploads/2017/03/sydney-image.jpg",
        description: "Sydney offers plenty of historical and contemporary Australian flavor. The marvelous Sydney Opera House looks like a great origami sailboat, floating peacefully in a harbor."
    },
    {
        title: "Johannesburg",
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


const diaryOutput = (e) => {
    const buttonClicked = e.target;
    let diaryEntry = '';
        diaryEntry += `<div class="diary-card">`;
        diaryEntry +=   `<h4>${buttonClicked.parentNode.children[0].innerHTML} Diary</h4>`;
        diaryEntry +=   `<p>${buttonClicked.parentNode.children[3].value}</p>`;
        diaryEntry += `</div>`;
    printToDom(diaryEntry,'diary-output');
}

const eventListenerz = () => {
    const cardBtn = document.getElementsByClassName('card-button');

    for (let i = 0; i < cardBtn.length; i++) {
        cardBtn[i].addEventListener('click', diaryOutput);
    }    
}

const startApp = () => {
    domStringBuilder(destinations);
    eventListenerz();
}

startApp();
