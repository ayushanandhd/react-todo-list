import React, { useState } from 'react'

function Todo() {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])

    function onAdd (){
        if(!inputData){

        }
        else{
            setItems([...items, inputData])
            setInputData('')
        }
    }

    function delEvent(id){
        const updatedItems = items.filter((elem, ind)=>{
            return ind !== id
        })
        setItems(updatedItems)
    }

    function clearList(){
        setItems([])
    }

    return (
        <div className="container">
            <h1>ToDo List 🚀</h1>
            <input type="text" placeholder="✏️Add todo item" value={inputData}
            onChange={(e)=>{setInputData(e.target.value)}}/>
            <button onClick={onAdd}>Add</button>
            <div>
                {
                    items.map((elem, ind)=>{
                        return(
                            <div key={ind}>
                                <span>{elem}</span>
                                <button onClick={()=>{delEvent(ind)}}>delete</button>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <button onClick={clearList}>Clear List</button>
        </div>
    )
}

export default Todo
