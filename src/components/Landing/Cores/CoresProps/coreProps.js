import classes from "./coreProps.module.css"

const CoreProps = (props) => {
    return ( 
        <div className={classes.main}>
            <div className={classes.coreFlex}>
                <img src={props.image} alt="icon" />
                <h4>{props.title}</h4>    
            </div>
            <p>{props.word}</p>
        </div>
     );
}
 
export default CoreProps;