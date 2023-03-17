import { NavLink, Link, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Ahihi</h1>
          <Link to="/">home</Link>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Career</NavLink>
        </nav>
        <Breadcrumbs/>
      </header>
      <main>
        {/* hứng các thằng con nằm trong thằng cha */}
        <Outlet/>
      </main>
    </div>
  );
}
