import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { customTheme } from '../../themes/theme';
import { colors } from '../../themes/colors';
import { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

const editorConfig = {
  toolbarSticky: false,
  toolbarAdaptive: false,
  height: 200,
  buttons: ['bold', 'italic', 'ul', 'ol'],
  placeholder: 'Type your text here...',
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
};

interface RaiseTicketModalProps {
  open: boolean;
  handleClose: () => void;
}

const DialogPaper = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    maxWidth: '500px',
    margin: '0 auto',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  alignItems: 'center',
  borderBottom: `1px solid ${colors.greys.frostedGrey}`,
}));

const StyledTypography = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: customTheme.typography.fontWeights.medium,
  fontFamily: customTheme.typography.fontFamily.main,
}));

const StyledCloseIcon = styled(CloseIcon)(() => ({
  width: '20px',
  height: '20px',
  background: colors.greys.dustygrey,
  borderRadius: '8px',
}));

const StyledDialogContent = styled(DialogContent)({
  '.MuiDialogContent-root': {
    display: 'block',
  },
});

const StyledLabel = styled('label')({
  color: colors.greys.grey,
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[10],
  display: 'inline-block',
  marginBottom: '5px',
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontSize: '14px',
    fontWeight: customTheme.typography.fontWeights.semiBold,
    color: colors.greys.grayishBlue,
  },
  '& .MuiInputBase-input': {
    color: colors.greys.grayishBlue,
    fontSize: '14px',
    fontFamily: customTheme.typography.fontFamily.main,
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#F2F2F28C',
    borderColor: colors.greys.SteelBlue,
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.greys.SteelBlue,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.greys.SteelBlue,
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: colors.greys.grayishBlue,
    opacity: 1,
    fontSize: '14px',
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  maxHeight: '50vh',
  overflowY: 'auto',
  marginTop: '5%',
  paddingBottom: theme.spacing(2),
}));

const SendButton = styled(Button)(() => ({
  backgroundColor: colors.primary.metallicViolet,
  color: colors.body.white,
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: '16px',
  fontWeight: 400,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: colors.primary.metallicViolet,
  },
}));

function RaiseTicketModal({ open, handleClose }: RaiseTicketModalProps) {
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState('');
  return (
    <DialogPaper open={open} onClose={handleClose}>
      <TitleBox>
        <StyledTypography>Raise New Ticket</StyledTypography>
        <IconButton edge="end" onClick={handleClose}>
          <StyledCloseIcon />
        </IconButton>
      </TitleBox>

      <StyledDialogContent>
        <StyledLabel>To Admin</StyledLabel>
        <StyledTextField
          defaultValue="lesie.alexander@gmail.com"
          variant="outlined"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />

        <StyledLabel>Enter Subject</StyledLabel>
        <StyledTextField
          placeholder="Login Not Working"
          variant="outlined"
          fullWidth
        />

        <StyledLabel>Query</StyledLabel>
        <JoditEditor
          ref={editorRef}
          value={editorContent}
          config={editorConfig}
          onChange={(newContent) => setEditorContent(newContent)}
        />

        <StyledBox>
          <SendButton fullWidth variant="contained">
            Send Request
          </SendButton>
        </StyledBox>
      </StyledDialogContent>
    </DialogPaper>
  );
}

export default RaiseTicketModal;
