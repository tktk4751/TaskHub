import React from "react";

function TaskCardDeleteButton({ taskCardsList, setTaskCardsList, taskCard }) {
  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="tcdb"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
  );
}

export default TaskCardDeleteButton;
