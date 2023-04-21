// import React, { UseEffect} from "react"
import { useState } from "react";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
        // bgColor={"cyan"}
      >
        {user && <MyChats fetchAgain={fetchAgain} />}

        {user && <ChatBox fetchAgain={fetchAgain} />}
      </Box>
    </div>
  );
};

export default Chatpage;
