import {Box} from "@chakra-ui/react";
import "./App.css";
import SidebarWithHeader from "./Component/Sidebar";
import Desktop from "./Component/Desktop";

function App() {
  return (
    <Box>
      <Box >
        <SidebarWithHeader/>
      </Box>
      <Desktop/>
      
    </Box>
  );
}

export default App;
