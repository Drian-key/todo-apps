import { useStatusContext } from "../../assets/store/status_context";

export default function TaskStatus() {
  const [status, setStatus] = useStatusContext();

  return (
    <div id="task-status">
      <div className="container p-5 mx-auto">
        <div className="flex justify-between font-medium text-base">
          <button id="all" onClick={() => setStatus("all")}>
            <p>
              All{" "}
              <span
                className={`${
                  status === "all" ? "bg-button" : "bg-tertiary"
                } text-xs p-[1px] rounded-full transition-colors duration-200`}>
                30
              </span>
            </p>
          </button>
          <button id="open" onClick={() => setStatus("open")}>
            <p>
              Open{" "}
              <span
                className={`${
                  status === "open" ? "bg-button" : "bg-tertiary"
                } text-xs p-[1px] rounded-full transition-colors duration-200`}>
                30
              </span>
            </p>
          </button>
          <button id="closed" onClick={() => setStatus("closed")}>
            <p>
              Closed{" "}
              <span
                className={`${
                  status === "closed" ? "bg-button" : "bg-tertiary"
                } text-xs p-[1px] rounded-full transition-colors duration-200`}>
                30
              </span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
