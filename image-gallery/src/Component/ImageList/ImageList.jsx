import { useEffect, useState } from "react";
import axios from 'axios';
import './ImageList.css'
import Image from "../Image/Image";

//image list component
function ImageList(){

    const [imageList, setImageList] = useState([]);

    //useEffect() callback function
    async function downloadImage(){
        
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=20'); // this downloads list of 10 images

        const imageResults = response.data.photos;  // we get the array of images from the response
        // console.log(imageResults);

        // iterating over the array of imageResults that will return id, tittle, image, user of those 10 images
        const imageListResult = imageResults.map((imageResults)=>{
            // const image = imageResults.id;
            // console.log(image);
            return {
                id: imageResults.id,
                title: imageResults.title, 
                image: imageResults.url, 
                user: imageResults.user
            }
        })

        // console.log(imageListResult);
        setImageList(imageListResult)

    }

    //useEffect() hook
    useEffect(()=>{
        downloadImage();
    }, [])

    //this will return the 20 list on images in image component
    return(
        <div className="image-list-wrapper">
            {
                imageList.map((i)=> <Image id={i.id} image={i.image} key={i.id}/>)
            }
        </div>
    )
};

export default ImageList;