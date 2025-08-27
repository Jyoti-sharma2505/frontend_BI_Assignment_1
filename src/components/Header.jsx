// import { useNavigate } from "react-router-dom";
// import useFetch from "../useFetch";
import { useState } from "react";

const Header = ({setTitle}) => {
  const [search,setSearch]=useState("")
  // const navigate = useNavigate()

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(search)
  };
  return (
    <header>
      <nav class="navbar navbar-light bg-grey">
        <div class="container-fluid container">
          <img
            src="https://cdn.worldvectorlogo.com/logos/google-meet-2.svg"
            height="70px"
            width="120px"
            style={{ backgroundColor: "transparent" }}
            // style={{ backgroundColor: "none" }}
          />
          <form class="d-flex" onSubmit={handleSubmit}>
            <input
              class="form-control me-2"
              type="text"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search by title and tags..."
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
