import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';

const TopNav: React.FC = () => {
  const pages = ['Products', 'Pricing', 'Blog'];

  return (
    <AppBar position='static'>
      <Toolbar sx={{ backgroundColor: 'background.paper' }}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Dota Stats
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page, index) => (
            <Box flexGrow={1} key={index}>
              <Link
                sx={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <Typography
                  fontWeight={'bold'}
                  mx={2}
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      height: '2px',
                      width: 0,
                      bgcolor: 'white',
                      transition: 'width 0.3s ease, left 0.3s ease',
                    },
                    '&:hover:after': { width: '100%', left: 0 },
                  }}
                >
                  {page.toUpperCase()}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
