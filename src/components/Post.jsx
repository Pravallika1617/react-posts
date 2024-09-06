import classes from "./post.module.css"
function Post(props){
    const {Author,Body} = props;
    return(
        <div className={classes.post}>
            <h1 className={classes.Author}>{Author}</h1>
            <p className={classes.Body}>{Body}</p>
        </div>
        
    )
}
 export default Post;

