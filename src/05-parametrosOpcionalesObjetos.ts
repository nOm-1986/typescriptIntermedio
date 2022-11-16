//I took the documentation from : https://bobbyhadz.com/blog/typescript-object-parameter-default-value
// ✅ Set default values for parameters
function getPerson(
  { name = 'Tom', age }: { name?: string; age: number }
) {
  console.log(name);
  console.log(age);
}

getPerson({ age: 30 }); // 👉️ Tom, 30

// ✅ Make object optional WITH defaults
function getPerson2(
  { name, age }: { name: string; age: number } = { name: 'Tom', age: 30 },
) {
  console.log(name);
  console.log(age);
}

getPerson2(); // 👉️ Tom, 30

// ✅ Make object optional WITHOUT defaults
function getPerson4(
  { name, age }: { name?: string; age?: number } = {}
) {
  console.log(name);
  console.log(age);
}

getPerson4(); // 👉️ undefined, undefined

// ✅ Setting default values inside function body
function getPerson3(obj: { name?: string; age: number }) {
  const { name = 'Tom', age } = obj;

  console.log(name);
  console.log(age);
}
