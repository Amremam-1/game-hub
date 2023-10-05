import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term, children }: props) => {
  return (
    <Box marginY={5}>
      <Heading as="td" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;