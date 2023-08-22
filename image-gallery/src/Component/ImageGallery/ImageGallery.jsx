import ImageList from '../ImageList/ImageList';
import './ImageGallery.css'

function ImageGallery(){
    return(
        <div className="Gallery-wrapper">
            <h1>Image gallery</h1>
            <ImageList/>
        </div>
    )
}

export default ImageGallery;