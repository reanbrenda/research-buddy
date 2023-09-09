import React from "react";
import "./documentsPage.css";
import pdficon from "../../assets/images/pdf.png";

export default function DocumentsPage() {
  return (
    <div>
      Documents Repository
      {/* Current Course */}
      <table class="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th> Title</th>
            <th>Category</th>
            <th>Last Modified</th>
            <th>Authors</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
              </div>
            </td>
            <td>
              <img style={{width: "20px", height: "20px"}} src={pdficon} alt="icon" /> Cancer Treatment
            </td>
            <td>Clinical Medicine</td>
            <td>08/12/1999</td>
            <td>
              Dr.James Mwangi, Dr. Julia Gichuru, Dr. Alphonce Sang and Max
              Goodwill
            </td>

            <td>
              {" "}
              <button className="statusBtn">VIEW</button>
            </td>
          </tr>

          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
              </div>
            </td>
            <td>
              <img style={{width: "20px", height: "20px"}} src={pdficon} alt="icon" /> Cancer Treatment
            </td>
            <td>Clinical Medicine</td>
            <td>08/12/1999</td>
            <td>
              Dr.James Mwangi, Dr. Julia Gichuru, Dr. Alphonce Sang and Max
              Goodwill
            </td>

            <td>
              {" "}
              <button className="statusBtn">VIEW</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
              </div>
            </td>
            <td>
              <img style={{width: "20px", height: "20px"}} src={pdficon} alt="icon" /> Cancer Treatment
            </td>
            <td>Clinical Medicine</td>
            <td>08/12/1999</td>
            <td>
              Dr.James Mwangi, Dr. Julia Gichuru, Dr. Alphonce Sang and Max
              Goodwill
            </td>

            <td>
              {" "}
              <button className="statusBtn">VIEW</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
              </div>
            </td>
            <td>
              <img style={{width: "20px", height: "20px"}} src={pdficon} alt="icon" /> Cancer Treatment
            </td>
            <td>Clinical Medicine</td>
            <td>08/12/1999</td>
            <td>
              Dr.James Mwangi, Dr. Julia Gichuru, Dr. Alphonce Sang and Max
              Goodwill
            </td>

            <td>
              {" "}
              <button className="statusBtn">VIEW</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
              </div>
            </td>
            <td>
              <img style={{width: "20px", height: "20px"}} src={pdficon} alt="icon" /> Cancer Treatment
            </td>
            <td>Clinical Medicine</td>
            <td>08/12/1999</td>
            <td>
              Dr.James Mwangi, Dr. Julia Gichuru, Dr. Alphonce Sang and Max
              Goodwill
            </td>

            <td>
              {" "}
              <button className="statusBtn">VIEW</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
              </div>
            </td>
            <td>
              <img style={{width: "20px", height: "20px"}} src={pdficon} alt="icon" /> Cancer Treatment
            </td>
            <td>Clinical Medicine</td>
            <td>08/12/1999</td>
            <td>
              Dr.James Mwangi, Dr. Julia Gichuru, Dr. Alphonce Sang and Max
              Goodwill
            </td>

            <td>
              {" "}
              <button className="statusBtn">VIEW</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* end of lessons */}
    </div>
  );
}
