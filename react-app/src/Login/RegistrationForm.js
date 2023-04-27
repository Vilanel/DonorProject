import React, {Fragment} from "react";
import FormikForm from "../FormikForm/FormikForm";
import {lang} from "../lang";
import {fullWidth} from "../generalStyles";
import Button from "@mui/material/Button";
import {connect} from "react-redux";
import axios from "axios";
import {authResource, errorAlertTimeout, registrationEndpoint, serverDomen} from "../constants";
import Alert from "../components/Alert";
import FormikTextField from "../components/FormikTextField";
import {registrationValidationSchema} from "../validation/registrationValidationSchema";
import {changeEmailAction, changeTokenAction, changeUserRoleAction} from "../redux/actions/general";
import jwt_decode from "jwt-decode";

const Toolbar = ({currentLang, setShowLoginDialog}) => {
    return (
        <Fragment>
            <div style={{marginTop: '25px'}}>
                <Button variant="contained" color="success" type="submit" sx={fullWidth}>
                    {lang.login.actions.register[currentLang]}
                </Button>
            </div>
            <div style={{marginTop: '15px'}}>
                <Button
                    onClick={() => setShowLoginDialog()}
                    sx={fullWidth}
                >
                    {lang.login.actions.alreadyRegistered[currentLang]}
                </Button>
            </div>
        </Fragment>
    );
}

const RegistrationForm = ({currentLang, setShowLoginDialog, changeToken, changeUserRole, changeUserEmail, onClose = () => {}}) => {
    const [error, setError] = React.useState('');

    const registration = async (values) => {
        try {
            const res = await axios.post(`${serverDomen}/${authResource}/${registrationEndpoint}`, values);

            const decodedToken = jwt_decode(res.data?.token);
            const {email, role} = decodedToken;

            changeToken(res?.data?.token);
            changeUserRole(role);
            changeUserEmail(email);

            onClose();
        } catch (err) {
            setError(err?.response?.data?.message);
            setTimeout(() => setError(''), errorAlertTimeout);
        }
    };

    return (
        <div>
            {error && (<Alert error={error.toString()}/>)}
            <FormikForm
                record={{email: '', password: '', lastName: '', firstName: '', mobileNumber: ''}}
                onSubmit={registration}
                validationSchema={registrationValidationSchema(currentLang)}
            >
                <FormikTextField
                    name="firstName"
                    label={lang.login.fields.firstName}
                />
                <FormikTextField
                    name="lastName"
                    label={lang.login.fields.lastName}
                />
                <FormikTextField
                    name="mobileNumber"
                    label={lang.login.fields.mobileNumber}
                    defaultValue='+380'
                />
                <FormikTextField
                    name="email"
                    label={lang.login.fields.email}
                />
                <FormikTextField
                    name="password"
                    label={lang.login.fields.password}
                    type="password"
                />
                <Toolbar setShowLoginDialog={setShowLoginDialog} currentLang={currentLang}/>
            </FormikForm>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentLang: state.generalInfo.lang,
});

const mapDispatchToProps = (dispatch) => ({
    changeToken: (token) => { dispatch(changeTokenAction(token)); },
    changeUserRole: (role) => { dispatch(changeUserRoleAction(role)); },
    changeUserEmail: (email) => { dispatch(changeEmailAction(email)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);