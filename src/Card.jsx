export default function Card({ title, img }) {
  return (
    <div className="relative w-60 h-70 flex items-center justify-center md:w-50 md:h-56">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-orange-300 to-yellow-400 rounded-2xl md:hidden " />
      
      {/* Inner Card */}
      <div className="relative w-40 h-54 bg-white/40 backdrop-blur-md rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 hover:bg-white md:w-46 md:h-50 md:gap-2">
        <img src={img} alt={title} className="w-16 h-16 bg-white rounded-full shadow-xl p-2" />
        <h2 className="text-lg font-light text-center">{title}</h2>
      </div>
    </div>
  );
}
