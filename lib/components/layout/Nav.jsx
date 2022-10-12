const navlinks = [
  { href: "/.", title: "home" },
  { href: "/about", title: "about" },
  { href: "/help", title: "help" },
];

export default function Nav() {
  return (
    <nav>
      <div className="brand">
        <a href="./">brand</a>
      </div>
      <div className="toggler">
        <button>+</button>
      </div>
      <div className="links">
        {navlinks.map(({ href, title }, k) => (
          <div key={k}>
            <a href={href} title={title}>
              {title}
            </a>
          </div>
        ))}
      </div>
      <div className="logs">
        <button>sign up</button>
        <button>log in</button>
        {/* logs */}
      </div>
    </nav>
  );
}
