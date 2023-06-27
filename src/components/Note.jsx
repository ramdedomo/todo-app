import { useState } from "react"
import Finished from "./Finished"
import Unfinished from "./Unfinished"
import AddTodo from "./AddTodo"

export default function Note(){

    const [todos, setTodos] = useState([
        {id: 1, todo: "Play Game", finished: true},
        {id: 2, todo: "Eat Lunch", finished: true},
        {id: 3, todo: "Sleep", finished: false},
    ])

    const [hideEmpty, setEmpty] = useState(true)
    const [currText, setCurrText] = useState('')

    //filter finished todos
    const FinishedTodos = todos.filter(data => {
        return data.finished
    })
    
    //filter unfinished todos
    const UnfinishedTodos = todos.filter(data => {
        return !data.finished
    })

    //add todo
    function addTodo(event){
        event.preventDefault()

        //check todo is empty
        if(currText !== ""){
            const newTodo = {
                id: Math.random(),
                todo: currText,
                finished: false
            }
            setTodos(oldData => {
                return [...oldData, newTodo]
            })
            setEmpty(true)
        }else{
            return setEmpty(false)
        }

    }

    //listen input changes
    function inputChanges(event){
        const {value} = event.target
        setCurrText(value)
    }

    //toggle finished/unfinished
    function toggleTodo(id){
        setTodos(oldData => {
            return oldData.map(data => {
                return {
                    ...data,
                    finished: data.id === id ? !data.finished : data.finished
                }
            })
        })
    }

    // delete
    function deleteTodo(id){
        setTodos(oldData => {
            return oldData.filter(data => (
                data.id !== id
            ))
        });
    }

    return (
      <div className="font-mono space-y-5">
        <AddTodo value={currText} handleChanges={inputChanges} handleClick={addTodo} hideEmpty={hideEmpty}/>

        <div className="space-y-2">
            <p className="bg-gray-100 py-1 px-2 rounded-md">Todos</p>
            {
                UnfinishedTodos.map(data => {
                    return <Unfinished delete={deleteTodo} isChecked={data.finished} toggle={toggleTodo} key={data.id} {...data}/>
                })
            }   
            {
                UnfinishedTodos.length === 0 && <p className="bg-gray-50 py-1 px-2 rounded-md border border-gray-200 text-center">Empty</p>
            }
        </div>


        <div className="space-y-2">
            <p className="bg-emerald-100 py-1 px-2 rounded-md">Finished Todos</p>
            {
                FinishedTodos.map(data => {
                    return <Finished delete={deleteTodo} isChecked={data.finished} toggle={toggleTodo} key={data.id} {...data}/>
                })
            }   
            {
                FinishedTodos.length === 0 && <p className="bg-gray-50 py-1 px-2 rounded-md border border-gray-200 text-center">Empty</p>
            }
        </div>


  
      </div>
    )
}