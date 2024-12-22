import React from "react";

function Benifits() {
  const contacts = [
    {
      id: 1,
      title: "Physc Gym Nerul 24/7",
      image:
        "https://framerusercontent.com/images/W1L5fI4RpqurtydbmGY5crv0ItM.jpg?scale-down-to=512",
      phone: "+259 (0) 256 215",
      address: "159 Pioneer St, Brooklyn",
    },
    {
      id: 2,
      title: "Iron Fitness",
      image:
        "https://framerusercontent.com/images/LsEJrnNgbBAk08pLHwNcDRF4oLo.jpeg?scale-down-to=512",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai",
    },
    {
      id: 3,
      title: "Hydropower Fitness & Gym",
      image:
        "https://framerusercontent.com/images/LMf0H8b1MNKO0RwpkoYqfCtUaOg.jpeg?scale-down-to=512",
      phone: "+91-22-0001-0211",
      address: "Nerul, Navi Mumbai",
    },
    {
      id: 4,
      title: "Yuva Fitness",
      image:
        "	https://framerusercontent.com/images/64IsefqJykeOf5kk2ETV1gkGQ.jpg?scale-down-to=512",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai",
    },
    {
      id: 5,
      title: "Ozone The Gym",
      image:
        "https://framerusercontent.com/images/LCCMMGLq0ltGKumFa9u0MHb5o.jpg?scale-down-to=512",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai",
    },
    {
      id: 6,
      title: "The Square Gym",
      image:
        "https://framerusercontent.com/images/PGAbUTA6vfEEZzEnxTdQDESoOU.png?scale-down-to=512",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai",
    },
    {
      id: 7,
      title: "Arnolds Total Fitness",
      image:
        "	https://framerusercontent.com/images/DOzktr1SJvtZ2JWlN1robGanA.jpg?scale-down-to=512",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai",
    },
    {
      id: 8,
      title: "Edge Fitness Seawoods",
      image:
        "https://framerusercontent.com/images/HJRDzDi84uefoHHZYsokhFiak.png?scale-down-to=512",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai",
    },
  ];

  return (
    <section id="benifits" className="benifits-container">
      <div className="background-image">
        <h1 className="benefits-h1">WHAT PEOPLE SAY</h1>
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item">
              <div className="image-container">
                <img
                  src="https://framerusercontent.com/images/2xpZXjM4AhwduCRhoAnVxztrfIk.jpg?scale-down-to=1024"
                  alt="image-slider"
                  className="image-slider"
                />
              </div>
              <div className="content">
                <div className="stars">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <p>
                  I've seen amazing results since using GymFluencer. The
                  progress tracking feature keeps me motivated!
                </p>
                <p className="name">David Leo</p>
                <p className="profession">Designer</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="image-container">
                <img
                  src="	https://framerusercontent.com/images/3j6CVVIKDTJFl9GkL39qFFZhBVY.jpg?scale-down-to=1024"
                  alt="image-slider"
                />
              </div>
              <div className="content">
                <div className="stars">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <p>
                  GymFluencer has transformed the way I work out. The rep
                  counting feature is a game-changer!
                </p>
                <p className="name">Angelia Jolie</p>
                <p className="profession">Model</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="image-container">
                <img
                  src="https://framerusercontent.com/images/AUrZKb58SZtY1pfePnYIGJ3feyQ.jpg?scale-down-to=1024"
                  alt="image-slider"
                />
              </div>
              <div className="content">
                <div className="stars">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <p>
                  I love how user-friendly the app is. Logging workouts has
                  never been easier!
                </p>
                <p className="name">Michael Field</p>
                <p className="profession">Software engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="benifit-heading">
        <h2 className="benifit-h2">FIND YOUR NEAREST GYM</h2>
        <p className="beni-para">
          Easily discover gyms near your location to kickstart
          <span className="span-paragraph" style={{ display: "block" }}>
            your fitness journey today!
          </span>
        </p>
      </div>
      <div className="layout-container">
        <div className="div-60">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {contacts.map((contact) => (
              <li key={contact.id} style={{ marginBottom: "10px" }}>
                <div className="li-container">
                  <div style={{ flex: "0 0 30%", textAlign: "center" }}>
                    <img
                      src={contact.image}
                      alt={contact.title}
                      style={{
                        width: "100%",
                        height: "150px",
                        border: "1px solid black",
                      }}
                    />
                  </div>
                  <div style={{ flex: "1", paddingLeft: "10px" }}>
                    <h1 style={{ fontSize: "20px", margin: "0 0 15px" }}>
                      {contact.title}
                    </h1>
                    <p style={{ marginbottom: 0, fontSize: "12px" }}>
                      <span
                        role="img"
                        aria-label="phone"
                        style={{ marginRight: "15px" }}
                      >
                        <i className="bi bi-telephone-x">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-telephone-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            <path
                              fill-rule="evenodd"
                              d="M11.146 1.646a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708"
                            />
                          </svg>
                        </i>
                      </span>
                      {contact.phone}
                    </p>
                    <p style={{ margin: 0, fontSize: "12px" }}>
                      <span
                        role="img"
                        aria-label="location"
                        style={{ marginRight: "15px" }}
                      >
                        <i className="bi bi-geo-alt">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-geo-alt"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                          </svg>
                        </i>
                      </span>
                      {contact.address}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="div-40">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609972204!2d72.87948748429588!3d19.01761511146478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c98d03a3b5%3A0x4d2c3c08e6aefb38!2s22J8%2BXMF%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Benifits;

