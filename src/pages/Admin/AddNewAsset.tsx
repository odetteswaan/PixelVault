import {
  Box,
  styled,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Receipt from 'src/assets/receipt-add.svg'
import AddImage from 'src/assets/gallery-add.svg'
const AddNewAsset = () => {
  const CustomTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
      height: '55px',
      borderRadius: '5px',
      '& fieldset': {
        border: '1px solid #8A92A6',
      },
      '&:hover fieldset': {
        border: '2px solid #8A92A6',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid #8A92A6',
      },
    },
  }));
  return (
    <Wrapper>
      <Box className="mainContainer">
        <Box className="UploadContainer">
          <Box className="assetInvoice">
            <img src={Receipt} alt="rr" />
            <Typography className="uploadText">
              Drag & Drop Asset Invoice
            </Typography>
            <Typography className="OR">OR</Typography>
            <Button className="InvoiceBtn">Brows Invoice</Button>
          </Box>
          <Box className="assetImageContainer">
            <Box className="assetCard">
              <Box className="imageContainer">
                <img
                  src={AddImage}
                  alt="assetImage"
                />
                <Typography className="uploadImageText">
                  Upload Asset Image
                </Typography>
              </Box>
              <Box className="imageContainer">
                <img
                  src={AddImage}
                  alt="assetImage"
                />
                <Typography className="uploadImageText">
                  Upload Asset Image
                </Typography>
              </Box>
            </Box>
            <Box className="subImage">
              <Box className="imageContainer">
                <img
                  src={AddImage}
                  alt="assetImage"
                />
                <Typography className="uploadImageText">
                  Upload Asset Image
                </Typography>
              </Box>
              <Box className="imageContainer">
                <img
                  src={AddImage}
                  alt="assetImage"
                />
                <Typography className="uploadImageText">
                  Upload Asset Image
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="fieldContainer">
          <Grid container rowSpacing={3} columnSpacing={4}>
            <Grid size={12}>
              <Typography className='cardHeading'>
                Add New Asset
              </Typography>
            </Grid>
            <Grid size={12}>
              <hr className='horizontalRule' />
            </Grid>
            <Grid size={12}>
              <Box>
                <Typography className="fieldText">Assets Name</Typography>
                <CustomTextField variant="outlined" fullWidth />
              </Box>
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid" >
              <Typography className="fieldText">Select Asset Type</Typography>
              <CustomTextField
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyboardArrowRight className='iconColor' />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className='Grid'>
              <Typography className="fieldText">Select Asset Brand</Typography>
              <CustomTextField
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyboardArrowRight className='iconColor' />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">Enter Colour</Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">Enter Ram</Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">Enter Storage</Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">Enter OS</Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">Enter Serial Number</Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">
                Enter Purchased Date
              </Typography>
              <CustomTextField
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarMonthIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">
                Enter Warranty End Date
              </Typography>
              <CustomTextField
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarMonthIcon className='calendarIconColor' />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">Purchased From</Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">
                Select Purchased Type
              </Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">Enter Asset Cost</Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">Processor</Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Grid>
            <Grid size={{ lg: 12, md: 12, sm: 12, xl: 6 }} className="Grid">
              <Typography className="fieldText">Graphics</Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box className="btnContainer">
            <Button className="Save"> Save Details</Button>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled(Box)(({ theme }) => ({
  "& .calendarIconColor": { color: '#2C3E50' },
  "& .horizontalRule": { width: '100%', border: '1px solid #E2E2E5' },
  "& .dimensionBox": {
    height: '30px', width: '30px'
  },
  "& .iconColor": {
    color: 'black'
  },
  "& .cardHeading": {
    fontWeight: 600,
    fontSize: '18px',
    fontFamily: 'Urbanist',
    color: '#000104',
  },
  "& .subImage": {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  "& .assetCard": {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .fieldText': {
    fontFamily: 'Urbanist',
    fontSize: '16px',
    color: '#8A92A6',
  },
  '& .mainContainer': {
    paddingTop: '40px',
    paddingLeft: '100px',
    display: 'flex',
    paddingRight: '100px',
    gap: '40px',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      flexWrap: 'wrap',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '30px 17px',
    },
  },
  '& .UploadContainer': {
    width: '420px',
    height: '532px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  '& .fieldContainer': {
    width: '62%',
    padding: '25px 25px',
    backgroundColor: '#FCFCFD',
    border: '1px solid #ECECEC',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  '& .assetInvoice': {
    width: '100%',
    border: '1.5px dotted #D1D0D3',
    borderRadius: '20px',
    backgroundColor: '#F5F6FA',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '252px',
    gap: '15px',
  },
  '& .uploadText': {
    fontFamily: 'Urbanist',
    fontWeight: 600,
    fontSize: '20px',
    color: '#82899D',
  },
  '& .OR': {
    fontFamily: 'Urbanist',
    fontWeight: 600,
    fontSize: '20px',
    color: '#556888',
  },
  '& .InvoiceBtn': {
    width: '140px',
    height: '50px',
    borderRadius: '5px',
    backgroundColor: '#5900B3',
    fontFamily: 'Urbanist',
    fontWeight: 500,
    fontSize: '16px',
    color: 'white',
    textTransform: 'capitalize',
    border: 'none', "&:hover": { backgroundColor: '#5900B3', }
  },
  '& .assetImageContainer': {
    marginTop: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  '& .imageContainer': {
    width: '180px',
    height: '115px',
    display: 'flex',
    flexDirection: 'column',
    gap: '17px',
    border: '1.5px dotted #D1D0D3',
    borderRadius: '10px',
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '160px',
      height: '100px',
    },
  },
  '& .uploadImageText': {
    fontFamily: 'Urbanist',
    fontWeight: 600,
    fontSize: '14px',
    color: '#82899D',
  },
  '& .btnContainer': {
    marginTop: '60px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginTop: '30px',
    },
  },
  '& .Save': {
    width: '188px',
    height: '42px',
    borderRadius: '5px',
    backgroundColor: '#5900B3',
    fontFamily: 'Urbanist',
    fontWeight: 500,
    fontSize: '16px',
    color: 'white',
    textTransform: 'capitalize', "&:hover": { backgroundColor: '#5900B3', }
  },
  "& .Grid": {
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    }
  }
}));
export default AddNewAsset;
