import { useState ,useEffect} from 'react'
import './App.css'
//custom hooks
function useTodo(){
  const [todos,settodo]=useState([{
  key:1,
  title:"go make food",
  description:"make food at 2pm",
  id:1, 
  }
  //,{
  //   key:2,
  //   title:"now go to gym",
  //   description:"go at 7pm",
  //   id:2,
  // },{
  //   key:3,
  //   title:"now go to class",
  //   description:"go at 9pm",
  //   id:3,
  // }
  ]);
  
    
  
  useEffect(()=>{
    // setInterval(()=>{
    fetch("http://localhost:3000/todos",{method:"GET"}).then((response)=>{
      response.json().then((data)=>{
        console.log(data);
        settodo(data);
      })
    })
    // settodo([{
    //   key:2,
    //   title:"go do work",
    //   description:"do work at 3pm",
    //   id:2, 
    // }])
    // },1000)
  },[]);
  return todos;
}

// let counts = 0;
function App() {
  const [count, setCount] = useState(0);
  const todos = useTodo();
 
  // let todos = [{
  //   title:"now go to gym",
  //   description:"go at 7pm",
  //   id:2,
  // },{
  //   title:"now go to class",
  //   description:"go at 9pm",
  //   id:2,
  // }]
  


  // if(counts ===0){
  //   setInterval(()=>{
  //     settodo({
  //       key:2,
  //       title:"go do work",
  //       description:"do work at 3pm",
  //       id:2,
  //     })
  //   },10000)
  //   counts++;
  // }
  

  return (<>
      <Rendertodo todos = {todos}></Rendertodo>
      <Rendertodocount count = {count} setCount = {setCount}></Rendertodocount>
      {/* <Mapreturn todos = {todos}></Mapreturn> */}
  </>
    
  )
}
function Rendertodocount(props){
  return<>
    <div className="card">
        <button onClick={() => props.setCount((count) => count + 1)}>
          count is {props.count}
        </button>
      </div>
  </>
}
//a component can be writen in seperate jsx file
function Mapreturn(props){
  return<>
  {props.todos.map((todo)=>{
        
      return <div key={todo.id}>
          
          {todo.title}
          {todo.description}
          <br/>
        </div>
  })}</>
}


function Rendertodo(props){
  return <>
      <h1>Hello world</h1>
      {/* {JSON.stringify(props.todos)} */}
      <Mapreturn todos = {props.todos}></Mapreturn>

      <p className="read-the-docs">
        
      </p>
    </>
}

export default App
