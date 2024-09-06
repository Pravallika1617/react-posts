
import classes from "./MainHeader.module.css"
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

function MainHeader({onOpenModel}) {
    return (
       <header className={classes.header}>
            <h1 className={classes.logo}>
            <FaFacebookMessenger /> Post</h1>
            <button className={classes.button} onClick={onOpenModel}>
            <p>New Post <FaPlusCircle /></p> 
            </button>
       </header>
    )
}
export default MainHeader ;




