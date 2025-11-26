## 📘 1. Interfaces vs Types in TypeScript

Both **interface** and **type** define shapes of data, but they aren't always interchangeable.

---

## 🔷 What is an *Interface*?
Interfaces describe the structure of objects, and they work well for API shapes and class definitions.

### ✔ Example
```ts
interface User {
  name: string;
  age: number;
}
```

### ⭐ Key Features of Interfaces
#### 1. Extendable
```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
```

#### 2. Declaration Merging
Interfaces with the same name merge automatically:
```ts
interface Box {
  width: number;
}

interface Box {
  height: number;
}
// final Box = { width: number; height: number }
```

#### 3. Clean and readable for large projects

---

## 🔷 What is a *Type Alias*?
Types can define **objects**, **primitives**, **unions**, **tuples**, etc.

### ✔ Example
```ts
type User = {
  name: string;
  age: number;
};
```

### ⭐ What Types Can Do
#### 1. Primitive aliases
```ts
type ID = string | number;
```

#### 2. Union & intersection types
```ts
type Response = "success" | "error";
```

#### 3. Tuples
```ts
type Point = [number, number];
```

#### 4. Combine types
```ts
type Person = { name: string };
type Employee = Person & { salary: number };
```

### ⚠ Key Limitation
- No declaration merging.


### 🧠 Interview Tip
> Use **interface** for objects; use **type** for unions, primitives, and complex compositions.

---

# 📘 2. The `keyof` Keyword

`keyof` creates a type representing all **keys** of an object.

### ✔ Example
```ts
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

type UserKeys = keyof User;
```

### Result
```ts
// "id" | "name" | "isActive"
```

---

# 🔧 Using `keyof` With Functions

Very common interview question.

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  id: 1,
  name: "Alice",
  isActive: true
};

const name = getValue(user, "name"); // valid
const wrong = getValue(user, "age"); // ❌ ERROR
```

### ⭐ Why `keyof` Is Useful
- Ensures **type-safe** property access
- Helps build utilities like `pick`, `omit`
- Prevents misspelled key errors

---

# 🎯 Final Interview Summary

### **Interfaces**
- Best for objects
- Extendable
- Declaration merging
- Great for API design

### **Types**
- Flexible (unions, tuples, primitives)
- No merging
- Useful for advanced type manipulation

### **keyof**
- Creates a type of object keys
- Ensures safe property access
- Common in reusable TypeScript utilities

---

If you want, I can add **interview questions**, **MCQs**, or **diagrams** to help you prepare further.