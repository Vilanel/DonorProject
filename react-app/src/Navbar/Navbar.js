import React, {Fragment} from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {AccountCircle} from "@mui/icons-material";
import {connect} from "react-redux";

import {navbar_toolbar} from "./NavbarStyles";
import CustomDialog from "../CustomDialog/CustomDialog";
import LanguageComponent from "./LanguageComponent";
import {lang} from "../lang";
import {changeLanguageAction} from "../redux/actions/general";
import LoginForm from "../Login/LoginForm";
import RegistrationForm from "../Login/RegistrationForm";
import ProfileListInfo from "../Profile/ProfileListInfo";


const Navbar = ({currentLang, changeLanguage, token, role}) => {
    const [showLoginDialog, setShowLoginDialog] = React.useState(false);
    const [showRegistrationDialog, setShowRegistrationDialog] = React.useState(false);
    const [showProfileList, setShowProfileList] = React.useState(false);

    return (
        <Fragment>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar sx={navbar_toolbar}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                        >
                            <img src='../../assets/logo.png' alt='logo'/>
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
            {showLoginDialog && (
                <CustomDialog
                    open={showLoginDialog}
                    onClose={() => setShowLoginDialog(false)}
                    title={lang.login.titles.login[currentLang]}
                >
                    <LoginForm
                        setShowRegistrationDialog={() => {
                            setShowRegistrationDialog(true);
                            setShowLoginDialog(false);
                        }}
                    />
                </CustomDialog>
            )}
            {showRegistrationDialog && (
                <CustomDialog
                    open={showRegistrationDialog}
                    onClose={() => setShowRegistrationDialog(false)}
                    title={lang.login.titles.registration[currentLang]}
                >
                    <RegistrationForm
                        setShowLoginDialog={() => {
                            setShowLoginDialog(true);
                            setShowRegistrationDialog(false);
                        }}
                    />
                </CustomDialog>
            )}
            {showProfileList && (<ProfileListInfo onClose={() => setShowProfileList(false)}/>)}
            {role}
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