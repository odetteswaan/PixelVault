import { Box, Button, Typography, styled, useMediaQuery } from '@mui/material';
import AcknowledgementLetter from '../../../assets/Acknowledgement_letter.svg';
import upload from '../../../assets/upload.svg';
import download from '../../../assets/download.svg';
import { customTheme } from '../../../themes/theme';
import { colors } from '../../../themes/colors';

interface AssetProps {
  AssetName: string;
  image: string;
  DeviceType: string;
  AssignedDate: string;
  Processor: string;
  Graphics: string;
  Memory: string;
  SerialNumber: string;
  OS: string;
  Model: string;
  uploaded: boolean;
}

const AssetContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  maxWidth: '600px',
  border: `1px solid ${colors.greys.lightGrey}`,
  background: colors.primary.grayishWhite,
  borderRadius: '5px',
  padding: '10px',
  flex: '1 0 40%',
  [theme.breakpoints.down('md')]: {
    flex: '1 0 100%',
  },
}));

const FlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '60%',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const ImageContainer = styled(Box)({
  height: '100px',
  width: '100px',
  borderRadius: '10px',
});

const AssetImage = styled('img')({
  width: '100%',
  height: '100%',
});

const InfoBox = styled(Box)({
  padding: '10px 20px',
  flexGrow: 1,
});

const Title = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[12],
  fontWeight: customTheme.typography.fontWeights.semiBold,
  color: colors.greys.blueGrey,
});

const DeviceInfo = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: '13px',
  fontWeight: customTheme.typography.fontWeights.default,
  color: colors.shades.dustyPlum,
});

const SectionTitle = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[10],
  fontWeight: customTheme.typography.fontWeights.semiBold,
  color: colors.headers.charcoalBlack,
  borderBottom: `1px solid ${colors.greys.frostedGrey}`,
  padding: '10px 0px',
});

const ConfigBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  minHeight: '150px',
  paddingTop: '3%',
  justifyContent: 'space-between',
});

const ConfigItem = styled(Box)(({ theme }) => ({
  width: '33%',
  [theme.breakpoints.down('md')]: {
    width: '30%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '40%',
  },
}));

const ConfigLabel = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[10],
  fontWeight: customTheme.typography.fontWeights.semiBold,
  color: colors.shades.royalIndigo,
});

const ConfigValue = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: '13px',
  fontWeight: customTheme.typography.fontWeights.default,
  color: colors.shades.royalIndigo,
});

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '10px',
  position: 'relative',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

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

function Asset({ asset }: { asset: AssetProps }) {
  const {
    AssetName,
    image,
    DeviceType,
    AssignedDate,
    Processor,
    Graphics,
    Memory,
    SerialNumber,
    OS,
    Model,
    uploaded,
  } = asset;

  const systemConfiguration = [
    { label: 'Processor', value: Processor },
    { label: 'Graphics', value: Graphics },
    { label: 'Memory', value: Memory },
    { label: 'Serial Number', value: SerialNumber },
    { label: 'OS', value: OS },
    { label: 'Model', value: Model },
  ];
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <AssetContainer>
      <StyledBox>
        <FlexBox>
          <ImageContainer>
            <AssetImage src={image} alt="Asset" />
          </ImageContainer>
          <InfoBox>
            <Title>{AssetName}</Title>
            <DeviceInfo>Device: {DeviceType}</DeviceInfo>
            <DeviceInfo>{AssignedDate}</DeviceInfo>
          </InfoBox>
        </FlexBox>
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
            <StyledButton variant="contained">Raise New Ticket</StyledButton>
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
      </StyledBox>
      <Box>
        <SectionTitle>System Configuration</SectionTitle>
        <ConfigBox>
          {systemConfiguration.map((item) => (
            <ConfigItem key={item.label}>
              <ConfigLabel>{item.label}</ConfigLabel>
              <ConfigValue>{item.value}</ConfigValue>
            </ConfigItem>
          ))}
        </ConfigBox>
      </Box>
    </AssetContainer>
  );
}

export default Asset;
