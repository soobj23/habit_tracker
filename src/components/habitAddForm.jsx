import React, {memo} from 'react';

const HabitAddForm = memo((props) => {
  console.log('habitAddform');
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = e => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
      <button className="add-button">Add</button>
    </form>
  );
});
export default HabitAddForm;
