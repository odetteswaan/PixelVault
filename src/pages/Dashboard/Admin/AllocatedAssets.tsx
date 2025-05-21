import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProgressChartCard from 'src/components/adminDashboard/ProgressChartCard';
import { RootState } from 'src/redux/store';

const AllocatedAssets: React.FC = () => {
  const dashboardStatus = useSelector((state: RootState) => state.admin.data);
  const [totalAssets, setTotalAssets] = useState<number>(0);
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [colors] = useState<string[]>([
    '#7B1FA2',
    '#2979FF',
    '#FFC107',
    '#4CAF50',
    '#FF7043',
  ]);
  useEffect(() => {
    const allAssets = dashboardStatus?.allocated_assets_graph;
    if (allAssets) {
      setTotalAssets(allAssets.total_assets);
      setData(allAssets.percentage_data.map((item) => item.count));
      setLabels(allAssets.percentage_data.map((item) => item.asset_type));
    }
  }, [dashboardStatus]);

  
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
