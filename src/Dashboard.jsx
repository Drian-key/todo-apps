import Body from "./components/Body";
import Header from "./components/Header";

export default function Dashboard() {
  return (
    <>
      <header className="bg-gradient-to-b from-secondary to-tertiary font-poppins text-headline">
        <Header />
      </header>
      <main className="bg-background font-poppins text-headline">
        <Body />
      </main>
    </>
  );
}
