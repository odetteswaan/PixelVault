import { Box, styled, Typography, Paper, IconButton } from "@mui/material";
import file from 'src/assets/file.svg';
import tickSquare from 'src/assets/tickSquare.svg';
import closeSquare from 'src/assets/closeSquare.svg';

type UserAckLetterSectionProps = {
    uploaded: boolean;
    isSmallScreen?: boolean;
};

const StyledButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'start',
    },
}));

const StyledAckContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
        alignItems: 'start',
    },
}));

const CenteredBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });
const StyledPaper = styled(Paper)({
    backgroundColor: '#E8DDF9',
    borderRadius: '12px',
    padding: '8px 10px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  });
  
  const AckText = styled(Typography)({
    fontWeight: 500,
    fontFamily: 'Urbanist',
    fontSize: '16px',
    color: '#5900B3',
  });

const StyledText = styled(Typography)({
    fontFamily: 'Urbanist',
    fontSize: '14px',
    fontWeight: 400,
});
const StyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "5px"
});
const ActionClose = styled(Box)({
    background: "#E1555226",
    borderRadius: "8px",
});

const ActionOpen = styled(Box)({
    background: "#28C76F26",
    borderRadius: "8px",
});

const StyledImage = styled('img')({
    width: '20px',
    height: '20px',
});

const PendingAcknowledgmentText = styled(Typography)({
    fontStyle: 'Urbanist',
    fontSize: '12px',
    color: '#E15552',
    marginTop: '8px',
  });

const ActionContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    right: '10px',
    bottom: '-30px',
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
        position: 'relative',
        alignItems: 'flex-start',
        marginBottom: '20px',
        marginTop: '-10px',
    },
}));


function ViewAckLetterAdmin({ uploaded }: UserAckLetterSectionProps) {
    return (
        <Box>
            <StyledAckContainer>
                <CenteredBox>
                    <StyledPaper elevation={0}>
                        <img src={file} />
                        <AckText>
                            Ack. Letter
                        </AckText>
                    </StyledPaper>
                </CenteredBox>
            </StyledAckContainer>
            {uploaded ? (
                <StyledButtonContainer>
                    <StyledAckContainer>
                        <CenteredBox>
                            <PendingAcknowledgmentText>
                                Acknowledgment Pending
                            </PendingAcknowledgmentText>
                        </CenteredBox>
                    </StyledAckContainer>
                </StyledButtonContainer>
            ) : (
                <ActionContainer>
                    <StyledBox>
                        <StyledText sx={{ color: "#04B407" }}>Accept</StyledText>
                        <ActionOpen>
                            <IconButton color="success">
                                <StyledImage src={tickSquare} alt="Check" />
                            </IconButton>
                        </ActionOpen>
                    </StyledBox>
                    <StyledBox>
                        <StyledText sx={{ color: "#E15552" }}>Reject</StyledText>
                        <ActionClose>
                            <IconButton color="error">
                                <StyledImage src={closeSquare} alt="Cancel" />
                            </IconButton>
                        </ActionClose>
                    </StyledBox>
                </ActionContainer>
            )}
        </Box>
    );
}

export default ViewAckLetterAdmin;