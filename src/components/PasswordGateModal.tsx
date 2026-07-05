"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CONNECTED_WEALTH_PASSWORD } from "@/lib/connected-wealth-access";

type PasswordGateModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  title?: string;
};

export function PasswordGateModal({
  open,
  onClose,
  onSuccess,
  title = "Connected Wealth",
}: PasswordGateModalProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const labelId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      setPassword("");
      setError("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      if (open) onClose();
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [open, onClose]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (password === CONNECTED_WEALTH_PASSWORD) {
      setError("");
      onSuccess();
      return;
    }
    setError("Incorrect password. Please try again.");
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={labelId}
      className="fixed inset-0 z-[100] m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-ink/50 backdrop:backdrop-blur-sm"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="flex min-h-full items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-[0_24px_48px_rgba(10,10,10,0.12)] md:p-10">
          <p className="text-label mb-3">Private case study</p>
          <h2
            id={labelId}
            className="text-[1.375rem] font-medium tracking-tight text-ink md:text-[1.5rem]"
          >
            {title}
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
            Enter the passcode to view this project.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <label htmlFor="case-study-password" className="text-label sr-only">
              Passcode
            </label>
            <input
              ref={inputRef}
              id="case-study-password"
              type="password"
              inputMode="numeric"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) setError("");
              }}
              placeholder="Passcode"
              className="h-11 w-full rounded-xl border border-border bg-canvas-warm px-4 text-[0.9375rem] text-ink outline-none transition-colors placeholder:text-muted-soft focus:border-border-strong"
            />
            {error && (
              <p className="mt-3 text-[0.875rem] text-accent" role="alert">
                {error}
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-medium text-canvas-warm transition-colors hover:bg-ink-soft"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 items-center rounded-full border border-border-strong bg-surface px-5 text-sm font-medium text-ink transition-colors hover:bg-canvas-warm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
