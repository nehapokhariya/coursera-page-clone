// Add an event listener to checkboxes
const checkboxes = document.querySelectorAll('.filter-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterCards);
});

function filterCards() {
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    if (selectedCategories.length === 0) {
        // If no checkbox is selected, show all cards
        showAllCards();
    } else {
        // Hide all cards
        hideAllCards();

        // Show only cards that match the selected categories
        selectedCategories.forEach(category => {
            const cardsToShow = document.querySelectorAll('.card.' + category);
            cardsToShow.forEach(card => {
                card.style.display = 'block';
            });
        });
    }
}

function hideAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'none';
    });
}

function showAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'block';
    });
}



document.getElementById('menuToggle').addEventListener('click', function () {
    document.querySelector('.offcanvas').style.left = '0';
    document.querySelector('.overlay').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function () {
    document.querySelector('.offcanvas').style.left = '-100%';
    document.querySelector('.overlay').style.display = 'none';
});


