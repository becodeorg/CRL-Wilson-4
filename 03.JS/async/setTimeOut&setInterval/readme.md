
## setInterval & setTimeout

So far all the things we have seen were executed in the order they were written. For example:

```javascript
const name = "Jean-Didier";
console.log(name);

const max = 5;
for (let i = 0; i < max; i++) {
	console.log(i);
}
console.log("end");
```

The console should display this:

```
Jean-Didier
0
1
2
3
4
end
```

This is how most programming languages work, and it is fine BUT ...

### The problem with synchronicity

You might already know that JavaScript can schedule a task in the future, for example when reading a file or when you set a timer.

Let's try the **BAD** approach.

```javascript
const in1Second = Date.now() + 1000;
let operations = 0;

console.log("Before the delay");

// This loop is executed until we reach the in1Second timestamp
while (Date.now() < in1Second) {
	operations += 1;
}

console.log("After the delay");
console.log("We could have done " + operations + " operations in that time.");
```

Result:

```
Before the delay
After the delay
We could have done 14152747 operations in that time.
```

This is really bad because, we're essentially blocking any other task from happening during the timeframe.

Using the **RIGHT** approach :

```javascript
console.log("Before the delay");
setTimeout(() => console.log("After 1s"), 1000);
console.log("After the delay");
```

```javascript
Before the delay
After the delay
After 1s
```

We can see that `After the delay` is displayed even though it is written after the **setTimeout** function. This is an **asynchronous** operation.

We can also say that this method is **non-blocking**, since code execution can continue, even though we have stuff planned in the future.

## FYI you should clear your timers 

You might not want your interval or timeout to keep running forever. In that case, you can stop it by using clearTimeout() or clearInterval().

Example: Stop After a Certain Time

```javascript
let count = 0;

function showMessage() {
  count++;
  console.log("Message shown " + count + " times.");
  if (count === 5) {
    console.log("Stopping the interval now.");
    clearInterval(intervalID); // Stop the interval after 5 messages
  }
}

const intervalID = setInterval(showMessage, 1000); // Run every 1 second
```
# Time to practice: 

## exo 1 
 Create a function that displays a word one character at a time, with each letter appearing after a 1-second delay (on a new line).


## exo 2 Timer-Based Guessing Game

 You will build a number guessing game where the player has a limited amount of time to guess a randomly generated number.

How the game works:
- The game picks a random number between 1 and 10.
- The player has 10 seconds to guess the number.
- The player can input guesses, and after each guess, they’re told if their guess is too high, too low, or correct.
- If they guess correctly or run out of time, the game ends.

hint: your good friend readline is back 