import { Atcivity } from './Activity';
import style from './Atcivities.module.css';

export function Atcivities(){
     
    return(
        <div className={style.activities}>
            <div className={style.title}>Activities</div>
            <Atcivity detail="Francisco Gobs created invoice PQ-415684DE" time='just now' icon='user' />
            <Atcivity detail="Invoice JL-3432A reminder was sent to Chester Corp" time='Friday, 12:26PM' icon='reminder' />
            <Atcivity detail="Invoice JL-3432B reminder was sent to Chester Corp" time='Friday, 12:27PM' icon='reminder' />
        </div>
    );
}