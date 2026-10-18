import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatFrom from "../hooks/usePlatForm";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatFrom(platformId);

  const headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headingText}
    </Heading>
  );
};
export default GameHeading;
