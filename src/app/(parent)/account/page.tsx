export default function Account({ children }: any) {
  return (
    <section className="px-[9.25rem] max-[1024px]:px-[0.25rem] flex flex-col gap-[1rem] container mx-auto">
      {children}
    </section>
  );
}
