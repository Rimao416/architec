
import { IoMdArrowDropright } from "react-icons/io";
interface ButtonProps {
    content:string, 
    color:"yellow"|"orange",
   
}
const Button: React.FC<ButtonProps> = ({ content, color }) => {
    return (
     
     <button className="button" style={{ backgroundColor: color ==="yellow" ? "rgb(254,218,124)" : "rgb(251,126,62)", color:color==="yellow" ? "rgb(1,58,41)" : "white" }}>

        {content}

        <span className="button__icon">
        <IoMdArrowDropright />
        </span>
      </button>
    );
  };
  
  export default Button;

