'use strict';

//1. Создать класс Pokemon, конструктор которого принимает имя и уровень в качестве аргумента.

class Pokemon {

	constructor(name, level) {
		this.name = name;
		this.level = level;
	}

	show() {
		console.log (`Имя: ${this.name}, уровень: ${this.level}`);
	}
    
	valueOf() {
        	return this.level;
    	} 
}

//2. Создать класс PokemonList, который в качестве аргументов принимает любое количество покемонов. Экземпляры этого класса должны обладать всеми функциями массива. 

class PokemonList extends Array {
	
	add (name, level) {
		let newPokemon = new Pokemon (name, level);
		this.push(newPokemon);
	}

	show(){
		for (let pokemon of this) {
			pokemon.show();
		}
		console.log("Общее количество: " + this.length);
	}
    
//7. Добавить спискам покемонов метод max, который возвращает покемона максимального уровня.
    
	max (){  
		return this.find((pokemon) => {
			if (pokemon.level == Math.max(...this)) return pokemon;
		});
	}
	
}

//3. Создать два списка покемонов и сохранить их в переменных lost и found. Имена и уровни придумайте самостоятельно.

var lost =  new PokemonList (new Pokemon("Pidgeotto", 10), new Pokemon("Bulbasaur", 12));
var found = new PokemonList (new Pokemon("Butterfree", 14), new Pokemon("Luxio", 5), new Pokemon("Shinx", 12));

//4. Добавить несколько новых покемонов в каждый список.

lost.add ("Rampardos", 7);
lost.add ("Kricketot", 4);
lost.add ("Chingling", 1);
found.add ("Arceus", 9);
found.add ("Oshawott", 5);

//6. Перевести одного из покемонов из списка lost в список found

/* Старый метод 
for (var i = 0; i < lost.length; i++) {
	if (lost[i].getName == "Bulbasaur") {
		found.add(lost[i].getName, lost[i].getLevel);
		lost.splice(i,1);
	}
}
*/

//Функция, переводящая покемона в другой массив с помощью метода findIndex
function change (){
	lost.findIndex((pokemon, i) => {
		if (i == 2) {
			console.log("Переводим покемона: " + lost[i].name + ' ' + lost[i].level)
			found.add(lost[i].name, lost[i].level);
			lost.splice(i,1);
		}
	})
}


//Проверка работоспособности
lost.show();
console.log("Покемон максимального уровня: " + lost.max().name + ' ' + lost.max().level);
found.show();
console.log("Покемон максимального уровня: " + found.max().name + ' ' + found.max().level);
change();
lost.show();
found.show();
