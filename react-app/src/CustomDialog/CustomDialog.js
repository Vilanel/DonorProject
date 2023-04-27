import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

import {dialog_title, dialog_title_text} from "./CustomDialogStyles";
import {Typography} from "@mui/material";

const CustomDialog = ({onClose, open, title, toolbar, children}) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {onClose});
        }
        return child;
    });

    return (
        <Dialog open={open}>
            <DialogTitle sx={dialog_title}>
                <Typography sx={dialog_title_text}>{title}</Typography>
                <IconButton>
                    <CloseIcon onClick={onClose}/>
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{minWidth: '300px'}}>
                {childrenWithProps}
            </DialogContent>
            <DialogActions>
                {toolbar}
            </DialogActions>
        </Dialog>
    )
};

export default CustomDialog;
