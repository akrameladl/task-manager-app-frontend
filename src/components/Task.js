import { FaEdit, FaCheckDouble, FaTrashAlt } from "react-icons/fa";
const Task = ({
  task,
  index,
  deleteTask,
  getSingleTask,
  isEditing,
  updateTask,
  setToComplete,
}) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>..{index + 1}.. </b>
        {task.name}
      </p>

      <div className="task-icons">
        <FaCheckDouble color="green" onClick={() => setToComplete(task)} />
        <FaEdit color="purple" onClick={() => getSingleTask(task)} />
        <FaTrashAlt color="red" onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  );
};

export default Task
