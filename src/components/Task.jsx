import { useActionContext } from "../assets/store/action_context";
import ActionTask from "./task/task_action/ActionTask";
import ChangeTask from "./task/task_action/ChangeTask";
import CreateTask from "./task/task_action/CreateTask";
import DeleteTask from "./task/task_action/DeleteTask";

// eslint-disable-next-line react/prop-types
export default function Task({ children }) {
  const [action] = useActionContext();

  console.log(action);
  return (
    <div id="task">
      {children}
      <div
        id="screen"
        className={`${
          action ? "" : "hidden"
        } bg-gradient-to-t from-black to-white opacity-30 absolute top-0 right-0 bottom-0 left-0`}></div>
      <div
        className={`${
          action === "createTask" ? "" : "translate-y-full"
        } fixed bg-background w-full bottom-0 transition-all duration-500 ease-in-out rounded-tl-2xl rounded-tr-2xl`}>
        <CreateTask />
      </div>
      <div
        className={`${
          action === "actionTask" ? "" : "translate-y-full"
        } fixed bg-background w-full bottom-0 transition-all duration-500 ease-in-out rounded-tl-2xl rounded-tr-2xl`}>
        <ActionTask />
      </div>
      <div
        className={`${
          action === "deleteTask" ? "" : "translate-y-full"
        } fixed bg-background w-full bottom-0 transition-all duration-500 ease-in-out rounded-tl-2xl rounded-tr-2xl`}>
        <DeleteTask />
      </div>
      <div
        className={`${
          action === "changeTask" ? "" : "translate-y-full"
        } fixed bg-background w-full bottom-0 transition-all duration-500 ease-in-out rounded-tl-2xl rounded-tr-2xl`}>
        <ChangeTask />
      </div>
    </div>
  );
}
