import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          <span className="gradient-text">Finans</span>Pro
        </Link>
        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <Link href="/" className="hover:text-white">Ana Sayfa</Link>
          <Link href="#ozellikler" className="hover:text-white">Özellikler</Link>
          <Link href="#nasil" className="hover:text-white">Nasıl Çalışır</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/giris" className="rounded-lg px-4 py-2 text-sm text-slate-200 hover:bg-slate-800">
            Giriş
          </Link>
          <Link href="/kayit" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400">
            Ücretsiz Başla
          </Link>
        </div>
      </nav>
    </header>
  );
}
