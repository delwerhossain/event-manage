<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i> declared a variable greeting using the let keyword, but you didn't assign any value to it So, the correct answer is B because there is a typo in your code, and the variable greeting remains undefined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer : C </b></summary>
<p>

#### Answer: ?

<i> the correct answer is C: "12" because JavaScript converts 1 to a string and concatenates it with the string "2".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i> i have an array food with four elements

when create an object info with a property favoriteFood that ini

Then, you reassign the info.favoriteFood property to

However, this reassignment only affects the info object, and it doesn't modify the original food array. The food array remains unchanged.
so,the output will be A..
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:

The correct answer is B: Hi there, undefined.

<i>
The sayHi function takes one parameter, name, and returns a string that includes the value of name in the format "Hi there, ${name}.
In the console.log(sayHi()),
Therefore, the function returns "Hi there, undefined" because it's trying to concatenate the string "Hi there, " with the undefined value of name.
</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>
this array nums with four elements
initialize a variable count to 0.
use the forEach method to iterate through each element of the nums array.
So, for the elements 1, 2, and 3, the condition if (num) evaluates to true, and count is incremented by 1 each time.
So, the correct answer is C because the count variable is incremented for each non-zero element in the nums array, resulting in a final value of 3.

</i>

</p>
</details>
