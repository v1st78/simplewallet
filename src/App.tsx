import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import MainLayout from "./layouts/MainLayout";
import Welcome from "./pages/Welcome";
import CreateAndImport from "./pages/CreateAndImport";
import Login from "./pages/Login";
import RequireLog from "./components/RequireLog";
import Receive from "./pages/Receive";
import SelectSend from "./pages/SelectSend";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/wallet/import" element={<CreateAndImport />} />
        <Route
          path="/wallet/create"
          element={<CreateAndImport create={true} />}
        />
        <Route path="/login" element={<Login />} />

        <Route index element={<RequireLog children={<Main />} />} />
        <Route
          path="/receive"
          element={<RequireLog children={<Receive />} />}
        />
        <Route
          path="/send"
          element={<RequireLog children={<SelectSend />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
