import { Container, Typography, Button } from '@mui/material';

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h1">Welcome to Remix with Material UI</Typography>
      <Button variant="contained" color="primary">Get Started</Button>
    </Container>
  );
}