import React from 'react';
import FormikForm from "../FormikForm/FormikForm";
import FormikSelectField from "../components/FormikSelectField";
import axios from "axios";
import {
    authorizationTokenBearer,
    bloodTypesChoices,
    donationPointsResource,
    errorAlertTimeout,
    getDonationTypesChoices,
    roleNameAdmin,
    serverDomen
} from "../constants";
import Alert from "../components/Alert";
import {connect} from "react-redux";
import {lang} from "../lang";
import {Typography} from "@mui/material";
import FormikTextField from "../components/FormikTextField";
import Button from "@mui/material/Button";
import {fullWidth} from "../generalStyles";

const Toolbar = ({currentLang}) => {
    return (
        <div style={{marginTop: '25px'}}>
            <Button variant="contained" type="submit" sx={fullWidth}>
                {lang.adminRequest.actions.send_request[currentLang]}
            </Button>
        </div>
    )
};

const AdminRequest = ({token, role, currentLang}) => {
    const [error, setError] = React.useState('');
    const [donationPoints, setDonationPoints] = React.useState([]);
    const [donationTypesChoices, setDonationTypesChoices] = React.useState(getDonationTypesChoices(currentLang));

    const getDonationPoints = async (token, searchFilter) => {
        try {
            return await axios.get(
                `${serverDomen}/${donationPointsResource}`,
                {
                    params: {searchFilter},
                    headers: {Authorization: `${authorizationTokenBearer} ${token}`},
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
    }, [role, token]);

    React.useEffect(() => {
        setDonationTypesChoices(getDonationTypesChoices(currentLang));
    }, [currentLang]);

    return (
        <div style={{textAlign: 'center'}}>
            {error && (<Alert error={error.toString()}/>)}
            <div style={{display: 'flex', justifyContent: 'center', marginLeft: '60px', marginRight: '60px'}}>
                <Typography style={{textTransform: 'uppercase'}} variant="h4">
                    {lang.adminRequest.titles.automatic_request[currentLang]}
                </Typography>
            </div><br/>
            <div style={{display: 'flex', justifyContent: 'center', marginLeft: '100px', marginRight: '100px'}}>
                <Typography style={{color: 'black', textTransform: 'uppercase'}} variant="h7">
                    {lang.adminRequest.titles.automatic_request_subtitle[currentLang]}
                </Typography>
            </div><br/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <FormikForm record={{}} save={() => {}}>
                    <FormikSelectField
                        name='bloodType'
                        label={lang.adminRequest.fields.blood_type}
                        options={bloodTypesChoices}
                        styles={{width: '400px'}}
                    />
                    <FormikSelectField
                        name='donationType'
                        label={lang.adminRequest.fields.donation_type}
                        options={donationTypesChoices}
                        styles={{width: '400px'}}
                    />
                    <FormikTextField
                        name="bloodAmount"
                        label={lang.adminRequest.fields.blood_amount}
                        type='number'
                    />
                    <FormikSelectField
                        name='donationPoint'
                        label={lang.adminRequest.fields.blood_donation_center}
                        options={donationPoints}
                        styles={{width: '400px'}}
                    />
                    <Toolbar currentLang={currentLang}/>
                </FormikForm>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentLang: state.generalInfo.lang,
    token: state.generalInfo.token,
    role: state.generalInfo.role,
});

export default connect(mapStateToProps)(AdminRequest);