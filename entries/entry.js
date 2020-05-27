var position = window.location.search;
if (position !== "") {
    position = parseInt(position.substring(position.indexOf("page") + 5, position.length));

    for (var i = position; i < position + 20; i++) {
        if (i >= entryAmount) {
            break;
        }
        addThumbnail(i);
    }
}


function addThumbnail(id) {
    var div = document.createElement("div");
    div.className = "thumb";

    var a = document.createElement("a");
    a.href = "view.html?id="+ id;

    var img = document.createElement("img");
    img.src = id + "/small.jpg";

    a.appendChild(img);

    div.appendChild(a);

    document.getElementById("thumbs").appendChild(div);
}