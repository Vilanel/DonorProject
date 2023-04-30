import {lang} from "./lang";

export const ukLanguage = 'uk';
export const enLanguage = 'en';

export const serverDomen = 'http://localhost:4000';

export const authResource = 'auth';
export const donationPointsResource = 'donationPoints';

export const registrationEndpoint = 'registration';
export const loginEndpoint = 'login';

export const roleNameAdmin = 'ADMIN';
export const roleNameDonor = 'DONOR';

export const authorizationTokenBearer = 'Bearer';

export const mapboxAccessToken = 'pk.eyJ1IjoibmF0YS0tLSIsImEiOiJjbGd6a3Uxd3YwMGd4M2tvaDg2NjB2c3I2In0.WhRzS1TsDdsJpb0HpBDvFA';

export const bloodTypes = {
    firstPlus: '1+',
    firstMinus: '1-',
    secondPlus: '2+',
    secondMinus: '2-',
    thirdPlus: '3+',
    thirdMinus: '3-',
    fourthPlus: '4+',
    fourthMinus: '4-',
};

export const bloodTypesChoices = [
    {id: bloodTypes.firstPlus, label: 'І+'},
    {id: bloodTypes.firstMinus, label: 'І-'},
    {id: bloodTypes.secondPlus, label: 'ІІ+'},
    {id: bloodTypes.secondMinus, label: 'ІІ-'},
    {id: bloodTypes.thirdPlus, label: 'ІІІ+'},
    {id: bloodTypes.thirdMinus, label: 'ІІІ-'},
    {id: bloodTypes.fourthPlus, label: 'ІV+'},
    {id: bloodTypes.fourthMinus, label: 'ІV-'},
];

export const donationTypes = {
    wholeBloodDonation: 'wholeBloodDonation',
    plasmaDonation: 'plasmaDonation',
    plasmapheresis: 'plasmapheresis',
    plateletDonation: 'plateletDonation',
    plateletpheresis: 'plateletpheresis',
    erythrocyteDonation: 'erythrocyteDonation',
};

export const getDonationTypesChoices = (currentLang) => ([
    {
        id: donationTypes.wholeBloodDonation,
        label: lang.adminRequest.options.donationTypes.whole_blood_donation[currentLang],
    },
    {
        id: donationTypes.plasmaDonation,
        label: lang.adminRequest.options.donationTypes.plasma_donation[currentLang],
    },
    {
        id: donationTypes.plasmapheresis,
        label: lang.adminRequest.options.donationTypes.plasmapheresis[currentLang],
    },
    {
        id: donationTypes.plateletDonation,
        label: lang.adminRequest.options.donationTypes.platelet_donation[currentLang],
    },
    {
        id: donationTypes.plateletpheresis,
        label: lang.adminRequest.options.donationTypes.plateletpheresis[currentLang],
    },
    {
        id: donationTypes.erythrocyteDonation,
        label: lang.adminRequest.options.donationTypes.erythrocyte_donation[currentLang],
    },
]);

export const errorAlertTimeout = 2000;
