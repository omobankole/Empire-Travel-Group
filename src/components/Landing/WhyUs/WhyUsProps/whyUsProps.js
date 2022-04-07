import classes from './whyUsProps.module.css';

const WhyUsProps = (props) => {
    return ( 
        <div className={classes.gridUs}>
            <div className={classes.title}>
                <h4 className={classes.h4}><span>{props.span}</span>{props.title}</h4>    
            </div>
            <p>
                {props.word}
            </p>
        </div>
     );
}
 
export default WhyUsProps;