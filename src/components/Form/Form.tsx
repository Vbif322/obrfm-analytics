import { FormEvent, useState } from "react";
import styles from "./form.module.css";

type Props = {};

export default function Form({}: Props) {
  const [seminarID, setSeminatID] = useState("");

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(seminarID);
  };
  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>Введите номер семинара</label>
        <input
          className={styles.input}
          value={seminarID}
          onChange={(e) => setSeminatID(e.target.value)}
        />
        <input type="submit" value="Отправить" className={styles.btn} />
      </form>
    </div>
  );
}
