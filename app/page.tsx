import { Container, Flex, Heading, ThemePanel } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Container size="4">
        <Flex direction={"column"}>
          <Heading align={"center"} size={"3"}>
            It works
          </Heading>
        </Flex>
      </Container>
      <ThemePanel />
    </main>
  );
}
