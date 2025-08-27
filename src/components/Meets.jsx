import { useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const Meets = ({ title }) => {
  const [filter, setFilter] = useState("");
  const { data, loading, error } = useFetch(
    "https://backend-bi-assignment-1.vercel.app/meets"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredMeets = data?.meet
    ?.filter((meet) => (filter ? meet.type === filter : true))
    ?.filter((meet) =>
      title ? meet.title.toLowerCase().includes(title.toLowerCase()) : true
    );

  return (
    <div className="container">
      <hr />
      <div className="d-flex justify-content-between align-items-center py-3">
        <h2 className="container py-3">MeetUp Events</h2>
        <select
          className="form-select w-25 border-0 hover:bg-gray-100"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Select Event Tags</option>
          <option value="Online Events">Online Event</option>
          <option value="Offline Events">Offline Event</option>
          <option value="Both Events">Both Event</option>
        </select>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 py-3 h-100">
        {filteredMeets?.length > 0 ? (
          filteredMeets.map((meets) => (
            <div key={meets._id}>
              <div className="card h-100 position-relative">
                <Link to={`/meets/${meets._id}`}>
                  <img
                    src={meets.thumbnail}
                    className="card-img-top rounded"
                    alt="meet"
                  />
                </Link>
                <span
                  className={`position-absolute top-0 start-0 m-2 px-2 py-1 text-white rounded ${
                    meets?.type === "Online Events"
                      ? "bg-success"
                      : meets?.type === "Offline Events"
                      ? "bg-danger"
                      : "bg-secondary"
                  }`}
                >
                  {meets.type}
                </span>
                <div className="card-body">
                  <p>{meets.date}</p>
                  <h5 className="card-title">{meets.title}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No events found</p>
        )}
      </div>
    </div>
  );
};

export default Meets;
