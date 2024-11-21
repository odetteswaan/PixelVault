import { Box, styled } from '@mui/material';
import AssetAllocation from './AssetAllocation';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: '0 5%',
  border: '1px solid #ECECEC',
  margin: '3% 10%',
  borderRadius: '5px',
  [theme.breakpoints.down('md')]: {
    margin: '3%',
    padding: '0',
    border: 'none',
  },
}));

const data = [
  {
    assetName: 'Mac',
    date: 'Apr 26, 2024',
    returnedDate: 'May 30 2025',
    status: 'Returned',
  },
  {
    assetName: 'Dell Laptop',
    date: 'Apr 20, 2024',
    returnedDate: 'May 30 2025',
    status: 'Allocated',
  },
  {
    assetName: 'Mac',
    date: 'Apr 26, 2024',
    returnedDate: 'May 30 2025',
    status: 'Returned',
  },
  {
    assetName: 'Mac',
    date: 'Apr 26, 2024',
    returnedDate: 'May 30 2025',
    status: 'Returned',
  },
  {
    assetName: 'Mac',
    date: 'Apr 26, 2024',
    returnedDate: 'May 30 2025',
    status: 'Returned',
  },
];

const headings = ['Asset Name', 'Status', 'Allocated Date', 'Returned Date'];

function AllAllocatedAssets() {
  return (
    <StyledBox>
      <AssetAllocation data={data} headings={headings} />
    </StyledBox>
  );
}

export default AllAllocatedAssets;
