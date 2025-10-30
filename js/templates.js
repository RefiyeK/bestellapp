function getRestaurantInfoTemplate(name, rating, deliveryCost, stars){
    return`
        <h2 class="restaurant_name">${name}</h2>
        <div class="rating">
            ${stars} <span class="rating-number">(${rating})</span>
        </div>
        <p class="delivery_info">Lieferkosten: ${deliveryCost.toFixed(2)} € </p>
    `;
}


function getStarRating(rating){
    const fullStars = Math.round(rating);
        let stars = '';
        for (let i = 0; i < fullStars; i++){
            stars += '⭐';
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
                    <button class="add_btn" onclick="addToCart(${index})">Hinzufügen</button>
                </div>
            `;
}


function getCartItemTemplate(dishName, price, amount, itemTotal, dishIndex) {
    return `
        <div class="cart_item">
                    <div class="cart_item_info">
                        <h4>${dishName}</h4>
                        <p class="cart_item_price">${price.toFixed(2)} €</p>
                    </div>
                    <div class="cart_item_controls">
                        <button class="cursor" onclick="decreaseAmount(${dishIndex})">-</button>
                        <span class="amount" class="amount">${amount}</span>
                        <button class="cursor" onclick="increaseAmount(${dishIndex})">+</button>
                        <button class="cursor" onclick="removeFromCart(${dishIndex})">🗑</button>
                    </div>
                    <p class="cart_item_total">${itemTotal.toFixed(2)} €</p>
                </div>
    `;
}


function getEmptyCartTemplate(){
    return `
        <div class="empty_cart">
            <h2 class="cart_header">Warenkorb</h2>
            <p>Dein Warenkorb ist leer</p>
            <p class="empty_cart_hint">Füge Gerichte hinzu!</p>
        </div>
    `;
}


function getCartSummaryTemplate(subtotal, deliveryCost, total){
    return `
        <div class="cart_summary">
            <div class="summary_row">
                <span>Zwischensumme:</span> 
                <span>${subtotal.toFixed(2)} €</span>
            </div>
            <div class="summary_row">
                <span>Lieferkosten:</span>
                <span>${deliveryCost.toFixed(2)} €</span>
            </div>
            <div class="summary_row summary_total">
                <strong>GESAMT:</strong>
                <strong>${total.toFixed(2)} €</strong>
            </div>
            <button class="btn_order" onclick="placeOrder()">BESTELLEN</button>
        </div>
    `;
}




