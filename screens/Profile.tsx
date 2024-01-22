
import { View ,Box, Center, Heading, VStack, HStack, Button,Icon,Image,ScrollView,Text} from "native-base"
import { MaterialCommunityIcons,AntDesign,Entypo } from "@expo/vector-icons"


const Profile = () => {
    const applications=
    [
        {

        },
        {

        },
        {

        }
    ]
  return (

    <Box  >
      <Box bg="muted.50" >
    <VStack alignItems="center" py="30" >
    <Center>
            <Heading  color="muted.500"  mt="34"  fontSize="lg">
              T O O L S
            </Heading>
        </Center>
        <HStack  space="9"  mt="5" >
            <Box>
                <Button rounded="full"  bg="muted.200">
                    <Icon as={
                        AntDesign
                    } name="setting" size="2xl" />
                </Button>
            </Box>
            <Box>
              <Image
              source={require('../assets/download.jpeg') } 
              rounded="full"
              size="md"
              alt="hi"
              />
            </Box>
            <Box>
            <Button rounded="3xl"  bg="muted.200">
            <Icon as={
                MaterialCommunityIcons

                    } name="account-plus" size="2xl" />

                </Button>
            </Box>

        </HStack>
        <Heading mt="5" fontWeight="semibold"   >
            P r a n a t h i
        </Heading>
        
    </VStack>
    </Box>
    {/* <Box  mt="3" >
        <ScrollView>
          <Center flex="1" >
          <VStack space="4">
            <HStack  space="56"  >
         <   Box bg="muted.50"  rounded="3xl" >
                <Text>
                    lol
                </Text>
                </Box>
                <   Box bg="muted.50"  rounded="3xl" >
                <Text>
                    lol
                </Text>
                </Box>
            </HStack>
            <HStack space="4" >
          <Box bg="muted.50"  rounded="3xl" >

          </Box>
          <Box color="muted.50" >
            i

          </Box>


            </HStack>
                <HStack>
                <Text>
                    lol
                </Text>
                <Text>
                    lol
                </Text>
                </HStack>
                </VStack>
          </Center>

        </ScrollView>
    </Box> */}
    </Box> 
  )
}

export default Profile
