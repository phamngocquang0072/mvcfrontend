import SideBarAdmin from "../fragment/SideBarAdmin";
import NavbarAdmin from "../fragment/NavbarAdmin";
import "./css/HomeAdmin.scss";
import WidgetAdmin from "../fragment/WidgetAdmin";
import TableAdmin from "../fragment/TableAdmin";

const HomeAdmin = () => {
  return (
    <div className="home">
      <SideBarAdmin />
      <div className="homeContainer">
        <NavbarAdmin />
        <div className="widgets">
          <WidgetAdmin type="user" />
          <WidgetAdmin type="order" />
          <WidgetAdmin type="earning" />
          <WidgetAdmin type="balance" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableAdmin />
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
