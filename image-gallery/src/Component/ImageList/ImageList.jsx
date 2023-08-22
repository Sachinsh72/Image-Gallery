import { useEffect, useState } from "react";
import axios from 'axios';
import './ImageList.css'

function ImageList(){

    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function downloadImage(){
        
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos')
        const imageResults = response.data.photos;
        
        // const imageResultPromise = imageResults.map((photo)=> axios.get(photo.photos));
        const imageData = await axios.all(imageResults); // array of 10 images detailed data
        // console.log(imageData);
        // console.log(response.data.photos);

        const imageListResult = imageData.map((imageData)=>{
            const image = imageData.photos;
            return {
                id: image.id,
                title: image.title, 
                image: image.url, 
                user: image.user
            }
        })

       console.log(imageListResult);

        setIsLoading(false);
    }

    useEffect(()=>{
        downloadImage();
    }, [])

    return(
        <div className="image-list-wrapper">
            <div>List of images</div>
            {(isLoading) ? "Loading...." : "Data downloaded"}
        </div>
    )
}

export default ImageList;