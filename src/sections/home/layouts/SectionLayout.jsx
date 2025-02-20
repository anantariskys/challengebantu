import Button from "@/components/Button";

const SectionLayout = ({ children, title,border }) => {
  return (
    <section className={`${border} bg-white`}>
      <main className="container md:py-24 py-10 space-y-4 md:space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-4xl font-medium">{title}</h2>
          <Button
            variant="transparent"
            iconPosition="right"
            icon={"mingcute:arrow-right-fill"}
          >
            View All
          </Button>
        </div>
        {children}
      </main>
    </section>
  );
};

export default SectionLayout;
