// Задача №1
function multiply() {
    if (!arguments.length) return 0;
    let varMult = 1;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') return new Error('arguments must be a number');
        varMult *= arguments[i];
  }
    return varMult;
}
console.log(multiply(1, 2, 3));
console.log(multiply(1, 2, 3, 4));
console.log(multiply(4, 1, 'a', 5));
console.log(multiply());
console.log(multiply(0));

// Задача №3
function reverseString(str) {
    if (typeof str !== 'string') return new Error('text is not a string');
    if (!str.length) return new Error('string is empty');
    let newStr = '';
    let i = str.length;
    while(i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString(5));    
console.log(reverseString(''));    
console.log(reverseString('test'));    
console.log(reverseString('12345'));   

// Задача №4
function getCodeStringFromText(str) {
    if (typeof str !== 'string') return new Error('text is not a string');
    if (!str.length) return new Error('string is empty');
    let newStr = '';
    let i = 0;
    while(i < str.length) {
        newStr += (i !== str.length - 1) ? str.charCodeAt(i++) + ' ' : str.charCodeAt(i++);
    }
    return newStr;
}
console.log(getCodeStringFromText(''));
console.log(getCodeStringFromText(1, 2));
console.log(getCodeStringFromText('hello'));

// Задача editTask
let todos = [
    {
      text: 'Learn JavaScript',
      id: 0
    },
    {
      text: 'Learn Angular',
      id: 1
    }
];

function editTask(id, newText) {
    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
    if (typeof newText !== 'string') return new Error('text is not a string');
    if (!newText.length) return new Error('text is empty');
    id = Number(id);

    let todo;
  
    for (let i = 0; i < todos.length; i++ ) {
      if (todos[i].id === id) {
        todo = todos[i];
        todos[i].text = newText;
        break;
      }
    }
    return todo || 'task not found';
}

console.log(editTask('Learn Vue'));
console.log(editTask('string', 'Learn Vue'));
console.log(editTask('5', 'Learn Vue'));
console.log(editTask(1, 'Learn Vue'));
