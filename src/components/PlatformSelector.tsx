import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/gameQueryStore";


const PlatformSelector = () => {
  const [gameQuery, setPlatoformId]  = useGameQueryStore(s=> [s.gameQuery, s.setPlatoformId]);
  const { data, error } = usePlatforms();
  const platform = data?.results.find((platform) => platform.id === gameQuery.platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem onClick={() => setPlatoformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
