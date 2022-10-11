import React from "react";

import { ReactComponent as WebsiteIcon } from "../assets/icon-website.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "../assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "../assets/icon-location.svg";

function UserLinks(props) {
  console.log(props.theme);
  return (
    <>
      <ul className="user-links">
        <div className="link-wrapper">
          <div class="first-links">
            <li className="social-links">
              <LocationIcon className="icon"></LocationIcon>
              <p>
                {props.location === null ? "Not Available" : props.location}
              </p>
            </li>
            <li className="social-links">
              <WebsiteIcon className="icon"></WebsiteIcon>
              <a href={props.website === "" ? "#" : props.website}>
                {props.website === "" ? "Not Available" : props.website}
              </a>
            </li>
          </div>
        </div>
        <div className="link-wrapper">
          <div class="second-links">
            <li className="social-links">
              <TwitterIcon className="icon"></TwitterIcon>
              <p>{props.twitter === null ? "Not Available" : props.twitter}</p>
            </li>
            <li className="social-links">
              <CompanyIcon className="icon"></CompanyIcon>
              <p>{props.company === null ? "Not Available" : props.company}</p>
            </li>
          </div>
        </div>
      </ul>
    </>
  );
}

export default UserLinks;
