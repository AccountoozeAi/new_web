import { Check } from 'lucide-react';

export function EcommerceAggregatorStorySection() {
 const pricingPlans = [
//   {
//    name: 'Starter',
//    price: '$199 / Month',
//    features: [
//     'Upto 500 Transactions',
//     'Cash or Accrual',
//     'Chat/ Email Support',
//     // 'Bank Reconciliations',
//    ],
//   },
//   {
//    name: 'Growth',
//    price: '$399 / Month',
//    features: [
//     'Everything in Starter +',
//     'Upto ',
//     'Receipt Management',
//     'Bank Reconciliation',
//     'Bank Disbursements',
//    ],
//   },
//   {
//    name: 'Enterprise',
//    price: '$699 / Month',
//    features: [
//     'Daily reporting and updation',
//     'AP Management & Disbursements',
//     'Complex Accounting Set up',
//     'AP / AR Mailbox',
//     'Tax Preparation and Filing',
//    ],
//   },
 ];

 return (
  <section className="py-18 bg-white font-sans">
   <div className="container mx-auto max-w-6xl px-4">
    
    {/* Title */}
    <div className="text-center mb-16 space-y-4">
     <h2 className="text-4xl font-black text-[#1a1a1a]">
      Our Monthly Plans Starts at just<span className="text-[#FF4500]"> $199 </span>
     </h2>
     <div className="h-1.5 w-20 bg-[#FF4500] mx-auto rounded-full" />
    </div>

    
    {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
     {pricingPlans.map((plan, i) => (
      <div 
       key={i} 
       className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
      >
       <div className="text-center mb-8 space-y-2">
        <h3 className="text-2xl font-black text-[#FF4500] uppercase tracking-wider">
         {plan.name}
        </h3>
        <p className="text-4xl font-black text-[#1a1a1a] tracking-tight">
         {plan.price}
        </p>
        <div className="h-1 w-12 bg-[#FF4500] mx-auto mt-4" />
       </div>

       <ul className="space-y-5 mb-10 flex-grow">
        {plan.features.map((feature, idx) => (
         <li key={idx} className="flex items-start gap-3 text-sm font-bold text-gray-600 leading-tight">
          <Check className="h-5 w-5 text-[#FF4500] shrink-0 mt-0.5" />
          {feature}
         </li>
        ))}
       </ul>

       
      </div>
     ))}
    </div> */}

    {/* Bottom Banner */}
    <div className="text-center space-y-4">
     <p className="text-[#FF4500] text-xl font-black italic">No upfront Set up Cost.</p>
     <p className="text-2xl font-black text-[#1a1a1a]">Simple. Transparent. No Surprises.</p>
    </div>

   </div>
  </section>
 );
}