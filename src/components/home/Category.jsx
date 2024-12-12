function Category({ img, count, title }) {
  return (
    <div
      className="w-full bg-black/50 bg-blend-overlay text-white flex flex-col rounded-2xl  bg-cover bg-no-repeat bg-center h-60"
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className="pl-6 pr-20 mt-6">
        {" "}
        <p className="text-muted/90">{count} Services</p>
        <h5 className="mt-1 text-xl font-bold">{title}</h5>
      </div>
    </div>
  );
}

export default Category;
