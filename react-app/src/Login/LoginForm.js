import React, {Fragment} from "react";
import FormikForm from "../FormikForm/FormikForm";
// import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import {connect} from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";

import {lang} from "../lang";
import {fullWidth} from "../generalStyles";
import FormikTextField from "../components/FormikTextField";
import {authResource, errorAlertTimeout, loginEndpoint, serverDomen} from "../constants";
import Alert from "../components/Alert";
import {loginValidationSchema} from "../validation/loginValidationSchema";
import {changeEmailAction, changeTokenAction, changeUserRoleAction} from "../redux/actions/general";

const Toolbar = ({setShowRegistrationDialog, currentLang}) => {
    return (
        <Fragment>
            <div style={{marginTop: '25px'}}>
                <Button variant="contained" color="success" type="submit" sx={fullWidth}>
                    {lang.login.actions.login[currentLang]}
                </Button>
            </div>
            <div style={{marginTop: '15px'}}>
                <Button
                    onClick={(e) => {
                        setShowRegistrationDialog();
                    }}
                    sx={fullWidth}
                >
                    {lang.login.actions.register[currentLang]}
                </Button>
            </div>
        </Fragment>
    )
};

const LoginForm = ({currentLang, setShowRegistrationDialog, changeToken, changeUserRole, changeUserEmail, onClose = () => {}}) => {
    const [error, setError] = React.useState('');

    const login = async (values) => {
        try {
            const res = await axios.post(`${serverDomen}/${authResource}/${loginEndpoint}`, values);
            const decodedToken = jwt_decode(res.data?.token);
            const {email, role} = decodedToken;

            changeToken(res?.data?.token);
            changeUserRole(role);
            changeUserEmail(email);

            onClose();
        } catch(err) {
            setError(err?.response?.data?.message);
            setTimeout(() => setError(''), errorAlertTimeout);
        }
    };

    return (
        <div>
            {error && (<Alert error={error.toString()}/>)}
            <FormikForm
                record={{email: '', password: ''}}
                onSubmit={login}
                validationSchema={loginValidationSchema(currentLang)}
            >
                <FormikTextField
                    name="email"
                    label={lang.login.fields.email}
                />
                <FormikTextField
                    name="password"
                    label={lang.login.fields.password}
                    type='password'
                />
                {/*<Link href="#">{lang.login.actions.forgot_password[currentLang]}</Link><br/>*/}
                <Toolbar currentLang={currentLang} setShowRegistrationDialog={setShowRegistrationDialog}/>
            </FormikForm>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentLang: state.generalInfo.lang,
});

const mapDispatchToProps = (dispatch) => ({
    changeToken: (token) => { dispatch(changeTokenAction(token)); },
    changeUserRole: (role) => { dispatch(changeUserRoleAction(role)); },
    changeUserEmail: (email) => { dispatch(changeEmailAction(email)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);