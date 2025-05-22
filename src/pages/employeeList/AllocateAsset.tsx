import React, { useState, ChangeEvent, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  styled,
  List,
  ListItem,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/AddPhotoAlternate';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import axios from 'axios';
import { token } from '../Admin/MockData';
import { Employee } from 'src/types/Employee.type';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useNavigate ,useLocation} from 'react-router-dom';
import {
  baseUrl,
  asset_allocations,
  assetbyname,
  emailByQuery,
} from 'src/config';
interface AllocateAssetModalProps {
  open: boolean;
  onClose: () => void;
}
interface AssetType {
  id: number;
  name: string;
}
const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ModalContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  borderRadius: '12px',
  width: '90%',
  maxWidth: '580px',
  maxHeight: '90vh',
  overflowY: 'auto',
  outline: 'none',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  '::-webkit-scrollbar': {
    display: 'none',
  },
}));

const TitleBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${colors.greys.frostedGrey}`,
  marginBottom: '20px',
});

const StyledLabel = styled(Typography)(() => ({
  textAlign: 'start',
  color: colors.greys.grey,
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: '16px',
  marginBottom: '2px',
}));

const StyledTextField = styled(TextField)(() => ({
  marginBottom: '15px',
  marginTop: '5px',
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

const FileUploadBox = styled(Box)(({ theme }) => ({
  border: '1px dashed #C4C4C4',
  borderRadius: '8px',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#666',
  marginTop: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
}));

const SaveButton = styled(Button)({
  backgroundColor: '#5900B3',
  color: '#fff',
  textTransform: 'none',
  fontWeight: 500,
  borderRadius: '8px',
  marginTop: '24px',
  '&:hover': {
    backgroundColor: '#470095',
  },
});
const StyledCloseIcon = styled(CloseIcon)(() => ({
  width: '20px',
  height: '20px',
  background: colors.greys.dustygrey,
  borderRadius: '8px',
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));
const CustomListItem = styled(ListItem)(() => ({
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
}));
const AllocateAssetModal: React.FC<AllocateAssetModalProps> = ({
  open,
  onClose,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [userList, setUsers] = useState<{ users: Employee[] } | null>(null);
  const [userDetails, setDetails] = useState<Employee | null>(null);
  const [availableAssets, setAssets] = useState<{ assets: AssetType[] } | null>(
    null
  );
  const [assetName, setName] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [asset_id, setId] = useState<number>();
  const Navigate = useNavigate();
  const location=useLocation()
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (asset_id !== undefined) {
      formData.append('asset_id', asset_id.toString());
    }
    if (userDetails) {
      formData.append('user_id', userDetails?.id.toString());
    }
    const date = selectedDate?.toString().split(' ').splice(1, 3).join(' ');
    if (date) {
      formData.append('assigned_date', date);
    }
    if (file) {
      formData.append('acknowledgment', file);
    }
    axios
      .post(`${baseUrl}${asset_allocations}`, formData, {
        headers: {
          token: token,
        },
      })
      .then(() => {
        if(location.pathname=='/admin/assets'){
          window.location.reload()
        }
        else{
          Navigate('/admin/assets');
        }
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 3) {
      setUsers(null);
    } else {
      axios
        .get(`${baseUrl}${emailByQuery(value)}`, {
          headers: {
            token: token,
          },
        })
        .then((result) => {
          setUsers(result.data);
        })
        .catch(() => {});
    }
  };
  useEffect(() => {
    axios
      .get(`${baseUrl}${assetbyname}`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setAssets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const setValues = (user: Employee) => {
    setDetails(user);
    setUsers(null);
  };
  const handleAssetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleAsset = (item: { name: string; id: number }) => {
    setId(item.id);
  };
  return (
    <StyledModal open={open} onClose={onClose}>
      <ModalContainer>
        <TitleBox>
          <TitleText variant="h6">Allocate New Asset</TitleText>
          <IconButton onClick={onClose} edge="end">
            <StyledCloseIcon />
          </IconButton>
        </TitleBox>
        <form onSubmit={handleFormSubmit}>
          <StyledLabel>Enter Employee Email Address</StyledLabel>
          <StyledTextField
            fullWidth
            variant="outlined"
            margin="normal"
            value={userDetails?.email}
            onChange={handleChange}
            required
          />
          {userList !== null && (
            <List
              style={{ width: '100%', maxHeight: '200px', overflow: 'auto' }}
            >
              {userList?.users.map((i) => (
                <CustomListItem onClick={() => setValues(i)}>
                  {i.email}
                </CustomListItem>
              ))}
            </List>
          )}
          <StyledLabel>Enter Employee Name</StyledLabel>
          <StyledTextField
            fullWidth
            variant="outlined"
            value={userDetails?.name}
            margin="normal"
            required
          />
          <StyledLabel>Enter Employee ID</StyledLabel>
          <StyledTextField
            fullWidth
            variant="outlined"
            margin="normal"
            value={userDetails?.emp_id}
            required
          />
          <StyledLabel>Select the Asset</StyledLabel>
          <StyledTextField
            fullWidth
            variant="outlined"
            margin="normal"
            select
            value={assetName}
            onChange={handleAssetName}
            required
          >
            {availableAssets?.assets.map((item) => (
              <MenuItem
                key={item.id}
                value={item.name}
                onClick={() => handleAsset(item)}
              >
                {item.name}
              </MenuItem>
            ))}
          </StyledTextField>
          <StyledLabel>Assign On</StyledLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              defaultValue={null}
              slotProps={{
                textField: {
                  fullWidth: true,
                  margin: 'normal',
                  required: true,
                },
              }}
            />
          </LocalizationProvider>

          <label htmlFor="upload-file">
            <FileUploadBox>
              <UploadIcon color="primary" />
              <Typography fontSize="14px">
                Upload Asset Allocation Acknowledgement Letter
              </Typography>
            </FileUploadBox>
            <input
              type="file"
              id="upload-file"
              hidden
              onChange={handleFileChange}
            />
          </label>
          {file && <p>Selected File: {file.name}</p>}

          <SaveButton fullWidth variant="contained" type="submit">
            Save Details
          </SaveButton>
        </form>
      </ModalContainer>
    </StyledModal>
  );
};

export default AllocateAssetModal;
