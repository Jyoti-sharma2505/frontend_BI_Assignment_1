import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const MeetsByIdDetails = () => {
  const { meetsId } = useParams();
  const { data, loading, error } = useFetch(
    `https://backend-bi-assignment-1.vercel.app/meets/${meetsId}`
  );
  // console.log(data)

  const event = data?.meet;
  console.log(event)
  return (
    <div className="container">
      <Header />
      <hr />
      <div className="container py-4">
        <div class="row">
          <div class="col-sm-6">
            <div>
              <div class="card-body">
                <h5 class="card-title py-2">{event?.title}</h5>
                <p class="card-text">Hosted By : <br/>
                 <strong>{event?.host}</strong>
                </p>
                <img
                  src={event?.imageUrl}
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
                {event?.extraInfo?.map((info, i) => (
                  <>
                    <p key={i}>
                      <strong>Dress Code:</strong> {info.dress}
                    </p>
                    <p><strong>Age:</strong> {info.age}</p>
                  </>
                ))}

              </div>

            </div>
            <div className="d-flex flex-wrap gap-2">
              {event?.tags?.map((tag, i) => (
                <button key={i} className="btn btn-primary">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="col-sm-6 py-4">
            <div className="card border-0 gap-2">
              <div className="card-body gap-2">
                <h5 className="card-title">
                  {/* <i className="bi bi-clock"> <p>
                    {event?.startTime} to <br />
                    {event?.endTime}
                  </p></i> */}
                </h5>
                <div className="d-flex align-items-center py-2">
                  <i className="bi bi-clock fs-5 me-2"></i>
                  <div>
                    <p className="mb-0">{event?.startTime} to <br />
                    {event?.endTime}</p>
                  </div>
                </div>
                {/* <p class=" card-text d-flex align-items-center justify-content-center gap-2">
                  <i class="bi bi-geo-alt">
                    <span>
                    {" "}
                    Marketing City
                    <br />
                    789,Marketing venue city.
                    </span>
                  </i>
                </p> */}
                <div className="d-flex align-items-center py-2">
                  <i className="bi bi-geo-alt fs-5 me-2"></i>
                  <div>
                    <p className="mb-0">Marketing City</p>
                    <p className="mb-0">789, Marketing venue city.</p>
                  </div>
                </div>
                <div className="py-2 ms-2">
                <p>{event?.fees === "free" ? "Free" : `₹ ${event?.fees}`}</p>
                </div> 
              </div>
            </div>
            <div>
              <div class="card-body">
                <h5 class="card-title py-3">
                  Speakers: ({event?.speakers?.length})
                </h5>
                <div className="row g-4 justify-content-center">
                  {event?.speakers?.map((speaker) => (
                    <div className="col-auto">
                      <div
                        className="card text-center border-0"
                        style={{ width: "12rem", height: "8rem" }}
                      >
                        <img
                          src={speaker.imageUrl}
                          className="rounded-circle mx-auto mt-3"
                          width="70"
                          height="70"
                          alt="speaker"
                        />
                        <div className="card-body p-1">
                          <h6 className="card-title mb-1">{speaker.name}</h6>
                          <p className="card-text small text-muted">
                            {speaker.designation}
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
