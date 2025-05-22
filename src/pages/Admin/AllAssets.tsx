import { Box, styled, Typography, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import { TableHeading, token } from './MockData';
import { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { assetType } from 'src/types/Assets.type';
import AllocateAssetModal from 'src/pages/employeeList/AllocateAsset';
import { baseUrl, getAssets,assetDetail,deallocate} from 'src/config';
import Loader from 'src/components/loader/Loader';
const AllAssets = () => {
  const [display, setDisplay] = useState(NaN);
  const [option, setOptions] = useState(NaN);
  const [Assets, setAssets] = useState<assetType[]>([]);
  const [loading, setLoading] = useState(true);
  const[allocateModal,setModal]=useState(false)
  const Navigate = useNavigate();

  const itemsPerPage = 8;
const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.ceil(Assets.length / itemsPerPage);
const arr = Array.from({ length: totalPages }, (_, i) => i + 1);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentItems = Assets.slice(startIndex, endIndex);
  const setIndex = (index: number) => {
    if (option === index) {
      setOptions(NaN);
    } else {
      setOptions(index);
    }
  };
  const EditPage = (id: number) => {
    localStorage.setItem('productId', id.toString())
    Navigate('/admin/asset-detail');
  };
  useEffect(() => {
    axios
      .get(`${baseUrl}${getAssets}`, {
        headers: {
          token:
            token
        },
      })
      .then((data) => {
        setAssets(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDeleteAsset = (id: number) => {

    axios.get(`${baseUrl}${assetDetail(id)}`, {
      headers: {
        token: token
      }
    }).then(() => {
      axios.delete(`${baseUrl}${assetDetail(id)}`, {
        headers: { token: token }
      }).then(() => {
        window.location.reload()
      }).catch(err => console.log(err))
    })
      .catch(err => console.log(err))
  }
  const handleDealloacte=(id:number)=>{
    const body={
      "asset_id":id
    }
        axios.delete(`${baseUrl}${deallocate}`,{
          headers:{
            token:token
          },
        data:body
        }).then(()=>{
          window.location.reload()
        }).catch(()=>alert("Failed to deallocate asset. Please try again."))
  }
  const  formatDate=(inputDate: string):string=> {
  const date = new Date(inputDate);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
    return date.toLocaleDateString('en-GB', options);
}
  if (loading) {
    return <Loader/>
  }
  return (
    <Wrapper>
      <Box className="btnContainer">
        <Button
          startIcon={<AddCircleOutlineIcon />}
          className="addBtn"
          onClick={() => {localStorage.setItem('edit','false');Navigate('/admin/add-new-asset')}}
        >
          Add New Asset
        </Button>
      </Box>
      {allocateModal&&<AllocateAssetModal open={allocateModal} onClose={()=>setModal(false)}/>}
      <Box className="mainContainer">
        <Box className="tableContainer">
          <Box className="table">
            <Box className="tableHeading">
              <Typography>No</Typography>
              {TableHeading.map((item) => (
                <Typography className="tableheadingText" key={item}  >
                  {item}
                </Typography>
              ))}
            </Box>
            {currentItems?.map((item, index) => (
              <>
              <hr className="horizontal" />
                <Box className="tablerow">
                  <Typography className="serialNumber" >{index+1}</Typography>
                  <Typography className="sNoBold" >{item.name}</Typography>
                  <Typography className="sNo" >{item.asset_type}</Typography>
                  <Typography className="sNo" >{item.brand}</Typography>
                  <Typography className="sNo" >{formatDate(item.purchase_date)}</Typography>
                  <Typography className="sNo" >
                    {formatDate(item.warranty_end_date)}
                  </Typography>
                  <Box  className="btnContainerStyle">
                  <Button 
                    onClick={() => setIndex(index)}
                    variant="contained"
                    className={
                      item.allocation_status === 'available'
                        ? 'allocateBtnGreen'
                        : 'allocateBtn'
                    }
                  >
                    {item.allocation_status === 'available'
                      ? 'Available'
                      : 'Allocated'}
                  </Button>

                  </Box>
                  <Box className="action">⋮</Box>
                  <Box
                    className={`${option === index ? 'popupWindow' : 'none'}`}
                  >
                    <Box className="box1" onClick={() => EditPage(item.id)}>
                      Edit Detail
                    </Box>
                    {item.allocation_status==='available'&& 
                    <Button  variant="text"
                    disableRipple
                    disableElevation className='unstyleBtn' >
                    <Box className="box2" onClick={()=>setModal(true)}>
                     <Typography>Assign Now</Typography>
                    </Box>
                    </Button>
                    }
                  <Button onClick={() => handleDeleteAsset(item.id)} variant="text"
                      disableRipple
                      disableElevation className='unstyleBtn' >
                      <Box className="box3" >
                        <Typography>Delete</Typography>
                      </Box>
                    </Button>

                    {item.allocation_status==='allocated'&&<Box className="box2">

                       <Button  variant="text" onClick={()=>handleDealloacte(item.id)}
                    disableRipple
                    disableElevation className='unstyleBtn' >
                    <Box className="box2">
                     <Typography>Deallocate</Typography>
                    </Box>
                    </Button>
                    </Box>}
                  </Box>
                </Box>
              </>
            ))}
          </Box>
        </Box>
        <Box className="cardsHolder">
          {currentItems.map((item, index) => (
            <Box className="AssetContiner">
              <Box className="AssetHeading">
                <Typography className="cardHeading">{item.name}</Typography>
                {index === display ? (
                  <KeyboardArrowUpIcon onClick={() => setDisplay(NaN)} />
                ) : (
                  <KeyboardArrowDown onClick={() => setDisplay(index)} />
                )}
              </Box>
              <Box
                className={`${display === index ? 'AssetContent' : 'AssetContentNone'}`}
              >
                <Box className="Container">
                  <Box className="contentContainer">
                    <Typography className="cardHeading">Asset Type</Typography>
                    <Typography className="cardContent">
                      {item.asset_type}
                    </Typography>
                  </Box>
                  <Box className="contentContainer">
                    <Typography className="cardHeading">Brand</Typography>
                    <Typography className="cardContent">
                      {item.brand}
                    </Typography>
                  </Box>
                </Box>
                <hr className="horizontal" />
                <Box className="Container">
                  <Box className="contentContainer">
                    <Typography className="cardHeading">
                      Purchased Date
                    </Typography>
                    <Typography className="cardContent">
                      {formatDate(item.purchase_date)}
                    </Typography>
                  </Box>
                  <Box className="contentContainer">
                    <Typography className="cardHeading">
                      Warranty Date
                    </Typography>
                    <Typography className="cardContent">
                      {formatDate(item.warranty_end_date)}
                    </Typography>
                  </Box>
                </Box>
                <hr className="horizontal" />
                <Box className="Container">
                  <Box className="contentContainer">
                    <Typography className="cardHeading">Status</Typography>
                    <Button
                      onClick={() => setIndex(index)}
                      className={
                        item.allocation_status === 'available'
                          ? 'allocateBtnGreen'
                          : 'allocateBtn'
                      }
                    >
                      {item.allocation_status === 'available'
                        ? 'Available'
                        : 'Allocated'}
                    </Button>
                  </Box>
                  <Box className="contentContainer">
                    <Typography className="cardHeading">Action</Typography>
                    <Box className="actionNew" onClick={() => setIndex(index)}>
                      ⋮
                    </Box>
                    <Box
                      className={`${option === index ? 'actionPopUp' : 'none'}`}
                    >
                      <Box className="whitebg">
                        <Typography className="poptext" onClick={() => EditPage(item.id)}>
                          Edit Detail
                        </Typography>
                      </Box>
                      <Box className={item.allocation_status === 'available'?'greybg':'none'} onClick={()=>setModal(true)}>
                        <Typography className="poptext">Assign now</Typography>
                      </Box>
                      <Box className="whitebg"onClick={() => handleDeleteAsset(item.id)} >
                        <Typography className="poptext">Delete</Typography>
                      </Box>
                      <Box className={item.allocation_status !== 'available'?'greybg':'none'} onClick={()=>handleDealloacte(item.id)} >
                        <Typography className="poptext">Deallocate</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="btnContainerMargin">
        <Box className="navigationContainer">
          <Button className="nav"  disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>
            {'<'}
          </Button>
          {arr.map((i) => (
            <Box className={currentPage == i ? 'navDifferentBg' : 'nav'} onClick={()=>setCurrentPage(i)}>
              {i}
            </Box>
          ))}
          <Button className="nav" disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(prev => prev + 1)}>
            {'>'}
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default AllAssets;

const Wrapper = styled(Box)(({ theme }) => ({
  '& .display': {
    display: 'block',
  },
  '& .fontWeight': { fontWeight: 800 },

  '& .horizontal': {
    width: '100%',
    border: '1px solid #E2E2E5',
    marginTop: '15px',
  },
  '& .none': {
    display: 'none',
  },
  '& .mainContainer': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  },
  '& .cardHeading': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.bold,
    fontSize: '14px',
  },
  '& .cardContent': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontSize: '14px',
  },
  '& .Container': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .btnContainer': {
    width: '95%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '15px',
    },
  },
  '& .btnContainerMargin': {
    width: '95%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '50px',
    },
  },
  '& .addBtn': {
    width: '218px',
    height: '58px',
    backgroundColor: colors.primary.metallicViolet,
    color: 'white',
    borderRadius: '4px',
    textTransform: 'capitalize',
    fontFamily: customTheme.typography.fontFamily.main,
    [theme.breakpoints.down('md')]: {
      width: '174px',
      height: '42px',
    },
    '&:hover': { backgroundColor: 'colors.primary.metallicViolet' },
  },
  '& .tableContainer': {
    width: '91%',
    // height:'634px',
    border: '1px solid #ececec',
    borderRadius: '5px',
    padding: '31px 15px 24px 15px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  '& .table': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  '& .tableHeading': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .hr': {
    border: '0.5px solid #e2e2e5',
    width: '100%',
    marginTop: '40px',
  },
  '& .tableheadingText': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.semiBold,
    fontSize: '18px',
    color: colors.shades.charcoalBlue,
    display:'flex',
    justifyContent:'center',
    width:'121px'
  },
  '& .tablerow': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '25px',
  },
  '& .sNo': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontSize: '16px',
    color: colors.shades.charcoalBlue,
    display:'flex',
    justifyContent:'start',
    width:'120px'
  },
  '& .sNoBold': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontSize: '16px',
    color: colors.shades.charcoalBlue,
    fontWeight: '600',
    display:'flex',
    justifyContent:'start',
    width:'120px'
  },
  '& .allocateBtn': {
    width: '86px',
    height: '30px',
    textTransform: 'capitalize',
    //marginRight: '-20px',
    backgroundColor: 'rgba(89, 0, 179, 0.15)',
    color: colors.primary.metallicViolet,
  },
  '& .allocateBtnGreen': {
    width: '86px',
    height: '30px',
    textTransform: 'capitalize',
    //marginRight: '-20px',
    backgroundColor: 'rgba(40, 199, 111, 0.15)',
    color: '#2DAF68',
  },
  '& .action': {
    width: '40px',
    //marginLeft: '-20px',
    display: 'flex',
    justifyContent: 'center',
    height: '40px',
    backgroundColor: 'rgba(89, 0, 179, 0.15)',
    color: colors.primary.metallicViolet,
    alignItems: 'center',
    borderRadius: '5px',
    marginTop: '-5px',
    cursor: 'pointer',
  },
  '& .navigationContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
    marginBottom: '40px',
    gap:'5px'
  },
  '& .nav': {
    height: '42px',
    width: '42px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #E8E8E8',
  },
  '& .navDifferentBg': {
    height: '42px',
    width: '42px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #E8E8E8',
    backgroundColor: 'rgba(89, 0, 179, 1)',
    color: '#fff',
  },
  '& .AssetHeading': {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      padding: '15px 14px 15px 14px',
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px solid #ECECEC',
      borderRadius: '5px',
    },
  },
  '& .AssetContent': {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '90%',
      border: '1px solid #ECECEC',
      borderRadius: '5px',
      borderTop: 'none',
      padding: '18px 14px 18px 14px',
    },
  },
  '& .AssetContentNone': {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      border: '1px solid #ECECEC',
      borderRadius: '5px',
      borderTop: 'none',
      padding: '18px 14px 18px 14px',
      display: 'none',
    },
  },
  '& .AssetContiner': {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  '& .contentContainer': {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  '& .actionNew': {
    width: '30px',
    display: 'flex',
    justifyContent: 'center',
    height: '30px',
    backgroundColor: 'rgba(89, 0, 179, 0.15)',
    color: colors.primary.metallicViolet,
    alignItems: 'center',
    borderRadius: '5px',
    marginLeft: '8px',
    cursor: 'pointer',
  },
  '& .cardsHolder': {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
      alignItems: 'center',
      gap: '15px',
    },
  },
  '& .popupWindow': {
    width: '225px',
    height: '210px',
    backgroundColor: 'white',
    position: 'absolute',
    right: '8%',
    marginTop: '22px',
    zIndex: 1,
    border: '1px solid #8D939A',
    borderRadius: '7px',
    display: 'flex',
    flexDirection: 'column',
  },
  '& .box1': { padding: '13px', flex: 1, cursor: 'pointer' },
  '& .box2': { padding: '13px', flex: 1 },
  '& .box3': { padding: '13px', flex: 1, cursor: 'pointer' },
  "& .box1:hover,& .box2:hover,& .box3:hover":{backgroundColor:"#F5F5F5"},
  '& .actionPopUp': {
    width: '174px',
    //height: '162px',
    position: 'absolute',
    right: '6%',
    marginTop: '65px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    border: '1px solid #ECECEC',
    borderRadius: '5px',
  },
  '& .whitebg': {
    padding: '8px',
    flex: 1,
  },
  '& .greybg': {
    padding: '8px',
    flex: 1,
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  '& .poptext': {
    fontFamily: customTheme.typography.fontFamily.main,
    fontWeight: customTheme.typography.fontWeights.medium,
    fontSize: '14px',
    color: '#52575C',
  },
  "& .unstyleBtn":{
    all: 'unset',
    background: 'none',
    padding: 0,
    margin: 0,
    border: 'none',
    font: 'inherit',
    color: 'inherit',
    cursor: 'pointer',
    flex:2,
    "&:hover":{
      backgroundColor:'#f5f5f5'
    }
  },
"& .serialNumber":{
  fontFamily:customTheme.typography.fontFamily.main,
  fontSize:'16px',
  color:'#495464'
},
"& .btnContainerStyle":{width:'120px',display:'flex',justifyContent:'start'}

}));
