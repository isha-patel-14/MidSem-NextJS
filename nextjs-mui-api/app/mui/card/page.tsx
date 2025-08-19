"use client";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';

export default function ButtonPage() {
  return (
    <div>
      <h1>/mui/card</h1>
      <Card variant="outlined">
        <CardContent>
          <h2>Card Title</h2>
          <p>This is a simple card example using Material UI.</p>
        </CardContent>
      </Card>
    </div>
  );
}
