import React, {Fragment} from 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {lang} from "../lang";
import {connect} from "react-redux";
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RegisterLoginDialogs from "../Login/RegisterLoginDialogs";
import {useNavigate} from "react-router-dom";
import {roleNameAdmin} from "../constants";
import AdminRequest from "../AdminRequest/AdminRequest";

const BecameDonorInfo = ({currentLang, token, setShowLoginDialog}) => {
    const navigate = useNavigate();

    return (
        <div style={{minWidth: '550px', textAlign: 'center', textTransform: 'uppercase'}}>
            <Typography style={{textAlign: 'center'}} variant="h4">
                {lang.main.become_a_donor[currentLang]}
            </Typography>
            <br/>
            <Typography style={{color: 'black', textAlign: 'center'}} variant="h7">{lang.main.you_can_save_life[currentLang]}</Typography><br/>
            <Typography style={{color: 'black', textAlign: 'center'}} variant="h7">{lang.main.sign_up_for_blood_donation[currentLang]}</Typography><br/>
            <br/>
            <div style={{marginRight: '10px', display: 'inline'}}>
                <Button variant="contained">
                    {lang.main.become_a_donor[currentLang]}
                </Button>
            </div>
            <div style={{marginRight: '10px', display: 'inline'}}>
                <Button
                    variant="contained"
                    onClick={() => {
                        if (token)
                            navigate('/profile');
                        else
                            setShowLoginDialog(true);
                    }}
                >
                    {lang.main.profile[currentLang]}
                </Button>
            </div>
            <div style={{marginRight: '10px', display: 'inline'}}>
                <Button variant="contained">
                    {lang.main.donor_info[currentLang]}
                </Button>
            </div>
        </div>
    );
};

const JoinProjectInfo = ({currentLang, token, setShowLoginDialog}) => {
    return (
        <div style={{minWidth: '450px', textAlign: 'center', textTransform: 'uppercase'}}>
            {token ? (
                <Typography variant="h4">
                    {lang.main.thank_you[currentLang]} &#x2764;
                </Typography>
            ) : (
                <Typography variant="h4">{lang.main.join_the_project[currentLang]}</Typography>
            )}
            <br/>
            <Typography style={{color: 'black'}} variant="h7">
                {lang.main.join_the_project_helps[currentLang]}
            </Typography><br/>
            <Typography style={{color: 'black'}} variant="h7">
                {lang.main.effectively_attract_donors[currentLang]}
            </Typography><br/>
            <br/>
            {!token && (
                <div style={{display: 'inline', justifyContent: 'center', marginRight: '10px', marginLeft: '10px', width: '350px'}}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setShowLoginDialog(true);
                        }}
                    >
                        {lang.main.join[currentLang]}
                    </Button>
                </div>
            )}
        </div>
    )
};

const SocialNetworkInfo = ({currentLang}) => {
    return (
        <div style={{marginTop: '110px', minWidth: '450px', textAlign: 'center', textTransform: 'uppercase'}}>
            <br/>
            <Typography variant="h4">{lang.main.follow_us[currentLang]}</Typography>
            <br/>
            <div style={{marginRight: '20px', display: 'inline'}}>
                <Button variant="contained">
                    <TelegramIcon style={{marginRight: '10px'}}/>
                    {lang.main.telegram[currentLang]}
                </Button>
            </div>
            <div style={{marginRight: '20px', display: 'inline'}}>
                <Button variant="contained">
                    <FacebookIcon style={{marginRight: '10px'}}/>
                    {lang.main.facebook[currentLang]}
                </Button>
            </div>
            <br/><br/>
            <div style={{display: 'inline'}}>
                <Button variant="contained">
                    <TwitterIcon style={{marginRight: '10px'}}/>
                    {lang.main.twitter[currentLang]}
                </Button>
            </div>
        </div>
    )
};

const Main = ({currentLang, token, role}) => {
    const [showLoginDialog, setShowLoginDialog] = React.useState(false);
    const [showRegistrationDialog, setShowRegistrationDialog] = React.useState(false);

    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', color: '#1976d2', marginTop: '100px', fontFamily: 'Verdana'}}>
            {role === roleNameAdmin ? (
                <Fragment>
                    <div>
                        <AdminRequest/>
                    </div>
                    <div style={{textTransform: 'uppercase'}}>
                        <JoinProjectInfo currentLang={currentLang} token={token} setShowLoginDialog={setShowLoginDialog}/>
                        <div style={{minWidth: '550px', textAlign: 'center'}}>
                            <img
                                src='https://ya-doma.ru/yado-content/uploads/2020/05/donor-main.png'
                                alt='mainPageImg'
                                style={{width: '400px', marginTop: '20px'}}
                            />
                        </div>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <BecameDonorInfo currentLang={currentLang} token={token} setShowLoginDialog={setShowLoginDialog}/>
                    <JoinProjectInfo currentLang={currentLang} token={token} setShowLoginDialog={setShowLoginDialog}/>
                    <SocialNetworkInfo currentLang={currentLang}/>
                    <div style={{minWidth: '550px', textAlign: 'center'}}>
                        <img
                            src='https://ya-doma.ru/yado-content/uploads/2020/05/donor-main.png'
                            alt='mainPageImg'
                            style={{width: '400px', marginTop: '20px'}}
                        />
                    </div>
                </Fragment>
            )}
            <RegisterLoginDialogs
                showLoginDialog={showLoginDialog}
                setShowLoginDialog={setShowLoginDialog}
                showRegistrationDialog={showRegistrationDialog}
                setShowRegistrationDialog={setShowRegistrationDialog}
            />
        </div>
    )
};

const mapStateToProps = (state) => ({
    currentLang: state.generalInfo.lang,
    token: state.generalInfo.token,
    role: state.generalInfo.role,
});

export default connect(mapStateToProps)(Main);
