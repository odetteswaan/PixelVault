import { Box, Button, Typography, Modal, styled } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl, userById,approveUser } from 'src/config';
import { User } from 'src/types/Assets.type';
import { token } from './MockData';
import Loader from 'src/components/loader/Loader';
const ModalContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '24px',
  width: '500px',
  height:'400px',
  overflowY: 'auto',
  outline: 'none',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  display:'flex',
  flexDirection:'column',
  gap:'10px',
  padding:'50px',
  justifyContent:'space-between',
[theme.breakpoints.down('sm')]:{
  width:'350px',
  height:'350px'
}
}));
const StyledBox=styled(Box)({
  width:'90%',display:'flex',justifyContent:'space-between'
})

const StyledSpan=styled('span')({
  fontSize:'13px',fontWeight:600,color:'black'
})
const StyledHeading=styled(Typography)({
  fontSize:'24px',
  fontWeight:700,
  color:'black'
})
const AcceptModal = (props: { open: boolean; handleClose: () => void,userId:string|number }) => {
  const [user,setUser]=useState<User|null>(null)
  const [loading,setLoading]=useState(true)
  const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
const ApproveUser=(id:number|string)=>{
axios.patch(`${baseUrl}${approveUser(id)}`,{"status":"approve"},{
  headers:{
    token:token
  }
}).then(()=>{
 window.location.reload()
}).catch(()=>console.log('some error Occured'))
}

  useEffect(()=>{
axios.get(`${baseUrl}${userById(props.userId)}`,{headers:{token:token}}).then((res)=>{
  setUser(res.data)
  setLoading(false)
})

},[])
  return (
    <StyledModal
      open={props.open}
      onClose={props.handleClose}
    >
      {loading?<Loader/>:<ModalContainer>

        <StyledHeading >Accept This User?</StyledHeading>
        <Typography><StyledSpan >Name:</StyledSpan>{user?.full_name}</Typography>
        <Typography><StyledSpan  >Email:</StyledSpan>{user?.official_email}</Typography>
        <Typography><StyledSpan  >Employee ID:</StyledSpan>{user?.emp_id}</Typography>
        <StyledBox>
         <Button variant="contained" color="success" onClick={()=>ApproveUser(props.userId)}>Accept</Button>
         <Button variant='contained' color="error" onClick={props.handleClose}>Close</Button>
        </StyledBox>
      </ModalContainer>}
    </StyledModal>
  );
};
export default AcceptModal;
