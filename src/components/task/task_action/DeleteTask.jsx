import { useActionContext } from "../../../assets/store/action_context";

export default function DeleteTask() {
  const [, setAction] = useActionContext();

  return (
    <>
      <div className="container px-5 mx-auto">
        <div id="heading-create-task" className="border-b-2 pt-5 pb-4">
          <h1 className="text-center font-medium">Delete Task</h1>
        </div>
        <div id="body-create-task" className="py-4">
          <p className="mb-10">Are you serious?</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setAction("")}
              className="w-[40%] cursor-pointer bg-background border-[3px] border-button py-1 rounded-xl">
              No
            </button>
            <button
              onClick={() => setAction("")}
              className="w-[40%] cursor-pointer bg-button py-1 rounded-xl">
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
