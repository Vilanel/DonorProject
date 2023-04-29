import * as React from "react";
import {AddressAutofill} from "@mapbox/search-js-react";
import FormikTextField from "../components/FormikTextField";
import FormikForm from "../FormikForm/FormikForm";
import {connect} from "react-redux";

const AdminRequest = ({currentLang}) => {
    return (
        <div>
            <FormikForm record={{}} onSubmit={() => {}}>
                <AddressAutofill accessToken='pk.eyJ1IjoibmF0YS0tLSIsImEiOiJjbGd6a3Uxd3YwMGd4M2tvaDg2NjB2c3I2In0.WhRzS1TsDdsJpb0HpBDvFA'>
                    <FormikTextField
                        name='address'
                        label='address'
                        currentLang={currentLang}
                        language='uk'
                        country="uk"
                    />
                </AddressAutofill>
            </FormikForm>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentLang: state.generalInfo.lang,
});

export default connect(mapStateToProps)(AdminRequest);
