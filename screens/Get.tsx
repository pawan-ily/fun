import LottieView from 'lottie-react-native';
import { VStack ,Center,Box,View, Heading} from 'native-base';
import { Text } from 'native-base';
import { Button } from "native-base";
import { LogBox } from 'react-native';
const Get = ({navigation}) => {
  return (
  <Center flex={1}  bg={'muted.50'} >
        <VStack space={2} alignItems="center" >
            <VStack>
                <LottieView style={{width:240,height:170}}  source={require('./Animation - 1705916286287.json')}  autoPlay loop />
            </VStack>

            <VStack alignItems="center" space={3 } mt={43} >
               <Heading>
                Let's get started
               </Heading>
                </VStack>
               <VStack  alignItems="center" space={1}>
               <Text color={'muted.400'}  >
                Lorem ipsum dolor sit amet,scripteorem
                </Text>

                <Text  color={'muted.400'}  >
                    intrepreties vis et,discunt eirmod defination

                </Text>
                <Text  color={'muted.400'}  >
                    Latine lucilius ad dispuntado
                    </Text>
               </VStack>
              <VStack mt="16" space={5} >
                <Button  width="278"  key="lg" size="lg"     rounded="full"   bg="indigo.500"  color="indigo.50" fontFamily="body"  fontSize="xl" fontWeight="semibold"  >
              <Text color="indigo.50" fontWeight="normal"
              fontFamily="mono" 
              >C r e a t e  A c c o u n t
              </Text>
                </Button>
                <Button width="278"  key="sm" size="lg" rounded="full"   onPress={()=>navigation.navigate('profile')}  >
                <Text color="indigo.50" fontWeight="normal"
              fontFamily="mono" 
           letterSpacing="lg">L o g i n
              </Text>
                </Button>
              </VStack>
        </VStack>
    </Center>
     )
}
export default Get;
