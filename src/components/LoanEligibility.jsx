import React from "react";

function LoanEligibility() {
  return (
    <section id="loans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-semibold mb-3">
            LOAN ELIGIBILITY
          </p>

          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Who Can Apply?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Loan approvals depend on income profile, taxation,
            financial history, and property valuation.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          
          <div className="bg-gray-100 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Salaried
            </h3>
            <p className="text-gray-600">
              Employees with stable monthly income.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Business Owners
            </h3>
            <p className="text-gray-600">
              MSMEs, startups, and entrepreneurs.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Property Owners
            </h3>
            <p className="text-gray-600">
              Individuals with residential/commercial assets.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Tax Filers
            </h3>
            <p className="text-gray-600">
              Applicants with strong income tax records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoanEligibility;