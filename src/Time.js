import React, { useState, useEffect } from 'react';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import morning from './morning.png';
import './Time.css';



function Time(props) {

    const [time, setTime] = useState('00:00');
    const [zone, setZone] = useState();
    const [greetings, setGreetings] = useState();
    const [offset, setOffset] = useState()
   
   
    useEffect(()=> {
        
        fetch('http://worldtimeapi.org/api/ip')
        .then((res) => res.json())
        .then((data)=> {
            console.log(data)
            setTime(data.datetime.split('T',2)[1].split('.',1)[0].slice(0,5))
            setZone(data.timezone);
            setOffset(data.utc_offset)
        })
        .catch((err)=> console.log(err, 'error in fetch'));

        
    },[]);
    
    console.log(time);

    useEffect(()=> {
        let value = parseInt(time.slice(0,2));
        if (value === 24 || (value >=0 && value > 12)){
            setGreetings('Good Morning');
        } else if (value >= 12 && value < 16) {
            setGreetings('Good Afternoon');
        } else if (value >=16 && value < 21 ){
            setGreetings('Good Evening');
        } else {
            setGreetings('Good Night');
        }
    },[])
   

    return (
        <div className='time'>
            <div className='time__contianer'>
                <div className='greetings'>
                    <img src={morning} alt='morning-logo'/>
                    <span>{greetings} , IT’S CURRENTLY</span>
                </div>

                <div className='current__time'>
                    <h1>{time}</h1>
                    <h3>{offset}</h3>
                </div>

                <div className='current__time__zone'>IN {zone}</div>
            </div>
            <div className='extend__container' onClick={()=> props.setExpanded(true)}>
                <span>more</span>
                <ArrowDropDownCircleIcon />
            </div>

        </div>
    )
}

export default Time
