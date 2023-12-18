"use client"

import React from "react";
import { useState } from "react";
const Page=()=>{
  const [title,settitle]=useState("");
  const [desc,setDesc]=useState("");
  const [mainTask,setmainTask]=useState([]);


const sumbitHandler=(e)=>{
 
    e.preventDefault()
    console.log(title)
    console.log(desc)
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setDesc("")
    console.log(mainTask)
  }
  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)

  }
  let renderTask=<h1>Not Available</h1>
  if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return (
      <li key={i} className="flex items-center justify-between mb-5"> 
      <div className="flex justify-between mb-5 w-2/3">
      <h5 className="text-lg font-semibold">{t.title}</h5>
      <h6 className="text-lg font-semibold">{t.desc}</h6>
      <button 
      onClick={()=>{deleteHandler(i)}}
      className="bg-red-400 text-white rounded px-4 py-4 m-2 font-bold">delete</button>
    </div>
    </li>
    );
  });
}
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Todo list </h1>
      <form onSubmit={sumbitHandler}>
        <input type='text' className="text m-5 px-4 py-2"
        placeholder="Enter the task here " value={title}
        onChange={(e)=>{settitle(e.target.value)}}></input>
         <input type='text' className="text m-5 px-4 py-2"
        placeholder="Enter the description here" value={desc}
        onChange={(e)=>{setDesc(e.target.value)}}></input>
        <button className="bg-black text-white px-4 px-3 text-xl font-bold rounded m-5 ">Add</button>
      </form>
      <hr></hr>
      <hr></hr>
    <div className="p-8 bg-slate-200">
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default Page