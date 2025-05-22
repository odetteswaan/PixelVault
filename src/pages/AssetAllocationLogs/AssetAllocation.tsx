import { Box, Typography, styled, useMediaQuery } from '@mui/material';
import Logo from 'src/assets/Mobile.svg';
import { customTheme } from 'src/themes/theme';
import { colors } from 'src/themes/colors';

type AssetStatus = string;

interface TableDataProps {
  status: AssetStatus;
}
interface AssetAllocationProps {
  data: Asset[];
  headings: string[];
}

interface Asset {
  assetName: string;
  date: string;
  status: string;
  allocatedDate?: string;
  returnedDate?: string;
}

const TableContainer = styled(Box)({
  borderRadius: '5px',
  marginTop: '10px',
  padding: '10px',
});

const TableHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold',
  padding: '10px 0',
});

const TableHeading = styled(Box)({
  color: colors.shades.charcoalBlue,
  fontSize: customTheme.typography.fontSizes[10],
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.semiBold,
  flex: 1,
});

const TableRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${colors.greys.frostedGrey}`,
  borderRadius: '10px',
  marginBottom: '20px',
  padding: '10px',
});

const TableData = styled(Typography)({
  flex: 1,
  color: colors.shades.charcoalBlue,
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
});

const StatusStyled = styled(Box)<TableDataProps>(({ status }) => ({
  color:
    status === 'Allocated' ? colors.primary.metallicViolet : colors.primary.red,
  backgroundColor:
    status === 'Allocated'
      ? 'rgba(89, 0, 179, 0.15)'
      : 'rgba(224, 85, 82, 0.15)',
  border: `1px solid ${
    status === 'Allocated'
      ? 'rgba(89, 0, 179, 0.15)'
      : 'rgba(224, 85, 82, 0.15)'
  }`,
  borderRadius: '5px',
  padding: '5px',
  display: 'flex',
  alignItems: 'center',
  height: '10%',
  justifyContent: 'center',
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: '12px',
  width: '70px',
}));

const AssetName = styled(Typography)({
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[10],
  color: colors.headers.charcoalBlack,
  fontWeight: customTheme.typography.fontWeights.semiBold,
});

const LogoBox = styled(Box)(() => ({
  width: '50px',
  height: '50px',
}));

const DataWrapper = styled(Box)(() => ({
  display: 'flex',
  flex: '2',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
}));

function AssetAllocation({ data, headings }: AssetAllocationProps) {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <TableContainer>
      <TableHeader>
        {headings.map((heading, index) => {
          if (
            isSmallScreen &&
            ['Date', 'Allocated Date', 'Returned Date'].includes(heading)
          ) {
            return null;
          }
          return (
            <TableHeading key={index} sx={{ flex: index === 0 ? 2 : 1 }}>
              {heading}
            </TableHeading>
          );
        })}
      </TableHeader>
      {data.map((issue, index) => (
        <TableRow key={index}>
          <DataWrapper>
            <LogoBox>
              <img
                src={Logo}
                alt="device"
                style={{ width: '100%', height: '100%' }}
              ></img>
            </LogoBox>
            <Box>
              <AssetName>{issue.assetName}</AssetName>
              <TableData>Brand: Apple</TableData>
              {isSmallScreen && <TableData>{issue.date}</TableData>}
            </Box>
          </DataWrapper>
          <TableData>
            <StatusStyled status={issue.status}>{issue.status}</StatusStyled>
          </TableData>
          {!isSmallScreen && <TableData>{issue.date}</TableData>}
          {!isSmallScreen && issue.returnedDate && (
            <TableData>{issue.returnedDate}</TableData>
          )}
        </TableRow>
      ))}
    </TableContainer>
  );
}

export default AssetAllocation;
