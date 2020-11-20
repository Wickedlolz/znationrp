function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function resendButton() {
    window.open("https://discord.gg/UrPCzEG", '_blank');
}

function hellhostButton() {
    window.open("https://hellhost.eu/", '_blank');
}