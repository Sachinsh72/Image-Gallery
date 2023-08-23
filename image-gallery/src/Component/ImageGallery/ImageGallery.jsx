import ImageList from '../ImageList/ImageList';
import './ImageGallery.css'

//image gallery component
function ImageGallery(){
    return(
        <div className="Gallery-wrapper">
            <h1>Image Gallery</h1>
            <ImageList/>
        </div>
    )
}

export default ImageGallery;