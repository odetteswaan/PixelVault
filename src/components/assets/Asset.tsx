import { Box,Typography, styled, useMediaQuery } from '@mui/material';
import { customTheme } from 'src/themes/theme';
import { colors } from 'src/themes/colors';
import UserAckLetterSection from './UserAckLetterSection';
import ViewAckLetterAdmin from './ViewAckLetterAdmin';
import { useEffect ,useState} from 'react';
import axios from 'axios';
import { baseUrl, userAssets } from 'src/config';
import { token } from 'src/pages/Admin/MockData';
import { assestDetailType } from 'src/types/Assets.type';
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


function Asset() {
  const [userAsset,setAssets]=useState<assestDetailType[]|null>(null)
const userId=localStorage.getItem('userId')
  useEffect(()=>{
axios.get(`${baseUrl}${userAssets(userId)}`,{headers:{token:token  
}}).then(res=>{
  setAssets(res.data)
}).catch(err=>console.log(err))
  })
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const role = localStorage.getItem('role');
  return (
    <>
    {userAsset?.map((item)=>(

    <AssetContainer>
      <StyledBox>
        <FlexBox>
          <ImageContainer>
            <AssetImage src={item.images[0]} alt="Asset" />
          </ImageContainer>
          <InfoBox>
            <Title>{item.name}</Title>
            <DeviceInfo>Device: {item.asset_type}</DeviceInfo>
            <DeviceInfo>{item.allocation_date}</DeviceInfo>
          </InfoBox>
        </FlexBox>
        {role === 'user' ? (
          <UserAckLetterSection uploaded={true} isSmallScreen={isSmallScreen}/>
        ) : role === 'admin' ? (
          <ViewAckLetterAdmin uploaded={true} isSmallScreen={isSmallScreen}/>
        ) : null}
       
      </StyledBox>
      <Box>
        <SectionTitle>System Configuration</SectionTitle>
        <ConfigBox>
         
            <ConfigItem key={item.id}>
              <ConfigLabel>Processor</ConfigLabel>
              <ConfigValue>{item.processor}</ConfigValue>
            </ConfigItem>
            <ConfigItem key={item.id}>
              <ConfigLabel>Graphics</ConfigLabel>
              <ConfigValue>{item.graphics}</ConfigValue>
            </ConfigItem>
            <ConfigItem key={item.id}>
              <ConfigLabel>Memory</ConfigLabel>
              <ConfigValue>{item.storage}</ConfigValue>
            </ConfigItem>
            <ConfigItem key={item.id}>
              <ConfigLabel>Serial Number</ConfigLabel>
              <ConfigValue>{item.serial_number}</ConfigValue>
            </ConfigItem>
            <ConfigItem key={item.id}>
              <ConfigLabel>OS</ConfigLabel>
              <ConfigValue>{item.os}</ConfigValue>
            </ConfigItem>
            <ConfigItem key={item.id}>
              <ConfigLabel>Model</ConfigLabel>
              <ConfigValue>{item.brand}</ConfigValue>
            </ConfigItem>
        </ConfigBox>
      </Box>
    </AssetContainer>
    ))}
    </>
  );
}

export default Asset;
