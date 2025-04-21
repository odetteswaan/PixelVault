import React, { useState } from 'react';
import ProgressChartCard from 'src/components/adminDashboard/ProgressChartCard';

const AllocatedAssets: React.FC = () => {
  const [totalAssets] = useState<number>(377);
  const [data] = useState<number[]>([120, 89, 35, 75, 58]);
  const [labels] = useState<string[]>([
    'MacBooks',
    'Windows',
    'iPhone',
    'Android',
    'Others',
  ]);
  const [colors] = useState<string[]>([
    '#7B1FA2',
    '#2979FF',
    '#FFC107',
    '#4CAF50',
    '#FF7043',
  ]);

  return (
    <ProgressChartCard
      title="Allocated Assets"
      totalAssets={totalAssets}
      data={data}
      labels={labels}
      colors={colors}
      centerText={totalAssets}
    />
  );
};

export default AllocatedAssets;
