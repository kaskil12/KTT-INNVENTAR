
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
async function removeItem(code) {
    let response = await fetch('/' + code);
    console.log("2");
    location.reload();
    
}
try {
    document.getElementById("rmItem").addEventListener("click", () => {
        removeItem(document.getElementById('removeCode').value);
    });
}catch(e){
    console.log(e);
}
