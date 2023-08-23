import { Link } from 'react-router-dom';
import './Image.css'

//single image component
function Image({image,id}){
    return (
        <div className='image'>
            <Link to={`/photos/${id}`}>
            <img className='image-img' src={image} alt="image" />
            </Link>
        </div>
    )
}

export default Image;