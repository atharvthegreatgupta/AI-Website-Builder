document.addEventListener('DOMContentLoaded', () => {
    const catGrid = document.querySelector('.cat-grid');

    const cats = [
        {
            name: 'Whiskers',
            breed: 'Persian',
            age: '2 years',
            price: '$500',
            image: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg'
        },
        {
            name: 'Shadow',
            breed: 'Bombay',
            age: '1.5 years',
            price: '$650',
            image: 'https://cdn.pixabay.com/photo/2016/09/05/21/36/cat-1647775_1280.jpg'
        },
        {
            name: 'Mittens',
            breed: 'Maine Coon',
            age: '3 years',
            price: '$700',
            image: 'https://cdn.pixabay.com/photo/2018/01/17/04/24/cat-3087611_1280.jpg'
        },
        {
            name: 'Pounce',
            breed: 'Bengal',
            age: '1 year',
            price: '$800',
            image: 'https://cdn.pixabay.com/photo/2017/10/30/17/04/bengal-2903006_1280.jpg'
        },
        {
            name: 'Luna',
            breed: 'Siamese',
            age: '2.5 years',
            price: '$600',
            image: 'https://cdn.pixabay.com/photo/2017/02/20/18/14/cat-2083492_1280.jpg'
        },
        {
            name: 'Ollie',
            breed: 'Ragdoll',
            age: '1.8 years',
            price: '$750',
            image: 'https://cdn.pixabay.com/photo/2016/11/29/03/40/cat-1867197_1280.jpg'
        }
    ];

    function createCatCard(cat) {
        const catCard = document.createElement('div');
        catCard.classList.add('cat-card');

        catCard.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}">
            <div class="cat-info">
                <h3>${cat.name}</h3>
                <p>Breed: ${cat.breed}</p>
                <p>Age: ${cat.age}</p>
                <div class="price">${cat.price}</div>
                <button class="buy-button">Adopt Me!</button>
            </div>
        `;

        // Add event listener to the buy button (placeholder for actual adoption logic)
        const buyButton = catCard.querySelector('.buy-button');
        buyButton.addEventListener('click', () => {
            alert(`You've expressed interest in adopting ${cat.name}! We'll contact you soon.`);
        });

        return catCard;
    }

    cats.forEach(cat => {
        catGrid.appendChild(createCatCard(cat));
    });
});