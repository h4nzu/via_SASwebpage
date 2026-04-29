import "./globals.css";

export const metadata = {
  title: "Eya's Website", // Change this to your desired tab name
  description: "SAS1: Self and Society Project",
  icons: {
    icon: "/icon.png", // Explicitly pointing to your png
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-brand-cream text-brand-charcoal">
        <nav className="animate-nav max-w-6xl mx-auto flex justify-between items-center p-8 sticky top-0 bg-brand-cream/80 backdrop-blur-md z-50">
          <div className="text-2xl font-bold tracking-tighter hover:text-brand-pink transition-colors cursor-pointer">VJ.</div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
            <a href="#about" className="nav-link hover:text-brand-sage transition-colors">About</a>
            <a href="#reflections" className="nav-link hover:text-brand-sage transition-colors">Reflections</a>
            <a href="#manifestos" className="nav-link hover:text-brand-sage transition-colors">Manifestos</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="text-center py-20 border-t border-black/5 mt-20">
          <p className="font-serif italic text-lg opacity-70">"Thanks for being here."</p>
          <p className="text-[10px] uppercase tracking-widest mt-4 opacity-40">© 2026 Viasiree Jamandron</p>
        </footer>
      </body>
    </html>
  );
}