import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
} from '@mui/material';
import { styled } from '@mui/system';
import DonutChart from './DonutChart';
import SectionHeading from './SectionHeading';

interface ProgressChartCardProps {
  title: string;
  totalAssets: number;
  data: number[];
  labels: string[];
  colors: string[];
  centerText: number | string;
}

const CardContainer = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '48%',
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

const LinearGraphContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 2,
});

const GraphContainer = styled(Box)({
  width: '90%',
  maxWidth: 400,
});

const GraphSubContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const LinearProgressGraph = styled(LinearProgress)({
  height: 6,
  borderRadius: 3,
  backgroundColor: '#E0E0E0',
});

const ProgressChartCard: React.FC<ProgressChartCardProps> = ({
  title,
  totalAssets,
  data,
  labels,
  colors,
  centerText,
}) => {
  return (
    <CardContainer>
      <CardContent>
        <SectionHeading title={title} />
        <Container>
          <DonutChart
            data={data}
            labels={labels}
            colors={colors}
            centerText={centerText}
          />
          <GraphContainer>
            {labels.map((label, index) => {
              const percentage = ((data[index] / totalAssets) * 100).toFixed(0);
              return (
                <LinearGraphContainer key={index}>
                  <GraphSubContainer>
                    <Typography variant="body2">{label}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {data[index]} / {percentage}%
                    </Typography>
                  </GraphSubContainer>
                  <LinearProgressGraph
                    variant="determinate"
                    value={parseFloat(percentage)}
                    sx={{
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: colors[index],
                      },
                    }}
                  />
                </LinearGraphContainer>
              );
            })}
          </GraphContainer>
        </Container>
      </CardContent>
    </CardContainer>
  );
};

export default ProgressChartCard;
