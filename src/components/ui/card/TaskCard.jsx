import { useContext } from "react";
import { TaskContext } from "../../../context/TaskProvider";

const TaskCard = ({ task }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { name, date, isCompleted, id } = task;

  const handleComplete = (id) => {
    const restTasks = tasks.filter((task) => task.id !== id);
    setTasks([...restTasks, { name, date, id, isCompleted: true }]);
  };

  return (
    <div className="grid grid-cols-3 justify-between items-center bg-gray-900 p-5">
      <h3>{name}</h3>
      <h3>{date}</h3>
      <div className="text-end">
        <button
          onClick={() => handleComplete(id)}
          className="text-sm font-bold bg-white text-black px-4 py-1 rounded"
        >
          {isCompleted ? "done" : "pending"}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
