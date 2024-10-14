import React, { useState } from "react";
import tableData from "./data";
import EditForm from "./EditForm";

// import AddForm from "./AddForm";

import AddForm from "./AddForm";

const TableData = () => {
  const [gettableData, setTableData] = useState(tableData);

  const [isEditing, setIsEditing] = useState(false);


  const [editData , updatedData] = useState(null);


  // const [addData, updateAdData] = useState(null)


  const [isAddData , setisAddData] = useState(false);

  const handleEdit = (res) =>{
    setIsEditing(true);
    updatedData(res)
    
  }

  // setisAddData(true)
  // setIsEditing(false)

  const handleAddData = ()=>{
    setisAddData(true)
    setIsEditing(false)
  }

  const   setTableDataAdd = (data)=>{
    console.log(data)
    setTableData([...gettableData, data])

  }


  const handleUpdate = (updatedData) => {
    console.log(updatedData)
    const updatedTableData = gettableData.map((item)=> item.company === updatedData.company ? updatedData : item )
    setTableData(updatedTableData);
    setIsEditing(false);

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
                    onClick={handleAddData}
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
                          {isEditing && <EditForm   currentData={editData}   updatedData={handleUpdate}  />}

                          { isAddData&& <AddForm   gettableData={gettableData} setTableData={setTableDataAdd} />}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
