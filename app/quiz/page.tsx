"use client";

import { useState } from "react";
import Link from "next/link";
import { FICHES, Q } from "@/data/fiches";

type Item = {
  q: string;
  a: string;
  p: number;
  f: number;
};

type Mode = "train" | "test";

const all = (): Item[] =>
  FICHES.flatMap((qs, i) =>
    qs.map(([q, a, p]: Q) => ({
      q,
      a,
      p,
      f: i + 1,
    }))
  );

const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);

const opts = (a: string) =>
  ["Oui", "Non"].includes(a)
    ? ["Oui", "Non"]
    : ["Vrai", "Faux"].includes(a)
      ? ["Vrai", "Faux"]
      : null;

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-[-250px] top-[500px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto min-h-screen max-w-5xl px-5 py-5 sm:px-8 sm:py-8">
        {children}
      </div>
    </main>
  );
}

function Progress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="mt-5">
      <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
        <span>Progression</span>
        <span>{percentage}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-sky-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function Page() {
  const [mode, setMode] = useState<Mode | null>(null);
  const [items, setItems] = useState<Item[] | null>(null);
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [given, setGiven] = useState<string[]>([]);
  const [ok, setOk] = useState<(boolean | null)[]>([]);
  const [shown, setShown] = useState(false);

  const start = (m: Mode, list: Item[]) => {
    setMode(m);
    setItems(list);
    setI(0);
    setGiven([]);
    setOk([]);
    setShown(false);
    setTxt("");
  };

  const reset = () => {
    setMode(null);
    setItems(null);
    setI(0);
    setGiven([]);
    setOk([]);
    setShown(false);
    setTxt("");
  };

  const fiche = (n: number) => all().filter((x) => x.f === n);

  const n = FICHES.length;

  const grade = (k: number, v: boolean) => {
    setOk((o) =>
      o.map((x, j) => (j === k ? v : x))
    );
  };

  const next = () => {
    setShown(false);
    setTxt("");
    setI((value) => value + 1);
  };

  const cur = items?.[i];

  const answer = (a: string) => {
    if (!cur) return;

    setGiven((old) => [...old, a]);

    setOk((old) => [
      ...old,
      opts(cur.a) ? a === cur.a : null,
    ]);

    setTxt("");

    if (mode === "train") {
      setShown(true);
    } else {
      setI((value) => value + 1);
    }
  };

  /* =========================================================
     ACCUEIL
  ========================================================= */

  if (!mode) {
    return (
      <Shell>
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Accueil
            </Link>

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-400/20">
                🚌
              </div>
              <span className="hidden text-sm font-semibold sm:block">
                Permis D
              </span>
            </div>
          </header>

          {/* Hero */}
          <section className="pb-10 pt-12 text-center sm:pt-16">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs font-medium text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Révision
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Choisis ton
              <span className="block text-sky-400">
                mode de révision.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Entraîne-toi fiche par fiche ou lance un test pour mesurer ton
              niveau.
            </p>

            <div className="mx-auto mt-7 grid max-w-md grid-cols-2 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
              <div className="border-r border-slate-800 px-5 py-4">
                <p className="text-2xl font-bold">{n}</p>
                <p className="mt-1 text-xs text-slate-500">fiches</p>
              </div>

              <div className="px-5 py-4">
                <p className="text-2xl font-bold">{n * 10}</p>
                <p className="mt-1 text-xs text-slate-500">questions</p>
              </div>
            </div>
          </section>

          {/* Training */}
          <section>
            <div className="mb-4 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sm">
                    📖
                  </span>
                  <h2 className="font-bold">Entraînement</h2>
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Correction immédiate après chaque question
                </p>
              </div>

              <span className="hidden text-xs text-slate-600 sm:block">
                10 questions
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
              {FICHES.map((_, k) => (
                <button
                  key={k}
                  onClick={() =>
                    start("train", fiche(k + 1))
                  }
                  className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-sky-500/40 hover:bg-slate-900 active:scale-[0.98]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold transition group-hover:bg-sky-500/10 group-hover:text-sky-400">
                      {k + 1}
                    </span>

                    <span className="text-slate-700 transition group-hover:text-sky-500">
                      →
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-semibold">
                    Fiche {k + 1}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    10 questions
                  </p>
                </button>
              ))}
            </div>
          </section>

          {/* Test */}
          <section className="mt-12">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-sm">
                  📝
                </span>
                <h2 className="font-bold">Test</h2>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Pas de correction avant la fin du test
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
              {FICHES.map((_, k) => (
                <button
                  key={k}
                  onClick={() =>
                    start("test", fiche(k + 1))
                  }
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-slate-900 active:scale-[0.98]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold">
                    {k + 1}
                  </span>

                  <p className="mt-4 text-sm font-semibold">
                    Fiche {k + 1}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Test complet
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button
                onClick={() =>
                  start(
                    "test",
                    fiche(1 + Math.floor(Math.random() * n))
                  )
                }
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:border-amber-500/30 hover:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-xl">
                    🎲
                  </span>

                  <div>
                    <p className="font-semibold">
                      Fiche aléatoire
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Laisse le hasard choisir
                    </p>
                  </div>

                  <span className="ml-auto text-slate-600 transition group-hover:text-amber-400">
                    →
                  </span>
                </div>
              </button>

              <button
                onClick={() =>
                  start(
                    "test",
                    shuffle(all()).slice(0, 10)
                  )
                }
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:border-purple-500/30 hover:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
                    🔀
                  </span>

                  <div>
                    <p className="font-semibold">
                      Questions mélangées
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      10 questions de toutes les fiches
                    </p>
                  </div>

                  <span className="ml-auto text-slate-600 transition group-hover:text-purple-400">
                    →
                  </span>
                </div>
              </button>
            </div>
          </section>

          <p className="mt-12 text-center text-xs text-slate-600">
            Choisis une fiche pour commencer ta révision.
          </p>
        </div>
      </Shell>
    );
  }

  /* =========================================================
     RESULTATS
  ========================================================= */

  if (items && i >= items.length) {
    const score = ok.filter(Boolean).length;
    const percentage = Math.round(
      (score / items.length) * 100
    );

    return (
      <Shell>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <header className="flex items-center justify-between">
            <button
              onClick={reset}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              ← Quitter
            </button>

            <span className="text-sm text-slate-500">
              Résultats
            </span>
          </header>

          {/* Score */}
          <section className="py-12 text-center">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-8 border-sky-500/20 bg-sky-500/5">
              <div>
                <p className="text-3xl font-black text-sky-400">
                  {score}
                </p>
                <p className="text-xs text-slate-500">
                  / {items.length}
                </p>
              </div>
            </div>

            <p className="mt-6 text-3xl font-black">
              {percentage}%
            </p>

            <p className="mt-2 text-slate-400">
              {score} bonnes réponses ·{" "}
              {items.length - score} mauvaises
            </p>
          </section>

          {/* Summary */}
          <div className="mb-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <p className="text-2xl font-bold text-emerald-400">
                {score}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Bonnes réponses
              </p>
            </div>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
              <p className="text-2xl font-bold text-red-400">
                {items.length - score}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Mauvaises réponses
              </p>
            </div>
          </div>

          {/* Corrections */}
          <div className="space-y-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-bold">
                Correction
              </h2>

              <span className="text-xs text-slate-500">
                {items.length} questions
              </span>
            </div>

            {items.map((x, k) => (
              <div
                key={k}
                className={`rounded-2xl border p-5 ${
                  ok[k] === true
                    ? "border-emerald-500/20 bg-emerald-500/[0.03]"
                    : ok[k] === false
                      ? "border-red-500/20 bg-red-500/[0.03]"
                      : "border-slate-800 bg-slate-900/50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    Fiche {x.f} · Question {k + 1}
                  </span>

                  <span
                    className={`text-xs font-semibold ${
                      ok[k] === true
                        ? "text-emerald-400"
                        : ok[k] === false
                          ? "text-red-400"
                          : "text-slate-500"
                    }`}
                  >
                    {ok[k] === true
                      ? "✓ Juste"
                      : ok[k] === false
                        ? "✕ Faux"
                        : "À évaluer"}
                  </span>
                </div>

                <p className="mt-4 font-medium leading-6">
                  {x.q}
                </p>

                <div className="mt-4 space-y-2 rounded-xl bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">
                    Ta réponse
                  </p>

                  <p className="text-sm">
                    {given[k] || "—"}
                  </p>

                  <div className="my-3 h-px bg-slate-800" />

                  <p className="text-sm text-slate-400">
                    Bonne réponse
                  </p>

                  <p className="text-sm font-semibold text-emerald-400">
                    {x.a}
                  </p>
                </div>

                {ok[k] === null && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      className="rounded-xl bg-emerald-500/10 py-3 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500/20"
                      onClick={() => grade(k, true)}
                    >
                      J'avais juste
                    </button>

                    <button
                      className="rounded-xl bg-red-500/10 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/20"
                      onClick={() => grade(k, false)}
                    >
                      J'avais faux
                    </button>
                  </div>
                )}

                <p className="mt-3 text-xs text-slate-600">
                  📖 À revoir : page {x.p}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={reset}
            className="mt-8 w-full rounded-2xl bg-sky-500 py-4 font-bold text-slate-950 transition hover:bg-sky-400"
          >
            Retour aux fiches →
          </button>
        </div>
      </Shell>
    );
  }

  /* =========================================================
     QUESTION
  ========================================================= */

  if (!cur || !items) return null;

  const o = opts(cur.a);
  const isLast = i === items.length - 1;

  return (
    <Shell>
      <div className="mx-auto w-full max-w-3xl">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <button
            onClick={reset}
            className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Quitter
          </button>

          <div className="text-right">
            <p className="text-xs font-semibold text-slate-300">
              {mode === "train"
                ? "Entraînement"
                : "Test"}
            </p>
            <p className="mt-0.5 text-xs text-slate-600">
              Fiche {cur.f}
            </p>
          </div>
        </header>

        {/* Progress */}
        <Progress
          current={i + 1}
          total={items.length}
        />

        {/* Question */}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-widest text-sky-400">
              Question
            </span>

            <span className="text-sm font-semibold text-slate-500">
              {i + 1}
              <span className="text-slate-700">
                {" "}
                / {items.length}
              </span>
            </span>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/10 sm:p-8">
            <h1 className="text-xl font-bold leading-8 sm:text-2xl sm:leading-9">
              {cur.q}
            </h1>

            <p className="mt-3 text-xs text-slate-600">
              Référence : page {cur.p}
            </p>
          </div>
        </section>

        {/* Answers */}
        {!shown && o && (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {o.map((x) => (
              <button
                key={x}
                onClick={() => answer(x)}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-sky-500/40 hover:bg-slate-900 active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">
                    {x}
                  </span>

                  <span className="text-lg text-slate-700 transition group-hover:text-sky-400">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Written answer */}
        {!shown && !o && (
          <div className="mt-5 space-y-3">
            <textarea
              className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/10"
              rows={5}
              value={txt}
              onChange={(e) =>
                setTxt(e.target.value)
              }
              placeholder="Écris ta réponse ici..."
            />

            <button
              disabled={!txt.trim()}
              className="w-full rounded-2xl bg-sky-500 py-4 font-bold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-40"
              onClick={() => answer(txt)}
            >
              Valider ma réponse →
            </button>
          </div>
        )}

        {/* Training correction */}
        {shown && (
          <div className="mt-5">
            <div
              className={`rounded-3xl border p-6 ${
                ok[i] === true
                  ? "border-emerald-500/20 bg-emerald-500/[0.05]"
                  : ok[i] === false
                    ? "border-red-500/20 bg-red-500/[0.05]"
                    : "border-slate-800 bg-slate-900/70"
              }`}
            >
              {ok[i] === true && (
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-xl">
                    ✓
                  </span>

                  <div>
                    <p className="font-bold text-emerald-400">
                      Bonne réponse !
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Continue comme ça.
                    </p>
                  </div>
                </div>
              )}

              {ok[i] === false && (
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/10 text-xl">
                    ✕
                  </span>

                  <div>
                    <p className="font-bold text-red-400">
                      Mauvaise réponse
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Voici la réponse à retenir.
                    </p>
                  </div>
                </div>
              )}

              {ok[i] !== true && (
                <div className="mt-6 rounded-2xl bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-widest text-slate-600">
                    Réponse correcte
                  </p>

                  <p className="mt-2 font-semibold text-emerald-400">
                    {cur.a}
                  </p>
                </div>
              )}

              {ok[i] === null && (
                <div className="mt-5">
                  <p className="text-xs text-slate-500">
                    Ta réponse
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    {given[i] || "—"}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      className="rounded-xl bg-emerald-500/10 py-3 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500/20"
                      onClick={() => grade(i, true)}
                    >
                      J'avais juste
                    </button>

                    <button
                      className="rounded-xl bg-red-500/10 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/20"
                      onClick={() => grade(i, false)}
                    >
                      J'avais faux
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
                <span className="text-xs text-slate-600">
                  📖 À revoir : page {cur.p}
                </span>

                {ok[i] !== null && (
                  <span className="text-xs text-slate-600">
                    {isLast ? "Dernière question" : "Question suivante"}
                  </span>
                )}
              </div>
            </div>

            {ok[i] !== null && (
              <button
                onClick={next}
                className="mt-3 w-full rounded-2xl bg-sky-500 py-4 font-bold text-slate-950 transition hover:bg-sky-400"
              >
                {isLast
                  ? "Voir mes résultats →"
                  : "Question suivante →"}
              </button>
            )}
          </div>
        )}
      </div>
    </Shell>
  );
}
