import * as React from "react";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from "@mui/material/MenuItem";
import {makeStyles} from "@mui/styles"


const CustomSelectInput = (props: any) => {
  const {
    name,
    formik,
    style,
    items,
    id,
    handleChange,
    value,
    label,
    className,
  } = props;


  const useStyles = makeStyles({
    icon :{ 
      position: "absolute",
      right: "unset",
      left: "15px",
      top: "0px",
      borderRight:" 0.5px solid rgba(189, 5, 4, 0.15)" ,
      height: "100%",
      width: "35px",
      paddingRight: "15px",
      cursor: "pointer",
    },
    txtClass :{ 
      height: "100%",
      overflow:"hidden",
      
 
      
    }
  })

  const classes = useStyles();

  return (
    <TextField
      className={ classes.txtClass}
      SelectProps={{
        classes: { icon: classes.icon },
        IconComponent: () => (
          <KeyboardArrowDownIcon className={classes.icon}  />
          
        ), 
      }}
      variant="standard"
      InputProps={{
        style: style,
        disableUnderline: true,
      }}
      InputLabelProps={{ shrink: false }}
      select
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      style={{ width: "100%" }}
      error={formik.touched[name] && Boolean(props.formik.errors[name])}
      helperText={props.formik.touched[name] && props.formik.errors[name]}
    >
      <MenuItem disabled value="0">
        {label}
      </MenuItem>
      {items.map((item: any, index: number) => {
        if (name == "state" || name == "province")
          return <MenuItem value={index + 1}> {item.province}</MenuItem>;
          else if (name == "guild" )
            return <MenuItem value={item.name}> {item.name}</MenuItem>;
        else return <MenuItem  value={index + 1}> {item}</MenuItem>;
      })}
    </TextField>
  );
};

export default CustomSelectInput;
