function encrypt() {
    var input = document.getElementById('input').value;
    var encryptedText = btoa(input);
    document.getElementById('output').value = encryptedText;
}

function decrypt() {
    var input = document.getElementById('input').value;
    var decryptedText = atob(input);
    document.getElementById('output').value = decryptedText;
}
