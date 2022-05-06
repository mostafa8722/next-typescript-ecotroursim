import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

interface ComponentProps {
  orderPage?: string;
  style?:styleProps,
  before?:boolean
}
interface Props{
    maxWidth?:string,
    backgroundColor?:string,
    borderRadius?:string,
    height?:string,
    border?:string,
    bg?:string,
    padding?:string,
    radius?:string,
    size?:string,
    bottom?:string,
    top?:string,
    left?:string,
    right?:string,
    
}
interface styleProps{
    size?:string,
    bg?:string,
    shadow?:string,
    raduis?:string,
    height?:string,
    color?:string,
    border?:string,
    width?:string,
    right?:string,
    left?:string,
    top?:string,
    bottom?:string,
    padding?:string,

}

interface inputProps {
    size?:string,
    bg?:string,
    shadow?:string,
    raduis?:string,
    height?:string,
    minHeight?:string,
    color?:string,
    border?:string,
    width?:string,
    padding?:string,
}

export const selectInput = (props:Props) => {
    return {
      maxWidth: props.maxWidth,
      backgroundColor:props.backgroundColor ,
      borderRadius: props.borderRadius,
      height: props.height,
      border: props.border,
      fontSize: props.fontSize,
      overflow :"hidden",
      
    };
  };


  export const loginButton = (style: any) => {
    return `
    font-weight: bold;
      font-family: IRANSans!important;
    font-size: ${style.size ? style.size : "15px"};
    background-color: ${style.bg ? style.bg : "#f36f21"};
    padding: 12px 24px;
    border-radius: ${style.raduis ? style.raduis : "15"}px;
    color: ${style.color ? style.color : "#ffffff"};
    width:${style.width ? style.width : "100%"};
    transition: all 150ms ease;
    cursor: pointer;
     border:${style.border ? style.border : "none"};
     height:${style.height ? style.height : "55"}px;
  
    margin-left:${style.left ? style.left : "0px"};
    margin-right:${style.rifht ? style.right : "0"}px;
  
    
  
    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  };
  
  export const styleInput = (style: inputProps) => {
    return {
      width:style.width?style.width: "100%",
      backgroundColor: style.bg?style.bg:"#F0EDF1",
      borderRadius: style.raduis?style.raduis:15,
      height: style.height?style.height: 55,
      minHeight: style.minHeight?style.minHeight: "auto",
      border: style.border?style.border:"none",
      padding: style.padding?style.padding: "5px 10px",
      fontSize: style.size?style.size: 15,
    };
  };

  export const ProFileButton = styled("button")<ComponentProps>(
    ({ orderPage }) =>
      `
        font-weight: bold;
        font-size: 0.875rem;
        background-color:${orderPage ? "#ffffff" : "#f36f21"};
        padding: ${orderPage ? "8px 40px" : "12px 24px"};
        border-radius: 30px;
        color: ${orderPage ? "#BD0504" : "white"};
        cursor: pointer;
        border: ${orderPage ? "1px solid #BD0504" : "none"};
        height:${orderPage ? "auto" : "55px"};
        font-family: IRANSans;
        box-shadow: 0px 2px 5px rgb(153 157 160 / 70%);
  `,
  );

  export const CustomButton = styled("button")<ComponentProps>(
    ({ orderPage ,style,before}) =>
      `
      position: relative;
        font-weight: bold;
        
        font-size: ${style.size ? style.size : " 0.875rem"};
        background-color: ${style.bg ? style.bg : "#f36f21"};
        padding: ${style.padding?style.padding:"12px 24px"};
        border-radius: ${style.raduis ? style.raduis : "15"}px;
        color: ${style.color ? style.color : "#ffffff"};
        width:${style.width ? style.width : "100%"};
        transition: all 150ms ease;
        cursor: pointer;
        border:${style.border ? style.border : "none"};
        height:${style.height ? style.height : "55"}px
        margin-top:${style.top ? style.top : "0px"};
        margin-bottom:${style.bottom ? style.bottom : "0px"};
        margin-left:${style.left ? style.left : "0px"};
        margin-right:${style.right ? style.right : "0px"}px;
        box-shadow: ${style.shadow?  style.shadow:"0px 2px 5px rgb(153 157 160 / 70%)"};
       
        &:before {
            ${before ? `
            
            content: "";
            position: absolute;
            top: -10px;
            left: 0;
            width: 20px;
            height: 65px;
            background: rgba(255,255,255,0.4);
			transform: rotate(45deg);
            animation: animate 5s  linear   0s infinite normal none running ;
			filter: blur(10px);
            `: "" }
           
    

          }

          @keyframes animate {
            0% {
                left: 100%;
            }
  
            20% {
                left: -20px;
            }
			 100% {
                left: -100px;
            }
  
            
        }
  `,
  );

 
