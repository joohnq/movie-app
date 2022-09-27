import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //O useNavigate permite que a
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./style.css";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          {" "}
          <BiCameraMovie />
          MoviesLib
        </Link>
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Busque um filme"
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};
