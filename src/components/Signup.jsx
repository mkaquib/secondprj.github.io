import React from 'react'
import {Container,VStack,Heading,Input,Button,Text,Avatar} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <Container maxW={'container.xl'} h="100vh" p='16'>
        <form>
            <VStack alignItems="stretch" spacing={'8'} w={['full','96']} m='auto' my={'16'}>
            <Heading>
                Register
            </Heading>
            <Avatar alignSelf={'center'} boxSize='32'></Avatar>
            <Input placeholder='Name' type={'text'} required focusBorderColor='purple.500'/>
            <Input placeholder='Email' type={'email'} required focusBorderColor='purple.500'/>
            <Input placeholder='Password' type={'password'} required focusBorderColor='purple.500'/>
           
            <Button colorScheme={'purple'} type='submit'>Sign Up</Button>
            <Text textAlign={'right'}>Already Signed Up? {' '}

            <Button variant={'link'} alignSelf='flex-end' colorScheme={'purple'}>
                <Link to={'/signup'}>Login up</Link>
            </Button>
            </Text>
           
            </VStack>
        </form>
    </Container>
  )
}


export default Signup