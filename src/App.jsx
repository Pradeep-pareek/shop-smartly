import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
// import TokenLock from "./pages/TokenLock";
// import CustomToken from "./pages/CustomToken";
// import StepTwo from "./pages/StepTwo";
// import StepThree from "./pages/StepThree";
// import StepFour from "./pages/StepFour";
// import TokenClaim from "./pages/TokenClaim";
import Landing from "./pages/Landing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <main className="body">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Landing />
            </Suspense>
          }
        />
        <Route path="/" element={<Layout />} >
          {/* <Route path="/token-lock" element={<TokenLock />} /> */}
          {/* <Route path="/step-one" element={<CustomToken />} /> */}
          {/* <Route path="/step-two" element={<StepTwo />} /> */}
          {/* <Route path="/step-three" element={<StepThree />} /> */}
          {/* <Route path="/step-three" element={<StepFour />} /> */}
          {/* <Route path="/token-claim" element={<TokenClaim />} /> */}
        </Route>
      </Routes>
    </main>
  )
}

export default App
