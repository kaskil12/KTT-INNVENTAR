async function addItem(code, item) {
    console.log(code, item);
    if (code != "" && item != "") {
        let cum = await fetch('/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
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
        addItem(document.getElementById('addCode').value, document.getElementById('addItem').value);
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

async function lånUt() {
    let name = document.getElementById('addName').value
    let id = document.getElementById("id").value
    let response = await fetch('/loanOut/' + id + "/" + name);
    response = await response.json();
    console.log(response);
}

async function fåInn() {
    let id = document.getElementById("id2").value
    let response = await fetch('/getIn/' + id);
    response = await response.json();
    console.log(response);
}