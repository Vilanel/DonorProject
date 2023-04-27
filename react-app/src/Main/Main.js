import React from 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {lang} from "../lang";
import {connect} from "react-redux";
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Main = ({currentLang}) => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', textTransform: 'uppercase', color: '#1976d2', marginTop: '100px', fontFamily: 'Verdana'}}>
            <div style={{minWidth: '550px', textAlign: 'center'}}>
                <Typography style={{textAlign: 'center'}} variant="h4">{lang.main.become_a_donor[currentLang]}</Typography>
                <br/>
                <Typography style={{color: 'black', textAlign: 'center'}} variant="h7">{lang.main.you_can_save_life[currentLang]}</Typography><br/>
                <Typography style={{color: 'black', textAlign: 'center'}} variant="h7">{lang.main.sign_up_for_bloood_donation[currentLang]}</Typography><br/>
                <br/>
                <div style={{marginRight: '10px', display: 'inline'}}><Button variant="contained">{lang.main.become_a_donor[currentLang]}</Button></div>
                <div style={{marginRight: '10px', display: 'inline'}}><Button variant="contained">{lang.main.profile[currentLang]}</Button></div>
                <div style={{marginRight: '10px', display: 'inline'}}><Button variant="contained">{lang.main.donor_info[currentLang]}</Button></div>
            </div>
            <div style={{minWidth: '450px', textAlign: 'center'}}>
                <Typography variant="h4">{lang.main.join_the_project[currentLang]}</Typography>
                <br/>
                <Typography style={{color: 'black'}} variant="h7">{lang.main.join_the_project_helps[currentLang]}</Typography><br/>
                <Typography style={{color: 'black'}} variant="h7">{lang.main.effectively_attract_donors[currentLang]}</Typography><br/>
                <br/>
                <div style={{display: 'inline', justifyContent: 'center', marginRight: '10px', marginLeft: '10px', width: '350px'}}>
                    <Button variant="contained">{lang.main.join[currentLang]}</Button>
                </div>
            </div>
            <br/>
            <div style={{marginTop: '100px', minWidth: '450px', textAlign: 'center'}}>
                <br/>
                <Typography variant="h4">{lang.main.follow_us[currentLang]}</Typography>
                <br/>
                <div style={{marginRight: '20px', display: 'inline'}}>
                    <Button variant="contained"><TelegramIcon style={{marginRight: '10px'}}/>{lang.main.telegram[currentLang]}</Button>
                </div>
                <div style={{marginRight: '20px', display: 'inline'}}>
                    <Button variant="contained"><FacebookIcon style={{marginRight: '10px'}}/>{lang.main.faceBook[currentLang]}</Button>
                </div>
                <br/><br/>
                <div style={{display: 'inline'}}>
                    <Button variant="contained"><TwitterIcon style={{marginRight: '10px'}}/>{lang.main.twitter[currentLang]}</Button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    currentLang: state.generalInfo.lang,
});

export default connect(mapStateToProps)(Main);
