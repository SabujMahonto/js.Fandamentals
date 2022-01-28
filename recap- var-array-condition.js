// nauber
var quantity = 1;
// String
var bottleColor = 'yellow'
// boolean 
var isFull = false;
// Array 
var items = [ 'bottle' ,'pen', 'paper'];
    items.push('book');  //array push
    items.push('watch'); //array push

    items.pop(); // array pop

    // Concision

    if (items.length > 4){
        console.log('You have to many staff in you desk');
    }
    else if( items.length == 4 ){
        console.log('you have only 4 staff');
    }
    else{
        console.log('Woo!! you have a clean desk');
    }

var newItem = items.indexOf('pen');
// console.log(newItem);
console.log(items);

// items.indexOf('book') //-1


