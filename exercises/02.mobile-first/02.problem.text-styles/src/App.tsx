import { EpicStackLogo, logos } from "./logos/logos";

export default function App() {
  return (
    <div className="grid min-h-screen place-items-center px-4 py-16">
      <div className="grid place-items-center gap-12">
        <div className="flex flex-col items-center text-center max-w-md">
          <EpicStackLogo className="size-20" />
          <h1 className="text-4xl font-medium mt-6">
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p className="text-slate-600 mt-4">
            Check the{" "}
            <a className="text-black underline" href="#">
              Getting Started
            </a>{" "}
            guide file for how to get your project off the ground!
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
