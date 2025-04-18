import { Box, Typography, Grid, Button, styled, TextField, InputAdornment } from "@mui/material"
import { colors } from "src/themes/colors"
import { customTheme } from "src/themes/theme";
import { RaisedTicketData } from './MockData'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import ReplyPopUp from "./ReplyPopUp";
import SearchIcon from "src/assets/search-normal.svg"
const RaisedTickets = () => {
    const [currentNav, setCurrentNav] = useState(1);
    const [display, setDisplay] = useState(NaN);
    const [open, setOpen] = useState(NaN)
    const [openPopUp, setOpenPopUp] = useState(false)
    const handleIncrement = () => {
        if (currentNav < 3) {
            setCurrentNav(currentNav + 1);
        }
    };
    const handleDecrement = () => {
        if (currentNav >= 2) {
            setCurrentNav(currentNav - 1);
        }
    };
    const CustomTextField = styled(TextField)(({ theme }) => ({
        '& .MuiOutlinedInput-root': {
            height: '55px',
            borderRadius: '5px',
            [theme.breakpoints.down('md')]: {
                height: '40px'
            },
            '& fieldset': {
                border: '0.5px solid #8A92A6',

            },
            '&:hover fieldset': {
                border: '1px solid #8A92A6',
            },
            '&.Mui-focused fieldset': {
                border: '1px solid #8A92A6',
            },
        },
    }));
    const handlePopUp = (index: number) => {
        if (index === open) {
            setOpen(NaN)
        }
        else {
            setOpen(index)
        }
    }
    const closeModal = () => {
        setOpenPopUp(false)
    }

    return (
        <Wrapper>
            <Box className="topContainer">
                <Box className="searchContainer">
                    <CustomTextField fullWidth placeholder="Search with user name" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={SearchIcon} alt="" className="img" />
                            </InputAdornment>
                        )
                    }} />
                </Box>
                <Button className="applyBtn">Apply</Button>

            </Box>
            {openPopUp && <ReplyPopUp open={openPopUp} onClose={closeModal} />}
            <Box className="flexBox">
                <Box className="TableContainer">
                    <Grid container columnSpacing={1} rowSpacing={4}>
                        <Grid size={2}><Typography className="tableHeading">User Name</Typography></Grid>
                        <Grid size={2}><Typography className="tableHeading">Date</Typography></Grid>
                        <Grid size={2}><Typography className="tableHeading">User Email ID</Typography></Grid>
                        <Grid size={1}><Typography className="tableHeading">Status</Typography></Grid>
                        <Grid size={1}><Typography className="tableHeading">Asset</Typography></Grid>
                        <Grid size={3}><Typography className="tableHeading">Query</Typography></Grid>
                        <Grid size={1}><Typography className="tableHeading">Action</Typography></Grid>
                        {RaisedTicketData.map((item, index) => (
                            <>
                                <Grid size={12}><hr className="horizontalRule" /></Grid>
                                <Grid size={2}><Typography className="tableHeading color" >{item.username}</Typography></Grid>
                                <Grid size={2}><Typography className="tableData">{item.date}</Typography></Grid>
                                <Grid size={2}><Typography className="tableData">{item.emailId}</Typography></Grid>
                                <Grid size={1}><Button fullWidth className={item.status === 'Ressolved' ? "Ressolved" : "status"}>{item.status}</Button></Grid>
                                <Grid size={1}><Typography className="tableData">{item.Asset}</Typography></Grid>
                                <Grid size={3}><Typography className="tableData">{item.Query}</Typography></Grid>
                                <Grid size={1}><Box className="moreOption" onClick={() => { handlePopUp(index) }}><MoreVertIcon className="blue" />
                                </Box><Box className={open === index ? "popUp" : "none"}>
                                        <Box onClick={() => { setOpen(NaN); setOpenPopUp(true) }} className="popUpBox"><Typography className="popUpOptionText" >Reply to this dispute</Typography></Box>
                                        <Box className="popUpBox backgroundColor"><Typography className="popUpOptionText">Close this dispute</Typography></Box>
                                        <Box className="popUpBox"><Typography className="popUpOptionText">Mark as a resolved</Typography></Box>

                                    </Box>
                                </Grid>
                            </>
                        ))}

                    </Grid>
                </Box>
                <Box className="cardContainer">
                    <Grid container rowSpacing={5} columnSpacing={2} >
                        {RaisedTicketData.map((item, index) => (
                            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                                <Box className="cardHeading">
                                    <Typography className="userName">{item.username}</Typography>
                                    {display === index ? <KeyboardArrowUp className="black" onClick={() => { setDisplay(NaN) }} /> :
                                        <KeyboardArrowDown className="black" onClick={() => { setDisplay(index) }} />
                                    }
                                </Box>
                                <Box className={display === index ? "cardBody" : 'none'}>
                                    <Box className="assetContainer">

                                        <Box >
                                            <Typography className="heading">User Email ID</Typography>
                                            <Typography className="subHeading">{item.emailId}</Typography>
                                        </Box>
                                        <Box className="flexContainer">
                                            <Typography className="heading">Asset</Typography>
                                            <Typography className="subHeading">{item.Asset}</Typography>
                                        </Box>
                                    </Box>
                                    <hr className="horizontalRule" />
                                    <Box >
                                        <Typography className="heading">Date </Typography>
                                        <Typography className="subHeading">{item.date}</Typography>
                                    </Box>
                                    <Box className="queryContainer">
                                        <Typography className="heading">Query </Typography>
                                        <Typography className="subHeading">{item.Query}</Typography>
                                    </Box>
                                    <hr className="horizontalRule" />
                                    <Box className="statusContainer">
                                        <Box >
                                            <Typography className="heading" >Status</Typography>
                                            <Button className={item.status === 'Ressolved' ? "Ressolved" : "status"}>{item.status}</Button>
                                        </Box>
                                        <Box >
                                            <Typography className="heading">Action</Typography>
                                            <Box className="moreOption" onClick={() => { handlePopUp(index) }}><MoreVertIcon /></Box>
                                            <Box className={open === index ? "popUpSmall" : "none"}>
                                                <Box onClick={() => { setOpen(NaN); setOpenPopUp(true) }} className="popUpBoxSmall"><Typography className="popUpOptionText">Reply to this dispute</Typography></Box>
                                                <Box className="popUpBoxSmall backgroundColor"><Typography className="popUpOptionText">Close this dispute</Typography></Box>
                                                <Box className="popUpBoxSmall"><Typography className="popUpOptionText">Mark as a resolved</Typography></Box>

                                            </Box>
                                        </Box>

                                    </Box>

                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
            </Box>
            <Box className="btnContainer" >
                <Box className="navigationContainer">
                    <Box className="nav" onClick={handleDecrement}>
                        {'<'}
                    </Box>
                    {[1, 2, 3].map((i) => (
                        <Box
                            className={currentNav === i ? "navFocused" : 'nav'}
                        >
                            {i}
                        </Box>
                    ))}
                    <Box className="nav" onClick={handleIncrement}>
                        {'>'}
                    </Box>
                </Box>
            </Box>
        </Wrapper>
    )
}
const Wrapper = styled(Box)(({ theme }) => ({
    "& .flexBox": { display: 'flex', justifyContent: 'center' },
    "& .black": {
        color: 'black'
    },
    "& .blue": {
        color: '#5900B3'
    },
    "& .assetContainer": {
        width: '100%', display: 'flex', justifyContent: 'space-between'
    },
    "& .popUp": {
        width: "225px", height: '160px', backgroundColor: 'white',
        position: 'absolute', right: '3%', border: '1px solid #8D939A', borderRadius: '10px', display: 'flex'
        , flexDirection: 'column'
    },
    "& .popUpSmall": {
        width: '174px', height: '123px', position: 'absolute', right: '5%',
        border: '1px solid #8D939A', borderRadius: '10px', backgroundColor: 'white', display: 'flex', flexDirection: 'column'
    },
    "& .popUpBoxSmall": { width: '100%', padding: '8px 8px', flex: 1 },
    "& .none": {
        display: 'none'
    },
    "& .popUpBox": {
        width: '100%', padding: '15px 20px', flex: 1
    },
    "& .backgroundColor": {
        backgroundColor: '#F5F5F5'
    },
    "& .horizontalRule": { width: '100%', border: '1px solid #E2E2E5' },
    "& .queryContainer": { display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' },
    "& .topContainer": {
        padding: '44px 104px',
        borderBottom: `1px solid ${colors.greys.lightGrey}`,
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            padding: '18px 17px 30px 16px'
        }
    },
    "& .applyBtn": {
        width: '218px',
        height: '58px',
        backgroundColor: '#5900B3',
        color: 'white',
        fontFamily: customTheme.typography.fontFamily.main,
        fontSize: '16px',
        fontWeight: customTheme.typography.fontWeights.medium,
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]: {
            width: '100px',
            height: '40px'
        }
    },
    "& .searchContainer": {
        width: '330px',
        [theme.breakpoints.down('md')]: {
            width: '229px',
            maxWidth: '229px'
        }
    },
    "& .img": {
        [theme.breakpoints.down('md')]: {
            width: '16px',
            maxWidth: '16px'
        }
    },
    "& .TableContainer": {
        padding: '30px 20px',
        border: `1px solid ${colors.greys.lightGrey}`,
        borderRadius: '5px',
        marginTop: '30px',
        width: '96%',
        [theme.breakpoints.down('lg')]: {
            display: "none"
        }
    },
    "& .tableHeading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: "18px",
        color: '#495464'
    },
    "& .tableData": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: "16px",
        color: '#495464'
    },
    "& .status": {
        color: '#28C76F',
        backgroundColor: 'rgba(45, 175, 104, 0.15)',
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: "14px",
        textTransform: 'capitalize',
        borderRadius: '5px'
    },
    "& .Ressolved": {
        backgroundColor: 'rgba(254, 91, 0, 0.15)', color: "#FE5B00",
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: "14px",
        textTransform: 'capitalize',
        borderRadius: '5px'
    },
    "& .moreOption": {
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(89, 0, 179, 0.15)',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    '& .btnContainer': {
        width: '95%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '30px',
        marginBottom: '50px',
        [theme.breakpoints.down('md')]: {
            marginBottom: '15px',
        },
    },
    '& .navigationContainer': {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
        width: '250px',
    },
    '& .nav': {
        height: '42px',
        width: '42px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #E8E8E8',
    },
    '& .navFocused': {
        height: '42px',
        width: '42px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #E8E8E8',
        backgroundColor: '#5900B3', color: 'white'
    },
    "& .cardContainer": {
        display: 'none',
        [theme.breakpoints.down('lg')]: {
            display: 'block',
            width: '96%', padding: '10px'
        }
    },
    "& .userName": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.bold,
        fontSize: "18px",
        color: '#495464'
    },
    "& .heading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: "18px",
        color: '#495464'
    },
    "& .subHeading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: "14px",
        color: '#495464'
    },
    "& .flexContainer": { display: 'flex', flexDirection: 'column', gap: '10px' },
    "& .statusContainer": { width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: "15px" },
    "& .cardHeading": {
        width: '100%', display: 'flex', padding: '15px', justifyContent: 'space-between',
        border: '1px solid #ECECEC', borderRadius: '5px'
    },
    "& .cardBody": {
        width: '100%', display: 'flex', padding: '15px',
        border: '1px solid #ECECEC', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '5px'
    },
    "& .popUpOptionText": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: "7",
        color: '#52575C',
        cursor: 'pointer'
    },
    "& .color": { color: '#323A47' }
}))
export default RaisedTickets