import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ images, openModalWindow }) {
    return (
        <ul>
            {images.map((image) => {
                return (<li key={image.id}>
                    <ImageCard image={image} openModalWindow={openModalWindow} />
                    </li>
                )
            })}
        </ul>
    )
}