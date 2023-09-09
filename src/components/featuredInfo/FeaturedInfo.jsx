import "./featuredInfo.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import CheckboxTree from "react-checkbox-tree";

const nodes = [
  {
    value: "mars",
    label: "Mars",
    children: [
      { value: "phobos", label: "Phobos" },
      { value: "deimos", label: "Deimos" },
    ],
  },
];

export default function FeaturedInfo() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [value, onChange] = useState(new Date());
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Pending
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Overdue
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Complete
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            {/* <h2>Content 1</h2> */}
            {/* <hr /> */}
            <p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Item 1
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 2
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 3
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
               
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 4
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                 
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 5
                </label>
              </div>
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            {/* <h2>Content 2</h2> */}
            {/* <hr /> */}
            <p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Item 1
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 2
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 3
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
               
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 4
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                 
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 5
                </label>
              </div>
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            {/* <h2>Content 3</h2> */}
            {/* <hr /> */}
            <p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Item 1
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 2
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 3
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
               
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 4
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                 
                />
                <label class="form-check-label" for="flexCheckChecked">
                Item 5
                </label>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="featuredItem">
        <h5 className="featuredTitle">Plan your Calendar</h5>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
