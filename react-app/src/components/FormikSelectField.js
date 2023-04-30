import React, {Fragment} from "react";
import Autocomplete from '@mui/material/Autocomplete';
import _ from "lodash";
import {useFormikContext} from "formik";
import {block, input} from "../generalStyles";
import TextField from "@mui/material/TextField";
import {connect} from "react-redux";

const maxOptionsHeight = 150;

const FormikSelectField = ({name, label, options, defaultValue, currentLang, styles, ...rest}) => {
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
                onChange={(e, option) => {
                    setFieldValue(name, option?.id);
                }}
                ListboxProps={{style: {maxHeight: maxOptionsHeight}}}
                sx={{...input, ...block, ...styles}}
                disableClearable
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label[currentLang]}
                        value={_.get(values, name)}
                        variant="outlined"
                        fullWidth
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
