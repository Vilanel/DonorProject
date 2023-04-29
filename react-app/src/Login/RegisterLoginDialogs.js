import React, {Fragment} from "react";
import CustomDialog from "../CustomDialog/CustomDialog";
import {lang} from "../lang";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import {connect} from "react-redux";

const RegisterLoginDialogs = ({showLoginDialog, setShowLoginDialog, setShowRegistrationDialog, showRegistrationDialog, currentLang}) => {
    return (
        <Fragment>
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
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    currentLang: state.generalInfo.lang,
});

export default connect(mapStateToProps)(RegisterLoginDialogs);