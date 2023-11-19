import style from './AsideMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faFileInvoice, faHome, faMessage, faQuestion, faTag, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export function AsideMenu(){
    const iconHome = <FontAwesomeIcon className={style.icon} icon={faHome}/>;
    const iconInvoice = <FontAwesomeIcon className={style.icon} icon={faFileInvoice}/>;
    const iconClients = <FontAwesomeIcon className={style.icon} icon={faUserGroup}/>;
    const iconProducts = <FontAwesomeIcon className={style.icon} icon={faTag}/>;
    const iconMessages = <FontAwesomeIcon className={style.icon} icon={faMessage}/>;
    const iconSettings = <FontAwesomeIcon className={style.icon} icon={faCogs}/>;
    const iconHelp = <FontAwesomeIcon className={style.icon} icon={faQuestion}/>;
    
    return(
    <div className={style.asideMenu}>
        <div className={style.asideMenuItem}>{iconHome}Home</div>
        <div className={style.asideMenuItem}>{iconInvoice}Invoice</div>
        <div className={style.asideMenuItem}>{iconClients}Clients</div>
        <div className={style.asideMenuItem}>{iconProducts}Products</div>
        <div className={style.asideMenuItem}>{iconMessages}Messges<div className={style.notification}></div></div>
        <div className={style.asideMenuItem}>{iconSettings}Settings</div>
        <div className={style.asideMenuItem}>{iconHelp}Help</div>
    </div>
    )
}