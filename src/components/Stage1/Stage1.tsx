import Cards from "@cloudscape-design/components/cards";
import { Container, Header } from "@cloudscape-design/components";
import { CARD_DATA, item } from "./Card-config";

const Stage1 = ({ selectedItems, handleSelectionChange }) => {
  return (
    <Container
      header={
        <Header
          variant="h1"
          description="Pick the plan that is closest to your current internet plan"
        >
          1. Select your current Broadband Plan
        </Header>
      }
    >
      <Cards
        entireCardClickable={true}
        cardDefinition={CARD_DATA}
        variant="full-page"
        selectionType="single"
        selectedItems={selectedItems}
        onSelectionChange={handleSelectionChange}
        visibleSections={["download", "upload"]}
        items={item}
      />
    </Container>
  );
};

export default Stage1;
