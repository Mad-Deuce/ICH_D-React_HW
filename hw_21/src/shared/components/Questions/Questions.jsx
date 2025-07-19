import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { questionsSelector } from "/src/redux/questionnaire/questionnaireSelectors";
import { changeResult } from "/src/redux/questionnaire/questionnaireSlice";

import QuestionItem from "./QuestionItem/QuestionItem";

import styles from "./Questions.module.css";

export default function Questions() {
  const questions = useSelector(questionsSelector);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(changeResult(data));
    reset();
  };

  const elements = questions.map((question) => (
    <QuestionItem
      key={question.id}
      register={register}
      question={question}
      errors={errors}
    />
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <ul className={styles.questions}>{elements}</ul>
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
}
