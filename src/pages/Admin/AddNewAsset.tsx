import {
  Box,
  styled,
  Typography,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import Receipt from 'src/assets/receipt-add.svg';
import AddImage from 'src/assets/gallery-add.svg';
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { token } from './MockData';
import { baseUrl, addAsset, assetDetail } from 'src/config';
import { assetType } from 'src/types/Assets.type';
import Loader from 'src/components/loader/Loader';
const AddNewAsset = () => {
  const inputRef1 = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);
  const inputRef3 = useRef<HTMLInputElement | null>(null);
  const inputRef4 = useRef<HTMLInputElement | null>(null);
  const inputRef5 = useRef<HTMLInputElement | null>(null);
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [image3, setImage3] = useState<File | null>(null);
  const [image4, setImage4] = useState<File | null>(null);
  const [invoice, setInvoice] = useState<File | null>(null);
  const [assetData, setAssetData] = useState<assetType>();
  const [isLoading, setLoading] = useState(true);
  
  const edit=localStorage.getItem('edit')
  const [invoiceState, setInvoiceState] = useState({

    pdf: false,
  });
  if (edit === 'true') {
    useEffect(() => {
      const productId = localStorage.getItem('productId');
      if (productId) {
        axios
          .get(`${baseUrl}${assetDetail(productId)}`, {
            headers: {
              token: token,
            },
          })
          .then((res) => {
            setAssetData(res.data);
            setLoading(false);
            const invoicearr=res.data.invoice.split('/')
            const fileName = invoicearr[invoicearr.length-1];
            const file = new File([], fileName, {
              type: 'text/plain',
            });
            setInvoice(file)
            setInvoiceState({...invoiceState,pdf:true})
            console.log(file);
          })
          .catch((err) => console.log(err));
      }
    }, []);
  }
else{
 useEffect(()=>{
setLoading(false)
 },[])
}
  const [showValid, setValid] = useState(false);
  const Navigate = useNavigate();
  const validationSchema = Yup.object({
    AssetName: Yup.string()
      .min(2, 'Enter Valid Asset Name')
      .required('This field is Required'),
    AssetType: Yup.string().required('please select an Option'),
    AssetBrand: Yup.string()
      .required('Please select an Option')
      .notOneOf(['', null], 'Please Select a valid Option'),
    Color: Yup.string().required('Please Enter Color'),
    Ram: Yup.string().required('Please enter Ram'),
    Storage: Yup.string().required('Please Enter Storage'),
    OS: Yup.string().required('Please enter OS'),
    serialNumber: Yup.string().required('Please Enter valid Serial Number'),
    purchasedDate: Yup.date().required('please Select Purchased Date'),
    warrantyDate: Yup.date().required('Please select A valid Warranty Date'),
    PurchasedFrom: Yup.string().required('please enter  Location'),
    purchasedType: Yup.string().required('please Select an Option'),
    Cost: Yup.string().required('Please Enter Cost of Asset'),
    Processor: Yup.string().required('Please Enter Processor Name'),
    Graphics: Yup.string().required('Please Graphics of Assets'),
  });

  const initialValues = {
    AssetName: assetData ? assetData.name : '',
    AssetType: assetData ? assetData.asset_type : '',
    AssetBrand: assetData ? assetData.brand : '',
    Color: assetData ? assetData.color : '',
    Ram: assetData ? assetData.ram : '',
    Storage: assetData ? assetData.storage : '',
    OS: assetData ? assetData.os.toString() : '',
    serialNumber: assetData ? assetData.serial_number : '',
    purchasedDate: assetData ? assetData.purchase_date : '',
    warrantyDate: assetData ? assetData.warranty_end_date : '',
    PurchasedFrom: assetData ? assetData.purchased_from : '',
    purchasedType: assetData ? assetData.purchased_type : '',
    Cost: assetData ? assetData.asset_cost.toString() : '',
    Processor: assetData ? assetData.processor.toString() : '',
    Graphics: assetData ? assetData.graphics : '',
  };
  const assetTypes = ['Windows Laptop', 'MacBook', 'iPhone', 'Android Phone'];

  const assetBrands = ['Apple', 'Dell', 'Samsung'];

  const CustomTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
      height: '55px',
      borderRadius: '5px',
      '& fieldset': {
        border: '1px solid #8A92A6',
      },
      '&:hover fieldset': {
        border: '2px solid #8A92A6',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid #8A92A6',
      },
    },
  }));
  const handleAssetImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: number
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (key === 1) {
        setImage1(file);
        setInvoiceState({ ...invoiceState});
      } else if (key === 2) {
        setImage2(file);
        setInvoiceState({ ...invoiceState});
      } else if (key === 3) {
        setImage3(file);
        setInvoiceState({ ...invoiceState});
      } else if (key == 4) {
        setImage4(file);
        setInvoiceState({ ...invoiceState});
      } else if (key == 5) {
        setInvoice(file);
        setInvoiceState({ ...invoiceState, pdf: true });
      }
    }
  };
  const handleImageClick = (ref: React.RefObject<HTMLInputElement | null>) => {
    ref.current?.click();
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
          setValid(true);
          if (invoiceState.pdf) {
            const nextpurchasedDate = dayjs(values.purchasedDate)
              .add(1, 'day')
              .toString()
              .split(' ')
              .splice(1, 3)
              .join(' ');
            const nextWarrantyDate = dayjs(values.warrantyDate)
              .add(1, 'day')
              .toString()
              .split(' ')
              .splice(1, 3)
              .join(' ');
            if (edit === 'true') {
              const productId = localStorage.getItem('productId');
              const body = {
                id: productId,
                name: values.AssetName,
                asset_type: values.AssetType,
                brand: values.AssetBrand,
                color: values.Color,
                ram: values.Ram,
                storage: values.Storage,
                os: values.OS,
                serial_number: values.serialNumber,
                purchase_date: nextpurchasedDate,
                warranty_end_date: nextWarrantyDate,
                purchased_from: values.PurchasedFrom,
                purchased_type: values.purchasedType,
                processor: values.Processor,
                asset_cost: values.Cost,
                invoice: invoice,

              };
              axios
                .patch(`${baseUrl}${assetDetail(productId)}`, body, {
                  headers: {
                    token: token,
                  },
                })
                .then(() => {
                  Navigate('/admin/assets');
                })
                .catch(() => alert('error in updating Asset'));
            } else {
              const formData = new FormData();
              formData.append('asset[name]', values.AssetName);
              formData.append('asset[asset_type]', values.AssetType);
              formData.append('asset[brand]', values.AssetBrand);
              formData.append('asset[color]', values.Color);
              formData.append('asset[ram]', values.Ram);
              formData.append('asset[storage]', values.Storage);
              formData.append('asset[os]', values.OS);
              formData.append('asset[serial_number]', values.serialNumber);
              formData.append('asset[purchase_date]', nextpurchasedDate);
              formData.append('asset[warranty_end_date]', nextWarrantyDate);
              formData.append('asset[purchased_from]', values.PurchasedFrom);
              formData.append('asset[purchased_type]', values.purchasedType);
              formData.append('asset[asset_cost]', values.Cost);
              formData.append('asset[images][]', image1 ? image1 : '');
              formData.append('asset[images][]', image2 ? image2 : '');
              formData.append('asset[images][]', image3 ? image3 : '');
              formData.append('asset[images][]', image4 ? image4 : '');
              formData.append('asset[invoice]', invoice ? invoice : '');
              formData.append('asset[processor]', values.Processor);
              formData.append('assets[graphic_card]', values.Graphics);
              axios
                .post(`${baseUrl}${addAsset}`, formData, {
                  headers: {
                    token: token,
                    'Content-type': 'multipart/form-data',
                  },
                })
                .then(() => {
                  Navigate('/admin/assets');
                })
                .catch((err) => console.log(err));
            }
          }
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
          setFieldValue,
        }) => (
          <Form>
            <Box className="mainContainer">
              <Box className="UploadContainer">
                <Box
                  className="assetInvoice"
                  onClick={() => handleImageClick(inputRef5)}
                >
                  <img src={Receipt} alt="rr" />
                  <Typography className="uploadText">
                    {invoiceState.pdf
                      ? invoice?.name
                      : 'Drag & Drop Asset Invoice'}
                  </Typography>
                  <Typography className="OR">OR</Typography>
                  <input
                    type="file"
                    ref={inputRef5}
                    className="none"
                    onChange={(e) => handleAssetImageChange(e, 5)}
                    accept="application/pdf"
                  />
                  <Button className="InvoiceBtn">Browse Invoice</Button>
                </Box>
                {showValid
                  ? !invoiceState.pdf && (
                      <Typography
                        sx={{ margin: '5px', fontSize: '12px', color: 'red' }}
                      >
                        Upload Invoice PDF
                      </Typography>
                    )
                  : ''}
                <Box className="assetImageContainer">
                  <Box className="assetCard">
                    <Box
                      className="imageContainer"
                      onClick={() => handleImageClick(inputRef1)}
                    >
                      {image1 ? (
                        <img
                          src={URL.createObjectURL(image1)}
                          alt="assetImage"
                          className="width"
                        />
                      ) : (
                        <img src={AddImage} alt="assetImage" />
                      )}
                      <input
                        type="file"
                        ref={inputRef1}
                        className="none"
                        onChange={(e) => handleAssetImageChange(e, 1)}
                        accept="image/*"
                      />
                      <Typography
                        className={
                          'uploadImageText ' + `${image1 ? 'none' : ''}`
                        }
                      >
                        Upload Asset Image
                      </Typography>
                    </Box>
                    <Box
                      className="imageContainer"
                      onClick={() => handleImageClick(inputRef2)}
                    >
                      {image2 ? (
                        <img
                          src={URL.createObjectURL(image2)}
                          alt="assetImage"
                          className="width"
                        />
                      ) : (
                        <img src={AddImage} alt="assetImage" />
                      )}
                      <input
                        type="file"
                        className="none"
                        ref={inputRef2}
                        onChange={(e) => handleAssetImageChange(e, 2)}
                        accept="image/*"
                      />
                      <Typography
                        className={
                          'uploadImageText ' + `${image2 ? 'none' : ''}`
                        }
                      >
                        Upload Asset Image
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="subImage">
                    <Box
                      className="imageContainer"
                      onClick={() => handleImageClick(inputRef3)}
                    >
                      {image3 ? (
                        <img
                          src={URL.createObjectURL(image3)}
                          alt="assetImage"
                          className="width"
                        />
                      ) : (
                        <img src={AddImage} alt="assetImage" />
                      )}
                      <input
                        type="file"
                        ref={inputRef3}
                        onChange={(e) => handleAssetImageChange(e, 3)}
                        className="none"
                        accept="image/*"
                      />
                      <Typography
                        className={
                          'uploadImageText ' + `${image3 ? 'none' : ''}`
                        }
                      >
                        Upload Asset Image
                      </Typography>
                    </Box>
                    <Box
                      className="imageContainer"
                      onClick={() => handleImageClick(inputRef4)}
                    >
                      {image4 ? (
                        <img
                          src={URL.createObjectURL(image4)}
                          alt="assetImage"
                          className="width"
                        />
                      ) : (
                        <img src={AddImage} alt="assetImage" />
                      )}
                      <input
                        type="file"
                        ref={inputRef4}
                        onChange={(e) => handleAssetImageChange(e, 4)}
                        className="none"
                        accept="image/*"
                      />
                      <Typography
                        className={
                          'uploadImageText ' + `${image4 ? 'none' : ''}`
                        }
                      >
                        Upload Asset Image
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="fieldContainer">
                <Grid container rowSpacing={3} columnSpacing={4}>
                  <Grid size={12}>
                    <Typography className="cardHeading">
                     {edit==='true'? 'Edit Asset':'Add New Asset'}
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <hr className="horizontalRule" />
                  </Grid>
                  <Grid size={12}>
                    <Box>
                      <Typography className="fieldText">Assets Name</Typography>
                      <CustomTextField
                        variant="outlined"
                        fullWidth
                        name="AssetName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.AssetName}
                        error={Boolean(errors.AssetName && touched.AssetName)}
                        helperText={<ErrorMessage name="AssetName" />}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">
                      Select Asset Type
                    </Typography>
                    <CustomTextField
                      variant="outlined"
                      select
                      fullWidth
                      value={values.AssetType}
                      name="AssetType"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.AssetType && touched.AssetType)}
                      helperText={<ErrorMessage name="AssetType" />}
                      SelectProps={{
                        IconComponent: KeyboardArrowRight,
                      }}
                    >
                      {assetTypes.map((type, index) => (
                        <MenuItem key={index} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">
                      Select Asset Brand
                    </Typography>
                    <CustomTextField
                      variant="outlined"
                      select
                      fullWidth
                      value={values.AssetBrand}
                      name="AssetBrand"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.AssetBrand && touched.AssetBrand)}
                      helperText={<ErrorMessage name="AssetBrand" />}
                      SelectProps={{ IconComponent: KeyboardArrowRight }}
                    >
                      {assetBrands.map((type, index) => (
                        <MenuItem key={index} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </CustomTextField>
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">Enter Colour</Typography>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      value={values.Color}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="Color"
                      error={Boolean(errors.Color && touched.Color)}
                      helperText={<ErrorMessage name="Color" />}
                    />
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">Enter Ram</Typography>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      name="Ram"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Ram}
                      error={Boolean(errors.Color && touched.Color)}
                      helperText={<ErrorMessage name="Ram" />}
                    />
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">Enter Storage</Typography>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      name="Storage"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Storage}
                      error={Boolean(errors.Storage && touched.Storage)}
                      helperText={<ErrorMessage name="Storage" />}
                    />
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">Enter OS</Typography>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      name="OS"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.OS}
                      error={Boolean(errors.OS && touched.OS)}
                      helperText={<ErrorMessage name="OS" />}
                    />
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">
                      Enter Serial Number
                    </Typography>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      name="serialNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.serialNumber}
                      error={Boolean(
                        errors.serialNumber && touched.serialNumber
                      )}
                      helperText={<ErrorMessage name="serialNumber" />}
                    />
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">
                      Enter Purchased Date
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={
                          values.purchasedDate
                            ? dayjs(values.purchasedDate)
                            : null
                        }
                        onChange={(newValue) =>
                          setFieldValue('purchasedDate', dayjs(newValue))
                        }
                        defaultValue={null}
                        name="purchasedDate"
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            error: Boolean(
                              errors.purchasedDate && touched.purchasedDate
                            ),
                            helperText:
                              touched.purchasedDate && errors.purchasedDate,
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">
                      Enter Warranty End Date
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={
                          values.warrantyDate
                            ? dayjs(values.warrantyDate)
                            : null
                        }
                        onChange={(newValue) =>
                          setFieldValue('warrantyDate', newValue)
                        }
                        name="warrantyDate"
                        defaultValue={null}
                        minDate={dayjs(values.purchasedDate)}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            error: Boolean(
                              errors.warrantyDate && touched.warrantyDate
                            ),
                            helperText:
                              touched.warrantyDate && errors.warrantyDate,
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">
                      Purchased From
                    </Typography>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      name="PurchasedFrom"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(
                        errors.PurchasedFrom && touched.PurchasedFrom
                      )}
                      value={values.PurchasedFrom}
                      helperText={<ErrorMessage name="PurchasedFrom" />}
                    />
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">
                      Select Purchased Type
                    </Typography>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      name="purchasedType"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(
                        errors.purchasedType && touched.purchasedType
                      )}
                      value={values.purchasedType}
                      helperText={<ErrorMessage name="purchasedType" />}
                      select
                    >
                      <MenuItem value={'New'}>New</MenuItem>
                      <MenuItem value={'Refurbished'}>Refurbished</MenuItem>
                    </CustomTextField>
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">
                      Enter Asset Cost
                    </Typography>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      name="Cost"
                      value={values.Cost}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.Cost && touched.Cost)}
                      helperText={<ErrorMessage name="Cost" />}
                    />
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">Processor</Typography>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      value={values.Processor}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="Processor"
                      error={Boolean(errors.Processor && touched.Processor)}
                      helperText={<ErrorMessage name="Processor" />}
                    />
                  </Grid>
                  <Grid
                    size={{ lg: 12, md: 12, sm: 12, xl: 6 }}
                    className="Grid"
                  >
                    <Typography className="fieldText">Graphics</Typography>
                    <CustomTextField
                      variant="outlined"
                      fullWidth
                      value={values.Graphics}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="Graphics"
                      error={Boolean(errors.Graphics && touched.Graphics)}
                      helperText={<ErrorMessage name="Graphics" />}
                    />
                  </Grid>
                </Grid>

                <Box className="btnContainer">
                  <Button className="Save" type="submit">
                    {' '}
                    Save Details
                  </Button>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
const Wrapper = styled(Box)(({ theme }) => ({
  '& .calendarIconColor': { color: '#2C3E50' },
  '& .horizontalRule': { width: '100%', border: '1px solid #E2E2E5' },
  '& .dimensionBox': {
    height: '30px',
    width: '30px',
  },
  '& .iconColor': {
    color: 'black',
  },
  '& .cardHeading': {
    fontWeight: 600,
    fontSize: '18px',
    fontFamily: 'Urbanist',
    color: '#000104',
  },
  '& .subImage': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  '& .assetCard': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .fieldText': {
    fontFamily: 'Urbanist',
    fontSize: '16px',
    color: '#8A92A6',
  },
  '& .mainContainer': {
    paddingTop: '40px',
    paddingLeft: '100px',
    display: 'flex',
    paddingRight: '100px',
    gap: '40px',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      flexWrap: 'wrap',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '30px 17px',
    },
  },
  '& .UploadContainer': {
    width: '420px',
    height: '532px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  '& .fieldContainer': {
    width: '62%',
    padding: '25px 25px',
    backgroundColor: '#FCFCFD',
    border: '1px solid #ECECEC',
    borderRadius: '5px',
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  '& .assetInvoice': {
    width: '100%',
    border: '1.5px dotted #D1D0D3',
    borderRadius: '20px',
    backgroundColor: '#F5F6FA',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '252px',
    gap: '15px',
  },
  '& .uploadText': {
    fontFamily: 'Urbanist',
    fontWeight: 600,
    fontSize: '20px',
    color: '#82899D',
  },
  '& .OR': {
    fontFamily: 'Urbanist',
    fontWeight: 600,
    fontSize: '20px',
    color: '#556888',
  },
  '& .InvoiceBtn': {
    width: '140px',
    height: '50px',
    borderRadius: '5px',
    backgroundColor: '#5900B3',
    fontFamily: 'Urbanist',
    fontWeight: 500,
    fontSize: '16px',
    color: 'white',
    textTransform: 'capitalize',
    border: 'none',
    '&:hover': { backgroundColor: '#5900B3' },
  },
  '& .assetImageContainer': {
    marginTop: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  '& .imageContainer': {
    width: '180px',
    height: '115px',
    display: 'flex',
    flexDirection: 'column',
    gap: '17px',
    border: '1.5px dotted #D1D0D3',
    borderRadius: '10px',
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '160px',
      height: '100px',
    },
  },

  '& .uploadImageText': {
    fontFamily: 'Urbanist',
    fontWeight: 600,
    fontSize: '14px',
    color: '#82899D',
  },
  '& .btnContainer': {
    marginTop: '60px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginTop: '30px',
    },
  },
  '& .Save': {
    width: '188px',
    height: '42px',
    borderRadius: '5px',
    backgroundColor: '#5900B3',
    fontFamily: 'Urbanist',
    fontWeight: 500,
    fontSize: '16px',
    color: 'white',
    textTransform: 'capitalize',
    '&:hover': { backgroundColor: '#5900B3' },
  },
  '& .Grid': {
    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },
  },
  '& .width': {
    width: '100%',
    height: '100%',
  },
  '& .none': {
    display: 'none',
  },
}));
export default AddNewAsset;
