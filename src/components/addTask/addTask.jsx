import React from "react";
import Button from "../button/_button";
import './addTask.css';
import { useState } from 'react';

const AddTask = ({handleAddTask})=>{

    const [inputData, SetInputData] = useState('')
    
    const handleIC = (ev)=>{
       SetInputData(ev.target.value);
    }


    let handleBtn = ()=>{
        handleAddTask(inputData);
        SetInputData("")
    }

    return (
        <>
            <div className="task-head">
                <input onChange={handleIC} value={inputData} type="text" />
                <div className="task-btn">
                    <Button text="Adicionar" handleBtn={handleBtn}></Button>
                </div>
            </div>
        </>
    )
}

export default AddTask;