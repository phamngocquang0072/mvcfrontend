import React, {useContext} from "react";
import '../assets/scss/DropDownProfile.scss';
import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton";
import {AccountBox} from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton Icon={AccountBox} href= {"/home/profile"} variant={"text"} text={"Profile"}/>
            <HoverButton Icon={ExitToAppIcon} href= {"/login"} variant={"text"} text={"Login"}/>
            <HoverButton Icon={AccountBox} href= {"/home/about"} variant={"text"} text={"About"}/>
        </div>
    );
}
export default DropDownProfile;