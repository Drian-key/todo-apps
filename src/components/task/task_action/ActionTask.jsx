import { useActionContext } from "../../../assets/store/action_context";

export default function ActionTask() {
  const [, setAction] = useActionContext();

  return (
    <>
      <div className="container px-5 mx-auto">
        <span
          className="absolute right-4 top-2 text-lg cursor-pointer"
          onClick={() => setAction("")}>
          ❌
        </span>
        <div id="heading-create-task" className="border-b-2 pt-5 pb-4">
          <h1 className="text-center font-medium">Action Task</h1>
        </div>
        <div id="body-create-task" className="py-4">
          <p className="mb-10">What do you want?, about your task.</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setAction("deleteTask")}
              className="w-[40%] cursor-pointer bg-background border-[3px] border-button py-1 rounded-xl">
              Delete
            </button>
            <button
              onClick={() => setAction("changeTask")}
              className="w-[40%] cursor-pointer bg-button py-1 rounded-xl">
              Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
