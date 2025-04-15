import { Box, Typography, styled, Grid, Button } from "@mui/material"
import MacBook from 'src/assets/MacBook.svg'
import { customTheme } from "src/themes/theme"
import Trash from "src/assets/trash.svg"
import { systemConfigurationData } from "./MockData"
import { AssetAllocationLogs } from "./MockData"
import arrowRight from 'src/assets/arrow-right.svg'
import UserImage from 'src/assets/user.svg'
import RaisedTicketComponent from 'src/components/RaisedTicket/RaisedTicketComponent'
import React from "react"
const AssetDetail = () => {
    const CustomBtn = styled(Button)(({ theme }) => ({
        height: '45px',
        width: '126px',
        borderRadius: '5px',
        textTransform: 'capitalize',
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: '16px',
        [theme.breakpoints.down('lg')]: {
            width: '96px',
            height: '32px',
            fontSize: '13px'
        }
    }))
    return (
        <Wrapper>
            <Box className="Container">
                <Grid container spacing={3} className="fullWidth">
                    <Grid size={{ lg: 6, md: 12 }} >
                        <Grid container className="fullWidth" rowSpacing={3}>
                            <Grid size={12}>
                                <Box className="detailsContainer assetType">
                                    <Box className="AssetContainer">
                                        <img src={MacBook} alt="AssetType" className="assetImage" />
                                        <Box className="detailContainer">
                                            <Box className="headingContainer">
                                                <Typography className="assetName">MacBook Pro 16”</Typography>
                                                <Typography className="asset">Device: Laptop</Typography>
                                            </Box>
                                            <Box className="btnContainer">
                                                <CustomBtn className="profileBtn">Edit Asset</CustomBtn>
                                                <CustomBtn className="deallocateBtn">View Invoice</CustomBtn>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="iconContainer">
                                        <img src={Trash} alt="TrashIcon" className="TrashIcon" />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={12}>
                                <Box className="detailsContainer">
                                    <Grid container className="fullWidth" spacing={1.4}>
                                        <Grid size={12}><Typography className="configuration">Asset Allocation Logs</Typography></Grid>
                                        <Grid size={12}>

                                            <hr className="horizontalRule" />
                                        </Grid>
                                        <Grid size={1}><Typography className="tableHeading">No.</Typography></Grid>
                                        <Grid size={{ lg: 5, xs: 8 }}><Typography className="tableHeading">Employee Name</Typography></Grid>
                                        <Grid size={3}> <Typography className="tableHeading">Status</Typography></Grid>
                                        <Grid size={3} className="none"><Typography className="tableHeading none">Date</Typography></Grid>
                                        {AssetAllocationLogs.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <hr className="horizontalRule" />
                                                <Grid size={1}><Typography className="tableData">{item.id}</Typography></Grid>
                                                <Grid size={{ lg: 5, xs: 8 }}><Typography className="tableData">{item.name}</Typography></Grid>
                                                <Grid size={3}> <Button className="allocateBtn" variant="contained">{item.status}</Button></Grid>
                                                <Grid size={3} className="none"><Typography className="tableData">{item.date}</Typography></Grid>
                                            </ React.Fragment>
                                        ))}
                                        <Grid size={12}>
                                            <hr className="horizontalRule" />
                                        </Grid>
                                        <Grid size={12}>
                                            <Box className="moreOptionContainer">
                                                <Typography className="moreOption">View All Assets Logs</Typography>
                                                <img src={arrowRight} alt="arrow-right" />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{ lg: 6, md: 12 }}>
                        <Grid container className="fullWidth" rowSpacing={3}>
                            <Grid size={12}>
                                <Box className="detailsContainer">
                                    <Grid container spacing={3}>
                                        <Grid size={12}><Typography className="configuration">System Configuration</Typography></Grid>
                                        <Grid size={12}><hr className="horizontalRule" /></Grid>
                                        {systemConfigurationData.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <Grid size={4} className="large">
                                                    <Box>
                                                        <Typography className="detailHeading">{item.key}</Typography>
                                                        <Typography className="detailContent">{item.value}</Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid size={6} className="small">
                                                    <Box>
                                                        <Typography className="detailHeading">{item.key}</Typography>
                                                        <Typography className="detailContent">{item.value}</Typography>
                                                    </Box>
                                                </Grid>
                                            </ React.Fragment>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid size={12}>
                                <Box className="detailsContainer profileFlex">
                                    <Box className="profileContainer">
                                        <Box className="userDetailContainer">
                                            <img src={UserImage} alt="userImage" className="userImage" />
                                            <Box className="userDetails">
                                                <Typography className="profileHeading">Alex Buckmaster</Typography>
                                                <Typography className="profileData">alex941@outlook.com</Typography>
                                                <Typography className="profileData">Designation: React Developer</Typography>
                                                <Typography className="profileData">Assigned on: 20 May 2024</Typography>
                                            </Box>
                                        </Box>
                                        <Box className="btnContainer">
                                            <CustomBtn className="profileBtn">View Profile</CustomBtn>
                                            <CustomBtn className="deallocateBtn">Dealloacte</CustomBtn>
                                        </Box>
                                    </Box>
                                    <Button className="allocateBtn">
                                        Allocate
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <RaisedTicketComponent />
            </Box>
        </Wrapper>
    )
}
const Wrapper = styled(Box)(({ theme }) => ({
    "& .moreOptionContainer": { display: 'flex', justifyContent: 'center', alignItems: "center", gap: '5px' },
    "& .deallocateBtn": {
        backgroundColor: 'rgba(89,0,179,0.15)', color: 'rgba(89,0,179,1)'
    },
    "& .profileBtn": {
        backgroundColor: 'rgba(89,0,179,1)', color: 'white'
    },

    "& .Container": {
        width: "100%",
        padding: '40px 100px',
        [theme.breakpoints.down('md')]: {
            padding: '10px'
        }
    },
    "& .detailsContainer": { width: "100%", border: '1px solid #ECECEC', padding: '20px', borderRadius: '5px' },
    "& .assetType": {
        display: 'flex',
        justifyContent: 'space-between'
    },
    "& .AssetContainer": {
        display: 'flex',
        gap: '15px'
    },
    "& .detailContainer": {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    "& .assetName": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '20px',
        color: '#232D42',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px'
        }
    },
    "& .asset": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: '16px',
        color: '#5C6271',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        }
    },
    "& .btnContainer": {
        display: 'flex',
        gap: '10px'
    },
    "& .iconContainer": {
        width: '45px', height: '45px', backgroundColor: 'rgba(224,85,82,0.15)',
        display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px',
        [theme.breakpoints.down('sm')]: {
            width: "29px",
            height: '29px'
        }
    },
    "& .detailHeading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '15px',
        color: '#232D42'
    },
    "& .detailContent": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: '13px',
        color: '#5C6271'
    },
    "& .configuration": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '18px',
        color: '#232D42'
    },
    "& .tableHeading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '16px',
        color: '#232D42',
    },
    "& .tableData": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: '13px',
        color: '#5C6271',
    },
    "& .moreOption": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '14px',
        color: '#5900B3',
        textDecoration: 'underline'
    },
    "& .userDetailContainer": {
        display: 'flex',
        gap: '15px'
    },
    "& .profileContainer": {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
    },
    "& .profileHeading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '20px',
        color: '#232D42',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px'
        }
    },
    "& .profileData": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: '16px',
        color: '#5C6271',
        [theme.breakpoints.down('sm')]: {
            fontSize: '11px'
        }
    },
    "& .userDetails": {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    },
    "& .allocateBtn": {
        width: '86px',
        height: '30px',
        backgroundColor: "rgba(89, 0, 179, 0.15)",
        color: 'rgba(89, 0, 179, 1)',
        borderRadius: "5px",
        textTransform: 'capitalize'
    },
    "& .profileFlex": {
        display: 'flex',
        justifyContent: 'space-between',
    },
    "& .none": {

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    "& .assetImage": {
        [theme.breakpoints.down('sm')]: {
            width: '75px',
            height: '75',

        }
    },
    "& .TrashIcon": {
        [theme.breakpoints.down('sm')]: {
            width: '15px',
            height: '15px'
        }
    },
    "& .small": {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    "& .large": {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    "& .userImage": {
        [theme.breakpoints.down('sm')]: {
            width: '75px'
        }
    },
    "& .TicketRaisedTable": {
        width: '100%',
        padding: '25px',
        marginTop: '20px',
        border: '1px solid #ECECEC',
        borderRadius: '5px'
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
    "& .horizontalRule": {
        width: '100%',
        border: '1px solid #ECECEC'
    },
    "& .fullWidth": {
        width: '100%'
    }
}))
export default AssetDetail