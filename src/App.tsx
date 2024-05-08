import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header';
import { BtnLogin } from './components/BtnLogin';
import { Card } from './components/Card';

import { useState } from 'react';

function App() {

  return (
    <ChakraProvider>

      <Header></Header>
      <Card></Card>



    </ChakraProvider>
  );
}

export default App;
