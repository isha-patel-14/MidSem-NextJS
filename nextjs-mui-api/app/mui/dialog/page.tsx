import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export default function DialogPage() {
  return (
    <div>
      <h1>/mui/dialog</h1>
      <Dialog open={true}>
        <DialogTitle>Dialog Title</DialogTitle>
        <p>This is a simple dialog example using Material UI.</p>
      </Dialog>
    </div>
  );
}