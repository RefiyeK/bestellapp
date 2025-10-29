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


function getCartItemTempalate(dishIndex, amount) {
    const dish = menu[dishIndex]; //Hole das Gericht aus dem Menu
    const itemTotal = dish.price * amount; //Berechne zwischensumme

    return `
        <div class="cart_item">
                    <div class="cart_item_info">
                        <h4>${dish.name}</h4>
                        <p class="cart_item_price">${dish.price.toFixed(2)} €</p>
                    </div>
                    <div class="cart_item_controls">
                        <button onclick="decreaseAmount(${dishIndex})">-</button>
                        <span class="amount">${amount}</span>
                        <button onclick="increaseAmount(${dishIndex})">+</button>
                        <button onclick="removeFromCart(${dishIndex})">🗑</button>
                    </div>
                    <p class="cart_item_total">${itemTotal.toFixed(2)} €</p>
                </div>
    `;
}


//Leeren Warenkorb
function getEmptyCartTemplate(){
    return `
        <div class="empty_cart">
            <h2>Warenkorb</h2>
            <p>🛒 Dein Warenkorb ist leer</p>
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
            <button class="btn_order" onclick="placeOrder()">Bestellen 🛒</button>
        </div>
    `;
}




