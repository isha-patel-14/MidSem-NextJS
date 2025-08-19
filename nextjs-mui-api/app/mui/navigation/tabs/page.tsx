import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabsPage() {
  return (
    <div>
      <h1>/mui/navigation/tabs</h1>
      <Tabs value={0} aria-label="basic tabs example">
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
    </div>
  );
}