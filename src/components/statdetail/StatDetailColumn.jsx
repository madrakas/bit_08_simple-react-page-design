import { useState } from 'react';
import style from './StatDetail.module.css';


export function StatDetailColumn({height, label}){
    const [valueVisible, setValueVisibility] = useState('none');

    function valueMakeVisible(){
        setValueVisibility('flex');
    }
    
    function valueMakeInvisible(){
        setValueVisibility('none');
    }

    return(
        <div className={style.statColumnContainer}>
            <div className={style.statColumn} 
                 style={{ height: height+'%'}} 
                 onMouseOver={valueMakeVisible} 
                 onMouseOut={valueMakeInvisible}>
            </div>

            <div className={style.label}>{label}</div>
            <div className={style.value} style={{display: valueVisible}}>
                {height * 150}
            </div>
        </div>
    );
}