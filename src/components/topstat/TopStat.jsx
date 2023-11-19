import { StatItem } from './StatItem';
import style from './TopStat.module.css';

export function TopStat (){
    const statItems= [
    <StatItem key={1} title='Total Revenue' icon='revenue' number='216k' growth='$341' prefix='$' />,
    <StatItem key={2} title='Invoices' icon='invoices' number='2,221' growth='121'/>,
    <StatItem key={3} title='Clients' icon='clients' number='1,423' growth='91'/>,
    <StatItem key={4} title='Loyality' icon='loyality' number='78%' negative='true' growth='1%'/>];
    return(
        <div className={style.topStat}>
            {statItems}        
        </div>
    )

}