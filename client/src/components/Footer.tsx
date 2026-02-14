import logo from "@assets/png-ustay-profile-dark-no-tag_1771105377613.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-mono mb-4 text-white">
              INTL_HACK<span className="text-primary">/&gt;</span>
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Empowering international students to build the future through innovation, technology, and global collaboration.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Links</h4>
            <ul className="space-y-2">
              {['About', 'Tracks', 'Timeline', 'Prizes'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Sponsored By</h4>
            <div className="flex flex-col gap-4">
              <img src={logo} alt="USTAY Logo" className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity self-start" />
              <p className="text-xs text-muted-foreground">
                USTAY Global Mobility Solutions
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © 2026 International Innovators Hackathon.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
