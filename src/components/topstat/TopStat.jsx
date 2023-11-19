import { StatItem } from './StatItem';
import style from './TopStat.module.css';

export function TopStat (){
    const statItems= [
    <StatItem title='Total Revenue' icon='revenue' number='216k' growth='$341' prefix='$' />,
    <StatItem title='Invoices' icon='invoices' number='2,221' growth='121'/>,
    <StatItem title='Clients' icon='clients' number='1,423' growth='91'/>,
    <StatItem title='Loyality' icon='loyality' number='78%' negative='true' growth='1%'/>];
    return(
        <div className={style.topStat}>
            {statItems}        
        </div>
    )

}