export const Placeholder = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(44,94,134,1)_0%,rgba(31,67,95,1)_100%)]" />

      <img
        className="relative w-[264px] h-[264px] z-10"
        alt="Logo"
        src="/logo.png"
      />
    </div>
  );
};
