import CircularProgress from '@mui/material/CircularProgress';
import {Box,styled} from '@mui/material';
const Loader = () => {
  const StyledBox=styled(Box)({
    width:'100%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  })
  return (
    <StyledBox>
      <CircularProgress />
    </StyledBox>
  )
}

export default Loader
