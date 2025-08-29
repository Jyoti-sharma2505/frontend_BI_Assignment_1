import { useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const Meets = ({ title }) => {
  const [filter, setFilter] = useState("");
  const { data, loading, error } = useFetch(
    "https://backend-bi-assignment-1.vercel.app/meets"
  );

 console.log(data)

  const filteredMeets = data?.meet
    ?.filter((meet) => (filter ? meet.eventType === filter : true))
    ?.filter((meet) =>
      title ? meet.title.toLowerCase().includes(title.toLowerCase()) : true
    );

  return (
    <div className="container">
      <hr />
      
      {error&&<p>Error: {error}</p>}
      <div className="d-flex justify-content-between align-items-center py-3">
      
        <h2 className="container py-3">MeetUp Events</h2>
        <select
          className="form-select w-25 border-0 hover:bg-gray-100"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Both Event</option>
          <option value="Online Events">Online Event</option>
          <option value="Offline Events">Offline Event</option>
        </select>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 py-3 h-100">
        {filteredMeets?.length > 0 ? (
          filteredMeets.map((meets) => (
            <div key={meets._id}>
              <div className="col">
              <div className="card h-100 ">
                <Link to={`/meets/${meets._id}`}>
                  <img
                    src={meets.imageUrl}
                    className="card-img-top rounded"
                    alt="meet"
                     style={{height: "200px", objectFit: "cover"}}
                  />
                </Link>
                <span
                  className={`position-absolute top-0 start-0 m-2 px-2 py-1 text-white rounded ${
                    meets?.eventType === "Online Events"
                      ? "bg-success"
                      : meets?.eventType === "Offline Events"
                      ? "bg-danger"
                      : "bg-secondary"
                  }`}
                >
                  {meets.eventType}
                </span>
                <div></div>
                <div className="card-body mb-2 fs-6 fw-normal ">
                  <p>{meets.startTime}</p>
                  <h5 className="card-title mb-0 fs-6 fw-semibold">{meets.title}</h5>
                </div>
              </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">{loading &&<p>Loading Events....</p>}</p>
        )}
      </div>
    </div>
  );
};

export default Meets;
