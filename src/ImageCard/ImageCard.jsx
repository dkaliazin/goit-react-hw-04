import css from "./ImageCard.module.css";
export default function ImageCard({image, openModalWindow}) {
    <div onClick={() => openModalWindow(image)}>
        <img src={image.urls.small} alt={image.description}></img>
    </div>
}