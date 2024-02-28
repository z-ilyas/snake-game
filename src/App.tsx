import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Heading, Container } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from "./store/storeIndex.ts";
import CanvasBoard from './components/canvasBoard.tsx';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.lg" centerContent>
            <Heading as="h1" size="xl">SNAKE GAME</Heading>
            <CanvasBoard height={600} width={1000} />
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
