import { Box, Text } from  "@chakra-ui/react"


export const Header  = () => {
  return(
    <Box display="flex" justifyContent="center" p={6} bg='orange'>
      <Text fontSize={26} fontWeight='bold'>
        Dio Bank
      </Text>
    </Box>
  )
}
