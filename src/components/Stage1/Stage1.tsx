import { useState } from "react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
// import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { Container, Link } from "@cloudscape-design/components";
import { CARD_DATA } from "./Card-config";

const Stage1 = () => {
  return (
    <Container>
      <Cards
        entireCardClickable={true}
        cardDefinition={CARD_DATA}
        variant="full-page"
        selectionType="single"
        items={[CARD_DATA]}
      />
    </Container>
  );
};

export default Stage1;
