export default function Result(prop) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-white mb-6">Quiz Result</h2>
      <div className="text-xl font-semibold text-slate-100 mb-4">
        Your score is:{" "}
        <span className="text-green-400">{prop.score}</span> out of{" "}
        <span className="text-blue-400">{prop.total}</span>
      </div>
      <button
        onClick={() => prop.setshowResult(false)}
        className="mt-6 px-6 py-2 bg-white text-slate-800 font-bold rounded-lg shadow hover:bg-slate-200 transition-all"
      >
        Home
      </button>
    </div>
  );
}
