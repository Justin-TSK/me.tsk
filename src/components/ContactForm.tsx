'use client'

import { useActionState, useEffect, useRef } from 'react'
import { sendContactEmail, type ContactState } from '@/app/actions/contact'
import { FiTerminal, FiPlay, FiCheck, FiAlertCircle } from 'react-icons/fi'

const initialState: ContactState = null

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <div className="mt-10 w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900/90 shadow-2xl shadow-cyan-500/10 backdrop-blur-md">
      {/* Barre de titre du terminal */}
      <div className="flex items-center justify-between border-b border-zinc-700 bg-zinc-800/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80 transition hover:opacity-100" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80 transition hover:opacity-100" />
          <span className="h-3 w-3 rounded-full bg-green-500/80 transition hover:opacity-100" />
          <div className="ml-2 flex items-center gap-1.5 font-mono text-xs text-zinc-400">
            <FiTerminal className="h-3.5 w-3.5 text-cyan-400" />
            <span>send_message.py</span>
          </div>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-500">
          <span className="hidden sm:inline">UTF-8</span>
          <span className="rounded bg-zinc-700/60 px-1.5 py-0.5 text-cyan-300/80">Python 3.12</span>
        </div>
      </div>

      {/* Éditeur de code interactif */}
      <form ref={formRef} action={formAction} noValidate className="p-4 sm:p-6 font-mono text-[13px] sm:text-sm leading-relaxed">
        {/* En-tête de code Python */}
        <div className="space-y-1 text-zinc-500 text-xs sm:text-[13px]">
          <p>
            <span className="text-zinc-600 select-none mr-3">01</span>
            <span className="text-zinc-500"># Initialisation du protocole de transmission de message</span>
          </p>
          <p>
            <span className="text-zinc-600 select-none mr-3">02</span>
            <span className="text-violet-400">from</span>{" "}
            <span className="text-zinc-200">portfolio.messaging</span>{" "}
            <span className="text-violet-400">import</span>{" "}
            <span className="text-cyan-300">Dispatcher</span>
          </p>
          <p>
            <span className="text-zinc-600 select-none mr-3">03</span>
            <span className="text-zinc-500"># Remplissez les paramètres de la charge utile (payload)</span>
          </p>
          <p>
            <span className="text-zinc-600 select-none mr-3">04</span>
            <span className="text-zinc-200">payload</span> <span className="text-zinc-500">=</span> <span className="text-yellow-400">&#123;</span>
          </p>
        </div>

        {/* Champs de saisie intégrés dans la syntaxe de code */}
        <div className="my-2 space-y-3.5 pl-3 sm:pl-6 border-l border-zinc-800/80 ml-2">
          {/* Ligne 05 : Nom */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
            <label htmlFor="contact-name" className="text-zinc-400 shrink-0 text-xs sm:text-sm">
              <span className="text-cyan-300">&quot;sender_name&quot;</span>
              <span className="text-zinc-500">:</span>
            </label>
            <div className="relative flex-1 flex items-center">
              <span className="text-emerald-400 hidden sm:inline select-none">&quot;</span>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Votre nom ou organisation"
                className="w-full bg-zinc-950/80 border border-zinc-700/60 rounded-md px-3 py-1.5 text-xs sm:text-sm font-mono text-emerald-300 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 focus:bg-zinc-950 focus:shadow-[0_0_12px_rgba(34,211,238,0.12)] transition"
              />
              <span className="text-emerald-400 hidden sm:inline select-none">&quot;</span>
              <span className="text-zinc-500 hidden sm:inline select-none">,</span>
            </div>
          </div>

          {/* Ligne 06 : Email */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
            <label htmlFor="contact-email" className="text-zinc-400 shrink-0 text-xs sm:text-sm">
              <span className="text-cyan-300">&quot;sender_email&quot;</span>
              <span className="text-zinc-500">:</span>
            </label>
            <div className="relative flex-1 flex items-center">
              <span className="text-emerald-400 hidden sm:inline select-none">&quot;</span>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="votre.email@domaine.com"
                className="w-full bg-zinc-950/80 border border-zinc-700/60 rounded-md px-3 py-1.5 text-xs sm:text-sm font-mono text-emerald-300 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 focus:bg-zinc-950 focus:shadow-[0_0_12px_rgba(34,211,238,0.12)] transition"
              />
              <span className="text-emerald-400 hidden sm:inline select-none">&quot;</span>
              <span className="text-zinc-500 hidden sm:inline select-none">,</span>
            </div>
          </div>

          {/* Ligne 07 : Sujet */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
            <label htmlFor="contact-subject" className="text-zinc-400 shrink-0 text-xs sm:text-sm">
              <span className="text-cyan-300">&quot;subject&quot;</span>
              <span className="text-zinc-500">:</span>
            </label>
            <div className="relative flex-1 flex items-center">
              <span className="text-emerald-400 hidden sm:inline select-none">&quot;</span>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                placeholder="Collaboration, mission, opportunité..."
                className="w-full bg-zinc-950/80 border border-zinc-700/60 rounded-md px-3 py-1.5 text-xs sm:text-sm font-mono text-emerald-300 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 focus:bg-zinc-950 focus:shadow-[0_0_12px_rgba(34,211,238,0.12)] transition"
              />
              <span className="text-emerald-400 hidden sm:inline select-none">&quot;</span>
              <span className="text-zinc-500 hidden sm:inline select-none">,</span>
            </div>
          </div>

          {/* Ligne 08 : Message (Triple quotes multiline Python) */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-zinc-400 text-xs sm:text-sm">
              <span className="text-cyan-300">&quot;message_content&quot;</span>
              <span className="text-zinc-500">:</span>{" "}
              <span className="text-yellow-400">&quot;&quot;&quot;</span>
            </label>
            <div className="relative">
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder="Décrivez votre projet, votre besoin ou posez votre question..."
                className="w-full bg-zinc-950/80 border border-zinc-700/60 rounded-md p-3 text-xs sm:text-sm font-mono text-emerald-300 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 focus:bg-zinc-950 focus:shadow-[0_0_12px_rgba(34,211,238,0.12)] transition resize-none leading-relaxed"
              />
              <span className="text-yellow-400 text-xs sm:text-sm block mt-1 select-none">&quot;&quot;&quot;</span>
            </div>
          </div>
        </div>

        {/* Fin du dictionnaire */}
        <div className="text-xs sm:text-[13px] text-zinc-500 mb-4">
          <p>
            <span className="text-yellow-400">&#125;</span>
          </p>
          <p className="mt-1">
            <span className="text-zinc-600 select-none mr-3">09</span>
            <span className="text-zinc-500"># Appel asynchrone de l&apos;API de dispatching</span>
          </p>
          <p>
            <span className="text-zinc-600 select-none mr-3">10</span>
            <span className="text-violet-400">await</span>{" "}
            <span className="text-cyan-300">Dispatcher</span>
            <span className="text-zinc-200">.send</span>
            <span className="text-zinc-200">(payload)</span>
          </p>
        </div>

        {/* Retour console / Terminal output */}
        {state && !state.success && state.error && (
          <div className="my-3 flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-950/30 px-3.5 py-2.5 text-xs font-mono text-red-300">
            <FiAlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            <span>[ERR_VALIDATION] {state.error}</span>
          </div>
        )}

        {state?.success && (
          <div className="my-3 flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-950/30 px-3.5 py-2.5 text-xs font-mono text-emerald-300">
            <FiCheck className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>[HTTP 200 OK] Message transmis avec succès ! Je vous répondrai au plus vite.</span>
          </div>
        )}

        {/* Ligne de commande d'exécution & bouton Run */}
        <div className="mt-4 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="text-cyan-400">$</span>
            <span className="text-zinc-300">python3 send_message.py</span>
            <span className="inline-block h-3.5 w-1.5 animate-pulse bg-cyan-400" />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-2.5 font-mono text-xs font-semibold text-zinc-950 transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
          >
            {isPending ? (
              <>
                <svg
                  className="h-3.5 w-3.5 animate-spin text-zinc-950"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                <span>executing...</span>
              </>
            ) : (
              <>
                <FiPlay className="h-3 w-3 fill-current transition-transform duration-200 group-hover:scale-110" />
                <span>Run script (Envoyer)</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
