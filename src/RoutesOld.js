// import React from "react";
// import { Routes, Route, Navigate } from 'react-router-dom'
// import Dashbaord from "./components/Dashboard";
// import InnerContent from "./components/InnerContent";
// import Tabs from "./components/Tabs";
// import Settings from "./components/Settings";
// import Tab1 from "./components/Tab1";
// import Tab2 from "./components/Tab2";
// import Tab3 from "./components/Tab3";
// import Login from "./components/Login";
// import ProtectetRoute from "./components/ProtectedRoute";

// const MainRoutes = () => {
//     return <div>
//         <Routes>
//             <Route element={<ProtectetRoute />}>
//                 <Route path="/" element={<InnerContent />}>
//                     <Route path="/" element={<Navigate replace to="dashboard" />} />
//                     <Route path="/dashboard" element={<Dashbaord />} />
//                     <Route path="/tabs" element={<Tabs />}>
//                         <Route path="/tabs" element={<Navigate replace to="tab1" />} />
//                         <Route path="tab1" element={<Tab1 />} />
//                         <Route element={<ProtectetRoute permission='ADMIN' />}>
//                             <Route path="tab2" element={<Tab2 />} />
//                         </Route>
//                         <Route path="tab3" element={<Tab3 />} />
//                     </Route>
//                 </Route>
//             </Route>
//             <Route path="login" element={<Login />} />
//             <Route path="/settings" element={<Settings />} />
//         </Routes>
//     </div>
// }

// export default MainRoutes