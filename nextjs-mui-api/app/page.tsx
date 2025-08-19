export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to MUI Next.js App</h1>
      <p>Available routes:</p>
      <ul>
        <li>/mui/drawer - Material UI Drawer component</li>
        <li>/mui/button - Material UI Button component</li>
        <li>/mui/card - Material UI Card component</li>
        <li>/mui/dialog - Material UI Dialog component</li>
        <li>/mui/typography - Material UI Typography component</li>
        <li>/mui/navigation/appbar - Material UI AppBar component</li>
        <li>/mui/navigation/tabs - Material UI Tabs component</li>
        <li>/profile/[username] - Dynamic profile page</li>
        <li>/blog/[id] - Dynamic blog post page</li>
      </ul>
    </div>
  );
}
