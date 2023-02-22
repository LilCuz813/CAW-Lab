class Country{
    constructor(name, speak, phrase, colors){
        this.name = name;
        this.speak = speak;
        this.phrase = phrase;
        this.colors = colors;
    }

    
    
}

let japan = new Country("Japan", "Japanese","Kon'nichiwa sekai", ["red","white"]);
let italy = new Country("Italy", "Italian","Ciao mondo", ["red","green","white"])
let greece = new Country("Greece","Greek","Geiá sou Kósme", ["blue","white"]);
let southAfrica = new Country("South Africa", "isiZulu", "Sawubona Mhlaba",["green","yellow","red","blue","black","white"]);
let chile = new Country("Chile","Spanish", "Hola Mundo", ["red","white","blue"]);


function DisplayCountry(){
    let input;
    let country;
    selectElement = document.querySelector('#CountryList');
    input = selectElement.value;

    if(input === "Japan"){
        country = japan;
        DisplayColors(country);
    }
    else if(input === "Greece"){
        country = greece;
        DisplayColors(country);
    }
    else if(input === "Italy"){
        country = italy;
        DisplayColors(country);
    }
    else if(input === "South Africa"){
        country = southAfrica;
        DisplayColors(country);
    }
    else if(input === "Chile"){
        country = chile;
        DisplayColors(country);
    }
       
}
DisplayColors = (country) => {
    document.querySelector("#CountryName").innerHTML = country.name;
    document.querySelector("#OfficialLanguage").innerHTML = country.speak;
    document.querySelector("#HelloWorld").innerHTML = country.phrase;

    document.querySelector("#Color1").style.backgroundColor = country.colors[0];
    document.querySelector("#Color2").style.backgroundColor = country.colors[1];
    document.querySelector("#Color3").style.backgroundColor = country.colors[2];


}