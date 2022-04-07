import classes from "./gallery.module.css";
import Card from "../../components/Gallery/card";
import { galleryArray } from '../../constants'
import Button from '../../components/UI/Button/button';

const Gallery = () => {
    return ( 

        <div className={classes.main}>
            <h2>Interesting Tour Photos</h2>
            <div className={classes.hove}>
                {galleryArray.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
            <div className={classes.btn}>
                <Button text="View more" />
            </div>
        </div>
     );
}
 
export default Gallery;