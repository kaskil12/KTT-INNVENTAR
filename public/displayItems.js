window.onload = function() {
    const itemListDiv = document.getElementById('itemList');
    let items = localStorage.getItem('inventoryarray');
    if (items) {
        items = items.split(';');
        items.forEach((item, index) => {
            let itemElement = document.createElement('div');
            itemElement.classList.add('ballepenis');
            let itemArray = item.split(',');
            let html = 
            `<div class="OwO"><p>Navn</p><p>${itemArray[0]}</p></div>
            <div class="OwO"><p>StrekKode</p><p>${itemArray[1]}</p></div>
            <div class="OwO"><p>Gjenstand</p><p>${itemArray[2]}</p></div>
            <button id="button${index}"></button>`;
        

        
            itemElement.innerHTML = html;
            itemListDiv.appendChild(itemElement);            
            
            let removeButton = document.getElementById(`button${index}`);
            removeButton.innerHTML = 'Remove';
            removeButton.addEventListener('click', function() {
                let updatedItems = localStorage.getItem('inventoryarray');
                if (updatedItems) {
                    updatedItems = updatedItems.split(';');
                    updatedItems.splice(updatedItems.indexOf(item), 1);
                    localStorage.setItem('inventoryarray', updatedItems.join(';'));
                    itemListDiv.innerHTML = ''; // Clear the current list
                    window.onload(); // Re-render the list
                }
            });
        });
    }
}