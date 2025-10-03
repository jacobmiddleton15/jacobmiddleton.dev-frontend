import About from "./about";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* Page content */}
      <div className="flex-grow">
        <About />
      </div>

    </main>
  );
}
