import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Current Projects</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Project Title</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Collaborators</th>
          <th className="widgetLgTh">Stage</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgDate">Cancer Treatment</span>
          </td>
          <td className="widgetLgDate">14 July 2022</td>
          <td className="widgetLgAmount">8</td>
          <td className="widgetLgStatus">
            <Button className="Basic" type="Basic Research" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgDate">Anti-Aging Research</span>
          </td>
          <td className="widgetLgDate">14 July 2022</td>
          <td className="widgetLgAmount">5</td>
          <td className="widgetLgStatus">
            <Button className="Trials" type="Clinical Trials" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgDate">COVID-19 Vaccine</span>
          </td>
          <td className="widgetLgDate">14 July 2022</td>
          <td className="widgetLgAmount">9</td>
          <td className="widgetLgStatus">
            <Button type="Pre-Clinical Trials"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgDate">Monkeypox Vaccine</span>
          </td>
          <td className="widgetLgDate">14 July 2022</td>
          <td className="widgetLgAmount">4</td>
          <td className="widgetLgStatus">
            <Button type="Basic Research" />
          </td>
        </tr>
      </table>
    </div>
  );
}
