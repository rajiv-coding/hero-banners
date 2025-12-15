// app/page.tsx
import { Hero, HeroModel } from "./components/Hero";

export default async function Page() {
  const res = await fetch("http://localhost:3000/banners", {
    cache: "no-store",
  });

  const data = await res.json();
  const banners = data.banners as HeroModel[];

  return (
    <main className="space-y-8">
      {banners.map((b) => (
        <Hero key={b.id} model={b} />
      ))}
    </main>
  );
}
