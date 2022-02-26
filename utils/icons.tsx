import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheese,faHandPaper, faBalanceScale,faNewspaper,faBell, faLaughBeam, faLaughWink, faShoppingBasket,faMobile} from '@fortawesome/free-solid-svg-icons'
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LoginIcon from '@mui/icons-material/Login';
export const icon =(type)=>{
   if(type=='faMobile')
    return    <FontAwesomeIcon   style={{fontSize:"15px",height:"15px",color:"434343"}} icon={faMobile} />;
    else if(type=='mobile')
       return  <InstallMobileIcon style={{height:"22px"}}  />;
       else if(type=='support')
       return  <SupportAgentIcon style={{height:"22px"}}  />;
       else if(type=='Login')
       return  <LoginIcon style={{height:"22px"}}  />;
       else
           return <></>;
}