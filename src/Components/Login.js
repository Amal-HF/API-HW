import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';



function Login() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    let postURL = "https://6362425a66f75177ea2a9b28.mockapi.io/toDoList"
    const navigate = useNavigate();

    // this function for handle submit and post data to the database.
    const postData = (e)=>{
            e.preventDefault();
            axios.post(postURL, {
                email,
                pass
            })
            navigate("/GetAPI");
    }
     
    return (
        <div className='login-container'>
            <form onSubmit={postData}>
                <Flex
                align={'center'}
                justify={'center'}>
                <Stack spacing={5} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                    </Stack>
                    <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={5}>
                    <Stack spacing={2}>
                        <FormControl id="email" isRequired='true'>
                        <FormLabel>Email address </FormLabel>
                        <Input placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)} type='email'/>
                        </FormControl>
                        <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='Enter Pass' onChange={(e)=> setPass(e.target.value)} type="password"/>
                        </FormControl>
                        <Stack spacing={10}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                            bg: 'blue.500',
                            }}
                            type={"submit"}>
                            Sign in
                        </Button>
                        </Stack>
                    </Stack>
                    </Box>
                </Stack>
                </Flex>
            </form>
        </div>
    );
}

export default Login