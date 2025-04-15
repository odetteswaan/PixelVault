import { Box, styled, Typography, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import { TableHeading, TableData } from './MockData';
import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AllAssets = () => {
  const [currentNav, setCurrentNav] = useState(1);
  const [display, setDisplay] = useState(NaN);
  const [option, setOptions] = useState(NaN)
  const Navigate = useNavigate()
  const handleIncrement = () => {
    if (currentNav < 3) {
      setCurrentNav(currentNav + 1);
    }
  };
  const handleDecrement = () => {
    if (currentNav >= 2) {
      setCurrentNav(currentNav - 1);
    }
  };
  const setIndex = (index: number) => {
    if (option === index) {
      setOptions(NaN)
    }
    else {
      setOptions(index)
    }
  }
  const EditPage = () => {
    Navigate('/admin/asset-detail')
  }
  return (
    <Wrapper>
      <Box className="btnContainer">
        <Button startIcon={<AddCircleOutlineIcon />} className="addBtn">
          Add New Asset
        </Button>
      </Box>
      <Box className="mainContainer" >
        <Box className="tableContainer">
          <Box className="table">
            <Box className="tableHeading">
              {TableHeading.map((item) => (
                <Typography className="tableheadingText" key={item}>
                  {item}
                </Typography>
              ))}
            </Box>
            <hr className="hr" />
            {TableData.map((item, index) => (
              <>
                <Box className="tablerow">
                  <Typography className="sNo">{item.id}</Typography>
                  <Typography className="sNo" >
                    {item.name}
                  </Typography>
                  <Typography className="sNo">{item.type}</Typography>
                  <Typography className="sNo">{item.brand}</Typography>
                  <Typography className="sNo">{item.date}</Typography>
                  <Typography className="sNo">{item.date}</Typography>
                  <Button onClick={() => setIndex(index)}
                    variant="contained"
                    className={item.status === 'Available'
                      ? "allocateBtnGreen" : "allocateBtn"} >
                    {item.status}
                  </Button>
                  <Box className="action">⋮</Box>
                  <Box className={`${option === index ? 'popupWindow' : 'none'}`}>
                    <Box className="box1" onClick={EditPage}>Edit Detail</Box>
                    <Box className="box2"><Typography>Assign Now</Typography></Box>
                    <Box className="box3"> <Typography>Delete</Typography></Box>
                    <Box className="box2"><Typography>Dealloacte</Typography></Box>
                  </Box>
                </Box>
                <hr
                  className={`hr ${item.id === '8' ? 'none' : ''}`}
                />
              </>
            ))}
          </Box>
        </Box>
        <Box className="cardsHolder">
          {TableData.map((item, index) => (
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
                className={`${display === index ? 'AssetContent' : 'AssetContentNone'}`}>
                <Box className="Container">
                  <Box className="contentContainer">
                    <Typography className="cardHeading">Asset Type</Typography>
                    <Typography className="cardContent">{item.type}</Typography>
                  </Box>
                  <Box className="contentContainer">
                    <Typography className="cardHeading">Brand</Typography>
                    <Typography className="cardContent">
                      {item.brand}
                    </Typography>
                  </Box>
                </Box>
                <hr className='horizontal' />
                <Box className="Container">
                  <Box className="contentContainer">
                    <Typography className="cardHeading">
                      Purchased Date
                    </Typography>
                    <Typography className="cardContent">{item.date}</Typography>
                  </Box>
                  <Box className="contentContainer">
                    <Typography className="cardHeading">
                      Warranty Date
                    </Typography>
                    <Typography className="cardContent">{item.date}</Typography>
                  </Box>
                </Box>
                <hr className='horizontal' />
                <Box className="Container">
                  <Box className="contentContainer">
                    <Typography className="cardHeading">Status</Typography>
                    <Button
                      className={item.status === 'Available' ? "allocateBtnGreen" : "allocateBtn"} >
                      {item.status}
                    </Button>
                  </Box>
                  <Box className="contentContainer">
                    <Typography className="cardHeading">Action</Typography>
                    <Box className="actionNew">⋮</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="btnContainerMargin" >
        <Box className="navigationContainer">
          <Box className="nav" onClick={handleDecrement}>
            {'<'}
          </Box>
          {[1, 2, 3].map((i) => (
            <Box
              className={currentNav == i ? "navDifferentBg" : 'nav'} >
              {i}
            </Box>
          ))}
          <Box className="nav" onClick={handleIncrement}>
            {'>'}
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default AllAssets;

const Wrapper = styled(Box)(({ theme }) => ({
  "& .display": {
    display: 'block'
  },
  "& .fontWeight": { fontWeight: 800 },

  "& .horizontal": {
    width: '100%',
    borderBottom: '1px solid #E2E2E5',
    marginTop: '15px',
  },
  "& .none": {
    display: 'none'
  },
  "& .mainContainer": {
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
      marginBottom: '50px'
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
    }
    , "&:hover": { backgroundColor: 'colors.primary.metallicViolet', }
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
  },
  '& .allocateBtn': {
    width: '86px',
    height: '30px',
    textTransform: 'capitalize',
    marginRight: '-20px',
    backgroundColor: '#d1b0f3',
    color: colors.primary.metallicViolet,
  },
  '& .allocateBtnGreen': {
    width: '86px',
    height: '30px',
    textTransform: 'capitalize',
    marginRight: '-20px',
    backgroundColor: '#9ff2c4', color: '#2DAF68'

  },
  '& .action': {
    width: '40px',
    marginLeft: '-20px',
    display: 'flex',
    justifyContent: 'center',
    height: '40px',
    backgroundColor: '#d1b0f3',
    color: colors.primary.metallicViolet,
    alignItems: 'center',
    borderRadius: '5px',
    marginTop: '-5px',
  },
  '& .navigationContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
    width: '250px',
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
      display: 'none'
    },
  },
  '& .AssetContiner': {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      // display:'block',
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
    backgroundColor: '#d1b0f3',
    color: colors.primary.metallicViolet,
    alignItems: 'center',
    borderRadius: '5px',
    marginLeft: '8px',
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
  "& .popupWindow": {
    width: '225px', height: '210px', backgroundColor: 'white',
    position: 'absolute', right: '8%', marginTop: '22px', zIndex: 1, border: '1px solid #8D939A', borderRadius: '7px', display: 'flex', flexDirection: 'column'
  },
  "& .box1": { padding: "13px", flex: 1, cursor: "pointer" },
  "& .box2": { backgroundColor: '#F5F5F5', padding: '13px', flex: 1 },
  "& .box3": { padding: '13px', flex: 1 }

}));
