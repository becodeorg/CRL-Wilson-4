# Asynchronous Javascript

### Promises

So we already know about timeouts/intervals. There is another type of asynchronous code we haven't seen so far, which is [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), a name that pretty much says : `It is not ready yet, but when ready I'll execute something!`

![I promise](promise.gif)

A promise is characterized by its **state**.

| State             | Description                              |
| ----------------- | ---------------------------------------- |
| Pending           | The Promise is initialized               |
| Settled           | The Promise is done (failed or succeful) |
| Success (resolve) | The promise is succesful                 |
| Failure (reject)  | The promise has failed                   |

A common use case for promise are AJAX requests. The idea is to dynamically load the content of the webpage by doing selected request on the page.


![A page full of pending promises](mybecode.png)
_This page is full of pending promises..._

### The fetch function

I assume this is still pretty vague, so let's try an example right away. The [fetch() function](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch), allows you to send a request to your server.

In JavaScript, Promises are often used with the fetch function to handle network requests. Even though we’re not loading a webpage or manipulating HTML, we can still use fetch to work with data.



Imagine we have a text document on our server, named `document.txt`:

```javascript
const request = fetch("document.txt");
console.log("Making the request:", request); // Promise is pending

const response = request.then(response => response.text());
console.log("Treating the response", response); // Promise is pending

response.then(text => {
	console.log(text);
});
```

-   Request creates a promise. It will be fulfilled when the server sends the document back.
-   When we have the response, we call `response.text()` to say we want to interpret the response as a text. It creates a new promise
-   When the text is fully loaded, we create a function to log the result into the console.

We can **chain** the promises so they appear more concise:

```javascript
fetch("document.txt")
	.then(response => response.text())
	.then(text => {
    // we wait for response,then we add the data in our html page
		const p = document.createElement("p");
		p.textContent = text;

		document.body.appendChild(p);
	});
```

We just need to add a little something so the code does not behave weirdly. What if `document.txt` does not exist ? Or has been renamed ? Or the server simply died ? We need to take Promise failure into account using the `catch()` method.

```javascript
fetch("document.txt")
	.then(response => response.text())
	.then(text => {
		const p = document.createElement("p");
		p.textContent = text;

		document.body.appendChild(text);
	})
	.catch(error => {
		console.log("There was an error!", error);
	});
```

### Cross-server request (APIs)

Normally you would use `fetch()` to query your own server, however some websites allow us to do query on their server via an `API`.

In this case an API is simply an URL that returns special values that you can use directly in your JS code. For this example, we're going to use the [**agify** API](https://agify.io/) to predict the age of a given name.

For instance if you go to [https://api.agify.io/?name=nicolas](https://api.agify.io/?name=nicolas), you'll see a webpage returning a [JSON object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), containing the number of person with that name, and their median age. This is super useful because we can directly use this value in our code. Here's how:

`agify might be down` : If you do this on site, since we are all on the same network connection, we will reach the cap of allowed request by the website, it's ok just find another free api : https://apilist.fun/collection/free-apis
or use on of those: https://jsonplaceholder.typicode.com/ https://swapi.dev/ 

```javascript
const fetchName = name => fetch("https://api.agify.io/?name=" + name);

fetchName("keith")
	.then(response => response.json())
	.then(json => {
		console.log(json.age);
		console.log(json.count);
	})
	.catch(error => {
		console.log("There was an error!", error);
	});
```

Have a bit of fun with those api before going into the nitty gritty.

### [> The promises drill exercises <](promiseDrill.md)

### Ressources

-   [MDN: Using promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
-   [MDN: Using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
-   [Call stack & Event Loop slides](https://docs.google.com/presentation/d/1F5CymeDIWByzOw6qPi0ZO0AEwt0Svow_9zjZnjWkG64/edit?usp=sharing)


