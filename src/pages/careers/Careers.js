import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData(); // resolve data từ thằng res.json()

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// data loader
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if(!res.ok) {
    throw Error('Could not fetch the careers');
  }

  // thằng react-router tự động resolve cho chúng ra cái promise trả về từ res.json()
  // nhờ thằng hook useLoaderData
  return res.json();
};
