import React, { useState, useEffect } from 'react';
import morning from './assets/morning.png';
import evenigbg from './assets/evening-bg.jpg';
import night from './assets/icon-moon.svg';
import morningbg from './assets/morning-bg.jpg';
import nightbg from './assets/night-bg.jpg';
import ArrowUp from './assets/icon-arrow-up.svg';
import ArrowDown from './assets/icon-arrow-down.svg';
import './Time.css';



function Time(props) {

    const [time, setTime] = useState('00:00');
    const [zone, setZone] = useState();
    const [greetings, setGreetings] = useState();
    const [offset, setOffset] = useState();
    const [day, setDay] = useState(morning);
    const [bg, setBg] = useState(morningbg); 
    
    
    document.documentElement.style = `background: url(${bg}) center/cover no-repeat`;
   
   
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
    
  

    useEffect(()=> {
        let value = parseInt(time.slice(0,2));
        if (value === 24 || (value > 0 && value < 12)){
            setGreetings('Good Morning');
            setDay(morning);
            setBg(morningbg)
            
        } else if (value >= 12 && value <= 16) {
            setGreetings('Good Afternoon');
            setDay(morning);
            setBg(morningbg);
            
        } else if (value >16 && value < 21 ){
            setGreetings('Good Evening');
            setDay(night);
            setBg(evenigbg);
           
        } else {
            setGreetings('Good Night');
            setDay(night);
            setBg(nightbg);
            
        }
    },[])
   

    return (
        <div className='time'>
            <div className='time__contianer'>
                <div className='greetings'>
                    <img src={day} alt='day-logo'/>
                    <span>{greetings} , IT’S CURRENTLY</span>
                </div>

                <div className='current__time'>
                    <h1>{time}</h1>
                    <h3>{offset}</h3>
                </div>

                <div className='current__time__zone'>IN {zone}</div>
            </div>
            <div className='extend__container' onClick={()=> props.setExpanded(expanded => !expanded)}>
                <span>{props.expanded ? 'Less' : 'More' }</span>
                <img src={ props.expanded ? ArrowUp : ArrowDown}  alt='arrows'/>
            </div>

        </div>
    )
}

export default Time
