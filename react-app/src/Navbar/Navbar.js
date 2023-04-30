import React, {Fragment} from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {AccountCircle} from "@mui/icons-material";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

import {navbar_toolbar} from "./NavbarStyles";
import LanguageComponent from "./LanguageComponent";
import {changeLanguageAction} from "../redux/actions/general";
import ProfileListInfo from "../Profile/ProfileListInfo";
import RegisterLoginDialogs from "../Login/RegisterLoginDialogs";
import AddressField from "../AddressField/AddressField";


const Navbar = ({currentLang, changeLanguage, token}) => {
    const [showLoginDialog, setShowLoginDialog] = React.useState(false);
    const [showRegistrationDialog, setShowRegistrationDialog] = React.useState(false);
    const [showProfileList, setShowProfileList] = React.useState(false);
    const navigate = useNavigate();

    return (
        <Fragment>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar sx={navbar_toolbar}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            <img
                              src='https://cdn-icons-png.flaticon.com/512/7640/7640453.png'
                              alt='logo'
                              style={{width: '50px'}}
                            />
                        </IconButton>
                        <div>
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={() => {
                                    if (token)
                                        setShowProfileList(!showProfileList);
                                    else
                                        setShowLoginDialog(true);
                                }}
                            >
                                <AccountCircle/>
                            </IconButton>
                            <LanguageComponent currentLang={currentLang} changeLanguage={changeLanguage}/>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
            <RegisterLoginDialogs
                showLoginDialog={showLoginDialog}
                setShowLoginDialog={setShowLoginDialog}
                showRegistrationDialog={showRegistrationDialog}
                setShowRegistrationDialog={setShowRegistrationDialog}
            />
            {/*<AddressField/>*/}
            {showProfileList && (<ProfileListInfo onClose={() => setShowProfileList(false)}/>)}
        </Fragment>
    )
};

const mapStateToProps = (state) => ({
    currentLang: state.generalInfo.lang,
    token: state.generalInfo.token,
    role: state.generalInfo.role,
});

const mapDispatchToProps = (dispatch) => ({
    changeLanguage: (lang) => { dispatch(changeLanguageAction(lang)); },
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);