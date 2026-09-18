import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import CikisButonu from "@/components/CikisButonu";

const menu = [
  { label: "Panel", href: "/panel", active: true, icon: "📊" },
  { label: "Cüzdan", href: "#", icon: "💰" },
  { label: "İşlemler", href: "#", icon: "🔄" },
  { label: "Piyasalar", href: "#", icon: "📈" },
  { label: "Ayarlar", href: "#", icon: "⚙️" },
];

const transactions = [
  {
    id: "TX-1001",
    type: "Para Yatırma",
    amount: "+₺5.000",
    status: "Tamamlandı",
    date: "18.09.2026",
  },
  {
    id: "TX-1002",
    type: "BTC Alım",
    amount: "-₺1.250",
    status: "Tamamlandı",
    date: "17.09.2026",
  },
  {
    id: "TX-1003",
    type: "Para Çekme",
    amount: "-₺800",
    status: "Beklemede",
    date: "16.09.2026",
  },
];

export default async function Panel() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/giris");

  const adSoyad =
    user.user_metadata?.ad_soyad || user.email?.split("@")[0] || "Kullanıcı";
  const basHarf = adSoyad.charAt(0).toUpperCase();

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-950 p-6 md:flex">
        <Link href="/" className="text-xl font-bold">
          <span className="gradient-text">Finans</span>Pro
        </Link>
        <nav className="mt-10 space-y-1">
          {menu.map((m) => (
            <Link
              key={m.label}
              href={m.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                m.active
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-slate-400 hover:bg-slate-900"
              }`}
            >
              <span>{m.icon}</span> {m.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Merhaba, {adSoyad} 👋</h1>
            <p className="text-sm text-slate-400">{user.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <CikisButonu />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-slate-950">
              {basHarf}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="card p-6">
            <div className="text-sm text-slate-400">Toplam Bakiye</div>
            <div className="mt-2 text-3xl font-bold">₺12.450,00</div>
            <div className="mt-1 text-xs text-emerald-400">
              +%2,4 bu hafta
            </div>
          </div>
          <div className="card p-6">
            <div className="text-sm text-slate-400">Kazanç</div>
            <div className="mt-2 text-3xl font-bold text-emerald-400">
              ₺1.250,00
            </div>
            <div className="mt-1 text-xs text-slate-500">Son 30 gün</div>
          </div>
          <div className="card p-6">
            <div className="text-sm text-slate-400">Aktif Yatırım</div>
            <div className="mt-2 text-3xl font-bold">3</div>
            <div className="mt-1 text-xs text-slate-500">Varlık</div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400">
            + Para Yatır
          </button>
          <button className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm hover:bg-slate-900">
            Para Çek
          </button>
          <button className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm hover:bg-slate-900">
            İşlem Yap
          </button>
        </div>

        <div className="mt-10">
          <h2 className="mb-4 font-semibold">Son İşlemler</h2>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-800 bg-slate-900/50 text-left text-slate-400">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Tür</th>
                  <th className="p-4">Tutar</th>
                  <th className="p-4">Durum</th>
                  <th className="p-4">Tarih</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b border-slate-800/60 last:border-0"
                  >
                    <td className="p-4 text-slate-400">{t.id}</td>
                    <td className="p-4">{t.type}</td>
                    <td
                      className={`p-4 font-medium ${
                        t.amount.startsWith("+")
                          ? "text-emerald-400"
                          : "text-slate-200"
                      }`}
                    >
                      {t.amount}
                    </td>
                    <td className="p-4">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          t.status === "Tamamlandı"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-amber-500/10 text-amber-400"
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400">{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
