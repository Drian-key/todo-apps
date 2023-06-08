import { useStatusContext } from "../../assets/store/status_context";
import AllTask from "./task_status/AllTask";
import ClosedTask from "./task_status/ClosedTask";
import OpenTask from "./task_status/OpenTask";

export default function TaskBody() {
  const [status] = useStatusContext();

  return (
    <div id="task-body">
      <div className="container px-5 mx-auto">
        {status === "all" ? (
          <AllTask />
        ) : status === "open" ? (
          <OpenTask />
        ) : status === "closed" ? (
          <ClosedTask />
        ) : (
          "null"
        )}
      </div>
    </div>
  );
}
