import { useParams } from "react-router-dom";

export default function Currency() {
  const { currencyId } = useParams(); // This catches 'usd' from /currency/usd

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold uppercase">Details for: {currencyId}</h2>
      <p className="mt-4">Currently showing real-time data for {currencyId.toUpperCase()}.</p>
      {/* Later you can fetch specific graph data for this currency here */}
    </div>
  );
}