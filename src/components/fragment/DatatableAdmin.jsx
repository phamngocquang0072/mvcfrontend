import "../assets/scss/DatatableAdmin.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const DatatableAdmin = ({ dataRows, dataColumns, title }) => {
  const [data, setData] = useState(dataRows);
  
  const handleDelete = (id) => {
    if ( window.confirm('Delete the item?') === true) {
      setData(dataRows.filter((item) => item.id !== id));
    } 
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/admin/" + title + "/" + params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
         List {title}
        <Link to={"/admin/" + title + "/new"} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={dataColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableAdmin;
