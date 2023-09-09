import { React, useState } from "react";

import items from "./allData";
import Button from "./filterButton";
import Menu from "./mentorsMenu";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);
export default function MentorshipPage() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div className="CurriculumSection">
      <h2 className="CurriculumSectionTitle">Explore Mentors</h2>
      <hr className="curriculumLine" />
      <br />
      <center>
        <Button className="btn btn-filters" button={buttons} filter={filter} />
      </center>
      <br />
      <Menu menuItem={menuItem} />
    </div>
  );
}
