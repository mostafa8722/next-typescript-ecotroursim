import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSlidersH} from "@fortawesome/free-solid-svg-icons";
import SearchIcon from '@mui/icons-material/Search';
import customStyles from "../../styles/Style.module.css"
import Box from "@mui/material/Box";
const search = ()=>{

    return(
        <>
        <Box className={` flex align-center ${customStyles["search-box"]}`}>
            <Box className={`${customStyles["search-filter"]}`} >
                <FontAwesomeIcon style={{fontSize:"15px",height:"15px", marginRight:"10px", marginLeft:"10px",color:"434343"}}  icon={faSlidersH} />
                <Box component="span">فیلتر</Box>
            </Box>
            <Box component="span" className={`${customStyles["search-divider"]}`} ></Box>
            <Box className={`${customStyles["search-input"]}`} >
                <input placeholder="جستجوی نام اقامتگاه، استان، شهر، روستا، نشانی یا آدرس سایت (در کل سایت)" />
            </Box>
            <Box className={`${customStyles["search-button"]}`} >
               <span className="m-l-5 text-white">جستجو</span>
                <SearchIcon className="text-white" />
            </Box>
        </Box>
    </>
    )
}
export default search;