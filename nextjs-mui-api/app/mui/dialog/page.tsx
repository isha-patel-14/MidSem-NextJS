"use client";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useState } from 'react';

export default function DialogPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>/mui/dialog</h1>
      <Button variant="contained" onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <p>This is a simple dialog example using Material UI.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button onClick={() => setOpen(false)} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}