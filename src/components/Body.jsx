import TaskHeader from "./task/TaskHeader";
import TaskStatus from "./task/TaskStatus";
import Task from "./Task";
import TaskBody from "./task/TaskBody";

export default function Body() {
  return (
    <Task>
      <TaskHeader />
      <TaskStatus />
      <TaskBody />
    </Task>
  );
}
