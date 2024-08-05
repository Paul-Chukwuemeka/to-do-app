import "../App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import TaskhelperIcon from "../resources/TaskHelper.png";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <img src={TaskhelperIcon} alt="header" />
      <div className="search-input">
        <span>
          <button>
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
          </button>
          <input type="text" />
        </span>
      </div>
      <FontAwesomeIcon onClick={() => setOpen(!open)} className="history-btn" icon={faClockRotateLeft} />
      {open && (<div className="recent">

      </div>)}
    </div>
  );
};

export default Header;
