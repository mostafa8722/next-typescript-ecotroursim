import * as React from "react";
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';



 const CustomButton = (props:any)=> {
    console.log(props)
    const CustomButtonRoot = styled('button')`${props.customStyle}` ;
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export  default  CustomButton;

