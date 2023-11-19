import style from './StatDetail.module.css';
import { StatDetailColumn } from './StatDetailColumn';

export function StatDetail(){
const data = [  [70, 'Mar'],
                [60, 'Apr'],
                [80, 'May'], 
                [60, 'Jun'], 
                [50, 'Jul'], 
                [100, 'Aug'], 
                [65, 'Sept'],
                [70, 'Oct'],
                [74, 'Now']];

    const statColumns = [];
    
    for (const d in data){
        statColumns.push(<StatDetailColumn key={d} height={data[d][0]} label={data[d][1]}/>)
    }

    return(
        <div className={style.statContainer}>
            <div className={style.title}>Monthly Revenue</div>
            <div className={style.subtitle}>
                <div className={style.prefix}>$
                </div>
                15,000
            </div>
            <div className={style.statistics}>
                {statColumns}
            </div>
        </div>
    );
}