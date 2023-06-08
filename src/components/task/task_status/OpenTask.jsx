import { useState } from "react";
import arrow from "../../../assets/icon/arrow.svg";
import checkbox from "../../../assets/icon/octicon_checkbox-24.svg";

export default function OpenTask() {
  const [arrowToday, setArrowToday] = useState(true);
  const [arrowPreviously, setArrowPreviously] = useState(true);

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
            className="flex gap-2 items-center bg-tertiary px-4 py-2 w-full mx-auto">
            <span>
              <img src={checkbox} alt="" />
            </span>
            <p>Crate Wireframe</p>
          </div>
          <div
            id={`taskid-${2}`}
            className="flex gap-2 items-center bg-tertiary px-4 py-2 w-full mx-auto">
            <span>
              <img src={checkbox} alt="" />
            </span>
            <p>Crate Wireframe</p>
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
            id={`taskid-${3}`}
            className="flex gap-2 bg-tertiary px-4 py-2 w-full mx-auto">
            <span className="mt-1">
              <img src={checkbox} alt="" />
            </span>
            <span>
              <p>Crate Wireframe</p>
              <p className="text-xs">30 April</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
