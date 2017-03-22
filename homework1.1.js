'use strict';

//1. Создать класс Pokemon, конструктор которого принимает имя и уровень в качестве аргумента. Все экземпляры этого класса должны иметь общий метод show, который выводит информацию о покемоне.

class Pokemon {

  constructor(name, level) {
    this.name = name;
	this.level = level;
  }

  show() {
    console.log(this.name + ' ' + this.level);
  }
    
    get getName (){
		return this.name;
	}
    
	get getLevel (){
		return this.level;
	}  
}

//2. Создать класс PokemonList, который в качестве аргументов принимает любое количество покемонов. Экземпляры этого класса должны обладать всеми функциями массива. 

class PokemonList extends Array {
	constructor (...pokemons) {
		return super(...pokemons);
	}

//А так же иметь метод add, который принимает в качестве аргументов имя и уровень, создает нового покемона и добавляет его в список.

	add (name, level) {
		let newPokemon = new Pokemon (name, level);
		this.push(newPokemon);
	}
    
//5. Добавить спискам покемонов метод show, который выводит информацию о покемонах и их общее количество в списке.

    show(){
		for (let pokemon of this) {
			console.log(pokemon.getName + ' ' + pokemon.getLevel);
		}
		console.log("Общее количество: " + this.length);
	}
    
//7. Добавить спискам покемонов метод max, который возвращает покемона максимального уровня.
    
    max (){
		var levelMax = 1;
        var pokWithMaxLvl;
		for (var pokemon of this) {
			if (pokemon.getLevel > levelMax) {
                pokWithMaxLvl = pokemon;
                levelMax = pokemon.getLevel;
            }
		}
        console.log("Покемон максимального уровня: " + pokWithMaxLvl.getName + ' ' + pokWithMaxLvl.getLevel);
	}
}

//3. Создать два списка покемонов и сохранить их в переменных lost и //found. Имена и уровни придумайте самостоятельно.

var lost =  new PokemonList (new Pokemon("Pidgeotto", 10), new Pokemon("Bulbasaur", 12));
var found = new PokemonList (new Pokemon("Butterfree", 14), new Pokemon("Luxio", 5), new Pokemon("Shinx", 12));

//4. Добавить несколько новых покемонов в каждый список.

lost.add ("Rampardos", 7);
lost.add ("Kricketot", 4);
lost.add ("Chingling", 1);
found.add ("Arceus", 9);
found.add ("Oshawott", 5);

//6. Перевести одного из покемонов из списка lost в список found

var i = 0;
for (var pokemon of lost) {
	if (pokemon.getName == "Luxio") {
        found.add(pokemon.getName, pokemon.getLevel);
		lost.splice(i,1);
	}
i++;
}
