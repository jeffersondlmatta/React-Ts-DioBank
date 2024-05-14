
import { BrowserRouter, Route , Routes} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import Conta from './Pages/conta';
import Home from './Pages/home';

function App() {
  return(
    <BrowserRouter>
    <ChakraProvider>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/conta" element={<Conta />} />

        </Routes>
      </Layout>
    </ChakraProvider>
    </BrowserRouter>

);


}

export default App;


