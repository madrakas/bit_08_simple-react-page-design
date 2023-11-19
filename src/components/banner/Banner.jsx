import style from './Banner.module.css';

export function Banner (){
    return(
        <div className={style.bannerContainer}>
            <div className={style.tag}>new</div>
            <div className={style.title}>
                We have added new invoicing templates!
            </div>
            <div className={style.description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, soluta.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, soluta.
            </div>
            <div className={style.downloadBtn}>Download Now</div>

        </div>
    );
}