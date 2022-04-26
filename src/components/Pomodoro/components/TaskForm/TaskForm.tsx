import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import './TaskForm.scss';
import { addTaskAction, IRootState } from '../../../../store';

export function TaskForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const tasks = useSelector<IRootState, string[]>((store) => store.tasks);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      task,
    },
    onSubmit: (values) => {
      tasks.push(values.task);
      dispatch(addTaskAction(values.task));
      setTask('');
    },
  });
  return (
    <form className="task-form" onSubmit={formik.handleSubmit}>
      <input
        className="task-form__input"
        type="text"
        placeholder="Название задачи"
        onChange={(e) => setTask(e.target.value)}
        value={formik.values.task}
      />
      <button
        className="task-form__add"
        type="submit"
      >
        Добавить
      </button>
    </form>
  );
}
