window.onload = function() {
    const itemListDiv = document.getElementById('itemList');
    let items = localStorage.getItem('inventoryarray').split(';');
    items.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('ballepenis');
        let itemArray = item.split(',');
        let html = 
        `<div class="OwO"><p>Navn</p><p>${itemArray[0]}</p></div>
        <div class="OwO"><p>StrekKode</p><p>${itemArray[1]}</p></div>
        <div class="OwO"><p>Gjenstand</p><p>${itemArray[2]}</p></div>`
        ;
        itemElement.innerHTML = html;
        itemListDiv.appendChild(itemElement);
    });
}