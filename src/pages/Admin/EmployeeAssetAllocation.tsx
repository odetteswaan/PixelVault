import { Box, Typography, Grid, Button, styled, IconButton } from "@mui/material"
import { customTheme } from "src/themes/theme"
import { colors } from 'src/themes/colors'
import { token } from "./MockData"
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { AssetAssignment } from "src/types/Assets.type"
import {baseUrl,allAssetHistory} from 'src/config'
import axios from "axios"
import Loader from "src/components/loader/Loader"
const EmployeeAssetAllocation = () => {
    const [open, setOpen] = useState(NaN)
    const[assetAllocation,setAllocation]=useState<AssetAssignment[]|null>(null)
    const[isLoading,setLoading]=useState(true)
    const handleOpen = (index: number) => {
        if (open === index) {
            setOpen(NaN)
        }
        else {
            setOpen(index)
        }
    }
const  formatDate=(inputDate: string):string=> {
  const date = new Date(inputDate);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
    return date.toLocaleDateString('en-GB', options);
}
    useEffect(()=>{
        axios.get(`${baseUrl}${allAssetHistory}`,{headers:{
            token:token
        }}).then((res)=>{
                setAllocation(res.data)
                setLoading(false)
        }).catch(err=>console.log(err))
    },[])
    if(isLoading){
        return (<Loader/>)
    }
    return (
        <Wrapper>
            <Box className="mainContainer">
                <Box className="tableContainer">
                    <Grid container columnSpacing={5} rowSpacing={3}>
                        <Grid size={1}><Typography className="tableHeading">No.</Typography></Grid>
                        <Grid size={3}><Typography className="tableHeading">Asset Allocation</Typography></Grid>
                        <Grid size={2}><Typography className="tableHeading">Status</Typography></Grid>
                        <Grid size={3}><Typography className="tableHeading">Allocated Date</Typography></Grid>
                        <Grid size={3}><Typography className="tableHeading">Returned Date</Typography></Grid>
                        {assetAllocation?.map((item,index) => (
                            <>
                                <Grid size={12}><hr className="horizontalRule" /></Grid>
                                <Grid size={1}><Typography className="tableData">{index+1}</Typography></Grid>
                                <Grid size={3}><Typography className="Asset">{item.asset.name}</Typography></Grid>
                                <Grid size={2}><Button className={`${item.status === 'returned' ? 'Returned' : 'allocated'}`}>
                                    {item.status}</Button></Grid>
                                <Grid size={3}><Typography className="tableData">{formatDate(item.assigned_at)}</Typography></Grid>
                                <Grid size={3}><Typography className="tableData">{item.returned_at?formatDate(item.returned_at):'-'}</Typography></Grid>
                            </>
                        ))}
                    </Grid>

                </Box>
                <Box className="cardCollection">
                    <Grid container rowSpacing={2} columnSpacing={3}>
                        {assetAllocation?.map((item, index) => (

                            <Grid size={{ md: 6, sm: 6, xs: 12 }}>
                                <Box className="headingContainer">
                                    <Typography className="heading">{item.asset.name}</Typography>
                                    <IconButton onClick={() => handleOpen(index)} className="dimension">
                                        {open === index ? <KeyboardArrowUp /> :
                                            <KeyboardArrowDown />
                                        }
                                    </IconButton>
                                </Box>
                                <Box className={`${open === index ? 'bodyContainer' : 'bodyContainerNone'}`}>
                                    <Box className="dateContainer">
                                        <Box className="date">
                                            <Typography className="contentHeading">Allocated Date</Typography>
                                            <Typography className="content">{formatDate(item.assigned_at)}</Typography>
                                        </Box>
                                        <Box className="date">
                                            <Typography className="contentHeading">Returned Date</Typography>
                                            <Typography className="content">{item.returned_at?formatDate(item.returned_at):'-'}</Typography>
                                        </Box>
                                    </Box>
                                    <hr className="horizontalRule" />

                                    <Box className="date">
                                        <Typography className="contentHeading">Status</Typography>
                                        <Button className={`${item.status === 'returned' ? 'Returned' : 'allocated'}`}>{item.status}</Button>
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
        backgroundColor: 'rgba(89, 0, 179, 0.15)',
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: '14px',
        color: 'rgba(89, 0, 179, 1)'
    },
    "& .Returned": {
        width: '86px',
        height: '30px',
        textTransform: 'capitalize',
        borderRadius: '5px',
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.medium,
        fontSize: '14px',
        backgroundColor: 'rgba(224, 85, 82, 0.15)', color: '#E05552'
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