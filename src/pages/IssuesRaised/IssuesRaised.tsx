import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  styled,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { customTheme } from '../../themes/theme';
import { colors } from '../../themes/colors';

type AssetStatus = string;

interface TableDataProps {
  status: AssetStatus;
}

interface IssueData {
  assetName: string;
  date: string;
  query: string;
  status: string;
}

interface IssuesRaisedProps {
  issues: IssueData[];
}

const TableContainer = styled(Box)({
  borderRadius: '5px',
  marginTop: '10px',
  padding: '10px',
});

const TableHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${colors.greys.frostedGrey}`,
  padding: '10px 0',
});

const TableHeading = styled(Box)({
  color: colors.shades.charcoalBlue,
  fontFamily: customTheme.typography.fontFamily.main,
  fontWeight: customTheme.typography.fontWeights.semiBold,
  fontSize: customTheme.typography.fontSizes[10],
  flex: 1,
});

const TableRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5% 0',
  alignItems: 'center',
  borderBottom: `1px solid ${colors.greys.frostedGrey}`,
});

const TableData = styled(Typography)({
  flex: 1,
  color: colors.shades.charcoalBlue,
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: customTheme.typography.fontSizes[10],
  '&.asset-name': {
    color: '#495464',
    fontWeight: customTheme.typography.fontWeights.semiBold,
  },
});

const StatusStyled = styled(Box)<TableDataProps>(({ status }) => ({
  color: status === 'In Progress' ? '#2DAF68' : '#FE5B00',
  backgroundColor:
    status === 'In Progress'
      ? 'rgba(45, 175, 104, 0.15)'
      : 'rgba(254, 91, 0, 0.15)',
  border: `1px solid ${status === 'In Progress' ? 'rgba(45, 175, 104, 0.15)' : 'rgba(254, 91, 0, 0.15)'}`,
  borderRadius: '5px',
  padding: '5px',
  display: 'flex',
  alignItems: 'center',
  height: '10%',
  justifyContent: 'center',
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: '12px',
  width: '80%',
}));

const AccordionContainer = styled(Accordion)({
  marginBottom: '8px',
  borderRadius: '5px',
});

const AccordionSummaryStyled = styled(AccordionSummary)({
  border: `1px solid ${colors.greys.lightGrey}`,
  borderRadius: '5px',
});

const AccordionDetailsStyled = styled(AccordionDetails)({
  backgroundColor: colors.primary.grayishWhite,
  borderRadius: '5px',
  padding: '8px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  border: `1px solid ${colors.greys.lightGrey}`,
});

const BoxStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '4px',
  flexDirection: 'column',
});

const StatusBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  marginTop: '8px',
  flexDirection: 'column',
  height: '70%',
  gap: '10px',
  width: '30%',
});

function IssuesRaised({ issues }: IssuesRaisedProps) {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <>
      <TableContainer>
        {isSmallScreen ? (
          issues.map((issue, index) => (
            <AccordionContainer key={index}>
              <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{ fontWeight: 'bold', color: colors.shades.charcoalBlue }}
                >
                  {issue.assetName}
                </Typography>
              </AccordionSummaryStyled>
              <AccordionDetailsStyled>
                <Box>
                  <BoxStyled>
                    <TableHeading>Date</TableHeading>
                    <TableData>{issue.date}</TableData>
                  </BoxStyled>
                  <BoxStyled>
                    <TableHeading>Query</TableHeading>
                    <TableData>{issue.query}</TableData>
                  </BoxStyled>
                </Box>
                <StatusBox>
                  <Typography variant="body2" color="textSecondary">
                    Status
                  </Typography>
                  <StatusStyled status={issue.status}>
                    {issue.status}
                  </StatusStyled>
                </StatusBox>
              </AccordionDetailsStyled>
            </AccordionContainer>
          ))
        ) : (
          <>
            <TableHeader>
              <TableHeading>Asset Name</TableHeading>
              <TableHeading>Date</TableHeading>
              <TableHeading>Query</TableHeading>
              <TableHeading>Status</TableHeading>
            </TableHeader>
            {issues.map((issue, index) => (
              <TableRow key={index}>
                <TableData className="asset-name">{issue.assetName}</TableData>
                <TableData>{issue.date}</TableData>
                <TableData>{issue.query}</TableData>
                <TableData>
                  <StatusStyled status={issue.status}>
                    {issue.status}
                  </StatusStyled>
                </TableData>
              </TableRow>
            ))}
          </>
        )}
      </TableContainer>
    </>
  );
}

export default IssuesRaised;
