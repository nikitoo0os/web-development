function displayGreeting() {
    console.log('Hello, world!');
}
displayGreeting(); //Hello world

// функция с параметром
function displayGreeting(name) { 
    const message = `Hello, ${name}!`; 
    console.log(message); 
}
displayGreeting("Nikita") //Hello, Nikita!

let greetingMessage = createGreetingMessage('Christopher');

//анонимная функция
setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)

//функция со стрелкой 
setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)


