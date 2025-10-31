function renderRestaurantInfo(){
    const infoDiv = document.getElementById("restaurant_info");
    const stars = getStarRating(restaurant.rating);
    const html = getRestaurantInfoTemplate(
        restaurant.name,
        restaurant.rating,
        restaurant.deliveryCost,
        stars
    );
    infoDiv.innerHTML = html;
    }

    
function getCategories() {
    const categories = [];
    for ( let i = 0; i < menu.length; i++){
        const gericht = menu[i];
        const kategorie = gericht.category;
        if (!categories.includes(kategorie)){
            categories.push(kategorie);
        }
    }
    return categories;
}


function getDishesByCategory(categoryName) {
    const dishes = [];
    for (let i = 0; i < menu.length; i++){
        const gericht = menu[i];
        if (gericht.category === categoryName){
            dishes.push(gericht);
        }
    }
    return dishes;
}


function getCategoryHTML(category) {
    let html = `<h2 class="category_title">${category}</h2>`;
    html += `<div class="dishes_container">`;
    const dishes = getDishesByCategory(category);
    for (let j = 0; j < dishes.length; j++){
        const dish = dishes[j];
        const index = menu.indexOf(dish);
        html += getDishTemplate(dish.name, dish.description, dish.price, index);
    }
    html += `</div>`;
    return html;
}


function renderMenu(){
    const mainElement = document.getElementById('menu_container');
    const categories = getCategories();
    let menuHTML = '';
    for (let i = 0; i < categories.length; i++){
        menuHTML += getCategoryHTML(categories[i]);
    }
    mainElement.innerHTML = menuHTML;
}


function addToCart(dishIndex) {
    let foundIndex = -1;
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].dishIndex === dishIndex) {
            foundIndex = i;
            break;
        }
    }
    if (foundIndex === -1) {
        basket.push({
            dishIndex: dishIndex,
            amount: 1
        });
    } else {
        basket[foundIndex].amount++; 
    }
    renderCart();
    updateCartCount();
}


function calculateSubtotal(){
    let subtotal = 0;
    for (let i = 0; i < basket.length; i++){
        const item = basket[i];
        const dish = menu[item.dishIndex];
        const itemTotal = dish.price * item.amount;
        subtotal += itemTotal;
    }
    return subtotal;
}


function renderCart() {
    const cartElement = document.getElementById('cart_container');
    if (basket.length === 0) {
        cartElement.innerHTML = getEmptyCartTemplate();
    } else {
        showTotalCart(cartElement);
    }   
}


function showTotalCart(cartElement){
    let cartHTML = '<h2>Warenkorb</h2>';
        for (let i = 0; i < basket.length; i++) {
            const item = basket[i];
            const dish = menu[item.dishIndex];
            const itemTotal = dish.price*item.amount;
            cartHTML += getCartItemTemplate(dish.name, dish.price, item.amount, itemTotal, item.dishIndex);
    }
    const subtotal = calculateSubtotal();
    const deliveryCost = restaurant.deliveryCost;
    const total = subtotal + deliveryCost;
    cartHTML += getCartSummaryTemplate(subtotal, deliveryCost, total);
    cartElement.innerHTML = cartHTML;
}


function increaseAmount(dishIndex){
    for (let i = 0; i < basket.length; i++){
        if (basket[i].dishIndex === dishIndex){
            basket[i].amount++;
            break;
        }
    }
    renderCart();
    renderCartModal();
    updateCartCount();
}


function decreaseAmount(dishIndex) {
    for (let i = 0; i < basket.length; i++){
        if (basket[i].dishIndex === dishIndex) {
            if (basket[i].amount > 1) {
                basket[i].amount--;
            } else {
                basket.splice(i,1);
            }
            break;
        }
    }
    renderCart();
    renderCartModal();
    updateCartCount();
}


function removeFromCart(dishIndex){
    for (let i = 0; i < basket.length; i++) {        
        if(basket[i].dishIndex === dishIndex){
            basket.splice(i,1);
            break;
        }
    }
    renderCart();
    renderCartModal();
    updateCartCount();
}


function showMessage(text, type) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = text;
    messageContainer.className = `message ${type}`;
    setTimeout(function() {
        messageContainer.className = "message_hidden";
    }, 3000);
}


function placeOrder() { 
    if (basket.length === 0) {
        showMessage("Dein Warenkorb ist leer!", "error");
        return;
    }
    showMessage("Vielen Dank für deine Bestellung! 🎉", "success");
    basket= [];
    renderCart();
    renderCartModal();
    updateCartCount();
    closeCartModal();
}


function openCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    renderCartModal();
}


function closeCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.classList.remove('visible');
    modal.classList.add('hidden');
}


function renderCartModal() {
    const modalBody = document.getElementById('cart-modal-body');
    if (basket.length === 0) {
        modalBody.innerHTML = getEmptyCartTemplate();
    } else {
        showTotalCartModal(modalBody);
    }
}


function showTotalCartModal(modalBody) {       
        let cartHTML = '';
        for (let i = 0; i < basket.length; i++) {
            const item = basket[i];
            const dish = menu[item.dishIndex];
            const itemTotal = dish.price*item.amount;
            cartHTML += getCartItemTemplate(dish.name, dish.price, item.amount, itemTotal, item.dishIndex);
        }
        const subtotal = calculateSubtotal();
        const deliveryCost = restaurant.deliveryCost;
        const total = subtotal + deliveryCost;
        cartHTML += getCartSummaryTemplate(subtotal, deliveryCost, total);
        modalBody.innerHTML = cartHTML;
}


function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    let totalItems = 0;
    for (let i = 0; i < basket.length; i++) {
        totalItems += basket[i].amount;
    }
    countElement.textContent = totalItems;
}
document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		closeCartModal();
	}
});
document.addEventListener("click", function(event) {
	const modal = document.getElementById("cart-modal");
	if (event.target === modal) {
		closeCartModal();
	}
});


function init(){
    renderRestaurantInfo();
    renderMenu();
    renderCart();
}