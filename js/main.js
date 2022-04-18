function displayLocationMenu() {
    resetNav();
    let navbar = document.getElementById("navbar");
    

    let locationMenu = document.createElement("div");
    locationMenu.setAttribute("id", "location_menu");

    let greyedAnchor = document.getElementById("locations");
    greyedAnchor.style.color =  "gray";
    

    let locationNav = document.createElement("nav");
    
    let stripLocation = document.createElement("a");
    stripLocation.setAttribute("href", "location-strip.html");
    stripLocation.innerHTML = "<h2>STRIP DISTRICT</h2>"
    locationNav.appendChild(stripLocation);

    let oaklandLocation = document.createElement("a");
    oaklandLocation.setAttribute("href", "location-oakland.html");
    oaklandLocation.innerHTML = "<h2>OAKLAND</h2>";
    locationNav.appendChild(oaklandLocation);

    let lebanonLocation = document.createElement("a");
    lebanonLocation.setAttribute("href", "location-lebanon.html");
    lebanonLocation.innerHTML = "<h2>MT. LEBANON</h2>";
    locationNav.appendChild(lebanonLocation);

    let shadyLocation = document.createElement("a");
    shadyLocation.innerHTML = "<h2>SHADYSIDE</h2>";
    shadyLocation.setAttribute("href", "location-shady.html");
    locationNav.appendChild(shadyLocation);

    locationMenu.appendChild(locationNav);
    navbar.appendChild(locationMenu);

}

function displayMenuMenu() {
    resetNav();
    let navbar = document.getElementById("navbar");
    

    let locationMenu = document.createElement("div");
    locationMenu.setAttribute("id", "location_menu");


    let locationNav = document.createElement("nav");
    
    let stripLocation = document.createElement("a");
    stripLocation.setAttribute("href", "menu-strip.html");
    stripLocation.innerHTML = "<h2>STRIP DISTRICT</h2>"
    locationNav.appendChild(stripLocation);

    let oaklandLocation = document.createElement("a");
    oaklandLocation.innerHTML = "<h2>OAKLAND</h2>";
    oaklandLocation.setAttribute("href", "menu-oakland.html");
    locationNav.appendChild(oaklandLocation);

    let lebanonLocation = document.createElement("a");
    lebanonLocation.setAttribute("href", "menu-lebanon.html");
    lebanonLocation.innerHTML = "<h2>MT. LEBANON</h2>";
    locationNav.appendChild(lebanonLocation);

    let shadyLocation = document.createElement("a");
    shadyLocation.innerHTML = "<h2>SHADYSIDE</h2>";
    shadyLocation.setAttribute("href", "menu-shadyside.html");
    locationNav.appendChild(shadyLocation);

    locationMenu.appendChild(locationNav);
    navbar.appendChild(locationMenu);

}




function resetNav() {
    document.getElementById("navbar").innerHTML = `
    <div id="main">
        <nav>
            <a href="index.html" ><h2>HOME</h2></a>
            <a id="locations" onmouseenter="resetNav(); displayLocationMenu();"><h2>LOCATIONS</h2></a>
            <a onmouseenter="displayMenuMenu();"><h2>MENUS</h2></a>
            <a href="order_online.html" id="order_online"><h2>ORDER ONLINE</h2></a>
        </nav>
    </div>`;
}

function showHideTextbox() {
    let messageCheckbox = document.getElementById("send_message");
    let column2 = document.getElementById("column2");
    if (messageCheckbox.checked) {
        let textboxLabel = document.createElement("label");
        textboxLabel.setAttribute("for", "message_textbox");
        textboxLabel.setAttribute("id", "textbox_label");
        textboxLabel.innerText = "Message: ";

        let br = document.createElement("br");
        br.setAttribute("id", "br");

        let textbox = document.createElement("textarea");
        textbox.setAttribute("id", "message_textbox");
        textbox.setAttribute("rows", 5);
        textbox.setAttribute("columns", 50);
        
        column2.appendChild(textboxLabel);
        column2.appendChild(br);
        column2.appendChild(textbox);
    }
    else {
        let textboxLabel = document.getElementById("textbox_label");
        let br = document.getElementById("br");
        let textbox = document.getElementById("message_textbox");
        column2.removeChild(textboxLabel);
        column2.removeChild(br);
        column2.removeChild(textbox);
    }
    
}

function submitForm () {
    message = document.getElementById("send_message");
    if (message.checked) {
        text = document.getElementById("message_textbox");
        window.location.href = `mailto:pam@pamelasdiner.com?subject=A Message&body=${text.value}`;
    }
}