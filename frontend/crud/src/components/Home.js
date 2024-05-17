import React,{ useState } from 'react';
//import html.image.jpeg from './Componates/html.image.jpeg'
export default function Home(){
    const[open,setOpen]=useState(false);

    const closeModal=()=>{
        setOpen(false);
    };
    const openModal=()=>{
        setOpen(true);
    };
    return(
        <div className='box'>
        {open &&(
            <div className='modal'>
                <div className='modal__overlay'>
                    <div className='modal__overlay__1'/>
                    <div className='modal__overlay__2'/>
                    <div class="inner-image"></div>                    
                </div>
                <div className='modal__content'>
                    
                    <h1>Welcom to <span>VJA</span>Online Course</h1>
                    <h1><span>V-</span>Virtual Classroom</h1>
                    <h1><span>J-</span>Jigsaw Learning</h1>
                    <h1><span>A-</span>Achieve More</h1>
                    <button onClick={closeModal} className='sparkle-button'>Go back VJA</button>
                    {/* <button onClick={closeModal}>{openModal? 'stop':'start'}</button> */}
                    </div>
                    <div className='box'>
                    
                    </div>
                </div>      
        )}
        <button onClick={openModal} className='sparkle-button'>Open to VJA OnlineCourse</button>
        
        </div>
    )
}
