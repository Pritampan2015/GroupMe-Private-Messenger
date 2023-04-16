import React from "react";
import { ChatState } from "../../Context/ChatProvider";
import { color } from "framer-motion";
import { Text, Box } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      width="100%"
      display="flex"
      alignItem="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {}
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
