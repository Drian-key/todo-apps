import { useState } from "react";
import arrow from "../../../assets/icon/arrow.svg";
import checkbox from "../../../assets/icon/octicon_checkbox-24.svg";
import checkedbox from "../../../assets/icon/ion_checkbox-sharp.svg";

export default function ClosedTask() {
  const [arrowToday, setArrowToday] = useState(true);
  const [arrowPreviously, setArrowPreviously] = useState(true);
  const [status2, setStatus2] = useState(true);

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
            className={`flex gap-2 items-center transition-all duration-300 ${
              status2 ? "bg-button" : "bg-tertiary"
            } px-4 py-2 w-full mx-auto`}>
            <span onClick={() => setStatus2(status2 ? false : true)}>
              <img src={status2 ? checkedbox : checkbox} alt="" />
            </span>
            <p className={status2 ? "line-through" : null}>
              Finishing useCallback()
            </p>
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
            className="flex gap-2 bg-button px-4 py-2 w-full mx-auto">
            <span className="mt-1">
              <img src={checkedbox} alt="" />
            </span>
            <span>
              <p className="line-through">Crate Wireframe</p>
              <p className="text-xs">30 April</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
