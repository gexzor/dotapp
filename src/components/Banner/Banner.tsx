import Box from '@mui/material/Box';

const Banner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        component='img'
        sx={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
        alt='Cool looking dota heroes banner'
        src='/src/assets/images/banner.jpeg'
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          maxWidth: '1540px', // Width of background image
          height: '100%',
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.background.default} 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 85%, ${theme.palette.background.default} 100%)`,
        }}
      />
    </Box>
  );
};

export default Banner;
