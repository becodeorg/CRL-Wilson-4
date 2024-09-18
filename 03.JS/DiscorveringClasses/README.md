## Background & Objectives

In these first modules, you've written several JavaScript programs involving built-in objects like `String`, `Number`, `Array`, and `Object`. You've worked with *instances* of these objects.

`String` is a built-in object, right? This means that `"john lennon"` or `"Hello!"` can both be considered instances of the `String` object.

Using built-in objects is good, but creating your *own* objects is even better FOr today, we will call it classes

## Specs

Implement an `OrangeTree` class that models the life of an orange tree (its birth, life cycle, and death).

### Aging

- When an orange tree is born, its age is 0.
- Each year, the tree should age by 1 year. 
- The orange tree **cannot**  die until it reaches 50 years old.
- After 50 years, the probability of dying increases each year.
- No tree can live more than 100 years.
- You should be able to know the tree's age. 
- You should be able to find out if the tree is dead by calling the `isDead()` method.

### Height

- An orange tree grows 1 meter per year until it is 10 years old. Then it stops growing.
- You should be able to measure the height of the tree.

### Fruits

- An orange tree produces 100 fruits a year once it is strictly more than 5 years old.
- The tree produces 200 fruits a year once it reaches 10 years old.
- The tree stops producing fruits once it reaches 15 years old. 
- You should be able to pick **a single fruit**  from the tree by calling the `pickAFruit()` method on it (but only if there are some left).
- At the end of each year, the oranges which have not been picked will fall off.
- You should be able to find out how many fruits are left hanging on the tree.

To simulate time passing, you will need to implement the following **method** :

```javascript
oneYearPasses() {
  // TODO: check if the tree has survived
  // TODO: if so, make the tree grow
  // TODO: and produce fruits
}
```



To test it, launch the interface (`node basic_oop.js`) and see what happens ;)

## Key learning points 
- What are the instance variables of the `OrangeTree` object?

- What do we mean by state?

- Which methods, when called, modify the object they are called on? How should you name these methods?

## Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
- https://javascript.info/classes
