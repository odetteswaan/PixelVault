import { Box, Typography, Grid, Button, styled, IconButton } from "@mui/material"
import { customTheme } from "src/themes/theme"
import { colors } from 'src/themes/colors'
import { employeeAssetAllocationData } from "./MockData"
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { useState } from "react"
const EmployeeAssetAllocation = () => {
    const [open, setOpen] = useState(NaN)
    const handleOpen = (index: number) => {
        if (open === index) {
            setOpen(NaN)
        }
        else {
            setOpen(index)
        }
    }
    return (
        <Wrapper>
            <Box className="mainContainer">
                <Box className="tableContainer">
                    <Grid container columnSpacing={5} rowSpacing={3}>
                        <Grid size={1}><Typography className="tableHeading">No.</Typography></Grid>
                        <Grid size={3}><Typography className="tableHeading">Asset Allocation</Typography></Grid>
                        <Grid size={2}><Typography className="tableHeading">Status</Typography></Grid>
                        <Grid size={3}><Typography className="tableHeading">Requested Date</Typography></Grid>
                        <Grid size={3}><Typography className="tableHeading">Allocated Date</Typography></Grid>
                        {employeeAssetAllocationData.map((item) => (
                            <>
                                <Grid size={12}><hr className="horizontalRule" /></Grid>
                                <Grid size={1}><Typography className="tableData">{item.id}</Typography></Grid>
                                <Grid size={3}><Typography className="Asset">{item.assetAllocation}</Typography></Grid>
                                <Grid size={2}><Button className={`${item.allocated === 'Returned' ? 'Returned' : 'allocated'}`}>
                                    {item.allocated}</Button></Grid>
                                <Grid size={3}><Typography className="tableData">{item.requestedDate}</Typography></Grid>
                                <Grid size={3}><Typography className="tableData">{item.allocatedDate}</Typography></Grid>
                            </>
                        ))}
                    </Grid>

                </Box>
                <Box className="cardCollection">
                    <Grid container rowSpacing={2} columnSpacing={3}>
                        {employeeAssetAllocationData.map((item, index) => (

                            <Grid size={{ md: 6, sm: 6, xs: 12 }}>
                                <Box className="headingContainer">
                                    <Typography className="heading">{item.assetAllocation}</Typography>
                                    <IconButton onClick={() => handleOpen(index)} className="dimension">
                                        {open === index ? <KeyboardArrowUp /> :
                                            <KeyboardArrowDown />
                                        }
                                    </IconButton>
                                </Box>
                                <Box className={`${open === index ? 'bodyContainer' : 'bodyContainerNone'}`}>
                                    <Box className="dateContainer">
                                        <Box className="date">
                                            <Typography className="contentHeading">Requested Date</Typography>
                                            <Typography className="content">{item.requestedDate}</Typography>
                                        </Box>
                                        <Box className="date">
                                            <Typography className="contentHeading">Allocated Date</Typography>
                                            <Typography className="content">{item.allocatedDate}</Typography>
                                        </Box>
                                    </Box>
                                    <hr className="horizontalRule" />

                                    <Box className="date">
                                        <Typography className="contentHeading">Status</Typography>
                                        <Button className={`${item.allocated === 'Returned' ? 'Returned' : 'allocated'}`}>{item.allocated}</Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}

                    </Grid>

                </Box>
            </Box>
        </Wrapper>
    )
}


const Wrapper = styled(Box)(({ theme }) => ({
    "& .horizontalRule": {
        width: "100%", border: `1px solid ${colors.greys.lightGrey}`
    },
    "& .mainContainer": {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '80px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '0px'
        }
    },
    "& .tableContainer": {
        width: "80%",
        padding: '30px',
        border: `1px solid ${colors.greys.lightGrey}`,
        borderRadius: '5px',
        marginBottom: '50px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    "& .tableHeading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '18px',
        colors: '#495464'
    },
    "& .Asset": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '16px',
        colors: '#495464'
    },
    "& .tableData": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: '16px',
        colors: '#495464'
    },
    "& .allocated": {
        width: '86px',
        height: '30px',
        textTransform: 'capitalize',
        borderRadius: '5px',
        backgroundColor: '#d1b0f3',
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: '14px',
        colors: colors.primary.metallicViolet
    },
    "& .Returned": {
        width: '86px',
        height: '30px',
        textTransform: 'capitalize',
        borderRadius: '5px',
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: '14px',
        backgroundColor: '#fad7aa', color: '#E05552'
    },
    "& .headingContainer": {
        display: 'none',
        [theme.breakpoints.down('md')]: {

            width: '100%',
            display: 'flex',
            padding: '15px',
            border: `1px solid ${colors.greys.lightGrey}`,
            justifyContent: 'space-between',
            borderRadius: '5px'
        }
    },
    "& .cardCollection": {
        width: '80%',
        marginBottom: '50px',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    "& .bodyContainer": {
        padding: '15px',
        border: `1px solid ${colors.greys.lightGrey}`,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
    },
    "& .bodyContainerNone": {
        padding: '15px',
        border: `1px solid ${colors.greys.lightGrey}`,
        borderRadius: '5px',
        display: 'none',
        flexDirection: 'column',
        gap: '18px'
    },
    "& .dateContainer": {
        display: 'flex',
        justifyContent: 'space-between'
    },
    "& .date": {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    "& .contentHeading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '14px',
        color: '#495464'
    },
    "& .content": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: '14px',
        color: '#495464'
    },
    "& .heading": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.bold,
        fontSize: '14px',
        color: '#323A47'
    },
    "& .dimension": { width: '24px', height: '24px' }
}))
export default EmployeeAssetAllocation