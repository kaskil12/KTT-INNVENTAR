window.onload = async function() {
    let response = await fetch('/getAll');
    response = await response.json();
    console.log(response);
    const itemListDiv = document.getElementById('itemList');

    response.forEach((item, index) => {
        let itemArray = Object.values(item);
        let itemElement = document.createElement('div');
        itemElement.classList.add('ballepenis');
        let html = 
        `<div class="OwO"><p>Navn</p><p>${itemArray[1]}</p></div>
        <div class="OwO"><p>StrekKode</p><p>${itemArray[2]}</p></div>
        <div class="OwO"><p>Gjenstand</p><p>${itemArray[3]}</p></div>
        <button id="button${index}"></button>`;
    

    
        itemElement.innerHTML = html;
        itemListDiv.appendChild(itemElement);            
        
        let removeButton = document.getElementById(`button${index}`);
        removeButton.innerHTML = 'Remove';
        console.log(removeButton);
        removeButton.addEventListener('click', async function() {
            console.log("Click remove")
            await removeItem(itemArray[2]).then( () => {
            console.log("reload");
            location.reload()});
        });
    });
}