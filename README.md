## 📘 ১. TypeScript-এ Interface এবং Type এর পার্থক্য

TypeScript-এ **interface** এবং **type**—দুটোই ডেটার কাঠামো/শেপ (shape) বর্ণনা করতে ব্যবহৃত হয়।
কিন্তু এগুলো কিছু ক্ষেত্রে ভিন্নভাবে কাজ করে।

---

## 🔷 Interface কী?

**Interface** মূলত **object-এর structure** বর্ণনা করতে ব্যবহৃত হয়।
এটি API model, class, এবং বড় প্রজেক্টে structure define করার জন্য খুবই উপযোগী।

### ✔ উদাহরণ

```ts
interface User {
  name: string;
  age: number;
}
```

---

### ⭐ Interface-এর গুরুত্বপূর্ণ বৈশিষ্ট্য

#### 1. **Extend করা যায়**

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
```

এভাবে object structure সহজে বড় করা যায়।

---

#### 2. **Declaration Merging সাপোর্ট করে**

দুইটি interface একই নামে লিখলে TypeScript নিজে থেকেই merge করে।

```ts
interface Box {
  width: number;
}

interface Box {
  height: number;
}

// চূড়ান্ত Box:
{ width: number; height: number }
```

---

#### 3. **বড় প্রজেক্টে পড়তে সহজ এবং পরিষ্কার**

---

## 🔷 Type Alias কী?

**Type alias** দিয়ে object, primitive, union, tuple—সবকিছু define করা যায়।
এটি interface এর তুলনায় বেশি flexible।

### ✔ উদাহরণ

```ts
type User = {
  name: string;
  age: number;
};
```

---

### ⭐ Type দিয়ে যেসব কাজ করা যায়

#### 1. **Primitive alias**

```ts
type ID = string | number;
```

#### 2. **Union বা intersection**

```ts
type Response = "success" | "error";
```

#### 3. **Tuple**

```ts
type Point = [number, number];
```

#### 4. **Type combine করা**

```ts
type Person = { name: string };
type Employee = Person & { salary: number };
```

---

### ⚠ Type-এর সীমাবদ্ধতা

* **Declaration merging হয় না**
* একই নামে দুইবার লিখলে ERROR দেয়

---

## 🧠 ইন্টারভিউতে মনে রাখার টিপ

> **Object structure এর জন্য interface**,
> **Union, primitive, tuple বা complex type তৈরির জন্য type** ব্যবহার করা সেরা।

---

# 📘 ২. `keyof` কীওয়ার্ড

`keyof` একটি object's **সকল key-এর union type** তৈরি করে।

### ✔ উদাহরণ

```ts
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

type UserKeys = keyof User;
```

### **Result**

```
"id" | "name" | "isActive"
```

---

## 🔧 Function-এ `keyof` এর ব্যবহার

এটি ইন্টারভিউতে খুবই common প্রশ্ন।

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

---

### ⭐ `keyof` কেন গুরুত্বপূর্ণ?

* Property access কে type-safe করে
* ভুল key-access আটকায়
* Utility function (pick, omit, filter)-এ বহুল ব্যবহৃত

---

# 🎯 ইন্টারভিউ সারাংশ

### **Interfaces**

* Object-এর shape তৈরিতে সবচেয়ে ভালো
* Extendable (extends করা যায়)
* Declaration merging হয়
* বড় প্রজেক্টে readable

---

### **Types**

* Union, tuple, primitive, intersection define করতে উপযোগী
* Flexible
* Merging হয় না

---

### **keyof**

* Object-এর সব key-এর তালিকা বের করে
* Safe property access নিশ্চিত করে
* Utility functions-এ ব্যাপক ব্যবহৃত


