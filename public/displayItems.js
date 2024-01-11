window.onload = async function() {
    let response = await fetch('/getAll');
    response = await response.json();
    console.log(response);
    const itemListDiv = document.getElementById('itemList');

    response.forEach((item, index) => {
        let itemArray = Object.values(item);
        let itemElement = document.createElement('div');
        itemElement.classList.add('Boxes');
        let html = 
        `<div class="BoxInnhold"><p>Navn</p><p>${itemArray[1]}</p></div>
        <div class="BoxInnhold"><p>StrekKode</p><p>${itemArray[2]}</p></div>
        <div class="BoxInnhold"><p>Gjenstand</p><p>${itemArray[3]}</p></div>
        <button id="button${index}"></button>`;
    

    
        itemElement.innerHTML = html;
        itemListDiv.appendChild(itemElement);            
        
        let removeButton = document.getElementById(`button${index}`);
        removeButton.innerHTML = 'Fjærn';
        console.log(removeButton);
        removeButton.addEventListener('click', async function() {
            console.log("Click remove")
            await removeItem(itemArray[2]).then( () => {
            console.log("reload");
            location.reload()});
        });
    });
}