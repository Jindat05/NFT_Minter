import { Box, Flex, Text, Button, keyframes } from '@chakra-ui/react';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const AboutPage = ({ onClose }) => {
  return (
    <Flex
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      zIndex="9999"
      justify="center"
      align="center"
      backgroundColor="#B8390E"
    >
      <Box
        bgImage={`url(./assets/background/parallax-bg.gif)`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        borderRadius="20px"
        width="600px"
        height="600px"
        padding="30px"
        boxShadow="0px 6px 6px 2px #0F0F0F"
        zIndex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textShadow="4px 4px 6px rgba(0, 0, 0, 0.6)"
        background="linear-gradient(135deg, #0B1320, #010100)"
        position="relative"
        overflow="hidden"
        css={{
          "&::before": {
            content: "''",
            width: '104%',
            height: '102%',
            borderRadius: '0px',
            backgroundImage:
              'linear-gradient(135deg, #1A202C, #000C66 43%, #004369)',
            position: 'absolute',
            zIndex: '-1',
            top: '-1%',
            left: '-2%',
            animation: `${spinAnimation} 4.5s linear infinite`,
          },
        }}
      >
        <Text fontSize="36px" marginBottom="30px" color="#F5631A" textAlign="center">
          About
        </Text>
        <Text fontSize="18px" marginTop="10px" color="#FFFFFF" textAlign="center">
          This project aims to revolutionize the NFT space by combining cutting-edge technology with unique and creative artwork. Our team of talented artists and developers have come together to create an immersive experience for collectors and enthusiasts. With a focus on quality and innovation, we strive to push the boundaries of what is possible in the world of NFTs.
        </Text>
        <Box marginTop="30px"></Box>
        <Button
          backgroundColor="#FFFFFF"
          borderRadius="15px"
          color="#4A4A4A"
          cursor="pointer"
          fontFamily="inherit"
          padding="15px"
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Flex>
  );
};

export default AboutPage;
