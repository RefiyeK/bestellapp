
const restaurantName = restaurant.name;



function renderRestaurantInfo(){
    const infoDiv = document.getElementById("restaurant_info");
    const html = getRestaurantInfoTemplate(
        restaurant.name,
        restaurant.rating,
        restaurant.deliveryCost
    );
    infoDiv.innerHTML = html;
    }

    
function getCategories() {
    const categories = [];  //Leeres Array erstellt
 
    for ( let i = 0; i < menu.length; i++){
        const gericht = menu[i];
        const kategorie = gericht.category;

        if (!categories.includes(kategorie)){ //Hier wird dublikate vermieden
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


function renderMenu(){
    const mainElement = document.getElementById('menu_container');
    const categories = getCategories();
    let menuHTML = '';

    for (let i = 0; i < categories.length; i++){
        const category = categories[i];

        menuHTML += `<h2 class="category_title">${category}</h2>`;
        menuHTML += `<div class="dishes_container">`;

        const dishes = getDishesByCategory(category);

        for (let j = 0; j < dishes.length; j++){
            const dish = dishes[j];
            const index = menu.indexOf(dish);

            menuHTML += getDishTemplate(
                dish.name,
                dish.description,
                dish.price,
                index
            );
        }
        menuHTML += `</div>`;
    }
    mainElement.innerHTML = menuHTML;
}


function init(){
    renderRestaurantInfo();
    renderMenu();
}

