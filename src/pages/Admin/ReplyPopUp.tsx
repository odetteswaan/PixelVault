import { Box, IconButton, Modal, Button, Typography, styled ,ButtonGroup} from "@mui/material"
import { customTheme } from "src/themes/theme";
import CloseIcon from '@mui/icons-material/Close';
import Bold from 'src/assets/bold.svg'
import Italic from 'src/assets/italic.svg'
import Link from 'src/assets/link.svg'
import Ident1 from 'src/assets/ident1.svg'
import Ident2 from 'src/assets/ident2.svg'
import Ident3 from 'src/assets/ident3.svg'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseUrl, ticketById } from "src/config";
import { token } from "./MockData";
import { EmployeeTickets } from "src/types/Employee.type";
const ReplyPopUp = (props: { open: boolean, onClose: () => void ,id:string}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const[ticketState,setTicket]=useState<EmployeeTickets|null>(null)
  const handleFormat = (command: string) => {
    document.execCommand(command, false, undefined);
    editorRef.current?.focus();
  };
  useEffect(()=>{
  axios.get(`${baseUrl}${ticketById(props.id)}`,{
    headers:{
      token:token
    }
  }).then(res=>{
    console.log(res.data)
    setTicket(res.data)
  })
  },[])

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Wrapper>
        <Box className="mainContainer">
          <Box className="headingContainer">
            <Typography className="heading">Reply To Dispute</Typography>
            <Box className="iconContainer">
              <IconButton onClick={props.onClose}>
                <CloseIcon className="iconColor" />
              </IconButton>
            </Box>
          </Box>
          <hr className="horizontalRule" />
          <Box className="Box">
            <Typography className="fieldName">To Employee</Typography>
            <Box className="fieldContentBox">
              <Typography className="fieldContent">{ticketState?.user.official_email}</Typography>
            </Box>
          </Box>

          <Box className="Box">
            <Typography className="fieldName">Enter Subject</Typography>
            <Box className="fieldContentBox">
              <Typography className="fieldContent">{ticketState?.subject}</Typography>
            </Box>
          </Box>

          <Box className="Box">
            <Typography className="fieldName">Query</Typography>
            <Box className="fieldContentBox">
              <Typography className="fieldContent">{ticketState?.query}</Typography>
            </Box>

          </Box>
          <Box className="Box">
            <Typography className="fieldName">Write your reply</Typography>
            <Box className="Reply">
            <ButtonGroup variant="outlined" >
        <Button onClick={() => handleFormat('bold')} className="btnNoBorder">
          <img src={Bold} alt="" />
        </Button>
        <Button onClick={() => handleFormat('italic')} className="btnNoBorder">
         <img src={Italic} alt="" />
        </Button>
        <Button onClick={() => {
    const url = prompt('Enter the URL');
    if (url) {
      document.execCommand('createLink', false, url);
      editorRef.current?.focus();
    }
  }} className="btnNoBorder">
         <img src={Link} alt="" />
        </Button>
        <Button onClick={() => handleFormat('insertOrderedList')} className="btnNoBorder">
          <img src={Ident1} alt="" />
        </Button>
        <Button onClick={() => handleFormat('insertOrderedList')} className="btnNoBorder">
          <img src={Ident2}/>
        </Button>
        <Button onClick={() => handleFormat('insertUnorderedList')} className="btnNoBorder">
          <img src={Ident3}/>
        </Button>

      </ButtonGroup>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="textArea"
      >Type something here...
      </div>
            </Box>
          </Box>
          <Box className="btnContainer">
            <Button className="saveBtn">Save Details</Button>

          </Box>
        </Box>

      </Wrapper>
    </Modal>
  )
}
const Wrapper = styled(Box)(({ theme }) => ({
  "& .iconColor": { color: '#d2d2d2' },
  "& .btnContainer": { width: "100%", display: 'flex', justifyContent: 'center' },
  "& .imageContainer": { width: '100%', height: '30px', borderBottom: "1px solid #ECECEC", padding: '5px', display: 'flex', gap: '15px' },
  "& .Reply": { width: '100%', height: '120px', border: "2px solid #ECECEC", borderRadius: '5px' },
  "& .horizontalRule": {
    width: '100%', border: '1px solid #ECECEC'
  },
  "& .mainContainer": {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    backgroundColor: 'white',
    boxShadow: 24,
    padding: "25px",
    borderRadius: "5px",
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    [theme.breakpoints.down('md')]: {
      width: '350px',
      height: '600px',
      overflow: 'none'
    }
  },
  "& .headingContainer": {
    width: '100%', display: 'flex',
    justifyContent: 'space-between'
  },
  "& .heading": {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    fontSize: '18px',
    color: '#000104'
  },
  "& .iconContainer": {
    height: '24px',
    width: '24px',
    backgroundColor: '#A1AAB9',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  "& .Box": {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  "& .fieldName": {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.default,
    fontSize: '16px',
    color: '#8A92A6'
  },
  "& .fieldContentBox": {
    width: '100%',
    flex: 2,
    padding: '15px',
    backgroundColor: '#F2F2F2',
    borderRadius: '5px'
  },
  "& .fieldContent": {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.bold,
    fontSize: '14px',
    color: '#616B7A',
    [theme.breakpoints.down('md')]:{
      fontSize:'9px'
    }
  },
  "& .saveBtn": {
    width: '80%', height: '50px',
    backgroundColor: '#5900B3',
    borderRadius: '5px',
    textTransform: 'capitalize',
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.medium,
    fontSize: '16px',
    color: '#fff'
  },
  "& .btnNoBorder":{
    border:'none'
  },
  "& .textArea":{
    fontFamily:'urbanist',
    outline: 'none',
    fontSize:'12px',
    borderTop:'1px solid #ECECEC',
    height:'88px',
    overflow:'auto'
  }
}))
export default ReplyPopUp