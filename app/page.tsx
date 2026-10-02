import Link from "next/link";
import { FICHES } from "@/data/fiches";

const features = [
  {
    icon: "📖",
    title: "Entraînement",
    text: "Révise fiche par fiche avec une correction immédiate et retrouve directement les pages du livre à revoir.",
  },
  {
    icon: "📝",
    title: "Mode Test",
    text: "Réponds sans correction pendant le test. Découvre ton score et une correction complète à la fin.",
  },
  {
    icon: "🎯",
    title: "Plusieurs modes",
    text: "Choisis ta fiche, laisse le hasard décider ou mélange les questions de toutes les fiches.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choisis ton mode",
    text: "Entraînement pour apprendre ou Test pour te mettre en situation.",
  },
  {
    number: "02",
    title: "Réponds aux questions",
    text: "Oui / Non, Vrai / Faux ou réponses écrites selon la question.",
  },
  {
    number: "03",
    title: "Analyse tes erreurs",
    text: "Identifie tes points faibles et retourne aux pages correspondantes du livre.",
  },
];

export default function Home() {
  const fiches = FICHES.length;
  const questions = fiches * 10;

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-[-200px] top-[500px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-xl ring-1 ring-sky-400/20">
              🚌
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight sm:text-base">
                Permis D
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Révision
              </p>
            </div>
          </Link>

          <Link
            href="/quiz"
            className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition hover:border-slate-700 hover:bg-slate-800"
          >
            Commencer
          </Link>
        </nav>

        {/* HERO */}
        <section className="relative pb-16 pt-12 text-center sm:pb-24 sm:pt-20 lg:pt-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3.5 py-1.5 text-xs font-medium text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Préparation à l'interrogation écrite
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl lg:leading-[1.05]">
              Prépare ton
              <span className="block bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                écrit du permis D.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Révise les questions du titre professionnel, entraîne-toi fiche
              par fiche et teste ton niveau avant le jour de l'examen.
            </p>

            {/* Stats */}
            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur sm:max-w-lg">
              <div className="border-r border-slate-800 px-5 py-4">
                <p className="text-2xl font-bold text-white">{fiches}</p>
                <p className="mt-0.5 text-xs text-slate-500">
                  fiches disponibles
                </p>
              </div>

              <div className="px-5 py-4">
                <p className="text-2xl font-bold text-white">{questions}</p>
                <p className="mt-0.5 text-xs text-slate-500">
                  questions
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/quiz"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-7 py-4 text-base font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400 active:translate-y-0 sm:w-auto"
              >
                Commencer à réviser
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#fonctionnement"
                className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 px-7 py-4 text-center text-base font-medium text-slate-300 transition hover:bg-slate-800 sm:w-auto"
              >
                Découvrir
              </a>
            </div>
          </div>

          {/* Decorative card */}
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-2 shadow-2xl shadow-black/30">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950 p-5 text-left sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      ENTRAÎNEMENT
                    </p>
                    <p className="mt-1 font-semibold">Question 4 sur 10</p>
                  </div>

                  <div className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
                    Fiche 01
                  </div>
                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[40%] rounded-full bg-sky-500" />
                </div>

                <p className="mt-8 text-lg font-semibold leading-7 sm:text-xl">
                  Quelle est la principale fonction du ralentisseur ?
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-300">
                    A. Augmenter la puissance du moteur
                  </div>
                  <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 p-4 text-sm text-sky-300">
                    B. Ralentir le véhicule
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-t border-slate-900 py-16 sm:py-20">
          <div className="mb-10 max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              Révise efficacement
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Tout ce qu'il faut pour progresser.
            </h2>
            <p className="mt-4 text-slate-400">
              Un outil simple pour transformer tes erreurs en points forts.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-2xl ring-1 ring-slate-700 transition group-hover:bg-sky-500/10">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="fonctionnement"
          className="border-t border-slate-900 py-16 sm:py-20"
        >
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
                Simple et rapide
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Comment ça marche ?
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Pas besoin de chercher compliqué. Tu choisis ton mode, tu
                réponds et tu travailles tes erreurs.
              </p>

              <Link
                href="/quiz"
                className="mt-7 inline-flex rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Faire un test →
              </Link>
            </div>

            <div className="space-y-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-xs font-bold text-sky-400">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WRITTEN ANSWERS */}
        <section className="py-10 sm:py-16">
          <div className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-slate-900 to-slate-900 p-6 sm:p-10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="relative max-w-2xl">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-xl">
                💡
              </div>

              <h2 className="text-xl font-bold sm:text-2xl">
                Une réponse écrite ? Pas de problème.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Pour les questions où tu dois écrire ta réponse, compare
                simplement ta réponse avec celle attendue et indique si tu
                avais juste. Les questions Oui/Non et Vrai/Faux sont corrigées
                automatiquement.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 text-center sm:py-24">
          <div className="mx-auto max-w-2xl">
            <p className="text-4xl">🚌</p>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
              Prêt à commencer ?
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-slate-400">
              Quelques minutes de révision maintenant peuvent faire la
              différence le jour du test.
            </p>

            <Link
              href="/quiz"
              className="mt-7 inline-flex rounded-2xl bg-sky-500 px-8 py-4 text-base font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Commencer le quiz →
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-900 py-8 text-center">
          <p className="text-xs text-slate-600">
            Outil de révision indépendant, sans lien officiel avec l'examen.
          </p>
        </footer>
      </div>
    </main>
  );
}