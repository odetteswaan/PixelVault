import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors as themeColors } from 'src/themes/colors';

import DonutChart from 'src/components/adminDashboard/DonutChart';
import SectionHeading from 'src/components/adminDashboard/SectionHeading';

const CardContainer = styled(Card)(({ theme }) => ({
  backgroundColor:themeColors.primary.grayishWhite ,
  borderRadius: '8px',
  flex: '1 1 100%',
  minWidth: 300,
  [theme.breakpoints.up('md')]: {
    flex: '1 1 48%',
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(3),
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const StyledTable = styled(Table)({
  flex: 1,
  minWidth: 200,
});

const StatusWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const StatusDot = styled(Box)(({ bgcolor, theme }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: bgcolor,
  marginRight: theme.spacing(1),
}));

const TicketChart: React.FC = () => {
  const [totalTickets] = useState<number>(46);
  const [data] = useState<number[]>([10, 30, 6]);
  const [labels] = useState<string[]>(['Raised', 'Resolved', 'In Progress']);
  const [colors] = useState<string[]>(['#2979ff', '#4caf50', '#ffb300']);

  return (
    <CardContainer>
      <CardContent>
        <SectionHeading title="Ticket Raised" />
        <Container>
          <DonutChart
            data={data}
            labels={labels}
            colors={colors}
            centerText={totalTickets}
            width={200}
            height={200}
          />
          <StyledTable size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Status</strong>
                </TableCell>
                <TableCell>
                  <strong>No.</strong>
                </TableCell>
                <TableCell>
                  <strong>%</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {labels.map((label, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <StatusWrapper>
                    <StatusDot bgcolor={colors[index]} />
                      {label}
                    </StatusWrapper>
                  </TableCell>
                  <TableCell>{data[index]}</TableCell>
                  <TableCell>
                    {((data[index] / totalTickets) * 100).toFixed(1)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </Container>
      </CardContent>
    </CardContainer>
  );
};

export default TicketChart;
