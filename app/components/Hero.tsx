// components/Hero.tsx
type HeroAction = {
  label: string;
  href: string;
  kind: "button" | "link";
};

type HeroImage = {
  id: string;
  heading: string;
  variant: "image";
  subheading?: string;
  background: { imageUrl: string; alt?: string };
  actions: HeroAction[];
};

type HeroSolid = {
  id: string;
  heading: string;
  variant: "solid";
  background: { color: string };
  actions: HeroAction[];
};

export type HeroModel = HeroImage | HeroSolid;

export function Hero({ model }: { model: HeroModel }) {
  const renderAction = (a: HeroAction) => {
    if (a.kind === "button") {
      return (
        <a
          key={a.href}
          href={a.href}
          className="inline-flex items-center rounded bg-white/90 px-4 py-2 text-slate-900"
        >
          {a.label}
        </a>
      );
    }

    return (
      <a key={a.href} href={a.href} className="underline">
        {a.label}
      </a>
    );
  };

  if (model.variant === "image") {
    return (
      <section
        style={{
          backgroundImage: `url(${model.background.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-10 text-white"
        aria-label={model.heading}
      >
        <h1 className="text-4xl font-bold">{model.heading}</h1>
        {model.subheading && <p className="mt-2 text-lg">{model.subheading}</p>}

        <div className="mt-6 flex gap-3 flex-wrap">
          {model.actions.map(renderAction)}
        </div>
      </section>
    );
  }

  // solid
  return (
    <section
      style={{ backgroundColor: model.background.color }}
      className="p-10 text-white"
      aria-label={model.heading}
    >
      <h1 className="text-3xl font-semibold">{model.heading}</h1>

      <div className="mt-4 flex gap-6">
        {model.actions.map(renderAction)}
      </div>
    </section>
  );
}
