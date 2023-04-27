import React from "react";
import {Form, Formik} from "formik";

const FormikForm = ({record, onSubmit, validationSchema, formikFormOptions, children}) => {
    return (
        <Formik
            initialValues={record}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            {...formikFormOptions}
        >
            {({errors}) => (
                <Form>
                    {children}
                </Form>
            )}
        </Formik>
    );
}

export default FormikForm;