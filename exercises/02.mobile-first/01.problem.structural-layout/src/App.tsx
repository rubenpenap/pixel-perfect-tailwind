import { EpicStackLogo, logos } from "./logos/logos";

export default function App() {
  return (
    <div className="grid place-items-center min-h-dvh px-4 py-16">
      <div className="grid gap-12 place-items-center">
        <div>
          <EpicStackLogo className="size-20" />
          <h1>
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p>
            Check the <a href="#">Getting Started</a> guide file for how to get
            your project off the ground!
          </p>
        </div>
        <ul>
          {logos.map((logo) => (
            <li key={logo.href}>
              <a href={logo.href}>
                <img src={logo.src} alt={logo.alt} className="w-16" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
