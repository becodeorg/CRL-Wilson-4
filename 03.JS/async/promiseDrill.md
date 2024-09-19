# JavaScript Promises and `async/await` Challenges

## 1. Understanding the Basics of Promises

-   **Challenge**: Create a Promise that resolves after 2 seconds and log its result using `.then()`.
-   **Bonus**: Modify the Promise to reject, and handle the error using `.catch()`.

<details>
  <summary>Hint</summary>
  Use `setTimeout` inside the promise to simulate a delay before resolving. For the bonus, randomly reject using `Math.random()`.
</details>

---

## 2. Chaining Multiple Promises with `.then()`

-   **Challenge**: Chain two promises so that the second runs only after the first has resolved.
-   **Bonus**: Insert a rejected promise in the chain and handle the error gracefully with `.catch()`.

<details>
  <summary>Hint</summary>
  Create two promises and return the second one inside the `.then()` of the first. For the bonus, reject the second promise and catch the error using `.catch()`.
</details>

---

## 3. Promise.all() to Run Multiple Promises in Parallel

-   **Challenge**: Use `Promise.all()` to run two promises in parallel and log the results when both complete.
-   **Bonus**: Modify one of the promises to reject and handle the rejection using `.catch()` while still allowing other promises to run.

<details>
  <summary>Hint</summary>
  Use `Promise.all([promise1, promise2])` to run both promises concurrently. In the bonus, handle the rejection inside `.catch()`.
</details>

---

## 4. Convert `.then()` Chain to `async/await`

-   **Challenge**: Refactor a `.then()` chain of two promises to use `async/await` instead.
-   **Bonus**: Add error handling with `try...catch` and simulate a rejection in one of the promises.

<details>
  <summary>Hint</summary>
  Use `await` for the promises instead of chaining `.then()`. For the bonus, wrap the `await` calls inside `try...catch` to handle rejections.
</details>

---

## 5. Handling Errors with Async/Await

-   **Challenge**: Create a promise that randomly resolves or rejects, then handle the error using `async/await` with `try...catch`.
-   **Bonus**: Chain multiple random promises and handle all possible errors.

<details>
  <summary>Hint</summary>
  Use `Math.random()` to randomly reject the promise and catch errors using `try...catch`. In the bonus, chain multiple `await` calls inside the `try` block to handle all possible errors.
</details>

---

## 6. Sequential vs. Parallel Execution with `async/await`

-   **Challenge**: Execute two promises sequentially and then in parallel using `async/await`. Measure and compare the execution time.
-   **Bonus**: Add more promises and measure the difference in timing between sequential and parallel execution with more tasks.

<details>
  <summary>Hint</summary>
  For sequential execution, `await` each promise one after the other. For parallel, use `Promise.all()`. In the bonus, add more promises and compare timing.
</details>

---

## 7. Using `Promise.race()` to Handle Timeout Scenarios

-   **Challenge**: Use `Promise.race()` to handle a long-running promise and set a timeout that cancels it if it takes too long.
-   **Bonus**: Adjust the timeout and task durations to handle scenarios where different tasks take variable time, and handle rejections with `try...catch`.

<details>
  <summary>Hint</summary>
  Use `Promise.race()` with one promise resolving after a delay and another rejecting after a timeout. For the bonus, adjust delay and ensure rejection handling with `try...catch`.
</details>

---

## 8. Building a Basic API Request with `fetch` and `async/await`

-   **Challenge**: Use `async/await` to make a basic `fetch()` request to an API and log the result. Handle any possible errors.
-   **Bonus**: Simulate a network failure by using an invalid URL or forcing an error condition, then handle the resulting error gracefully.

<details>
  <summary>Hint</summary>
  Use `await fetch(url)` and parse the response with `.json()`. For the bonus, use an invalid URL to simulate failure and handle it in `try...catch`.
</details>

---

## 9. Chaining Multiple API Calls with `async/await`

-   **Challenge**: Perform two dependent API requests using `async/await`, where the second request depends on the result of the first.
-   **Bonus**: Introduce an artificial failure in the second API call, and handle the error while still logging the result of the first call.

<details>
  <summary>Hint</summary>
  Use `await fetch()` for the first request, then use its result in the second API call. For the bonus, simulate failure in the second call and handle it in `try...catch`.
</details>

---

## 10. Creating Your Own Utility Function Using Promises

-   **Challenge**: Create a reusable utility function that retries a failing promise a set number of times before rejecting.
-   **Bonus**: Add exponential backoff logic to the retry mechanism, increasing the delay between retries.

<details>
  <summary>Hint</summary>
  Use recursion to retry the operation and decrease retry count each time. For the bonus, use `setTimeout` to introduce delays, increasing the delay on each retry.
</details>
