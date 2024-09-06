import { useState } from "react";
import classes from "./NewPost.module.css"

function NewPost({onClose,onPostlist}) {

    const [Bodytext, setBodytext] = useState("");
    const [Authortext, setAuthortext] = useState("");

    // const [CommentText, setCommentText] = useState("");
    // console.log(CommentText);
    // console.log(setCommentText);
    // function commentTextHandler(event) {
    //     console.log(event.target.value);
    //     setCommentText(event.target.value);
    // }

    function bodyChangeHandler(event) {
        // console.log(event.target.value);
        setBodytext(event.target.value);
    }

    function authorChangeHandler(event) {
        // console.log(event.target.value);
        setAuthortext(event.target.value);
    }

    function submitPostHandler(event) {
        event.preventDefault(); 
        // console.log("submitting");
        let postData = {
            body : Bodytext,
            anthor : Authortext
        }
        // console.log(postData);
        onClose();
        onPostlist(postData);
    }


    return (
        <>
            <form className={classes.form} onSubmit={submitPostHandler}>
                <p>
                    <label htmlFor="text">Body</label>
                    <textarea id="text" rows={5} onChange={bodyChangeHandler}></textarea>
                </p>
                {/* <h1>{CommentText}</h1> */}
                <p>
                    <label htmlFor="Name">Author</label>
                    <input type="text" id="Name" onChange={authorChangeHandler}/>
                </p>
                <p className={classes.actions}>
                    <button type="button" onClick={onClose}>Cancel</button>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </>
    )
}

export default NewPost;



