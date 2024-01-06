window.onload = function() {
    const itemListDiv = document.getElementById('itemList');
    let items = localStorage.getItem('inventoryarray').split(';');
    items.forEach(item => {
        let itemElement = document.createElement('div');
        let itemArray = item.split(',');
        let html = `<p>navn${itemArray[0]}</p>StrekKode<p>${itemArray[0]}</p>item<p>${itemArray[0]}</p>`;
        itemElement.innerHTML = html;
        itemListDiv.appendChild(itemElement);
    });
};