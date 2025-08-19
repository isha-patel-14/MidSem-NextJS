import Drawer from '@mui/material/Drawer';

export default function DrawerPage() {
  return (
    <div>
      <h1>/mui/drawer</h1>
      <Drawer open={true} variant="permanent">
        <div style={{ width: 250, padding: 20 }}>
          <h2>Drawer Content</h2>
          <p>This is a simple drawer example using Material UI.</p>
        </div>
      </Drawer>
    </div>
  );
}