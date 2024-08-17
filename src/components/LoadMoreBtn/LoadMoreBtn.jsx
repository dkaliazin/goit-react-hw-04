import css from './LoadMoreBtn.module.css';
export default function LoadMoreBtn({ onClick }) {
 return (
    <button onClick={onClick} className={css.loadbtn}>
      Load more
    </button>
  );
}