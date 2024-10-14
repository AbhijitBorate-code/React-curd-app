import React, { useState } from "react";
import tableData from "./data";
import EditForm from "./EditForm";

const TableData = () => {
  const [gettableData, setTableData] = useState(tableData);

  const [isEditing, setIsEditing] = useState(null);

  const handleEdit = () =>{
    
  }

  
  const handleUpdate = (updatedData) => {
      
    const updatedTableData = gettableData.map((item) =>
      item.company === updatedData.company? updatedData : item
    );


  };

  return (
    <div>
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {gettableData.map((res, index) => (
              <tr key={index}>
                <td>{res.company}</td>
                <td>{res.contact}</td>
                <td>{res.country}</td>
                <td>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => handleEdit(res)}
                  >
                    EDIT
                  </button>
                  <button
                    id="btn1"
                    type="button"
                    onClick={() => setIsEditing(false)}
                  >
                    ADD
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setTableData(
                        gettableData.filter((item) => item !== res)
                      )
                    }
                  >
                    DELETE
                  </button>
                </td>
              </tr>

            ))}
                          {isEditing && <EditForm   currentData={handleUpdate}   />}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
