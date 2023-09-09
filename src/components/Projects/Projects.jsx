// import { Link } from "react-router-dom";
import React, {useState} from "react";
import "./Projects.css";
import { DataGrid } from "@material-ui/data-grid";
import {Modal} from 'react-bootstrap'

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'ProjectName',
      headerName: 'Project Title',
      width: 200,
      editable: true,
    },
    {
      field: 'stage',
      headerName: 'Project Stage',
      width: 180,
      editable: true,
    },
    {
      field: 'collaborators',
      headerName: 'Collaborators',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
        field: 'priority',
        headerName: 'Priority',
        type: 'number',
        width: 150,
        editable: true,
      },
      {
        field: 'track',
        headerName: 'Check Progress',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
       
      },
      <button>Track</button>
  ];
  
  const rows = [
    { id: 1, stage: 'Ideation', ProjectName: 'Cancer Treat,emt', collaborators: 35, priority: 'High', track:'Track Progress' },
    { id: 2, stage: 'Ideation', ProjectName: 'Cancer Treat,emt', collaborators: 35, priority: 'High', track:'Track Progress' },
    { id: 3, stage: 'Ideation', ProjectName: 'Cancer Treat,emt', collaborators: 35, priority: 'High', track:'Track Progress' },
    { id: 4, stage: 'Ideation', ProjectName: 'Cancer Treat,emt', collaborators: 35, priority: 'High', track:'Track Progress' },
    { id: 5, stage: 'Ideation', ProjectName: 'Cancer Treat,emt', collaborators: 35, priority: 'High', track:'Track Progress' },
    { id: 6, stage: 'Ideation', ProjectName: 'Cancer Treat,emt', collaborators: 35, priority: 'High', track:'Track Progress' },
    { id: 7, stage: 'Ideation', ProjectName: 'Cancer Treat,emt', collaborators: 35, priority: 'High', track:'Track Progress' },
    { id: 8, stage: 'Ideation', ProjectName: 'Cancer Treat,emt', collaborators: 35, priority: 'High', track:'Track Progress' },
    { id: 9, stage: 'Ideation', ProjectName: 'Cancer Treat,emt', collaborators: 35, priority: 'High', track:'Track Progress' },
  ];

export default function Projects() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Projects</h1>

        <button className="productAddButton"  onClick={handleShow}>Create Project</button>
      </div>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <center>Create Project</center>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body closeButton>
          <form className="row g-3">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="contactPerson">
                      Project Title: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ticketName"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                     Project Category: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-group col-lg-12">
                  <label htmlFor="inputState">
                    Project Stage:<span className="asterisc">*</span>
                  </label>
                  <select
                  
                    required
                    className="form-control"
                  >
                    <option selected> -- Select Type -- </option>
                    <option>Ideation</option>
                    <option>Clinical Trials</option>
                    <option>Implimentation</option>
                  </select>
                </div>
                <div className="col-md-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" checked />
            <label className="form-check-label" htmlhtmlFor="gridCheck">
             Include ReadMe File
            </label>
          </div>
        </div>
              
                <Modal.Footer>
                  <button type="submit" className="btn btn-secondary" onClick={handleClose}>
                    Close
                  </button>
                  <button
                    type="submit"
                    style={{ backgroundColor: '#008dc9', border: '0px solid #fff' }}
                    className="btn btn-primary"
            
                  >
                    Create
                  </button>
                </Modal.Footer>
              </form>
          </Modal.Body>
        </Modal>
    </div>
  );
}
