import { useParams } from 'react-router-dom';
import './ImageDetails.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function ImageDeatils(){

    const {id} = useParams();
    // console.log(id);

    const [image, setImage] = useState({});
    async function downloadImage(){
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        const imageResult = response.data.photo;
        // console.log(imageResult);
        setImage({
            title: imageResult.title,
            image: imageResult.url,
            description: imageResult.description,
        })
    }

    useEffect(()=>{
        downloadImage();
    },[])

    return(
        <div className="image-defaults-wrapper">
            <div className="div-image">
            <img className="image-deatils-image" src={image.image}/>
            </div>
            <div className="div-content">
                <div className='title'>{image.title}</div>
                <div className='description'>{image.description}</div>
            </div>
        </div>
    )
}

export default ImageDeatils;