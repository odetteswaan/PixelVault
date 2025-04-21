import {
  Box,
  Avatar,
  Typography,
  Button,
  Grid,
  CardContent,
  Divider,
  styled,
  useTheme,
  useMediaQuery
} from "@mui/material";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import message from "../../assets/message.svg";
import User from "../../assets/User.svg";
import Call from "../../assets/Call.svg";


const StyledCard = styled(Box)(({theme})=>({
  padding: 20,
  position:"relative",
  borderRadius: 8,
  width:"50%",
  border:"1px solid #ECECEC",
  [theme.breakpoints.down('md')]:{
  width:"100%",
  }
}));

const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px"
});

const ProfileInfo = styled(Box)(({theme})=>({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  [theme.breakpoints.down('md')]:{
    flexDirection:"row",
    }
}));

const StyledAvatar = styled(Avatar)(({theme})=>({
  width: 120,
  height: 120,
  borderRadius: "8px",
  [theme.breakpoints.down('md')]:{
    width:"75px",
    height:"75px"
  }
}));

const StyledName = styled(Box)({
  fontFamily: "urbanist",
  fontWeight: 600,
  fontSize: '20px',
  color: "#2C3E50"
});
const StyledText = styled(Box)({
  fontFamily: "urbanist",
  fontWeight: 400,
  fontSize: '16px',
  color: "#5E5873"
});

const Container = styled(Box)({
  display:"flex",
  flexWrap:'wrap',
  gap:"10px"
})

const InfoSection = styled(Grid)(({theme})=>({
  marginTop: 16,
  minWidth:"180px",
  [theme.breakpoints.down('md')]:{
    width:'auto',
    }
}));

const Label = styled(Typography)({
  color: "#0C2755",
  fontSize: "15px",
  fontWeight: 600,
  fontFamily: 'Urbanist',
  display: "flex",
  alignItems: "center",
  gap: 4,
});

const Value = styled(Typography)({
  fontSize: "13px",
  fontFamily: 'Urbanist',
  fontWeight: 400,
  color: "#0C2755B2",
  marginLeft: "20px"
});

const SpacedDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const DeleteButton = styled(Button)(({theme})=>({
  backgroundColor: "#ffdddd",
  position:"absolute",
  top:"10px",
  right:"10px",
  color: "#d00",
  border: "1px solid #ECECEC",
  width: 100,
  height: 45,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#ffcccc",
  },
  [theme.breakpoints.down('md')]:{
    width:"30px",
    minWidth:"30px",
    height:"30px"
  }
}));

function EmployeeDetails() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <StyledCard>
      <Header>
        <ProfileInfo>
          <StyledAvatar
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Kimberly"

          />
          <Box>
            <StyledName>
              Kimberly Mastrangelo
            </StyledName>
            <StyledText >
              irena.dubrovnawayne@gmail.com
            </StyledText>
            <StyledText>
              Employee ID: 10011
            </StyledText>
          </Box>
        </ProfileInfo>
        <DeleteButton variant="contained">
         {isMobile ? <DeleteIcon /> : 'Delete'}
        </DeleteButton>
      </Header>
      <SpacedDivider />
      <CardContent>
        <Container>
          <InfoSection>
            <Label>
              <img src={User}/> Designation</Label>
            <Value>Wordpress Developer</Value>
          </InfoSection>
          <InfoSection>
            <Label><img src={Call}/> Mobile Number</Label>
            <Value>+91 95831 56000</Value>
          </InfoSection>
          <InfoSection>
            <Label><CalendarMonthOutlinedIcon fontSize="small" /> Date of Birth</Label>
            <Value>03/09/1998</Value>
          </InfoSection>
          <InfoSection>
            <Label><img src={User} /> Gender</Label>
            <Value>Male</Value>
          </InfoSection>
          <InfoSection>
            <Label><img src={message}/> Personal Email Address</Label>
            <Value>victorsimmon@gmail.com</Value>
          </InfoSection>
          <InfoSection>
            <Label><LocationOnOutlinedIcon fontSize="small" /> Location</Label>
            <Value>Ranchi, Jharkhand</Value>
          </InfoSection>
          </Container>
      </CardContent>
    </StyledCard>
  );
}

export default EmployeeDetails;
