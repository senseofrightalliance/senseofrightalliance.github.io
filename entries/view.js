var id = window.location.search;
if (id !== "") {
    id = parseInt(id.substring(id.indexOf("id") + 3, id.length));

    var img = document.createElement("img");
    img.src = id + "/large.png";
    img.style.maxWidth = "80%";
    img.style.maxHeight = "700px";
    img.style.padding = "0";
    img.className = "block";
    document.getElementById("pic").appendChild(img);

    fetch(id + "/info.json").then((response) => response.json().then((data) => {

        // title
        var div = document.createElement("div");
        div.style.float = "left";

        var p = document.createElement("p");
        p.innerText = data.name;
        p.style.fontSize = "30px";
        p.style.margin = "0";

        div.appendChild(p);
        document.getElementById("top").appendChild(div);

        // relation
        div = document.createElement("div");
        div.style.float = "left";
        div.id = "relation";
        div.style.margin = "10px";

        var p = document.createElement("p");
        p.innerText = "relation: " + data.relation;
        p.style.backgroundColor = colors[data.relation];
        p.style.margin = "0";

        div.appendChild(p);
        document.getElementById("top").appendChild(div);

        p = document.createElement("p");
        p.className = "block";
        p.innerText = data.description;
        document.getElementById("desc").appendChild(p);
    }));
}

var colors = {
    "neutral": "#274670",
    "aggressive": "#96401b",
    "friendly": "#581559",
    "member": "#295915"
};

function expand(e) {
    var s = document.getElementById('pic').children[0].style;
    s.maxWidth = "10000px";
    s.maxHeight = "10000px";
    e.parentElement.parentElement.removeChild(e.parentElement);
}