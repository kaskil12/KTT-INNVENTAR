let inventoryarray = [];
if (localStorage.getItem("inventoryarray") != null) {
    let items = localStorage.getItem('inventoryarray').split(';');
    items.forEach(item => {
        inventoryarray.push(item.split(','));
    });
}

async function addItem(name, code, item) {
    console.log(name, code, item);
    if (name != "" && code != "" && item != "") {
        let cum = await fetch('/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                code: code,
                item: item
            }),
        })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    }
}
try {
    document.getElementById("test").addEventListener("click", () => {
        addItem(document.getElementById('addName').value, document.getElementById('addCode').value, document.getElementById('addItem').value);
    });
}catch(e){
    console.log(e);
}
function removeItem(name, code, item) {
    for (let i = 0; i < inventoryarray.length; i++) {
        if (inventoryarray[i][0] == name && inventoryarray[i][1] == code && inventoryarray[i][2] == item) {
            inventoryarray.splice(i, 1);
            console.log(inventoryarray);
            addItem("", "", "");
            break;
        }
    }
}
try {
    document.getElementById("rmItem").addEventListener("click", () => {
        removeItem(document.getElementById('removeName').value, document.getElementById('removeCode').value, document.getElementById('removeItem').value);
    });
}catch(e){
    console.log(e);
}
try {
    document.getElementById("test1").addEventListener("click", async () => {
        let response = await fetch('/test');
        console.log(await response.json());
    });
}catch(e){
    console.log(e);
}
