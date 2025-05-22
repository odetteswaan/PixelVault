import { Box, Typography, styled, Grid } from "@mui/material"
import { customTheme } from "src/themes/theme"
import { colors } from "src/themes/colors"
import { token } from "./MockData"
import { useState,useEffect } from "react"
import { assestDetailType } from "src/types/Assets.type"
import { baseUrl,assetsWarranty } from "src/config"
import axios from "axios"
import Loader from "src/components/loader/Loader"
const WarrantyExpiring = () => {
    const [assetWarranty,setWarranty]=useState<assestDetailType[]|null>(null)
    const [isLoading,setLoading]=useState(true)
    useEffect(()=>{
       axios.get(`${baseUrl}${assetsWarranty}`,{headers:{token:token}})
       .then(res=>{
        console.log(res.data)
        setWarranty(res.data.current_assets)
        setLoading(false)
       })
       .catch(err=>console.log(err))
    },[])
    if(isLoading){
        return <Loader/>
    }
    return (
        <Wrapper>
            <Box className="mainContainer">
                <Box className="cardCollection">
                    <Typography className="Asset">Assets</Typography>
                    <hr className="horizontalRule" />
                    <Grid container columnSpacing={8.5} rowSpacing={4} marginTop="25px">
                        {assetWarranty?.map(item => (
                            <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }}>
                                <Box className="cardContainer">
                                    <Box className="deviceDetails">
                                        <img src={item.images[0]} alt="iphone" className="img" />
                                        <Box className="details">
                                            <Typography className="deviceName">{item.name}</Typography>
                                            <Typography className="deviceBrand">Brand: {item.brand}</Typography>
                                        </Box>

                                    </Box>
                                    <Box className="expiryDate">
                                        <Typography className="date">{item.warranty_end_date}</Typography>
                                        <Typography className="deviceBrand">Device: {item.asset_type}</Typography>
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
    "& .mainContainer": {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    "& .cardCollection": {
        border: `1px solid ${colors.greys.lightGrey}`,
        padding: "30px 50px",
        width: '80%',
        marginTop: "40px",
        borderRadius: '5px',
        marginBottom: '50px',
        [theme.breakpoints.down('md')]: {
            border: 'none',
            padding: '0px',
            marginTop: '0px',
            marginBottom: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            marginBottom: '15px',
        }
    },
    "& .Asset": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '18px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    "& .cardContainer": {
        width: '100%',
        display: "flex",
        padding: "20px",
        justifyContent: 'space-between',
        border: `1px solid ${colors.greys.lightGrey}`,
        borderRadius: '5px'
    },
    "& .deviceDetails": {
        display: 'flex',
        gap: '20px',

    },
    "& .details": {
        display: 'flex',
        flexDirection: 'column',
        gap: "10px"
    },
    "& .deviceName": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.bold,
        fontSize: '16px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        }
    },
    "& .deviceBrand": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.default,
        fontSize: '14px',
        color:'#8A96A8',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        }
    },
    "& .expiryDate": {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        textAlign: 'right'
    },
    "& .date": {
        fontFamily: customTheme.typography.fontFamily.main,
        fontWeight: customTheme.typography.fontWeights.semiBold,
        fontSize: '14px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        }
    },
    "& .horizontalRule": {
        width: '100%',
        border: '1px solid #E2E2E5',
        marginTop: '30px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    "& .img": {
        height: '64px',
        width: "64px",
        [theme.breakpoints.down('sm')]: {
            width: '52px',
            height: '52px'
        }
    }

}))
export default WarrantyExpiring