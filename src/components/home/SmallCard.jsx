function SmallCard({ img, title, sub }) {
  return (
    <div className="flex flex-col gap-4 pr-4">
      <img className="w-8" src={img} alt="" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-primary/80">{sub}</p>
    </div>
  );
}

export default SmallCard;
