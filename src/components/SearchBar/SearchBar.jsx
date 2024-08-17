import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ topicName: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.topicName);
          actions.resetForm();
        }}
      >
        <Form className={css.searchbar}>
          <Field
            type="text"
            name="topicName"
            autoComplete="off"
            placeholder="Search by name"
          />
          <button type="submit" className={css.button}>Search</button>
        </Form>
      </Formik>
    </header>
  );
}