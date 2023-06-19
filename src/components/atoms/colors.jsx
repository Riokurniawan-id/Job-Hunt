function Colors() {
  return (
    <>
      <h1>COLOR</h1>
      <div className="flex flex-wrap gap-5">
        <h2 className="my-auto">BRAND</h2>
        <button className="p-8 bg-primary">Primary</button>
        <button className="p-8 bg-secondary">Secondary</button>
        <button className="p-8 bg-tertiary">Tertiary</button>
      </div>
      <div className="flex flex-wrap gap-5 mt-3">
        <h2 className="my-auto">ACCENTS</h2>
        <button className="p-8 bg-yellow">Primary</button>
        <button className="p-8 bg-green">Secondary</button>
        <button className="p-8 bg-red">Tertiary</button>
        <button className="p-8 bg-blue">Primary</button>
        <button className="p-8 bg-purple">Secondary</button>
      </div>
      <div className="flex flex-wrap gap-5 mt-3">
        <h2 className="my-auto">ACCENTS</h2>
        <button className="p-8 bg-100">100</button>
        <button className="p-8 bg-80">80</button>
        <button className="p-8 bg-60">60</button>
        <button className="p-8 bg-40">40</button>
        <button className="p-8 bg-20">20</button>
        <button className="p-8 bg-10">10</button>
      </div>
    </>
  );
}

export default Colors;
