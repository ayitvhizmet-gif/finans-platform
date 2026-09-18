import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { label: "Aktif Kullanıcı", value: "50.000+" },
  { label: "İşlem Hacmi", value: "₺250M+" },
  { label: "Çalışma Süresi", value: "%99.9" },
  { label: "7/24 Destek", value: "Her Zaman" },
];

const features = [
  { title: "Güvenli Altyapı", desc: "256-bit SSL ve 2FA ile korunan hesaplar.", icon: "🔒" },
  { title: "Hızlı İşlemler", desc: "Anında para yatırma ve çekme.", icon: "⚡" },
  { title: "Şeffaf Komisyon", desc: "Gizli ücret yok. Ne görüyorsan o.", icon: "📊" },
  { title: "Uzman Destek", desc: "7/24 Türkçe müşteri hizmetleri.", icon: "💬" },
];

const steps = [
  { n: "1", title: "Kayıt Ol", desc: "30 saniyede ücretsiz hesap aç." },
  { n: "2", title: "Doğrula", desc: "Kimlik doğrulama ile hesabını güvenceye al." },
  { n: "3", title: "Yatırım Yap", desc: "İstediğin miktarla başla, istediğin zaman çek." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs text-emerald-300">
            🎉 Yeni: Komisyonsuz ilk 30 gün
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Geleceğe <span className="gradient-text">yatırım</span> yapın
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Yasal, şeffaf ve güvenli yatırım platformu. Kripto, döviz ve hisse senedi işlemlerinizi tek yerden yönetin.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/kayit" className="rounded-xl bg-emerald-500 px-6 py-3 font-medium text-slate-950 hover:bg-emerald-400">
              Ücretsiz Hesap Aç
            </Link>
            <Link href="#nasil" className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-200 hover:bg-slate-800">
              Nasıl Çalışır?
            </Link>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-6">
                <div className="text-2xl font-bold text-emerald-400">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="ozellikler" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Neden <span className="gradient-text">FinansPro</span>?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="nasil" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          3 Adımda <span className="gradient-text">Başla</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="card p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-slate-950">
                {s.n}
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="card p-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Bugün <span className="gradient-text">başlayın</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Kredi kartı gerekmez. 30 saniyede ücretsiz hesabınızı açın.
          </p>
          <Link href="/kayit" className="mt-8 inline-block rounded-xl bg-emerald-500 px-8 py-3 font-medium text-slate-950 hover:bg-emerald-400">
            Hemen Kayıt Ol
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
