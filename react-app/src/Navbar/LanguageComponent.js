import React, {Fragment} from "react";
import Button from "@mui/material/Button";
import {activeButton, button} from "./NavbarStyles";
import {enLanguage, ukLanguage} from "../constants";

const LanguageComponent = ({currentLang, changeLanguage}) => {
    const [activeLang, setActiveLang] = React.useState(currentLang);

    const enStyles = activeLang === enLanguage ? {...activeButton} : {};
    const ukStyles = activeLang === ukLanguage ? {...activeButton} : {};

    return (
        <Fragment>
            <Button
                color="inherit"
                sx={{...button, ...enStyles}}
                onClick={() => {
                    setActiveLang(enLanguage);
                    changeLanguage(enLanguage);
                }}
            >
                EN
            </Button>
            |
            <Button
                color="inherit"
                sx={{...button, ...ukStyles}}
                onClick={() => {
                    setActiveLang(ukLanguage);
                    changeLanguage(ukLanguage);
                }}
            >
                UA
            </Button>
        </Fragment>
    )
}

export default LanguageComponent;
