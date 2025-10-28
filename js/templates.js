//Template für Restaurant Informationen
function getRestaurantInfoTemplate(name, rating, deliveryCost){
    const stars = getStarRating(rating);

    return `
        <h2>${name}</h2>
        <div class="rating">
            ${stars} <span class="rating-number">(${rating})</span>
        </div>
        <p class="delivery_info">Lieferkosten: ${deliveryCost.toFixed(2)} € </p>
    `;
}


//Hilffunktion für Sterne
function getStarRating(rating){
    const fullStars = Math.round(rating);
        let stars = '';

        for (let i = 0; i < fullStars; i++){
            stars = stars + '⭐';
        }
    return stars;
}


function getDishTemplate(name, description, price, index) {
                return ` 
                <div class="dish_item">
                    <div class="dish_info">
                        <h3>${name}</h3>
                            <p class="dish_description">${description}</p>
                            <p class="dish_price">${price.toFixed(2)} €</p>
                    </div>
                    <button class="add_btn" onclick="addToCart(${index})">+</button>
                </div>
            `;
}


