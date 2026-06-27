export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-emerald-700">
            KolabRiset<span className="text-slate-900"> Wakatobi</span>
          </div>

          <div className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#" className="text-emerald-700">Beranda</a>
            <a href="#" className="hover:text-emerald-700">Daftar Dosen</a>
            <a href="#" className="hover:text-emerald-700">Peluang Riset</a>
            <a href="#" className="hover:text-emerald-700">Hibah</a>
            <a href="#" className="hover:text-emerald-700">Konferensi/CFP</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-700">
            Platform Kolaborasi Akademik
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Temukan mitra riset, dosen, dan peluang kolaborasi di Wakatobi.
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            KolabRiset Wakatobi adalah platform untuk mempertemukan dosen,
            peneliti, mahasiswa, dan praktisi dalam pengembangan riset,
            publikasi ilmiah, pengabdian masyarakat, serta inovasi daerah.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white shadow hover:bg-emerald-800"
            >
              Mulai Bergabung
            </a>

            <a
              href="#"
              className="rounded-xl border border-emerald-700 px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-50"
            >
              Lihat Daftar Dosen
            </a>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Fitur Utama</h2>

          <div className="space-y-4">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <h3 className="font-bold text-emerald-800">Direktori Dosen</h3>
              <p className="text-sm text-slate-600">
                Profil dosen berdasarkan bidang keahlian, kampus, mata kuliah,
                dan minat riset.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-4">
              <h3 className="font-bold text-emerald-800">Peluang Riset</h3>
              <p className="text-sm text-slate-600">
                Publikasi peluang penelitian, hibah, konferensi, dan call for
                papers.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-4">
              <h3 className="font-bold text-emerald-800">Kolaborasi</h3>
              <p className="text-sm text-slate-600">
                Menghubungkan peneliti lintas bidang untuk riset, publikasi,
                dan pengabdian.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-emerald-700">100+</div>
            <p className="mt-2 text-slate-600">Target dosen dan peneliti terdaftar</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-emerald-700">20+</div>
            <p className="mt-2 text-slate-600">Bidang keahlian riset dan pengabdian</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-emerald-700">1</div>
            <p className="mt-2 text-slate-600">Ekosistem kolaborasi riset Wakatobi</p>
          </div>
        </div>
      </section>
    </main>
  );
}