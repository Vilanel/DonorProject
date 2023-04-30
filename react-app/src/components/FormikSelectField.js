import React, {Fragment} from "react";
import Autocomplete from '@mui/material/Autocomplete';
import _ from "lodash";
import {useFormikContext} from "formik";
import {block, input} from "../generalStyles";
import TextField from "@mui/material/TextField";
import {connect} from "react-redux";

const FormikSelectField = ({name, label, options, defaultValue, currentLang, ...rest}) => {
    const {values, setFieldValue, errors} = useFormikContext();

    React.useEffect(() => {
        const optionsIds = Array.isArray(options) ? options.map(option => option?.id) : [];
        if (!_.get(values, name) && optionsIds.includes(defaultValue)) {
            setFieldValue(name, defaultValue);
        }
    }, [defaultValue, name, setFieldValue, values, options]);

    return (
        <Fragment>
            <Autocomplete
                id={name}
                options={options}
                onSelect={e => { setFieldValue(name, e?.target?.value); }}
                disableClearable
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label[currentLang]}
                        value={_.get(values, name)}
                        sx={{...input, ...block}}
                    />
                )}
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

export default connect(mapStateToProps)(FormikSelectField);
