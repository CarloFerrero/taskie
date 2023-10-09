import { useState } from "react";
import styles from "./AddTask.module.css";
import clsx from "clsx";
import { useValidator } from "../../hook/useValidator";
import { useTask } from "../../context/taskContext";
import CardData from "./CardData";

const AddTask = (props) => {
  const [form, setForm] = useState({
    email: ""
  });
  const { form : formContext, setForm: setFormContext } = useTask();
  
  const { errors, validateForm, onBlurField } = useValidator(form);

  const onUpdateField = e => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    setFormContext(form);
  };

  return (
    <>
    <form className={styles.form} onSubmit={onSubmitForm}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>email</label>
        <input
          className={clsx(
            styles.formField,
            errors.email.dirty && errors.email.error && styles.formFieldError
          )}
          type="text"
          aria-label="email field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
          onBlur={onBlurField}
        />
        {errors.email.dirty && errors.email.error ? (
          <p className={styles.formFieldErrorMessage}>{errors.email.message}</p>
        ) : null}
      </div>
      <div className={styles.formActions}>
        <button className={styles.formSubmitBtn} type="submit">
          Submit
        </button>
      </div>
    </form>
    <CardData />
    </>
  );
};

export default AddTask;