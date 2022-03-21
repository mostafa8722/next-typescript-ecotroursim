import * as React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {inspect} from "util";
import styles from "../../styles/login.module.css"

const CustomRadioButton =(props:any)=> {
    const { value,handleChange,value1,value2,label1,label2,name} = props
    return (
        <FormControl className={`${styles['mr-30']}`} component="fieldset">

            <RadioGroup
                value={value}
                onChange={handleChange}

                className={`${styles["d-flex"]} ${styles["direction-rtl"]}  ${styles["flex-row"]}`}
                name={name}
            >

                <FormControlLabel   value={value1} control={<Radio />} label={label1} />
                <FormControlLabel  value={value2} control={<Radio />} label={label2} />

            </RadioGroup>
        </FormControl>
);
};

export  default  CustomRadioButton;

