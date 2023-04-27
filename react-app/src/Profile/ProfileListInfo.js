import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {AccountCircle} from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import {connect} from "react-redux";
import {lang} from "../lang";
import {changeEmailAction, changeTokenAction, changeUserRoleAction} from "../redux/actions/general";
import {useNavigate} from "react-router-dom";

const ProfileListInfo = ({currentLang, changeToken, changeUserRole, changeUserEmail, onClose}) => {
    const navigate = useNavigate();
    return (
        <Box sx={{position: 'fixed', top: '60px', right: '30px'}}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate('/profile');
                            }}
                        >
                            <ListItemIcon>
                                <AccountCircle/>
                            </ListItemIcon>
                            <ListItemText primary={lang.profile.titles.profile[currentLang]}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => {
                                changeToken(null);
                                changeUserRole(null);
                                changeUserEmail(null);
                                navigate('/');
                                onClose();
                            }}
                        >
                            <ListItemIcon>
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText primary={lang.login.actions.logout[currentLang]}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
};

const mapStateToProps = (state) => ({
    currentLang: state.generalInfo.lang,
});

const mapDispatchToProps = (dispatch) => ({
    changeToken: (token) => { dispatch(changeTokenAction(token)); },
    changeUserRole: (role) => { dispatch(changeUserRoleAction(role)); },
    changeUserEmail: (email) => { dispatch(changeEmailAction(email)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileListInfo);
