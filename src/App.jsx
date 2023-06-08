import { StatusProvider } from "./assets/store/status_context";
import { ActionProvider } from "./assets/store/action_context";
import Router from "./router";

function App() {
  return (
    <StatusProvider>
      <ActionProvider>
        <Router />
      </ActionProvider>
    </StatusProvider>
  );
}

export default App;
