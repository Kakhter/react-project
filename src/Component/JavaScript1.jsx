import React from "react";

const JavaScript1 = () => {
  return (
    <>
      <h1>Java Script</h1>
      <pre>
        <code>
          {`const promise = new Promise((resolve,rejected) => {
   setTimeout(()=> {
   rejected("Operation failed");
   ),2000};
   )};

promise
   .then((result)=> {
   console.log(result);
   })
   .catch((err)=>{
    console.log(err);
   });

----------------------------------
function fetchdata() {
return fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((result)=> result.json())
.then((data)=> console.log(data))

.catch((err)=>{
  console.log(err);
 });
}
----------------------------------

async function fetchDataAsync() {

try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json =response.json();
    console.log(json);
    )
    }
catch(err){
  console.log(err);
    }
}



-----------------------------------------
Axios

--------------------------------------------------
import axios from "axios";

const api = axios.create({
   baseURL:"https://jsonplaceholder.typicode.com",
 });

const getPosts =()=> api.get("/posts");

export {getPosts};
-------------------------------------------------

import {getPosts} from "../services/postService";

export default function Posts(){
const [posts, setPosts] = useState([]);

useEffect(()=> {

getPosts()
.then((result)=> {
   console.log(result);
   setPosts(result.data);
  })
.catch((err)=> {
  console.error(err);
 });
}, {});
------------------------------------------------
String interpolation:

const name = "Raj";
const welcomMessage = \`Welcome: \${name}\`;

console.log(welcomMessage);

Result:
Welcome: Raj


      <h2>Import & Export in JavaScript</h2>
      <h2>Array find()</h2>
      Example:

const todos =[
  { id: 1, subject:"Python", completed:false}
  { id: 2, subject:"Java", completed:false},
  { id: 3, subject:"Node", completed:true},
]

const todoById = todos.find((todo)=>todo.id===2)

console.log(todoById);

<h2>Array filter()</h2>

const filteredArray = todos.filter((m)=>m.completed===fals && m.subject==="Java");
const filteredArray = todos.filter((m)=>m.subject.includes("Ja"));

Sorting:

Sorting

const sorted = [...users].sort((a, b) =>
  a.subject.localeCompare(b.subject))

const sorted = [...users].sort((a, b) => a.id - b.id)
  

<h2>forEach Loop()</h2>

  todos.forEach((m)=> { m.completed=true});

  including index:

  todos.forEach((m, index)=> {
     console.log(index + " : " +  m.subject)
    })

  
Array Map

const mappedTodos = todos.map((todo)=> {

     return{id:todo.id, desc: todo.subject};
});

Array Map

const mappedTodos = todos.map((todo)=> {

     return{...todo, priority: "High"};
});

const mappedTodos = todos.map((todo)=> {

     return{...todo, subject: "High"};   //existing subject will be overwritten
}); 
--------------------------------------------------------------------

`}
        </code>
      </pre>
    </>
  );
};

export default JavaScript1;
