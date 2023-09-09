import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Collaborators</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
          src="https://images.vogue.it/users/my/avatar.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Joseph Kamau</span>
            <span className="widgetSmUserTitle">Therapist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
           View Profile
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
          src="https://images.vogue.it/users/my/avatar.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jane Githinji</span>
            <span className="widgetSmUserTitle">Physician</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
           View Profile
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
          src="https://images.vogue.it/users/my/avatar.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Doreen Wanjiku</span>
            <span className="widgetSmUserTitle">Nurse practitioner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
           View Profile
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
          src="https://images.vogue.it/users/my/avatar.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kate Mutua</span>
            <span className="widgetSmUserTitle">Pediatrician</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
           View Profile
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
          src="https://images.vogue.it/users/my/avatar.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ivy Muthoni</span>
            <span className="widgetSmUserTitle">Oncologist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
           View Profile
          </button>
        </li>
      </ul>
    </div>
  );
}
