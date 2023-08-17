import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface Territory {
  id: string;
  name: string;
  parent: string | null;
}

interface TerritoryListProps {
  territories: Territory[];
}

const TerritoryList = ({ territories }: TerritoryListProps) => {
  const [expandedTerritories, setExpandedTerritories] = useState<string[]>([]);

  const toggleExpansion = (territoryId: string) => {
    if (expandedTerritories.includes(territoryId)) {
      setExpandedTerritories(
        expandedTerritories.filter((id) => id !== territoryId)
      );
    } else {
      setExpandedTerritories([...expandedTerritories, territoryId]);
    }
  };

  const hasChildTerritories = (parentId: string) => {
    return territories.some((territory) => territory.parent === parentId);
  };

  const renderTerritories = (parentId: string | null = null) => {
    return territories
      .filter((territory) => territory.parent === parentId)
      .map((territory) => (
        <ListItem
          key={territory.id}
          fontWeight={territory.parent === null ? "bold" : "normal"}
        >
          <Box display="flex" alignItems="center">
            {hasChildTerritories(territory.id) && (
              <Icon
                as={
                  expandedTerritories.includes(territory.id)
                    ? ChevronDownIcon
                    : ChevronRightIcon
                }
                cursor="pointer"
                onClick={() => toggleExpansion(territory.id)}
                mr={2}
              />
            )}
            {territory.name}
          </Box>
          {expandedTerritories.includes(territory.id) && (
            <List ml="24px">{renderTerritories(territory.id)}</List>
          )}
        </ListItem>
      ));
  };

  return (
    <Flex gap="20px" flexDir="column">
      <>
        <Heading>Territories</Heading>
        <Text>Here are the list of territories:</Text>
        <List>{renderTerritories()}</List>
      </>
    </Flex>
  );
};

export default TerritoryList;
