import {
  ExpandableSection,
  Form,
  FormField,
  Input,
} from "@cloudscape-design/components";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";

const Stage1 = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Form>
        <Container
          header={
            <Header
              variant="h2"
              description="Input the speed you have purchased from you're interent provider"
            >
              <b>1. Pick your internet Speed's</b>
            </Header>
          }
        >
          <FormField label="First field">
            <Input value={""} />
          </FormField>
          <FormField label="Second field">
            <Input value={""} />
          </FormField>
          <ExpandableSection headerText="Further Information">
            Insert Information about speed tiers for the technologyically
            retarded
          </ExpandableSection>
        </Container>
      </Form>
    </form>
  );
};

export default Stage1;
