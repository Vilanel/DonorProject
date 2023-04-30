import React, {Fragment} from 'react';
import { AddressAutofill, config } from '@mapbox/search-js-react';
import {mapboxAccessToken} from "../constants";
import FormikForm from "../FormikForm/FormikForm";
import FormikTextField from "../components/FormikTextField";
import {useFormikContext} from "formik";

const A = () => {
    return (
        <Fragment>
            <FormikForm record={{}} onSubmit={() => {}}>
                <AddressField/>
            </FormikForm>
        </Fragment>
    );
};

const AddressField = () => {
    const [token, setToken] = React.useState('');
    const {values, setFieldValue} = useFormikContext();
    const cityRef = React.useRef(null);

    React.useEffect(() => {
        const accessToken = mapboxAccessToken;
        setToken(accessToken)
        config.accessToken = accessToken;
    }, []);

    React.useEffect(() => {
        console.log(cityRef)
        setFieldValue('city', cityRef?.current?.value);
    }, [values, cityRef?.current?.value]);

    return (
        <div>
            <div>
                <AddressAutofill accessToken={token}>
                    <FormikTextField
                        autoComplete="address-line1"
                        id="mapbox-autofill"
                        name='address'
                        label='address'
                        country='uk'
                        language='uk'
                    />
                </AddressAutofill>
                <div>
                    <input
                        placeholder="City"
                        autoComplete="address-level2"
                        ref={cityRef}
                        disabled
                    />
                </div>
            </div>
        </div>
    )
};

export default A;