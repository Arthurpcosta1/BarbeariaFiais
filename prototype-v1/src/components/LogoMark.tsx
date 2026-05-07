export function LogoMark() {
  return (
    <div className="relative mx-auto flex aspect-[1.7] w-full max-w-[410px] items-center justify-center rounded-[50%] border border-white/10 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.18),rgba(7,7,7,0.74)_42%,#050505_78%)] px-10 shadow-[0_28px_90px_rgba(0,0,0,0.8)]">
      <span className="absolute -inset-y-7 left-[19%] w-3 bg-gradient-to-b from-transparent via-gold to-transparent blur-[2px]" />
      <span className="absolute -inset-y-9 right-[20%] w-3 bg-gradient-to-b from-transparent via-[#ffb000] to-transparent blur-[2px]" />
      <div className="relative z-10 text-center text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.7)]">
        <p className="font-display text-[clamp(2.7rem,13vw,5.8rem)] uppercase leading-[0.78] tracking-wide">
          Barbearia
        </p>
        <p className="font-display text-[clamp(2.4rem,11vw,5rem)] uppercase leading-[0.82] tracking-[0.13em]">
          Fiais
        </p>
        <div className="mx-auto mt-3 h-px w-40 bg-white/80" />
        <p className="mt-2 text-[10px] font-black uppercase tracking-[0.45em] text-goldSoft">Desde 2023</p>
      </div>
    </div>
  );
}
