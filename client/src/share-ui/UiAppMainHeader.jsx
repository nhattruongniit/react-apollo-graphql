import { Flex, Heading } from "@chakra-ui/react";

export function UiAppMainHeader() {
  return (
    <Flex width="270px" justify="space-between" padding="10px" align="center">
      <Heading fontSize="2rem">Apollo Notes</Heading>
    </Flex>
  );
}