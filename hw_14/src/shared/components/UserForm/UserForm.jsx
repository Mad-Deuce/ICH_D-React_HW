import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { setUserInfoCreator } from "/src/redux/user/user-actions";

import { selectUser } from "/src/redux/user/user-selectors.js";

import Title from "/src/shared/components/Title/Title";
import Input from "/src/shared/components/Input/Input";

import styles from "./UserForm.module.css";
import { useEffect } from "react";

export default function UserForm() {
  const { register, handleSubmit, setValue } = useForm({});
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    for (const key in user) {
      setValue(key, user[key]);
    }
  }, [setValue, user]);

  const onSubmit = (values) => {
    dispatch(setUserInfoCreator(values));
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <Title className={styles.title}>Edit User Information</Title>
      <Input label="Name: " type="text" {...register("username")} />
      <Input label="Status: " type="text" {...register("status")} />
      <button className={styles.button} type="submit">
        Save
      </button>
    </form>
  );
}
