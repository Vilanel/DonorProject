import React, {Fragment} from 'react';
import TextField from "@mui/material/TextField";
import _ from 'lodash';
import {block, input} from "../generalStyles";
import {connect} from "react-redux";
import {useFormikContext} from "formik";

const FormikTextField = ({currentLang, name, label, defaultValue, ...rest}) => {
    const {values, setFieldValue, errors} = useFormikContext();
    console.log(values)

    React.useEffect(() => {
        if (!_.get(values, name)) {
            setFieldValue(name, defaultValue);
        }
    }, [defaultValue, name, setFieldValue, values])

    return (
        <Fragment>
            <TextField
                id={name}
                label={label[currentLang]}
                value={_.get(values, name)}
                onChange={e => { setFieldValue(name, e.target.value); }}
                variant="outlined"
                defaultValue={defaultValue}
                fullWidth
                sx={{...input, ...block}}
                {...rest}
            />
            <span
                style={{
                    fontSize: '10px',
                    color: '#1976d2'
                }}
            >
                {_.get(errors, name)}
            </span>
        </Fragment>
    )
};

const mapStateToProps = (state) => ({
    currentLang: state.generalInfo.lang,
});

export default connect(mapStateToProps)(FormikTextField);
