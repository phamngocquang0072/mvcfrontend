import "./css/List.scss";
import SideBarAdmin from "../fragment/SideBarAdmin";
import NavbarAdmin from "../fragment/NavbarAdmin";
import DatatableAdmin from "../fragment/DatatableAdmin";

const List = ({ dataRows, dataColumns, title }) => {
  return (
    <div className="list">
      <SideBarAdmin />
      <div className="listContainer">
        <NavbarAdmin />
        <DatatableAdmin
          dataRows={dataRows}
          dataColumns={dataColumns}
          title={title}
        />
      </div>
    </div>
  );
};

export default List;
