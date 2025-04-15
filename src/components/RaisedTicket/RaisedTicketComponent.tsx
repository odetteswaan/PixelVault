import { Box, Typography, styled, Grid, Button, IconButton } from "@mui/material";
import { RaisedTicketData } from 'src/pages/Admin/MockData'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { customTheme } from "src/themes/theme";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import React from "react";
import ReplyPopUp from "src/pages/Admin/ReplyPopUp";
const RaisedTicketComponent = () => {
    const [showProfile, setShowProfile] = useState(NaN)
    const [showPopup, setShowPopup] = useState(NaN)
    const [showModal, setShowModal] = useState(false)

    const handleShow = (index: number) => {
        if (index === showProfile) {
            setShowProfile(NaN)
        }
        else {
            setShowProfile(index)
        }

    }
    const handlePop = (index: number) => {
        if (index === showPopup) {
            setShowPopup(NaN)
        }
        else {
            setShowPopup(index)
        }
    }
    const onClose = () => {
        setShowModal(false)
    }
    return (
        <Wrapper>
            <Box className="TicketRaisedTable">
                <Grid container rowSpacing={3} columnSpacing={2}>
                    <Grid size={12}><Typography className="heading">Issues Raised For Assets</Typography></Grid>
                    <Grid size={12}> <hr className="horizontalRule" /></Grid>
                    <Grid size={2}><Typography className="heading">Employee Name</Typography></Grid>
                    <Grid size={1.5}><Typography className="heading">Date</Typography></Grid>
                    <Grid size={2.5}><Typography className="heading">Employee Email ID </Typography></Grid>
                    <Grid size={1.5}><Typography className="heading">Status</Typography></Grid>
                    <Grid size={3.5}><Typography className="heading">Query</Typography></Grid>
                    <Grid size={1}><Typography className="heading">Action</Typography></Grid>
                    {RaisedTicketData.slice(0, 5).map((item, index) => (

                        <React.Fragment key={index}>
                            <hr className="horizontalRule" />
                            <Grid size={2}><Typography className="employeeTableData fontWeight">{item.username}</Typography></Grid>
                            <Grid size={1.5}><Typography className="employeeTableData">{item.date}</Typography></Grid>
                            <Grid size={2.5}><Typography className="employeeTableData">{item.emailId} </Typography></Grid>
                            <Grid size={1.5}><Button fullWidth className={item.status === 'Active' ? 'activeBtn' : 'returnBtn'}>{item.status}</Button></Grid>
                            <Grid size={3.5}><Typography className="employeeTableData">{item.Query}</Typography></Grid>
                            <Grid size={1}>
                                <Box className="moreIconContainer" onClick={() => handlePop(index)}>
                                    <MoreVertIcon className="icon" />
                                </Box>
                                <Box className={showPopup === index ? 'popupWindow' : 'none'}>
                                    <Box onClick={() => setShowModal(true)} className="box1"><Typography className="popuptext">Reply to this Dispute</Typography> </Box>
                                    <Box className="box2"><Typography className="popuptext">Close this Dispute</Typography></Box>
                                    <Box className="box3"><Typography className="popuptext">Mark as a resolved</Typography></Box>

                                </Box>
                            </Grid>
                        </ React.Fragment>

                    ))}

                </Grid>
            </Box>
            {showModal ? <ReplyPopUp open={showModal} onClose={onClose} /> : ''}
            <Box className="CardContainer">
                <Typography className="mainHeading">Issues Raised For Asset</Typography>
                {RaisedTicketData.slice(0, 5).map((item, index) => (

                    <React.Fragment key={index}>
                        <Box>
                            <Box className="cardHeader">
                                <Typography className="cardHeading">{item.username}</Typography>
                                <IconButton onClick={() => handleShow(index)} className="iconButton">
                                    {showProfile !== index ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                                </IconButton>
                            </Box>
                            <Box className={`cardBody ${showProfile !== index ? 'none' : ''}`}>
                                <Box className="employeeDetails">
                                    <Box className="details">
                                        <Typography className="fieldHeading">Employee Email ID</Typography>
                                        <Typography className="fieldValue">{item.emailId}</Typography>
                                    </Box>
                                    <Box className="details">
                                        <Typography className="fieldHeading">Request Date</Typography>
                                        <Typography className="fieldValue">{item.date} </Typography>
                                    </Box>
                                </Box>
                                <hr className="horizontalRule" />
                                <Box className="employeeDetails">
                                    <Box className="details">
                                        <Typography className="fieldHeading">Query</Typography>
                                        <Typography className="fieldValue">{item.Query}</Typography>
                                    </Box>
                                </Box>
                                <hr className="horizontalRule" />
                                <Box className="employeeDetails">
                                    <Box className="details">
                                        <Typography className="fieldHeading">Status</Typography>
                                        <Button className={item.status === 'Active' ? 'activeBtn' : 'returnBtn'}>{item.status}</Button>
                                    </Box>
                                    <Box className="details">
                                        <Typography className="fieldHeading">Action</Typography>
                                        <Box className="iconContainer" onClick={() => handlePop(index)}>
                                            <MoreVertIcon className="icon" />
                                        </Box>
                                        <Box className={`${showPopup === index ? 'popupWindowSmall' : 'none'}`}>
                                            <Box className="box1Small" onClick={() => setShowModal(true)}><Typography className="popuptext">Reply to this Dispute</Typography> </Box>
                                            <Box className="box2Small"><Typography className="popuptext">Close this Dispute</Typography></Box>
                                            <Box className="box3Small"><Typography className="popuptext">Mark as a resolved</Typography></Box>


                                        </Box>

                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </ React.Fragment >
                ))}
            </Box>

        </Wrapper>
    )
}
const Wrapper = styled(Box)(({ theme }) => ({
    "& .TicketRaisedTable": {
        width: '100%',
        padding: '25px',
        marginTop: '20px',
        border: '1px solid #ECECEC',
        borderRadius: '5px',
        [theme.breakpoints.down('lg')]: {
            display: 'none'
        }
    },
    "& .heading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '18px',
        color: '#232D42',
    },
    "& .employeeTableData": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: '16px',
        color: '#5C6271',
    },
    "& .activeBtn": {
        height: '30px',
        backgroundColor: 'rgba(45, 175, 104, 0.15)',
        color: 'rgba(45, 175, 104, 1)',
        textTransform: 'capitalize',
        borderRadius: '5px',
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: '14px',
        width: '80px'
    },
    "& .returnBtn": {
        width: '84px',
        height: '30px',
        backgroundColor: 'rgba(254, 91, 0, 0.15)',
        color: 'rgba(254, 91, 0, 1)',
        textTransform: 'capitalize',
        borderRadius: '5px',
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: '14px',
    },
    "& .moreIconContainer": {
        width: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(89, 0, 179, 0.15)',
        height: '40px',
        borderRadius: '5px',
        marginLeft: '10px'
    },
    "& .icon": {
        color: 'rgba(89, 0, 179, 1)'
    },
    "& .CardContainer": {
        display: 'none',
        [theme.breakpoints.down('lg')]: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginTop: '15px'
        }
    },
    "& .mainHeading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '16px',
        color: '#000104'
    },
    "& .cardHeader": {
        width: '100%',
        border: '1px solid #ECECEC',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '5px'
    },
    "& .cardHeading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '16px',
        color: '#5C6271'
    },
    "& .cardBody": {
        padding: '15px',
        border: '1px solid #ECECEC',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        borderRadius: '5px'
    },
    "& .employeeDetails": {
        display: 'flex',
        justifyContent: 'space-between'
    },
    "& .details": {
        display: 'flex',
        gap: '10px',
        flexDirection: 'column'
    },
    "& .fieldHeading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '14px',
        color: '#495464'
    },
    "& .fieldValue": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: '14px',
        color: '#495464'
    },
    "& .horizontalRule": {
        width: '100%',
        border: '1px solid #ECECEC'
    },
    "& .iconContainer": {
        width: '45px', height: '45px', backgroundColor: 'rgba(89,0,179,0.15)',
        display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px',
        [theme.breakpoints.down('sm')]: {
            width: "30px",
            height: '30px'
        }
    },
    "& .iconButton": {
        width: '24px',
        height: "24px"
    },
    "& .fontWeight": {
        fontWeight: 600
    },
    "& .popuptext": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: '17px',
        color: '#5C6271',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px'
        }
    },
    "& .none": {
        display: 'none'
    },
    "& .popupWindow": {
        width: '225px', height: '160px', position: 'absolute', right: '8%',
        border: '1px solid #ECECEC', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '5px'
    },
    "& .box1": {
        flex: 1, padding: '15px', cursor: 'pointer'
    },
    "& .box2": {
        flex: 1, padding: '15px', backgroundColor: '#F5F5F5'
    },
    "& .box3": {
        flex: 1, padding: '15px'
    },
    "& .popupWindowSmall": {
        width: '174px', height: '123px', position: 'absolute', right: '3%', marginTop: "60px",
        display: 'flex', flexDirection: 'column', border: '1px solid #ECECEC', borderRadius: '5px', backgroundColor: '#fff', zIndex: 1
    },
    "& .box1Small": {
        flex: 1, padding: '8px', cursor: 'pointer'
    },
    "& .box2Small": {
        flex: 1, padding: '8px', backgroundColor: '#F5F5F5'
    },
    "& .box3Small": {
        flex: 1, padding: '8px'
    },
}))
export default RaisedTicketComponent