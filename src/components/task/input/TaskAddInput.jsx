import React from "react";

function TaskAddInput({ inputText, setInputText, taskList, setTaskList }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        draggableId: `task-${taskList.length}`,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="タスクを入力"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        ></input>
      </form>
    </div>
  );
}

export default TaskAddInput;
