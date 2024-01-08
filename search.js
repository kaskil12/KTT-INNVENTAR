function searchFunction() {
    let input = document.getElementById('searchInput').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('ballepenis');

    for (i = 0; i < x.length; i++) { 
        let itemArray = x[i].innerText.split('\n');
        let itemName = itemArray[2] ? itemArray[2].toLowerCase() : ''; // Adjusted index

        console.log('itemName:', itemName);

        if (input) {
            if (!itemName.includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display="flex";                 
            }
        } else {
            x[i].style.display="flex"; 
        }
    }
}