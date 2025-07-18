import { SplitScreenLayout } from './_components/SplitScreenLayout';
import virtualizationData from './utils/data';

const VirtualizationPage = () => {
  return <SplitScreenLayout sections={virtualizationData} />;
};

export default VirtualizationPage;
