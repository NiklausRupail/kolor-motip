import Contact from "@/components/Contact/Contact";
import { Nav } from "@/components/Nav/Nav";
import { Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Container maxWidth={"1196px"}>
        <Contact />
      </Container>
      <Nav />
    </main>
  );
}
