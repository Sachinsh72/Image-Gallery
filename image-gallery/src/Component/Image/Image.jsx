import './Image.css'

function Image({title, image}){
    return (
        <div className='image'>
            <img className='image-img' src={image} alt="image" />
        </div>
    )
}

export default Image;