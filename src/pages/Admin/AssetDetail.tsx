import { Box, Typography, styled, Grid, Button, Avatar } from '@mui/material';
import { customTheme } from 'src/themes/theme';
import Trash from 'src/assets/trash.svg';
import { token } from './MockData';
import arrowRight from 'src/assets/arrow-right.svg';
import RaisedTicketComponent from 'src/components/RaisedTicket/RaisedTicketComponent';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { assestDetailType, AssetAssignment } from 'src/types/Assets.type';
import { baseUrl, assetDetail, assetHistory, deallocate } from 'src/config';
import AllocateAssetModal from '../employeeList/AllocateAsset';
import Loader from 'src/components/loader/Loader';
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    width: '75px',
    height: '75px',
  },
}));
const AssetDetail = () => {
  const [loading, setLoading] = useState(true);
  const [assetData, setData] = useState<assestDetailType | null>(null);
  const [allocationLogs, setAllocation] = useState<AssetAssignment[] | null>(
    null
  );
  const Navigate = useNavigate();
  const productId = localStorage.getItem('productId');
  const[allocateModal,setModal]=useState(false)
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
      fontSize: '13px',
    },
  }));
  useEffect(() => {
    axios
      .get(`${baseUrl}${assetHistory(productId)}`, {
        headers: { token: token },
      })
      .then((res) => {
        console.log(res.data);
        setAllocation(res.data);
      })
      .catch();
    axios
      .get(`${baseUrl}${assetDetail(productId)}`, {
        headers: {
          token: token,
        },
      })
      .then((data) => {
        console.log(data.data);
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleInvoice = () => {
    if (assetData?.invoice) {
      window.open(assetData.invoice);
    }
  };
  const handleNavigate = (id: string) => {
    localStorage.setItem('userId', id);
    Navigate('/admin/employee-Profile');
  };
  const DeallocateUser = (id: string | number) => {
    const body = {
      asset_id: id,
    };
    axios
      .delete(`${baseUrl}${deallocate}`, {
        headers: {
          token: token,
        },
        data: body,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const DeleteAsset = (id: string | number) => {
    axios
      .delete(`${baseUrl}${assetDetail(id)}`, {
        headers: {
          token: token,
        },
      })
      .then(() => {
        Navigate('/admin/assets');
      })
      .catch(() => alert('unable to delete Asset'));
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      <Box className="Container">
              {allocateModal&&<AllocateAssetModal open={allocateModal} onClose={()=>setModal(false)}/>}
        <Grid container spacing={3} className="fullWidth">
          <Grid size={{ lg: 6, md: 12 }}>
            <Grid container className="fullWidth" rowSpacing={3}>
              {assetData && (
                <Grid size={12}>
                  <Box className="detailsContainer assetType">
                    <Box className="AssetContainer">
                      <img
                        src={assetData?.images[0]}
                        alt="AssetType"
                        className="assetImage"
                      />
                      <Box className="detailContainer">
                        <Box className="headingContainer">
                          <Typography className="assetName">
                            {assetData?.name}
                          </Typography>
                          <Typography className="asset">
                            Device: {assetData?.asset_type}
                          </Typography>
                        </Box>
                        <Box className="btnContainer">
                          <CustomBtn className="profileBtn" onClick={()=>{localStorage.setItem('edit','true');Navigate('/admin/add-new-asset')}}>
                            Edit Asset
                          </CustomBtn>
                          <CustomBtn
                            className="deallocateBtn"
                            onClick={handleInvoice}
                          >
                            View Invoice
                          </CustomBtn>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="iconContainer">
                      <img
                        src={Trash}
                        alt="TrashIcon"
                        className="TrashIcon"
                        onClick={() => DeleteAsset(assetData?.id)}
                      />
                    </Box>
                  </Box>
                </Grid>
              )}
              <Grid size={12}>
                <Box className="detailsContainer">
                  <Grid container className="fullWidth" spacing={1.4}>
                    <Grid size={12}>
                      <Typography className="configuration">
                        Asset Allocation Logs
                      </Typography>
                    </Grid>
                    <Grid size={12}>
                      <hr className="horizontalRule" />
                    </Grid>
                    <Grid size={1}>
                      <Typography className="tableHeading">No.</Typography>
                    </Grid>
                    <Grid size={{ lg: 5, xs: 8 }}>
                      <Typography className="tableHeading">
                        Employee Name
                      </Typography>
                    </Grid>
                    <Grid size={3}>
                      {' '}
                      <Typography className="tableHeading">Status</Typography>
                    </Grid>
                    <Grid size={3} className="none">
                      <Typography className="tableHeading none">
                        Date
                      </Typography>
                    </Grid>
                    {allocationLogs?.slice(0, 3).map((item, index) => (
                      <React.Fragment key={index}>
                        <hr className="horizontalRule" />
                        <Grid size={1}>
                          <Typography className="tableData">
                            {index + 1}
                          </Typography>
                        </Grid>
                        <Grid size={{ lg: 5, xs: 8 }}>
                          <Typography className="tableData">
                            {item.user.full_name}
                          </Typography>
                        </Grid>
                        <Grid size={3}>
                          {' '}
                          <Button
                            className={
                              item.status === 'allocated'
                                ? 'allocateBtn'
                                : 'returnBtn'
                            }
                            variant="contained"
                          >
                            {item.status}
                          </Button>
                        </Grid>
                        <Grid size={3} className="none">
                          <Typography className="tableData none">
                            {item.asset.allocation_date}
                          </Typography>
                        </Grid>
                      </React.Fragment>
                    ))}
                    <Grid size={12}>
                      <hr className="horizontalRule" />
                    </Grid>
                    <Grid size={12}>
                      <Box className="moreOptionContainer">
                        <Typography
                          className="moreOption"
                          onClick={() =>
                            Navigate('/admin/employee-asset-allocation')
                          }
                        >
                          View All Assets Logs
                        </Typography>
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
                    <Grid size={12}>
                      <Typography className="configuration">
                        System Configuration
                      </Typography>
                    </Grid>
                    <Grid size={12}>
                      <hr className="horizontalRule" />
                    </Grid>
                    <Grid
                      size={{ xs: 6, sm: 6, lg: 4, xl: 4 }}
                      className="large"
                    >
                      <Box>
                        <Typography className="detailHeading">
                          Processor
                        </Typography>
                        <Typography className="detailContent">
                          {assetData?.processor}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      size={{ xs: 6, sm: 6, lg: 4, xl: 4 }}
                      className="large"
                    >
                      <Box>
                        <Typography className="detailHeading">
                          Graphics
                        </Typography>
                        <Typography className="detailContent">
                          {assetData?.graphics}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      size={{ xs: 6, sm: 6, lg: 4, xl: 4 }}
                      className="large"
                    >
                      <Box>
                        <Typography className="detailHeading">
                          Memory
                        </Typography>
                        <Typography className="detailContent">
                          {assetData?.storage}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      size={{ xs: 6, sm: 6, lg: 4, xl: 4 }}
                      className="large"
                    >
                      <Box>
                        <Typography className="detailHeading">
                          Serial Number
                        </Typography>
                        <Typography className="detailContent">
                          {assetData?.serial_number}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      size={{ xs: 6, sm: 6, lg: 4, xl: 4 }}
                      className="large"
                    >
                      <Box>
                        <Typography className="detailHeading">OS</Typography>
                        <Typography className="detailContent">
                          {assetData?.os}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      size={{ xs: 6, sm: 6, lg: 4, xl: 4 }}
                      className="large"
                    >
                      <Box>
                        <Typography className="detailHeading">Model</Typography>
                        <Typography className="detailContent">
                          {assetData?.asset_type}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      size={{ xs: 6, sm: 6, lg: 4, xl: 4 }}
                      className="large"
                    >
                      <Box>
                        <Typography className="detailHeading">
                          Purchase On
                        </Typography>
                        <Typography className="detailContent">
                          {assetData?.purchase_date}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      size={{ xs: 6, sm: 6, lg: 4, xl: 4 }}
                      className="large"
                    >
                      <Box>
                        <Typography className="detailHeading">
                          Warranty Renewal
                        </Typography>
                        <Typography className="detailContent">
                          {assetData?.warranty_end_date}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      size={{ xs: 6, sm: 6, lg: 4, xl: 4 }}
                      className="large"
                    >
                      <Box>
                        <Typography className="detailHeading">
                          Repairing Done
                        </Typography>
                        <Typography className="detailContent">1</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid size={12}>
                {assetData?.assigned_user ? (
                  <Box className="detailsContainer profileFlex">
                    <Box className="profileContainer">
                      <Box className="userDetailContainer">
                        <StyledAvatar
                          src={assetData?.assigned_user?.profile_image}
                          alt={assetData?.assigned_user?.full_name}
                        />
                        <Box className="userDetails">
                          <Typography className="profileHeading">
                            {assetData?.assigned_user?.full_name}
                          </Typography>
                          <Typography className="profileData">
                            {assetData?.assigned_user?.official_email}
                          </Typography>
                          <Typography className="profileData">
                            {assetData?.assigned_user?.designation}
                          </Typography>
                          <Typography className="profileData">
                            Assigned on: 20 May 2024
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="btnContainer">
                        <CustomBtn
                          className="profileBtn"
                          onClick={() => {
                            assetData?.assigned_user
                              ? handleNavigate(
                                  assetData.assigned_user.id.toString()
                                )
                              : '';
                          }}
                        >
                          View Profile
                        </CustomBtn>
                        <CustomBtn
                          className="deallocateBtn"
                          onClick={() => DeallocateUser(assetData.id)}
                        >
                          Dealloacte
                        </CustomBtn>
                      </Box>
                    </Box>
                    <Button className="allocateBtn">Allocate</Button>
                  </Box>
                ) : (
                  <CustomBtn className="deallocateBtn" onClick={()=>setModal(true)}>
                    Allocate Asset
                  </CustomBtn>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <RaisedTicketComponent productId={productId} />
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled(Box)(({ theme }) => ({
  '& .moreOptionContainer': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
  },
  '& .deallocateBtn': {
    backgroundColor: 'rgba(89,0,179,0.15)',
    color: 'rgba(89,0,179,1)',
  },
  '& .profileBtn': {
    backgroundColor: 'rgba(89,0,179,1)',
    color: 'white',
  },

  '& .Container': {
    width: '100%',
    padding: '40px 100px',
    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
  },
  '& .detailsContainer': {
    width: '100%',
    border: '1px solid #ECECEC',
    padding: '20px',
    borderRadius: '5px',
  },
  '& .assetType': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .AssetContainer': {
    display: 'flex',
    gap: '15px',
  },
  '& .detailContainer': {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  '& .assetName': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    fontSize: '20px',
    color: '#232D42',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  '& .asset': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.default,
    fontSize: '16px',
    color: '#5C6271',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  '& .btnContainer': {
    display: 'flex',
    gap: '10px',
  },
  '& .iconContainer': {
    width: '45px',
    height: '45px',
    backgroundColor: 'rgba(224,85,82,0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '29px',
      height: '29px',
    },
  },
  '& .detailHeading': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    fontSize: '15px',
    color: '#232D42',
  },
  '& .detailContent': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.default,
    fontSize: '13px',
    color: '#5C6271',
  },
  '& .configuration': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    fontSize: '18px',
    color: '#232D42',
  },
  '& .tableHeading': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    fontSize: '16px',
    color: '#232D42',
  },
  '& .tableData': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.default,
    fontSize: '13px',
    color: '#5C6271',
  },
  '& .moreOption': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    fontSize: '14px',
    color: '#5900B3',
    textDecoration: 'underline',
  },
  '& .userDetailContainer': {
    display: 'flex',
    gap: '15px',
  },
  '& .profileContainer': {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  '& .profileHeading': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    fontSize: '20px',
    color: '#232D42',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  '& .profileData': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.default,
    fontSize: '16px',
    color: '#5C6271',
    [theme.breakpoints.down('sm')]: {
      fontSize: '11px',
    },
  },
  '& .userDetails': {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  '& .allocateBtn': {
    width: '86px',
    height: '30px',
    backgroundColor: 'rgba(89, 0, 179, 0.15)',
    color: 'rgba(89, 0, 179, 1)',
    borderRadius: '5px',
    textTransform: 'capitalize',
  },
  '& .profileFlex': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .none': {
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
  '& .assetImage': {
    [theme.breakpoints.down('sm')]: {
      width: '75px',
      height: '75',
    },
  },
  '& .TrashIcon': {
    [theme.breakpoints.down('sm')]: {
      width: '15px',
      height: '15px',
    },
  },
  '& .userImage': {
    [theme.breakpoints.down('sm')]: {
      width: '75px',
    },
  },
  '& .TicketRaisedTable': {
    width: '100%',
    padding: '25px',
    marginTop: '20px',
    border: '1px solid #ECECEC',
    borderRadius: '5px',
  },
  '& .heading': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    fontSize: '18px',
    color: '#232D42',
  },
  '& .employeeTableData': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.default,
    fontSize: '16px',
    color: '#5C6271',
  },
  '& .activeBtn': {
    height: '30px',
    backgroundColor: 'rgba(45, 175, 104, 0.15)',
    color: 'rgba(45, 175, 104, 1)',
    textTransform: 'capitalize',
    borderRadius: '5px',
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.medium,
    fontSize: '14px',
    width: '80px',
  },
  '& .returnBtn': {
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
  '& .moreIconContainer': {
    width: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(89, 0, 179, 0.15)',
    height: '40px',
    borderRadius: '5px',
    marginLeft: '10px',
  },
  '& .icon': {
    color: 'rgba(89, 0, 179, 1)',
  },
  '& .horizontalRule': {
    width: '100%',
    border: '1px solid #ECECEC',
  },
  '& .fullWidth': {
    width: '100%',
  },
}));
export default AssetDetail;
