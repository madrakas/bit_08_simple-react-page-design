import style from './Activity.module.css';

export function Atcivity({detail, time, icon}){
    return(
        <div className={style.activity}>
            <div className={style.iconContainer}>
                <img className={style.icon} src={require('./img/' + icon + '.png')} alt="icon" />
                <div className={style.verticalLine}></div>
            </div>
            <div className={style.detail}>
                <div className={style.decscription}>
                    {detail}
                </div>
                <div className={style.when}>{time}</div>
            </div>
        </div>
    );
}