"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";

export default function Kayit() {
  const router = useRouter();
  const supabase = createClient();
  const [ad, setAd] = useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setHata("");
    setYukleniyor(true);

    const { error } = await supabase.auth.signUp({
      email,
      password: sifre,
      options: { data: { ad_soyad: ad } },
    });

    setYukleniyor(false);

    if (error) {
      setHata(error.message);
      return;
    }

    router.push("/panel");
    router.refresh();
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-md flex-col px-6 py-20">
        <h1 className="text-3xl font-bold">Hesap oluştur</h1>
        <p className="mt-2 text-sm text-slate-400">
          30 saniyede ücretsiz başla
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="mb-1 block text-sm text-slate-300">
              Ad Soyad
            </label>
            <input
              type="text"
              required
              value={ad}
              onChange={(e) => setAd(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-emerald-500"
              placeholder="Adınız Soyadınız"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-300">
              E-posta
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-emerald-500"
              placeholder="ornek@mail.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-300">Şifre</label>
            <input
              type="password"
              required
              minLength={8}
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm outline-none focus:border-emerald-500"
              placeholder="En az 8 karakter"
            />
          </div>
          <label className="flex items-start gap-2 text-xs text-slate-400">
            <input type="checkbox" required className="mt-1" />
            <span>
              <Link href="#" className="text-emerald-400 hover:underline">
                Kullanım Şartları
              </Link>{" "}
              ve{" "}
              <Link href="#" className="text-emerald-400 hover:underline">
                Gizlilik Politikası
              </Link>
              'nı okudum, kabul ediyorum.
            </span>
          </label>

          {hata && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              {hata}
            </div>
          )}

          <button
            type="submit"
            disabled={yukleniyor}
            className="w-full rounded-lg bg-emerald-500 py-2.5 font-medium text-slate-950 hover:bg-emerald-400 disabled:opacity-50"
          >
            {yukleniyor ? "Kayıt olunuyor..." : "Kayıt Ol"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Zaten hesabınız var mı?{" "}
          <Link href="/giris" className="text-emerald-400 hover:underline">
            Giriş yapın
          </Link>
        </p>
      </main>
    </>
  );
}
