import { Button, Flex, Heading } from "@chakra-ui/react";

export default function Main() {
  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button bg={"blue.300"} color={"black"} ml={"4"}>
            Add new transaction
          </Button>
        </Flex>
      </Flex>
      {/* // overview */}
      <Flex>{/* expense-view */}</Flex>
    </Flex>
  );
}
