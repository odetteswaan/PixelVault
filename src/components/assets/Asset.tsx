import { Box,Typography, styled, useMediaQuery } from '@mui/material';
import { customTheme } from '../../themes/theme';
import { colors } from '../../themes/colors';
import UserAckLetterSection from './UserAckLetterSection';
import ViewAckLetterAdmin from './ViewAckLetterAdmin';

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
  const role = localStorage.getItem('role');
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
        {role === 'user' ? (
          <UserAckLetterSection uploaded={uploaded} isSmallScreen={isSmallScreen}/>
        ) : role === 'admin' ? (
          <ViewAckLetterAdmin uploaded={uploaded} isSmallScreen={isSmallScreen}/>
        ) : null}
       
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
