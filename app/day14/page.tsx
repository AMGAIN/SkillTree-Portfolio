"use client";
import React from "react";

export default function TypeScriptNotes() {
  return (
    <div className="p-10" >
      <h1>📘 TypeScript Basics — Notes</h1><br />
      <div className="flex border gap-40">

        <div>
          <h2>🔹 1. Introduction to TypeScript</h2>
          <p>TypeScript is JavaScript with static typing. It helps catch errors early.</p><br />
        </div>

        <div>
          <h2>🔹 2. Basic Data Types</h2>
          <pre>
            {`let age: number = 20;
let name: string = "Suraj";
let isStudent: boolean = true;`}
          </pre><br />
        </div>

      </div>


      <div className="border flex gap-80">

        <div>
          <h2>🔹 3. Arrays</h2>
          <pre>
            {`let numbers: number[] = [1, 2, 3];
let names: string[] = ["a", "b"];`}
          </pre><br />
        </div>

        <div>
          <h2>🔹 4. Union Types</h2>
          <pre>
            {`let id: number | string;
id = 10;
id = "abc";`}
          </pre><br />
        </div>
      </div>
      <div className="border flex gap-56">
        <div>
          <h2>🔹 5. Functions</h2>
          <pre>
            {`function add(a: number, b: number): number {
  return a + b;
}`}
          </pre>
        </div>

        <div>
          <h2>🔹 6. Object Typing</h2>
          <pre>
            {`let user: { name: string; age: number } = {
  name: "Suraj",
  age: 21
};`}
          </pre>
        </div>
      </div>
      <div className="border flex gap-110">
        <div>
          <h2>🔹 7. Interface</h2>
          <pre>
            {`interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}
let u1: User = {
  name: "Suraj",
  age: 21
};`}
          </pre>
        </div>
        <div>
          <h2>🔹 8. Interface vs Type</h2>
          <p>Both define structure, but type is more flexible (supports unions).</p>
        </div>
      </div>

    </div>
  );
}