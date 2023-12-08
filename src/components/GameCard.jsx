export default function GameCard({ img, title, platforms, rating }) {
  return (
    <div className="w-[300px] h-[300px] rounded-lg gamecard">
      <img src={img} alt={title} className="w-[300px] h-[200px] rounded-lg" />
      <div className="mx-3 my-3">
        <h3 className="text-slate-50 text-xl font-semibold">{title}</h3>
        <div className="text-slate-50">
          {platforms.map((platform) => {
            return <span>{platform}</span>;
          })}
        </div>
        <button className="text-zinc-500">+Add to wishlist</button>
      </div>
    </div>
  );
}
