import {Route, Routes} from 'react-router-dom';
import ImageGallery from '../Component/ImageGallery/ImageGallery';
import ImageDeatils from '../Component/ImageDetails/ImageDetails';

//custom routes component
function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element={<ImageGallery/>}/>
            <Route path="/photos/:id" element={<ImageDeatils/>}/>
        </Routes>
    )
}

export default CustomRoutes;