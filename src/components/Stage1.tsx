import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";

const Stage1 = () => {
  return (
    <Container
      header={
        <Header variant="h2" description="Container description">
          Container title
        </Header>
      }
    >
      Container content
    </Container>
  );
};

export default Stage1;
