import React, { useState } from "react";
import './ManageProjects.css';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {v4 as uuidv4} from 'uuid';

const itemsFromBackend = [
  { id: uuidv4(), content: "Conduct Basic Research" },
  { id: uuidv4(), content: "Pre-Clinical Trials" },
  { id: uuidv4(), content: "First Clinical Trials" },
  { id: uuidv4(), content: "Second Clinical Trial" },
  { id: uuidv4(), content: "Third Clinical Trials" },
  { id: uuidv4(), content: "Implimentation" }
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "Project Items",
    items: itemsFromBackend
  },

  [uuidv4()]: {
    name: "In Progress",
    items: [],
    color: "red"
  },
  [uuidv4()]: {
    name: "Done",
    items: [],
    backgroundColor: "#1aaa1a"
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function ManageProjects() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
  <div  style={{width: "100%"}}>
     <div className="productTitleContainer">
        <h1 className="productTitle">Track Progress</h1>
      </div>
    <div style={{ display: "flex", justifyContent: "center", paddingTop: '4em', width: "100%", margin: 'auto', height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 20 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#1aaa1aa"
                            : "#1aaa1aa",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#1aaa1a"
                                        : "#008dc9",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  </div>
  );
}

export default ManageProjects;
