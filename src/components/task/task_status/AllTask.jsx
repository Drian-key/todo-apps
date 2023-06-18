import { useState } from "react";
import arrow from "../../../assets/icon/arrow.svg";
import checkbox from "../../../assets/icon/octicon_checkbox-24.svg";
import checkedbox from "../../../assets/icon/ion_checkbox-sharp.svg";
import actionicon from "../../../assets/icon/healthicons_i-note-action-outline.svg";
import { useActionContext } from "../../../assets/store/action_context";

export default function AllTask() {
  const [arrowToday, setArrowToday] = useState(true);
  const [arrowPreviously, setArrowPreviously] = useState(true);
  const [status2, setStatus2] = useState(true);
  const [, setAction] = useActionContext();

  return (
    <>
      <div id="today-task">
        <div id="today-task-head" className="flex mb-3">
          <h3 className="text-base font-medium mr-2">Today</h3>
          <button
            className="cursor-pointer"
            onClick={() => setArrowToday(arrowToday ? false : true)}>
            <img
              src={arrow}
              alt="arrow"
              className={arrowToday ? "rotate-180" : ""}
            />
          </button>
        </div>
        <div
          id="today-task-body"
          className={`flex flex-wrap gap-y-2 mb-2 ${
            !arrowToday ? "hidden" : null
          }`}>
          <div
            id={`taskid-${1}`}
            className="flex gap-2 items-center bg-tertiary px-4 py-2 w-full mx-auto cursor-pointer">
            <span>
              <img src={checkbox} alt="" />
            </span>
            <p>Crate Wireframe</p>
            <span
              onClick={() => setAction("actionTask")}
              className="opacity-30 hover:opacity-100 transition-all ease-in-out duration-200">
              <img src={actionicon} alt="" />
            </span>
          </div>
          <div
            id={`taskid-${2}`}
            className={`flex gap-2 items-center transition-all duration-300 cursor-pointer ${
              status2 ? "bg-button" : "bg-tertiary"
            } px-4 py-2 w-full mx-auto`}>
            <span onClick={() => setStatus2(status2 ? false : true)}>
              <img src={status2 ? checkedbox : checkbox} alt="" />
            </span>
            <p className={status2 ? "line-through" : null}>
              Finishing useCallback()
            </p>
            <span
              onClick={() => setAction("actionTask")}
              className="opacity-30 hover:opacity-100 transition-all ease-in-out duration-200">
              <img src={actionicon} alt="" />
            </span>
          </div>
          <div
            id={`taskid-${3}`}
            className="flex gap-2 items-center bg-tertiary px-4 py-2 w-full mx-auto cursor-pointer">
            <span>
              <img src={checkbox} alt="" />
            </span>
            <p>Crate Wireframe</p>
            <span
              onClick={() => setAction("actionTask")}
              className="opacity-30 hover:opacity-100 transition-all ease-in-out duration-200">
              <img src={actionicon} alt="" />
            </span>
          </div>
        </div>
      </div>

      <div id="previously-task">
        <div id="previously-task-head" className="flex mb-3">
          <h3 className="text-base font-medium mr-2">Previously</h3>
          <button
            className="cursor-pointer"
            onClick={() => setArrowPreviously(arrowPreviously ? false : true)}>
            <img
              src={arrow}
              alt="arrow"
              className={arrowPreviously ? "rotate-180" : ""}
            />
          </button>
        </div>
        <div
          id="today-task-body"
          className={`flex flex-wrap gap-y-2 mb-2 ${
            !arrowPreviously ? "hidden" : null
          }`}>
          <div
            id={`taskid-${4}`}
            className="flex gap-2 bg-tertiary px-4 py-2 w-full mx-auto cursor-pointer">
            <span className="mt-1">
              <img src={checkbox} alt="" />
            </span>
            <span>
              <p>Crate Wireframe</p>
              <p className="text-xs">30 April</p>
            </span>
            <span
              onClick={() => setAction("actionTask")}
              className="opacity-30 hover:opacity-100 transition-all ease-in-out duration-200">
              <img src={actionicon} alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
