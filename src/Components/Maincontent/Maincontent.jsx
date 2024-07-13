import React from "react";
import banner from "../../assets/images/banner.png";
import "./Maincontent.css";

export default function Maincontent() {
  return (
    <section className="w-100 position-relative">
      <div className="banner-container">
        <img src={banner} alt="Banner" className="img-fluid w-100" />
        <div className="banner-text-container">
          <h1 className="banner-text text-center">
            Five Reasons to run Your Microsoft Apps on Azure
          </h1>
        </div>
      </div>
      <div className="row p-5 d-flex justify-content-around">
        <div className="col-md-6 col-12 p-5 form-content">
          <h5 className="h5">Webinar On-demand</h5>
          <br />
          <p className="para-main">
            Join corey Sanders, Microsoft's Director of Program Management on
            the Azure Compute team, to learn the top five reasons why you'll
            benefit from running microsoft apps on Azure.
          </p>
          <p>
            Learn from in-depth demos showcasing workloads, such as SharePoint
            and Dynamics, and gain from Corey's immense experience, which
            includes creating and delevering the initial laaS release in Azure.
          </p>
          <p>
            During this webinar, you'll take part in:
            <ul
              className="mt-2"
              style={{ lineHeight: "40px", marginLeft: "25px" }}
            >
              <li>
                Several demos showcasing Microsoft apps like SharePoint and
                Dynamics
              </li>
              <li>Learning why Azure is the best for Microsoft workloads</li>
              <li>Learning how to quickly deploy these apps</li>
              <li>Live Q&A</li>
            </ul>
          </p>
        </div>
        <div className="col-md-6 col-12 p-4">
          <h1 className="display-6 fs-2 mb-4 register">Register Now</h1>
          <p>Fill out this form to watch the webinar</p>
          <form className="form">
            <div className="mb-3 asterix">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="mb-3 asterix">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-3 asterix">
              <input
                type="email"
                className="form-control"
                placeholder="Work Email"
              />
            </div>
            <div className="mb-3 asterix">
              <input
                type="tel"
                className="form-control"
                placeholder="Work Phone"
              />
            </div>
            <div className="mb-3 asterix">
              <select className="form-select">
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="America">America</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Bangladesh">Bangladesh</option>
              </select>
            </div>
            <div className="mb-3 asterix">
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
              />
            </div>
            <button className="button">Register Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
