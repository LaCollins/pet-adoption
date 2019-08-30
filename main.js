const pets = [
    {
        image: './images/cat1.jpg',
        name: 'Chester',
        color: 'Flame Point Siamese',
        specialSkill: '3am Zoomies',
        type: 'Cat'
    },
    {
        image: './images/cat2.jpg',
        name: 'Stephanie',
        color: 'Blue Point Siamese',
        specialSkill: 'Rearely vomits',
        type: 'Cat'
    },
    {
        image: './images/dog1.jpg',
        name: 'Hatchiko',
        color: 'Buff',
        specialSkill: 'Waits indefinitely',
        type: 'Dog'
    },
    {
        image: './images/dog2.jpg',
        name: 'Todd',
        color: 'Red',
        specialSkill: "Doesn't know what to say, but when he does he says 'Yippie yip yip yip'",
        type: 'Dog'
    },
    {
        image: './images/dino1.jpg',
        name: 'Ducky',
        color: 'Brownish with more brown',
        specialSkill: 'Eats tree stars, yep yep!',
        type: 'Dino'
    },
    {
        image: './images/dino2.jpg',
        name: 'Susan',
        color: 'Custard',
        specialSkill: 'Smashing skulls',
        type: 'Dino'
    },
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const petBuilder = (petArray) => {
    let domString = '';
    for (let i = 0; i < petArray.length; i++) {
        const petCard = petArray[i];
        domString += `
        <div class="card">
            <h2>${petCard.name}</h2>
            <img src="${petCard.image}" alt="Image of ${petCard.name}" />
            <p>Color: ${petCard.color}</p>
            <p>Special Skill: ${petCard.specialSkill}</p>
            <p>Type: ${petCard.type}</p>
        </div>
        `;

    }
    printToDom(domString, 'petZone');
}

petBuilder(pets);