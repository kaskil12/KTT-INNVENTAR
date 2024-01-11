window.onload = async function() {
    let response = await fetch('/getAll');
    response = await response.json();
    console.log(response);
    const itemListDiv = document.getElementById('itemList');

    response.forEach((item, index) => {
        let itemArray = Object.values(item);
        let itemElement = document.createElement('div');
        itemElement.classList.add('Boxes');

        let utlånt;
        if (itemArray[4] == true){
            utlånt = "Ja";
        }else{
            utlånt = "Nei";
        }

        let html = "";

        if (itemArray[4] == true){
            html = `<div class="BoxInnhold"><p>Navn</p><p>${itemArray[1]}</p></div>`;
        }

        html += 
        `<div class="BoxInnhold"><p>StrekKode</p><p>${itemArray[2]}</p></div>
        <div class="BoxInnhold"><p>Gjenstand</p><p>${itemArray[3]}</p></div>
        <div class="BoxInnhold"><p>Utlånt</p><p>${utlånt}</p></div>
        <div class="BoxInnhold"><p>ID</p><p>${itemArray[0]}</p></div>
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