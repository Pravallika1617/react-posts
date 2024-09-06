import classes from "./Model.module.css"

function Model({children, onModelHide}) {
    return (
        <>
        <div className={classes.backdrop} onClick={onModelHide}>

        </div>
        <dialog open className={classes.model}>
            {children}
        </dialog>
        </>
    )
}
export default Model;