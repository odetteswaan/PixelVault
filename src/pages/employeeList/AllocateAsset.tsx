import React, { useState, ChangeEvent } from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/AddPhotoAlternate';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';

interface AllocateAssetModalProps {
  open: boolean;
  onClose: () => void;
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
  marginBottom:"20px"
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
  marginTop:"5px",
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

const AllocateAssetModal: React.FC<AllocateAssetModalProps> = ({ open, onClose }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return true;
  };

  return (
    <StyledModal open={open} onClose={onClose}>
      <ModalContainer>
      <TitleBox>
      <TitleText variant="h6">
          Allocate New Asset
        </TitleText>
        <IconButton onClick={onClose} edge="end">
          <StyledCloseIcon />
        </IconButton>
        </TitleBox>
        <form onSubmit={handleFormSubmit}>
        <StyledLabel>
         Enter Employee Name
        </StyledLabel>
        <StyledTextField
          fullWidth
          variant="outlined"
          defaultValue="Corina McCoy"
          margin="normal"
        />
         <StyledLabel>
         Enter Employee Email Address
        </StyledLabel>
        <StyledTextField
          fullWidth
          variant="outlined"
          defaultValue="jerry73@aol.com"
          margin="normal"
        />
         <StyledLabel>
         Enter Employee ID
        </StyledLabel>
        <StyledTextField
          fullWidth
          variant="outlined"
          defaultValue="10010"
          margin="normal"
        />
         <StyledLabel>
         Select the Asset
        </StyledLabel>
        <StyledTextField
          fullWidth
          variant="outlined"
          defaultValue='MackBook Pro 16"'
          margin="normal"
        />
         <StyledLabel>
         Assign On
        </StyledLabel>
        <StyledTextField
          fullWidth
          variant="outlined"
          defaultValue="2025-05-15"
          margin="normal"
        />

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

        <SaveButton fullWidth variant="contained" type='submit'>
          Save Details
        </SaveButton>
        </form>
      </ModalContainer>
    </StyledModal>
  );
};

export default AllocateAssetModal;
