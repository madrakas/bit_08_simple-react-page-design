import style from './Invoices.module.css';

export function Invoices(){
    return(
        <div className={style.invoices}>
            <div className={style.title}>Recent Invoices</div>
            <div className={style.invoicesTable}>
                <div className={style.header}>
                    <div className={style.No}>No</div>
                    <div className={style.cDate}>Date Created</div>
                    <div className={style.client}>Client</div>
                    <div className={style.amount}>Amount</div>
                    <div className={style.status}>Status</div>
                </div>
                <div className={style.row}>
                    <div className={style.No}>PQ-4491C</div>
                    <div className={style.cDate}>3 Jul, 2020</div>
                    <div className={style.client}>Daniela Padilla</div>
                    <div className={style.amount}>$ 2,450</div>
                    <div className={style.status + ' ' + style.overdue}>overdue</div>
                </div>
                <div className={style.row}>
                    <div className={style.No}>PQ-4491C</div>
                    <div className={style.cDate}>3 Jul, 2020</div>
                    <div className={style.client}>Daniela Padilla</div>
                    <div className={style.amount}>$ 2,450</div>
                    <div className={style.status}>paid</div>
                </div>
                <div className={style.row}>
                    <div className={style.No}>PQ-4491C</div>
                    <div className={style.cDate}>3 Jul, 2020</div>
                    <div className={style.client}>Daniela Padilla</div>
                    <div className={style.amount}>$ 2,450</div>
                    <div className={style.status}>paid</div>
                </div>
                
            </div>
        </div>
    );
}

