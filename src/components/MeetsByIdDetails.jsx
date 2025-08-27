import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const MeetsByIdDetails = () => {
  const { meetsId } = useParams();
  const { data, loading, error } = useFetch(
    `https://backend-bi-assignment-1.vercel.app/meets/${meetsId}`
  );

  const event = data?.meet;
  return (
    <div className="container">
      <Header />
      <hr />
      <div className="container py-4">
        <div class="row">
          <div class="col-sm-6">
            <div>
              <div class="card-body">
                <h5 class="card-title">{event?.title}</h5>
                <p class="card-text">Hosted By :</p>
                <p class="card-text">
                  <strong>{event?.topic}</strong>
                </p>
                <img
                  src={event?.thumbnail}
                  className="card-img-top rounded py-3"
                  alt="meet"
                  // width="50px"
                  // height="30%"
                  style={{ width: "50%", height: "30%", objectFit: "cover" }}
                />
                <p>
                  <strong>Details :</strong>
                </p>
                <p>{event?.description}</p>
                <h5>Additional Information :</h5>
                <p>
                  <strong>Dress Code: </strong>
                  {event?.extraInfo}
                </p>
                <p>
                  <strong>Age Restriction: </strong>
                  {event?.extraInfo}
                </p>
                <h5 className="py-2">Events Tags :</h5>
                {event?.tags?.map((tabs) => (
                  <button className="btn btn-primary ms-3 ">{tabs}</button>
                ))}

                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card border-0">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="bi bi-clock"> {event?.timings}</i>
                </h5>
                <p class="card-text">
                  <i class="bi bi-geo-alt">
                    {" "}
                    Marketing City
                    <br />
                    789,Marketing venue city.
                  </i>
                </p>
                <p>{event?.price === "free" ? "Free" : `₹ ${event?.price}`}</p>
              </div>
            </div>
            <div>
              <div class="card-body">
                <h5 class="card-title py-3">
                  Speakers: ({event?.speakers?.length})
                </h5>
                <div className="row row-cols-1 row-cols-md-2 g-2">
                  {event?.speakers?.map((speaker) => (
                    <div className="col">
                      <div
                        className="card text-center border-0"
                        style={{ width: "12rem", height: "8rem" }}
                      >
                        <img
                          src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"
                          className="rounded-circle mx-auto mt-3"
                          width="70"
                          height="70"
                          alt="speaker"
                        />
                        <div className="card-body p-1">
                          <h6 className="card-title mb-1">{speaker}</h6>
                          <p className="card-text small text-muted">
                            Marketing manager
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center py-4">
                <button className="btn btn-primary border-0  w-50">RSVP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetsByIdDetails;
