"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function CikisButonu() {
  const router = useRouter();
  const supabase = createClient();

  async function cikisYap() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={cikisYap}
      className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
    >
      Çıkış Yap
    </button>
  );
}
