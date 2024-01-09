import React from "react";
import "./WidgetSmall.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSmall = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Member</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="/Images/Capture.PNG" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rehan Hamza</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/Images/Capture.PNG" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rehan Hamza</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/Images/Capture.PNG" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rehan Hamza</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/Images/Capture.PNG" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rehan Hamza</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/Images/Capture.PNG" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rehan Hamza</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
