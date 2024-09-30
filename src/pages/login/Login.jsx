import React, { useContext } from "react";
import { toast } from "sonner";
import { TaskContext } from "../../context/TaskProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const date = e.target.date.value;
    const id = crypto.randomUUID();

    if (!name) {
      toast.error("Enter Name", { id: "task" });
    } else if (!date) {
      toast.error("Enter Date", { id: "task" });
    } else {
      setTasks((prev) => [...prev, { name, date, isCompleted: false, id }]);
      toast.success("Successfully added", { id: "task" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-center text-white flex-col gap-10">
      <form
        onSubmit={handleSubmit}
        className="w-6/12 mx-auto flex flex-col items-start justify-center bg-gray-900 p-10 rounded gap-5"
      >
        <div className="flex  items-center justify-start w-full gap-2">
          <label htmlFor="name">Name: </label>
          <input
            className="w-full rounded text-black"
            type="text"
            name="name"
          />
        </div>
        <div className="flex  items-center justify-start w-full gap-2">
          <label htmlFor="date">Date: </label>
          <input
            className="w-full rounded text-black"
            type="date"
            name="date"
          />
        </div>
        <button
          type="submit"
          className="bg-white text-black w-full font-semibold tracking-widest py-1 px-10 rounded"
        >
          Add Task
        </button>
      </form>
      {tasks.length ? (
        <Link to={"/tasks"} className="underline link">
          Tasks
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
