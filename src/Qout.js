import React , { useEffect, useState}from 'react';
import './Qout.css';



function Qout() {
    const [qout, setQout] = useState();
    const [author, setAuthor] = useState()

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then((res)=> res.json())
        .then((data) => {
            setQout(data.content);
            setAuthor(data.author);
        });
    }, [])

    return (
        <div className='qout'>
           
                <span>{qout}</span>
                <span>{author}</span>
        
        </div>
    )
}

export default Qout
