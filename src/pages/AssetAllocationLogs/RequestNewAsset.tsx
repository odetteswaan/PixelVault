import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
  styled,
  SelectChangeEvent,
} from '@mui/material';
import UserDetails from '../../components/userProfile/UserDetails';
import { customTheme } from '../../themes/theme';
import { colors } from '../../themes/colors';

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '3%',
  justifyContent: 'space-between',
  gap: theme.spacing(4),
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  padding: '20px',
  height: '100%',
  background: colors.primary.grayishWhite,
  border: `1px solid ${colors.greys.lightGrey}`,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    border: 'none',
    padding: '10px',
  },
}));

const StyledLabel = styled(Typography)(() => ({
  textAlign: 'start',
  color: colors.greys.grey,
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: '14px',
  marginBottom: '2px',
}));

const StyledTextField = styled(TextField)(() => ({
  marginBottom: '15px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: colors.greys.SteelBlue,
    },
    '&:hover fieldset': {
      borderColor: colors.greys.SteelBlue,
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.greys.SteelBlue,
    },
  },
  '& .MuiInputBase-input': {
    color: '#5C6271',
    fontSize: '14px',
    fontFamily: customTheme.typography.fontFamily.main,
  },
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'end',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
  '& .cancel-btn': {
    color: colors.primary.metallicViolet,
    borderColor: colors.primary.metallicViolet,
    textTransform: 'none',
    width: '120px',
    border: `1px solid ${colors.primary.metallicViolet}`,
  },
  '& .update-btn': {
    backgroundColor: colors.primary.metallicViolet,
    color: colors.body.white,
    textTransform: 'none',
    width: '120px',
    '&:hover': {
      backgroundColor: colors.primary.metallicViolet,
    },
  },
}));

const StyledSubmitButton = styled(Button)(() => ({
  textTransform: 'none',
  backgroundColor: colors.primary.metallicViolet,
  color: colors.body.white,
  width: '100%',
  '&:hover': {
    backgroundColor: colors.primary.metallicViolet,
  },
}));

function RequestNewAsset() {
  const [assetType, setAssetType] = useState('');
  const [laptopType, setLaptopType] = useState('');

  const handleAssetTypeChange = (event: SelectChangeEvent<string>) => {
    setAssetType(event.target.value);
  };

  const handleLaptopTypeChange = (event: SelectChangeEvent<string>) => {
    setLaptopType(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <MainContainer>
      <CustomBox
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          width: '60%',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Details
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={3} sx={{ textAlign: 'center' }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <UserDetails />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <StyledLabel>Full Name</StyledLabel>
            <StyledTextField
              defaultValue="Camero Jorden"
              fullWidth
              size="small"
            />
            <StyledLabel>Office Email ID</StyledLabel>
            <StyledTextField
              defaultValue="camero.jorden@company.com"
              fullWidth
              size="small"
            />
            <StyledLabel>Employee ID</StyledLabel>
            <StyledTextField defaultValue="1004320" fullWidth size="small" />
            <StyledLabel>Mobile Number</StyledLabel>
            <StyledTextField defaultValue="9876543210" fullWidth size="small" />
            <StyledLabel>Personal Email ID</StyledLabel>
            <StyledTextField
              defaultValue="camero.jorden@gmail.com"
              fullWidth
              size="small"
            />
            <StyledLabel>Address</StyledLabel>
            <StyledTextField
              defaultValue="KSD Enclave Kondapur\nHyderabad, Telangana, 500050"
              multiline
              fullWidth
              rows={3}
              sx={{ mb: 2 }}
            />
            <ButtonBox>
              <Button variant="outlined" className="cancel-btn">
                Cancel
              </Button>
              <Button variant="contained" className="update-btn">
                Update
              </Button>
            </ButtonBox>
          </Grid>
        </Grid>
      </CustomBox>
      <CustomBox
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          bgcolor: 'background.paper',
          width: '40%',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h6">New Asset Request</Typography>
          <Divider sx={{ my: 2 }} />
          <StyledLabel>Select Asset Type</StyledLabel>
          <Select
            fullWidth
            value={assetType}
            onChange={handleAssetTypeChange}
            displayEmpty
            sx={{ mb: 2 }}
          >
            <MenuItem value="">
              <StyledLabel>Laptop</StyledLabel>
            </MenuItem>
            <MenuItem value="Laptop">Laptop</MenuItem>
            <MenuItem value="Desktop">Desktop</MenuItem>
          </Select>

          <StyledLabel>Type of Laptop</StyledLabel>
          <Select
            fullWidth
            value={laptopType}
            onChange={handleLaptopTypeChange}
            displayEmpty
            sx={{ mb: 2 }}
          >
            <MenuItem value="">
              <StyledLabel>Windows</StyledLabel>
            </MenuItem>
            <MenuItem value="Windows">Windows</MenuItem>
            <MenuItem value="Mac">Mac</MenuItem>
          </Select>
          <StyledLabel>Reason</StyledLabel>
          <TextField fullWidth multiline rows={4} sx={{ mb: 2 }} />
          <StyledLabel>Comment (Optional)</StyledLabel>
          <TextField fullWidth multiline rows={3} sx={{ mb: 3 }} />

          <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
        </form>
      </CustomBox>
    </MainContainer>
  );
}

export default RequestNewAsset;
