// import React, { useState } from 'react';

// const RegisterScreen = () => {
//   const [business, setBusiness] = useState({
//     name: '',
//     contact: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBusiness({
//       ...business,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send `business` to your backend server
//     console.log('Business registered:', business);
//     // Reset form after submission
//     setBusiness({ name: '', contact: '' });
//   };

//   return (
//     <div className="register-screen">
//       <h2>Register Your Business</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Business Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={business.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="contact">Contact Info:</label>
//           <input
//             type="text"
//             id="contact"
//             name="contact"
//             value={business.contact}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterScreen;
