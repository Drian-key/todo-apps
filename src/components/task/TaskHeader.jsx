import plus from "../../assets/icon/plus.svg";
import { useActionContext } from "../../assets/store/action_context";

export default function TaskHeader() {
  const [, setAction] = useActionContext();

  return (
    <div id="task-header" className="shadow-md">
      <div className="container px-5 mx-auto flex justify-between items-center py-5">
        <h2 className="font-medium text-base">Today&apos;s Task</h2>
        <button
          className="flex items-center gap-2 bg-button py-1 px-3 rounded-xl"
          onClick={() => setAction("createTask")}>
          <img src={plus} alt="plus" />
          <p>New Task</p>
        </button>
      </div>
    </div>
  );
}
