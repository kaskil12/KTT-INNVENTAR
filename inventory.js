// Create an empty inventoryarray array
let inventoryarray = [];

// Function to add an item to the inventoryarray
function addItem(name, code, item) {
    inventoryarray.push([name, code, item]);
    console.log(inventoryarray);
    console.log(inventoryarray[inventoryarray.length - 1]);
    localStorage.clear();
    inventoryarray.forEach(element => {
        console.log(element);
        if(inventoryarray[inventoryarray.length - 1] == element){
            console.log("1")
            if (localStorage.getItem("inventoryarray") == null) {
                localStorage.setItem("inventoryarray", element);
            }   
            localStorage.setItem("inventoryarray",localStorage.getItem("inventoryarray") + "," + element);
        }else{
            localStorage.setItem("inventoryarray", localStorage.getItem("inventoryarray") + "," + element + ";");
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
            break;
        }
    }
}
