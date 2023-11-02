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
        padding="90px"
        boxShadow="0px 6px 6px 2px #0F0F0F"
        zIndex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)"
        background="linear-gradient(135deg, #010100, #000C20)"
        position="relative"
        overflow="hidden"
        css={{
          "&::before": {
            content: "''",
            width: '104%',
            height: '102%',
            borderRadius: '20px',
            backgroundImage:
              'linear-gradient(135deg, #D3A550, #F1B420 43%, 	#FFDB15)',
            position: 'absolute',
            zIndex: '-1',
            top: '-1%',
            left: '-2%',
            animation: `${spinAnimation} 4.5s linear infinite`,
          },
        }}
        
      >
        <Text fontSize="36px" marginBottom="10px" color="#0d0301" textAlign="center">
          Team
        </Text>
        <Text fontSize="18px" marginTop="2px" color="#FFFFFF" textAlign="center">
          Gaurav
        </Text>
        <Text fontSize="18px" marginTop="2px" color="#FFFFFF" textAlign="center">
          Jindat
        </Text>
        <Text fontSize="18px" marginTop="2px" color="#FFFFFF" textAlign="center">
          Karthick
        </Text>

        
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
