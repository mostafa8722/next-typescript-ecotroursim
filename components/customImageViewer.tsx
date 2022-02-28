import Image from "next/Image";

interface Props { 
  
    src : string,
    alt ?: string,
    width?:number|string,
    height?:number|string,
    objectFit ?:any, 
    disabled ?:any, 
    layout ?: any,
    onClick ?:any


}

const CustomImageViewer = (props:Props)=>{

    return (
     <Image
     aria-disabled={props.disabled}
      onClick={props.onClick}
      src={props.src}
      alt={props.alt ? props.alt : "کومه گردی "}
      quality={100}
      width={props.width}
      height={props.height}
      layout={props.layout}
      objectFit={props.objectFit}
     
     />

    )


}
export default CustomImageViewer;
