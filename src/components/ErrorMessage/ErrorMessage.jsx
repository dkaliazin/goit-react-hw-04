import css from './ErrorMessage.module.css';
export default function ErrorMessage() {
  return (<p className={css.errormsg}>Error! Refresh the page!</p>);
}