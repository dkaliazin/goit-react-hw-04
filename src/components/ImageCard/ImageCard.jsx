import css from "./ImageCard.module.css";

export default function ImageCard({ image, openModalWindow }) {
  return (
    <div onClick={() => openModalWindow(image)} className={css.imgbox}>
      <img src={image.urls.small} alt={image.description} className={css.imagecard} />
    </div>
  );
}