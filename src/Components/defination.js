import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Defination = () => {
    const [word, setWord] = useState();
    console.log(useParams());
    const {search} = useParams();
    useEffect(() =>{
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en_US/search')
        .then((res)=>res.json())
        .then((data)=>{
            //console.log(data[0].meanings);
            setWord(data[0].meanings);
        })
    },[]);
    return (
        <>
        <h1>Defination :</h1>
        {word?word.map((item)=>{
            console.log(item.definitions[0].definition);
            return (
                <>
                    <h2>{'('+item.partOfSpeech+') '+item.definitions[0].definition}</h2>
                </>
            )
        }):null}
        </>
        
    )
}

export default Defination;