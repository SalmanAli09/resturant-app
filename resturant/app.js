function maincourse() {
    document.getElementById("panel").style.display = "flex";
    document.getElementById("panel").style.justifyContent = "space-around";
    document.getElementById("panel").style.color = "black";

}
function main_coursehide() {
    document.getElementById("panel").style.display = "none";
}
function call_food() {
    document.getElementById("panel").style.display = "flex";
    document.getElementById("panel").style.justifyContent = "space-around";
    var a = document.getElementById("t1").value;
    var b = a.toLowerCase();
    if(b === ""){
        alert("Enter Something...");
        return(false);
    }
    var sta = document.getElementById("status").value;
    var arr = ["pizza", "burger", "fries", "pasta", "tikka", "sandwitch"];
    var match = true;
    for (var i = 0; i <= arr.length; i++) {
        if (b == arr[i]) {
            match = false;
            sta = "available";
            document.getElementById('status').innerHTML = sta;
            document.getElementById('name_item').innerHTML = arr[i];
            break;
        }
    } if (match === true) {
        document.getElementById('name_item').innerHTML = b;
        document.getElementById('status').innerHTML = "Not Available";
        document.getElementById('notice_2').innerHTML = "<h2>" + "Sorry!" + "</h2>" + "<br>" + "<h3>" + arr + "</h3>" + "These are AVAILABLE at the moment.";
        document.getElementById("complementry").innerHTML = "<center>"+ "-" + "</center>";

    }
    if (b === "pizza") {
        document.getElementById("complementry").innerHTML = "With pizza you can also try Extra Toping :)"
    }
    if (b === "burger") {
        document.getElementById("complementry").innerHTML = "Chicken burger - Beef Burger - Chesse Burger are :)"
    }
    if (b === "fries") {
        document.getElementById("complementry").innerHTML = "Fries with different falvours are available :)"
    }
    if (b === "pasta") {
        document.getElementById("complementry").innerHTML = "Try Our evergreen product Italian Pasta."
    }
    if (b === "tikka") {
        document.getElementById("complementry").innerHTML = "Full tikka and half Tikka is available with complementry RAITA.:)"
    }


}

function colddrink() {
    document.getElementById("colddrink").style.display = "flex";
    document.getElementById("colddrink").style.justifyContent = "space-around";
    document.getElementById("colddrink").style.color = "black";
}
function colddrinkhide() {
    document.getElementById("colddrink").style.display = "none";
}

function call_drink() {
    document.getElementById("colddrink").style.display = "flex";
    document.getElementById("colddrink").style.justifyContent = "space-around";
    var c = document.getElementById("t2").value;
    var d = c.toLowerCase();
    if(d === ""){
        alert("Enter Something...");
        return(false);
    }

    var sta_1 = document.getElementById("status_1").value;
    var notice = document.getElementById("notice").value;
    var arr_1 = ["marinda", "coke", "pepsi", "dew", "sting"];
    var match = true;
    for (var i = 0; i <= arr_1.length; i++) {
        if (d == arr_1[i]) {
            match = false;
            sta_1 = "available";
            document.getElementById('status_1').innerHTML = sta_1;
            document.getElementById('name_item_1').innerHTML = arr_1[i];
            document.getElementById("desert_2").style.display = "flex";
            break;
        }
    } if (match === true) {
        "<hr/>"
        document.getElementById('name_item_1').innerHTML = d;
        document.getElementById('status_1').innerHTML = "Not Available";
        document.getElementById('notice').innerHTML = "<h2>" + "Sorry!" + "</h2>" + "<br>" + "<h3>" + arr_1 + "</h3>" + "These are AVAILABLE at the moment.";

    }
}



function desert() {
    document.getElementById("desert").style.display = "flex";
    document.getElementById("desert").style.justifyContent = "space-around";
    document.getElementById("desert").style.color = "black";
}
function deserthide() {
    document.getElementById("desert").style.display = "none";
}

function call_desert() {
    document.getElementById("desert").style.display = "flex";
    document.getElementById("desert").style.justifyContent = "space-around";
    var e = document.getElementById("t3").value;
    var f = e.toLowerCase();
    if(f === ""){
        alert("Enter Something...")
        return(false)
    }
    var sta_2 = document.getElementById("status_2").value;
    // var notice = document.getElementById("notice").value;
    var arr_2 = ["cake", "pasteries", "brownies", "dounuts", "custurd"];
    var match = true;
    for (var i = 0; i <= arr_2.length; i++) {
        if (f == arr_2[i]) {
            match = false;
            sta_2 = "available";
            document.getElementById('status_2').innerHTML = sta_2;
            document.getElementById('name_item_2').innerHTML = arr_2[i];
            document.getElementById("desert_2").style.display = "flex";
            document.getElementById("desert_1").style.display = "flex";
            break;
        }
    } if (match === true) {
        document.getElementById('name_item_2').innerHTML = f;
        document.getElementById('status_2').innerHTML = "Not Available";
        document.getElementById('notice_1').innerHTML = "<h2>" + "Sorry!" + "</h2>" + "<br>" + "<h3>" + arr_2 + "</h3>" + "These are AVAILABLE at the moment.";
        // document.getElementById('notice').innerHTML = "<h2>" + "Sorry!" + "</h2>" + "<br>" + "<h3>" + arr_1 + "</h3>" + "These are AVAILABLE at the moment.";


    }
}
