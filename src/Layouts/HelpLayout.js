import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor
        assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>x
        <NavLink to="contact">Contact Us</NavLink>x
      </nav>
      <Outlet/>
    </div>
  );
}

export default HelpLayout;
