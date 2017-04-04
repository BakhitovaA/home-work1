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
    
    valueOf() {
        return this.level;
    } 
}

//2. Создать класс PokemonList, который в качестве аргументов принимает любое количество покемонов. Экземпляры этого класса должны обладать всеми функциями массива. 

class PokemonList extends Array {
	
//А так же иметь метод add, который принимает в качестве аргументов имя и уровень, создает нового покемона и добавляет его в список.
	
    add (name, level) {
		let newPokemon = new Pokemon (name, level);
		this.push(newPokemon);
	}
    
//5. Добавить спискам покемонов метод show, который выводит информацию о покемонах и их общее количество в списке.

    show(){
		for (let pokemon of this) {
			pokemon.show();
		}
		console.log("Общее количество: " + this.length);
	}
    
//7. Добавить спискам покемонов метод max, который возвращает покемона максимального уровня.
    
    max (){  
        for (var pokemon of this) {
            if (pokemon.getLevel == Math.max(...this)) return pokemon;
        } 
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

//Добавленная функция, возвращающая покемона максимального уровня с помощью метода find
function max2(element, index, array) {
    if (element.getLevel == Math.max(...array)) {
        return element;
    }
}

//6. Перевести одного из покемонов из списка lost в список found

/* Старый метод 
for (var i = 0; i < lost.length; i++) {
	if (lost[i].getName == "Bulbasaur") {
		found.add(lost[i].getName, lost[i].getLevel);
		lost.splice(i,1);
	}
}
*/

//Добавленная функция, переводящая покемона в другой массив с помощью метода findIndex
function change(element, index, array) {
    if (index == 2) {
        console.log("Переводим покемона: " + array[index].getName + ' ' + array[index].getLevel)
		found.add(array[index].getName, array[index].getLevel);
		array.splice(index,1);
	}
}

//Проверка работоспособности
lost.show();
console.log("Покемон максимального уровня: " + lost.max().getName + ' ' + lost.max().getLevel);
console.log("Покемон максимального уровня: " + lost.find(max2).getName + ' ' + lost.find(max2).getLevel)
found.show();
console.log("Покемон максимального уровня: " + found.max().getName + ' ' + found.max().getLevel);
console.log("Покемон максимального уровня: " + found.find(max2).getName + ' ' + found.find(max2).getLevel)
lost.findIndex(change)
lost.show();
found.show();
