import React, { useState, useEffect } from 'react';
import './Extend.css';

function Extend() {
   
    const [timezone, setTimezone] = useState();
    const [dayofyear, setDayofyear] = useState();
    const [dayofweek, setDayofweek] = useState();
    const [weeknumber, setWeeknumber] = useState();


    useEffect(()=> {
        
        fetch('http://worldtimeapi.org/api/ip')
        .then((res) => res.json())
        .then((data)=> {
            console.log(data)
            setTimezone(data.timezone);
            setDayofyear(data.day_of_year);
            setDayofweek(data.day_of_week);
            setWeeknumber(data.week_number);
        })
        .catch((err)=> console.log(err, 'error in fetch'));

        
    },[]);

    return (
        <div className='extended__container'>
            <div className='extended__info'>
                <div className='right__side'>
                    <div className='time__zone'>
                        <h4>CURRENT TIMEZONE</h4>
                        <h2>{timezone}</h2>
                    </div>
                    <div className='day__of__year'>
                        <h4>Day of the year</h4>
                        <h2>{dayofyear}</h2>
                    </div>
                </div>

                <hr />

                <div className='left__side'>
                    <div className='day__of__week'>
                        <h4>Day of the week</h4>
                        <h2>{dayofweek}</h2>
                    </div>
                    <div className='week__number'>
                        <h4>Week number</h4>
                        <h2>{weeknumber}</h2>
                    </div>
                </div>
                
               
            </div>
            
        </div>
    )
}

export default Extend
