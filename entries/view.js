var id = window.location.search;
if (id !== "") {
    id = parseInt(id.substring(id.indexOf("id") + 3, id.length));

    var img = document.createElement("img");
    img.src = id + "/large.png";
    document.getElementById("pic").appendChild(img);

    fetch(id + "/info.json").then((response) => response.json().then((data) => { 

        var p = document.createElement("p");
        p.innerText = data.name;
        document.getElementById("title").appendChild(p);

        p = document.createElement("p");
        p.innerText = data.description;
        document.getElementById("desc").appendChild(p);
    }));
}