import { Box, Typography } from '@mui/material';

// without type safety
export async function loader() {
    return { message: "Hello, world! this is a sample message " };
  }
  
  export default function MyRoute({ loaderData }) {
    return (
        <Box sx={{ 
            m: 4, 
            borderRadius: 2,
            textAlign: 'center',
            p: 10,
            bgcolor: 'grey.200'
        }}>
            <Typography 
                variant="h4" 
                sx={{ 
                    color: 'primary.main',
                    fontWeight: 'light'
                }}
            >
                {loaderData.message}
            </Typography>
            <Typography>
                Route: /sample requires an entry in route.ts that matches path with route filename.
            </Typography>
        </Box>
    )
}