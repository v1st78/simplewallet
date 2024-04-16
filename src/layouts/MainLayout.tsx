import { Navigate, Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const seed = localStorage.getItem("seed");
  const location = useLocation();

  if (!seed && location.pathname !== "/welcome") {
    return <Navigate to="/welcome" />;
  }

  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-background min-h-screen text-copy-light"
    >
      <Outlet />
    </main>
  );
}
export default MainLayout;
