import { useContext, useEffect, useRef } from "react";
import { TaskContext } from "../../context/TaskProvider";
import TaskCard from "../../components/ui/card/TaskCard";

const Tasks = () => {
  const { tasks } = useContext(TaskContext);

  const pageRef = useRef();

  useEffect(() => {
    const page = pageRef.current;

    page.classList.add("slide-up");

    setTimeout(() => {
      page.classList.add("slide-up-visible");
    }, 100);
  }, []);

  return (
    <div ref={pageRef} className="flex justify-center items-center text-white">
      <div className="w-11/12 mx-auto space-y-5">
        <h2>Pending</h2>
        <div className="space-y-5">
          {tasks?.length ? (
            tasks.map((task, i) => <TaskCard key={i} task={task} />)
          ) : (
            <p>No Tasks found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
