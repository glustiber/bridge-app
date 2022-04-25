import { Box, VStack, Text, Heading, Button, Input, Container, useColorMode } from "@chakra-ui/react";
import NavBar from './components/NavBar';
import Transfer from './components/Transfer';

function App() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <>
            <NavBar></NavBar>
            <Container maxW="container.lg" height="100vh">
                <Transfer></Transfer>

            </Container>
        </>
    );
}

export default App;
