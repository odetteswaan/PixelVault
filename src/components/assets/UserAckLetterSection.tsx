import { Box, Button, styled, Typography } from "@mui/material";
import AcknowledgementLetter from 'src/assets/Acknowledgement_letter.svg';
import upload from 'src/assets/upload.svg';
import download from 'src/assets/download.svg';
import { customTheme } from "src/themes/theme";
import { colors } from "src/themes/colors";
import RaiseTicketModal from "src/pages/IssuesRaised/RaiseTicket";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


type UserAckLetterSectionProps = {
    uploaded: boolean;
    isSmallScreen?: boolean; 
  };

  const StyledButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    bottom: '-30px',
    textTransform: 'none',
    fontSize: '14px',
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.default,
    background: colors.primary.metallicViolet,
    '&:hover': {
      background: colors.primary.metallicViolet,
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      bottom: '0',
    },
  }));
  
  const StyledButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  }));
  
  const StyledAckContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  }));
  
  const AcknowledgmentLink = styled(Typography)(() => ({
    color: colors.shades.royalIndigo,
    fontSize: '13px',
    fontWeight: customTheme.typography.fontWeights.medium,
    fontFamily: customTheme.typography.fontFamily.main,
  }));
  
  const ActionContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    right: '10px',
    bottom: '-20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      alignItems: 'flex-start',
      marginBottom: '20px',
      marginTop: '-10px',
    },
  }));
  
  const File = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: customTheme.typography.fontFamily.main,
    color: colors.primary.metallicViolet,
    fontSize: '13px',
    fontWeight: customTheme.typography.fontWeights.medium,
    '& img': {
      height: '15px',
      width: '15px',
    },
  });

function UserAckLetterSection({uploaded,isSmallScreen}: UserAckLetterSectionProps){
   const navigate = useNavigate();
   const [openTicketModal, setOpenTicketModal] = useState(false);
   const handleOpen = (name: string) => {
     if (name === 'Raise New Ticket') {
      setOpenTicketModal(true);
    }
  };
  const handleTicketClose = () => {
    navigate('/dashboard');
    setOpenTicketModal(false);
  };
    return(
        <Box>
             {uploaded ? (
          <StyledButtonContainer>
            <StyledAckContainer>
              <img src={AcknowledgementLetter} alt="Acknowledgment Letter" />
              <a
                href="/acknowledgement-letter.pdf"
                download="Acknowledgement_Letter.pdf"
              >
                <AcknowledgmentLink>
                  {isSmallScreen ? 'Ack Letter' : 'Acknowledgment Letter'}
                </AcknowledgmentLink>
              </a>
            </StyledAckContainer>
            <StyledButton variant="contained"  onClick={() => handleOpen("Raise New Ticket")}>Raise New Ticket</StyledButton>
            {openTicketModal && (
        <RaiseTicketModal
          open={openTicketModal}
          handleClose={handleTicketClose}
        />
      )}
          </StyledButtonContainer>
        ) : (
          <ActionContainer>
            <a
              href="/acknowledgement-letter.pdf"
              download="Acknowledgment_Letter.pdf"
            >
              <File>
                Upload Signed Ack. Letter
                <img src={upload} />
              </File>
            </a>
            <a
              href="/acknowledgement-letter.pdf"
              download="Acknowledgment_Letter.pdf"
            >
              <File>
                Download Ack. Letter
                <img src={download} />
              </File>
            </a>
          </ActionContainer>
        )}
        </Box>
    );
}

export default UserAckLetterSection;