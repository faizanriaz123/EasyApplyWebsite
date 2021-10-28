import * as React from 'react';
import NavBar from '../../Components/NavBar';
import Button from '@mui/material/Button';
import "./profilePage.css";
import EditIcon from '@mui/icons-material/Edit';
import image from "./image.jpg";
import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

  
const theme = createTheme();

function profile() {
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar/>
          <main>
            <Box
              sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  <img src={image} width="200"></img>
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                I am ambitious and driven. I thrive on challenge and constantly set goals for myself,
                 so I have something to strive toward. I'm not comfortable with settling, and I'm always
                  looking for an opportunity to do better and achieve greatness. In my previous role, 
                  I was promoted three times in less than two years.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained" endIcon={<EditIcon/>}>Edit</Button>
                </Stack>
              </Container>
            </Box>
            
          </main>
        </ThemeProvider>
      );
    }

export default profile;