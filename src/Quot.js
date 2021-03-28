import React , { useEffect, useState}from 'react';
import './Quot.css';
import icon from './assets/icon-refresh.svg';



function Quot() {
    const [quot, setquot] = useState();
    const [author, setAuthor] = useState()

    useEffect(() => {
    
        fetchQuots();
    }, []);

    const fetchQuots = async() =>{
        try{
            const results = await fetch('https://api.quotable.io/random');
            const data = await results.json();
         
            setquot(data.content);
            setAuthor(data.author);
        } catch(err) {console.log(err)}
      
    };
    
    return (
        <div className='quot-container'>
            <div className='quot'>
                <span>{quot}</span>
                <span>{author}</span>
            </div>
            <div className='icon' >
                <img src={icon} alt='refresh-icon' onClick={fetchQuots}/>
            </div>
        </div>
    )
}

export default Quot
