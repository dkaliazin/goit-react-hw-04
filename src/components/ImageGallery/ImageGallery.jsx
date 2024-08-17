import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ images, openModalWindow }) {
    return (
        <ul className={css.gallerylist}>
            {images.map((image) => {
                return (<li key={image.id} className={css.galleryitem}>
                    <ImageCard image={image} openModalWindow={openModalWindow} />
                    </li>
                )
            })}
        </ul>
    )
}