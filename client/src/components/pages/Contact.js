import React from "react";

function Contact() {
    return (
        <div>
            
            <input type="name" placeholder="Name" id="name">
            </input>
            <input type="email" placeholder="Enter your email" id="email">
            </input>
            <input type="message" id="message">
            </input>
        </div>
    )
}

// const Contact = () => {
//     return (
//       <div className="flex w-full min-h-screen justify-center items-center">
//         <div className="flex flex-col space-y-6 bg-gray-900 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
//           <div className="flex flex-col justify-between">
//             <div className="underline">
//               <h1>Let's Create Together!</h1>
//         <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-gray-900 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
//           <div className="flex flex-col space-y-8 justify-between">
//             <div>
//               <h1 className="underline text-bold text-4xl tracking-wide text-blue-400">
//                 Let's Create Together!
//               </h1>
//             </div>
//             <div className="flex flex-col space-y-6">
//               <div className="inline-flex space-x-2 items-center">
//                 <ion-icon name="call"></ion-icon>
//                 <span>+1(307) 267 0814</span>
//               </div>
//               <div className="inline-flex space-x-2 items-center">
//                 <ion-icon name="mail"></ion-icon>
//                 <span>thefiftharthur@gmail.com</span>
//               </div>
//               <div className="inline-flex space-x-2 items-center">
//                 <ion-icon name="location"></ion-icon>
//                 <span>Fort Collins, CO</span>
//               </div>
//             </div>
//             <div className="flex space-x-4 text-3xl">
//               <a href="https://www.facebook.com/artie.cann.5">
//                 <ion-icon name="logo-facebook"></ion-icon>
//               </a>
//               <a href="https://twitter.com/arthurthe05th">
//                 <ion-icon name="logo-twitter"></ion-icon>
//               </a>
//               <a ahref="https://www.linkedin.com/in/arthur-cann-62b213248/">
//                 <ion-icon name="logo-linkedin"></ion-icon>
//               </a>
//             </div>
//           </div>
//           <div>
//             <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
//               <form action="" className="flex flex-col space-y-4">
//                 <div>
//                   <label for="" className="text-sm">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Your name"
//                     className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
//                   ></input>
//                 </div>
//                 <div>
//                   <label for="" className="text-sm">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
//                   ></input>
//                 </div>
//                 <div>
//                   <label for="" className="text-sm">
//                     Message
//                   </label>
//                   <textarea
//                     placeholder="Message"
//                     rows={4}
//                     className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
//                   ></textarea>
//                 </div>
//                 <button className="inline-block self-end bg-blue-400 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
//                   Send message
//                 </button>
//               </form>
//             </div>
//             <div></div>
//             <div></div>
//           </div>
//           <div></div>
//         </div>
//       </div>
//     );
//   };

export default Contact