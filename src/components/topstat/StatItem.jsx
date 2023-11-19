import style from './TopStat.module.css';

export function StatItem({title, icon, number, growth, negative, prefix, postfix }){
    
    let growthStyle=style.growth;
    console.log(growthStyle);
    if (negative){
        growthStyle = style.growth + ' ' + style.negative;
    }
    
    return(
        <div className={style.statItem}>
            <div className={style.iconContainer}><img src={require('./img/'+ icon +'.png')} alt="statImage"/></div>
            <div className={style.stats}>
                <p className={style.title}>{title}</p>
                <div className={style.numbers}>
                    <div className={style.prefix}>{prefix}</div>
                    {number}
                    <div className={style.postfix}>{postfix}</div>
                    <div className={growthStyle}>{growth}</div>
                </div>
            </div>
        </div>
    )
}