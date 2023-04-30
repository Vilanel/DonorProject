import React, {Fragment} from 'react';
import FormikForm from "../FormikForm/FormikForm";
import FormikSelectField from "../components/FormikSelectField";
import axios from "axios";
import {
    authorizationTokenBearer,
    donationPointsResource,
    errorAlertTimeout,
    roleNameAdmin,
    serverDomen
} from "../constants";
import Alert from "../components/Alert";
import {connect} from "react-redux";

const AdminRequest = ({token, role}) => {
    const [error, setError] = React.useState('');
    const [donationPoints, setDonationPoints] = React.useState([]);

    const getDonationPoints = async (token, searchFilter) => {
        try {
            return await axios.get(
                `${serverDomen}/${donationPointsResource}`,
                {
                    params: {searchFilter},
                    headers: {
                        Authorization: `${authorizationTokenBearer} ${token}`,
                    },
                }
            );
        } catch(err) {
            setError(err?.response?.data?.message);
            setTimeout(() => setError(''), errorAlertTimeout);
        }
    };

    React.useEffect(() => {
        const setDonationPointsState = async () => {
            const res = await getDonationPoints(token);
            if (Array.isArray(res?.data)) {
                setDonationPoints(res.data.map(donationPoint => ({
                    id: donationPoint.id,
                    label: `${donationPoint.address} - ${donationPoint.city}`,
                })));
            }
        };

        if (role === roleNameAdmin && token) {
            setDonationPointsState().catch(err => {
                setError(err?.response?.data?.message);
                setTimeout(() => setError(''), errorAlertTimeout);
            });
        }
    }, [])

    return (
        <Fragment>
            {error && (<Alert error={error.toString()}/>)}
            <FormikForm record={{}} save={() => {}}>
                <FormikSelectField
                    name='donationPoint'
                    label='donationPoint'
                    options={donationPoints}
                />
            </FormikForm>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    token: state.generalInfo.token,
    role: state.generalInfo.role,
});

export default connect(mapStateToProps)(AdminRequest);