const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    if ( pokeNameInput.value == ""){
        document.getElementById("msgIn").style.display = "block";
        return;
    }
    document.getElementById("msgIn").style.display = "none";
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
           // console.log(url);
            pokeImage("llorando.png");
            document.getElementById("msgErr").style.display = "block";
            document.getElementById("infoPokemon").style.display = "none";
        }
        else {
            document.getElementById("msgErr").style.display = "none";
            document.getElementById("infoPokemon").style.display = "block";
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.home.front_shiny;
            pokeImage(data);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (data) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = data.sprites.other.home.front_shiny;

    document.getElementById("lbNombre").innerText = data.forms[0].name.toUpperCase() + " (" + data.id + ")";
    document.getElementById("lbTipo").innerText = data.types[0].type.name.toUpperCase();

    document.getElementById("val1").innerText = data.stats[0].stat.name;
    document.getElementById("valor1").innerText = data.stats[0].base_stat;
   
    document.getElementById("val2").innerText = data.stats[1].stat.name; 
    document.getElementById("valor2").innerText = data.stats[1].base_stat;

    document.getElementById("val3").innerText = data.stats[2].stat.name; 
    document.getElementById("valor3").innerText = data.stats[2].base_stat;
 
    document.getElementById("val4").innerText = data.stats[3].stat.name; 
    document.getElementById("valor4").innerText = data.stats[3].base_stat;

    document.getElementById("val4").innerText = data.stats[4].stat.name; 
    document.getElementById("valor4").innerText = data.stats[4].base_stat;

    document.getElementById("val5").innerText = data.stats[5].stat.name; 
    document.getElementById("valor5").innerText = data.stats[5].base_stat;
    recorreArr(data.moves);
}

const recorreArr = (arr) => arr.forEach(item => {
    const itemList = `${item.move.name}`;
    document.getElementById("listMovs").innerHTML += itemList;
});
