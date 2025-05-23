import { useForm } from "react-hook-form";

import TextField from "/src/components/TextField/TextField";

import { defaultValues, fields } from "./fields";

import styles from "./DynamicForm.module.css";

export default function DynamicForm() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (values) => {
    alert(`Данные отправлены: 
      ${JSON.stringify(values)}`);
    reset();
  };

  const firstField = watch("firstField");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <TextField
        {...fields.firstField}
        register={register}
        error={errors.firstField}
      />
      {firstField.length >= 5 && (
        <TextField
          {...fields.secondField}
          register={register}
          error={errors.secondField}
        />
      )}
      <button disabled={!isValid} type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}
