import Cards from "@cloudscape-design/components/cards";
import { Container, Header } from "@cloudscape-design/components";
import { CARD_DATA, items } from "./Card-config";
import { Stage1Item, SelectionChangeDetail } from "../../interfaces";

interface Stage1Props {
  selectedItems: Stage1Item[];
  handleSelectionChange: (event: { detail: SelectionChangeDetail }) => void;
}
const Stage1: React.FC<Stage1Props> = ({
  selectedItems,
  handleSelectionChange,
}) => {
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
        items={items}
      />
    </Container>
  );
};

export default Stage1;
