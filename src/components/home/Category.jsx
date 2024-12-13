function Category({ img, count, title }) {
  return (
    <div className="w-full group  text-white flex flex-col rounded-2xl  bg-cover bg-no-repeat bg-center h-60 relative overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-110  bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-overlay"
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
      <div className="pl-6 pr-20 mt-6 z-50">
        {" "}
        <p className="text-muted/90">{count} Services</p>
        <h5 className="mt-1 text-xl font-bold">{title}</h5>
      </div>
    </div>
  );
}

export default Category;
