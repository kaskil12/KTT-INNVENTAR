// Create an empty inventoryarray array
let inventoryarray = [];
if (localStorage.getItem("inventoryarray") != null) {
    let items = localStorage.getItem('inventoryarray').split(';');
    items.forEach(item => {
        inventoryarray.push(item.split(','));
    });
}

// Function to add an item to the inventoryarray
function addItem(name, code, item) {
    if (name != "" && code != "" && item != "") {
        inventoryarray.push([name, code, item]);
    }
    localStorage.clear();
    inventoryarray.forEach(element => {
        if (inventoryarray[inventoryarray.length - 1] == element) {
            if (localStorage.getItem("inventoryarray") == null) {
                localStorage.setItem("inventoryarray", element);
                console.log(1);
            } else {
                localStorage.setItem("inventoryarray",localStorage.getItem("inventoryarray") + element);
                console.log(2);
            }
        } else {
            if (localStorage.getItem("inventoryarray") == null) {
                localStorage.setItem("inventoryarray", element + ";");
                console.log(3);
            } else {
                localStorage.setItem("inventoryarray", localStorage.getItem("inventoryarray") + element + ";");
                console.log(4);
            }
        }
    });
    console.log(localStorage.getItem("inventoryarray"));
}
try {
    document.getElementById("test").addEventListener("click", () => {
        addItem(document.getElementById('addName').value, document.getElementById('addCode').value, document.getElementById('addItem').value);
    });
}catch(e){
    console.log(e);
}
// Function to remove an item from the inventoryarray
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
        const response = await fetch('/test');
        console.log(await response.json());
    });
}catch(e){
    console.log(e);
}
