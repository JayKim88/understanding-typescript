## Typescript features

1. Types
2. Next-gen Javascript Features(compiled down for older Browsers)
3. Non-Javascript Features like Interfaces or Generics
4. Meta-Programming Features like Decorators
5. Rich Configuration Options
6. Modern Tooling

## Core Types

1. number
2. string
3. boolean
4. object
5. Array
6. Tuple: Just in TypeScript, Fixed-length array ? Array composed of diverse types with specific number of parameters and type allocation location
7. Enum: Just in Typescript, Automatically enumerated global constant identifies ? human readable identifier
8. any

## Nested Objects & Types

```javascript
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
```

This would be the type of such an object:

```typescript
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```

## Type Aliases & Object Types

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

```js
type User = { name: string, age: number };
const u1: User = { name: "Max", age: 30 }; // this works!
```

This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

```js
function greet(user: { name: string, age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string, age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

To:

```js
type User = { name: string, age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```
