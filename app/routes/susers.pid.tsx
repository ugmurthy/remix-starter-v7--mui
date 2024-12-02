import type { Route } from "./+types/susers";
import { Box, Container, Typography, Paper } from "@mui/material";

export async function loader({
  params,
}: Route.LoaderArgs) {
  const URL = 'https://jsonplaceholder.typicode.com'
  const res = await fetch(`${URL}/users/${params.pid}`);
  const users = await res.json();
  return users;
}

export default function susers({
  loaderData,
}: Route.ComponentProps) {
  const users = loaderData;
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            Route: /susers/:pid loader = ServerLoader
          </Typography>
          <Typography
            component="pre"
            sx={{
              color: 'success.main',
              fontSize: '0.875rem',
              fontWeight: 300,
              fontFamily: 'monospace',
            }}
          >
            {JSON.stringify(loaderData, null, 2)}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}