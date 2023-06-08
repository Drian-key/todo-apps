import { useActionContext } from "../../../assets/store/action_context";

export default function CreateTask() {
  const [, setAction] = useActionContext();

  return (
    <>
      <div className="container px-5 mx-auto">
        <div id="heading-create-task" className="border-b-2 pt-5 pb-4">
          <h1 className="text-center font-medium">New Task</h1>
        </div>
        <div id="body-create-task" className="py-4">
          <div className="mb-8">
            <h2 className="font-medium">Title</h2>
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Add Task Name..."
              name=""
              id=""
            />
          </div>
          <div className="mb-2">
            <h2 className="font-medium">Date</h2>
            <input
              type="date"
              name=""
              id=""
              className="outline-none w-full text-sm py-2"
            />
          </div>
          <div className="mb-8">
            <h2 className="font-medium">Time</h2>
            <input
              type="time"
              name=""
              id=""
              className="outline-none w-full text-sm py-2"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setAction("")}
              className="w-[40%] cursor-pointer bg-background border-[3px] border-button py-1 rounded-xl">
              Cancel
            </button>
            <button className="w-[40%] cursor-pointer bg-button py-1 rounded-xl">
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
