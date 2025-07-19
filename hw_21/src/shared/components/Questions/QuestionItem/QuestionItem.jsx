import styles from "./QuestionItem.module.css";

export default function QuestionItem({ question, register, errors }) {

  const options = question.options.map((item) => (
    <div key={item.id} className={styles.option}>
      <input
        {...register(question.id, { required: "Please select an option" })}
        type="radio"
        name={question.id}
        value={item.value}
      />
      <label className={styles.label}>{item.text}</label>
    </div>
  ));

  return (
    <li className={styles.wrapper}>
      <h2 className={styles.title}>{question.title}</h2>
      {options}
      {errors && <span className={styles.error}>{errors[question.id]?.message}</span>}
    </li>
  );
}
