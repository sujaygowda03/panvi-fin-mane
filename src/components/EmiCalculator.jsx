import React, { useState } from "react";

function EmiCalculator() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const rate = parseFloat(interest) / 12 / 100;
    const months = parseFloat(years) * 12;

    const emiValue =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <section id="calculator" className="py-24 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          
          <div className="text-center mb-10">
            <p className="text-yellow-500 font-semibold mb-3">
              EMI CALCULATOR
            </p>

            <h2 className="text-4xl font-bold text-blue-950">
              Calculate Your Loan EMI
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            
            <input
              type="number"
              placeholder="Loan Amount"
              className="p-4 rounded-xl border outline-none"
              onChange={(e) => setAmount(e.target.value)}
            />

            <input
              type="number"
              placeholder="Interest Rate %"
              className="p-4 rounded-xl border outline-none"
              onChange={(e) => setInterest(e.target.value)}
            />

            <input
              type="number"
              placeholder="Years"
              className="p-4 rounded-xl border outline-none"
              onChange={(e) => setYears(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              onClick={calculateEMI}
              className="bg-blue-950 hover:bg-blue-900 text-white px-10 py-4 rounded-full font-semibold"
            >
              Calculate EMI
            </button>
          </div>

          {emi && (
            <div className="mt-10 bg-yellow-100 p-8 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-blue-950 mb-3">
                Monthly EMI
              </h3>

              <p className="text-5xl font-bold text-yellow-600">
                ₹ {emi}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default EmiCalculator;