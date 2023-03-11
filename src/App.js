import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

//merchantDashboards import
import MerchantDashboard from './dashboards/merchantDashboard/MerchantDashoard';
import Home from './pages/merchantDashoard/Home';
import Details from './pages/merchantDashoard/details/Layout';
import Property from './pages/merchantDashoard/Property';
import MyTenant from './pages/merchantDashoard/MyTenant';
import Payment from './pages/merchantDashoard/Payment';
import Request from './pages/merchantDashoard/Request';
import Settings from './pages/merchantDashoard/Settings';
import Files from './pages/merchantDashoard/Files';
import Accounting from './pages/merchantDashoard/accounting/Accounting';
import Bookeeping from './pages/merchantDashoard/bookKeeping/Bookeeping';
import ManagementTeam from './pages/merchantDashoard/ManagementTeam';

//tenantDashboards import
import TenantDashboard from './dashboards/tenantDashboard/TenantDashboard';
import TenantOverview from './pages/tenantDashboard/Overview';
import Report from './pages/tenantDashboard/Report';

const LandingPage = lazy(() =>
  import(/*webpackChunkName:'landing Page'*/ './pages/landingPage/LandingPage').then((module) => ({
    default: module.LandingPage,
  })),
);
const NewSignUpForm = lazy(() =>
  import(/*webpackChunkName:'sign up'*/ './pages/auth/NewLogin').then((module) => ({
    default: module.NewSignUpForm,
  })),
);
const Form = lazy(() =>
  import(/*webpackChunkName:'form'*/ './pages/auth/Form').then((module) => ({
    default: module.Form,
  })),
);
const ForgotPassword = lazy(() =>
  import(/*webpackChunkName:'forgot password'*/ './pages/auth/ForgotPassword').then((module) => ({
    default: module.ForgotPassword,
  })),
);
const HomeResident = lazy(() =>
  import(/*webpackChunkName:'home resident'*/ './pages/home/Home').then((module) => ({
    default: module.HomeResident,
  })),
);
const Residents = lazy(() =>
  import(/*webpackChunkName:'residents'*/ './pages/residents/Residents').then((module) => ({
    default: module.Residents,
  })),
);
const Properties = lazy(() =>
  import(/*webpackChunkName:'properties'*/ './pages/properties/properties.jsx').then((module) => ({
    default: module.Properties,
  })),
);

const LandlordProperty = lazy(() =>
  import(/*webpackChunkName:'landlord property'*/ './pages/NewProperties.jsx').then((module) => ({
    default: module.LandlordProperty,
  })),
);

const Platforms = lazy(() =>
  import(/*webpackChunkName:'platforms'*/ './pages/Platforms/Platforms').then((module) => ({
    default: module.Platforms,
  })),
);

const Contact = lazy(() =>
  import(/*webpackChunkName:'Contact'*/ './pages/Contact').then((module) => ({
    default: module.Contact,
  })),
);

const EmailVerification = lazy(() =>
  import(/*webpackChunkName:'EmailVerifiaction'*/ './pages/auth/EmailVerification').then(
    (module) => ({
      default: module.EmailVerification,
    }),
  ),
);

const VerificationCode = lazy(() =>
  import(/*webpackChunkName:'VerificationCode'*/ './pages/auth/VerificationCode').then(
    (module) => ({
      default: module.VerificationCode,
    }),
  ),
);

const ComingSoon = lazy(() =>
  import(/*webpackChunkName:'comingSoon'*/ './pages/comingSoon.jsx').then((module) => ({
    default: module.ComingSoon,
  })),
);

function App() {
  return (
    <div className="App" data-testid="app">
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              {' '}
              <Loader />
            </>
          }
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/why-mend" element={<WhyMend />} /> */}
            {/* <Route path="/community" element={<Community />} /> */}
            <Route path="/login" element={<NewSignUpForm />} />
            <Route path="/sign-up" element={<Form />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/emailVerification" element={<EmailVerification />} />
            <Route path="/VerificationCode" element={<VerificationCode />} />

            <Route path="/platforms" element={<Platforms />} />
            <Route path="/digitalResident" element={<HomeResident />} />
            <Route path="/residents" element={<Residents />} />

            <Route path="/properties" element={<Properties />} />
            <Route path="/landlordProperty" element={<LandlordProperty />} />

            <Route path="/comingSoon" element={<ComingSoon />} />
          </Routes>
        </Suspense>
        {/* merchantDashboard routes path */}
        <Routes>
          <Route path="/merchant-dashboard" element={<MerchantDashboard />}>
            <Route index element={<Home />} />
            <Route path="details" element={<Details />} />
            <Route path="property" element={<Property />} />
            <Route path="tenant" element={<MyTenant />} />
            <Route path="payment" element={<Payment />} />
            <Route path="request" element={<Request />} />
            <Route path="settings" element={<Settings />} />
            <Route path="files" element={<Files />} />
            <Route path="records" element={<Accounting />} />
            <Route path="book-keeping" element={<Bookeeping />} />
            <Route path="management-team" element={<ManagementTeam />} />
          </Route>

          {/* tenantDashboard routes path */}

          {/* merchantDashboard routes path */}
          <Route path="/merchant-dashboard" element={<MerchantDashboard />}>
            <Route index element={<Home />} />
            <Route path="details" element={<Details />} />
            <Route path="property" element={<Property />} />
            <Route path="tenant" element={<MyTenant />} />
            <Route path="payment" element={<Payment />} />
            <Route path="request" element={<Request />} />
            <Route path="settings" element={<Settings />} />
            <Route path="files" element={<Files />} />
            <Route path="records" element={<Accounting />} />
            <Route path="book-keeping" element={<Bookeeping />} />
          </Route>

          {/* tenantDashboard routes path */}

          <Route path="/tenant-dashboard" element={<TenantDashboard />}>
            <Route index element={<TenantOverview />} />
            <Route path="report" element={<Report />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
