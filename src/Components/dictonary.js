import {useState,useEffect} from 'react';

const Dictonary = () => {
    const [word,setWord]=useState("");
    useEffect(()=>{
        console.log("useEffect called : "+word);
    })
    return (
        <>
        
        <input type="text"
        onChange={(e) =>{setWord(e.target.value)}}
        className="m-8 w-48 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <h1 className='m-8'>Lets Define {word}</h1>
        </>
    );
}

export default Dictonary;