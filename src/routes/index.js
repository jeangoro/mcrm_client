import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

//layouts
import NonAuthLayout from "../layouts/NonAuthLayout";
import VerticalLayout from "../layouts/index";

import Contacts from "../pages/Contacts";

import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ChangePasswordPage from "../pages/Authentication/ChangePassword";

import UserProfile from "../pages/Authentication/UserProfile";
import ContactsDetailsPage from "../pages/Contacts/details";
import MailInbox from "../pages/EmailInbox";
import Chat from "../pages/Chat";
import Dashboard from "../pages/Dashboard";
import Agenda from "../pages/Agenda";
import Services from "../pages/Services";
import BusinessProvider from "../pages/BusinessProvider";
import Finances from "../pages/Finances";
import Campaign from "../pages/Campaign";
import Reporting from "../pages/Reporting";
import Admin from "../pages/Admin";
import AdminAgency from "../pages/AdminAgency";
import AdminUser from "../pages/Admin/AdminUser";
import AgencySettings from "../pages/Admin/AgencySettings";
import SystemSettings from "../pages/Admin/SystemSettings";
import Security from "../pages/Security";
import Authorities from "../pages/Security/Authorities";
import Groups from "../pages/Security/Groups";
import Users from "../pages/Security/Users";
import ErrorBoundaryRoutes from "./error-boundary-routes";
import ContactProfile from "../pages/Commercial/Contacts/ContactProfile";
import Contact from "../pages/Commercial/Contacts/ContactsGrid";
import Accompagnement from "../pages/Services/ServicesClient/Accompagnement/index";
import ServicesClient from "../pages/Services/ServicesClient";
import FormulaireAccompagnement from "../pages/Services/ServicesClient/Accompagnement/FormulaireAccompagnement";
import SuiviAccompagnement from "../pages/Services/ServicesClient/Accompagnement/SuiviAccompagnement";
import Admission from "../pages/Services/ServicesClient/Admission/index";
import FormulaireAdmission from "../pages/Services/ServicesClient/Admission/FormulaireAdmission";
import SuiviAdmission from "../pages/Services/ServicesClient/Admission/SuiviAdmission";
import CautionBancaire from "../pages/Services/ServicesClient/CautionBancaire/index";
import FormulaireCautionBancaire from "../pages/Services/ServicesClient/CautionBancaire/FormulaireCautionBancaire"
import SuiviCautionBancaire from "../pages/Services/ServicesClient/CautionBancaire/SuiviCautionBancaire"
import FormAssurance from "../pages/Services/ServicesClient/Assurance/FormAssurance";
import Suiviassurance from "../pages/Services/ServicesClient/Assurance/SuiviAssurance";
import Assurance from "../pages/Services/ServicesClient/Assurance/index";
import FormBilletAvion from "../pages/Services/ServicesClient/BilletAvion/FormBilletAvion";
import SuiviBilletAvion from "../pages/Services/ServicesClient/BilletAvion/SuivisBilletAvion";
import BilletAvion from "../pages/Services/ServicesClient/BilletAvion/index";
import FormLogement from "../pages/Services/ServicesClient/Logement/FormLogement";
import SuiviLogement from "../pages/Services/ServicesClient/Logement/SuivisLogement";
import Logement from "../pages/Services/ServicesClient/Logement/index";







const Index = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route element={<NonAuthLayout />}>
        <Route path="/logout" element={<Logout />} key={0} exact={true} />
        <Route path="/login" element={<Login />} key={1} exact={true} />
        <Route path="/forgot-password" element={<ForgetPasswordPage />} key={2} exact={true} />
        <Route path="/change-password" element={<ChangePasswordPage />} key={3} exact={true} />
        <Route path="/register" element={<Register />} key={4} exact={true} />
      </Route>
      <Route element={<VerticalLayout />}>
        <Route path="/contacts" element={<Contacts />} key={5} exact={true} />
        <Route path="/contacts/:id" element={<ContactsDetailsPage />} key={6} exact={true} />
        <Route path="/agenda" element={<Agenda />} key={7} exact={true} />
        <Route path="/profile" element={<UserProfile />} key={8} exact={true} />
        <Route path="/apps-chat" element={<Chat />} key={9} exact={true} />
        <Route path="/apps-mailbox" element={<MailInbox />} key={10} exact={true} />
        <Route path="/services" element={<Services />} key={11} exact={true} />
        <Route path="/business-provider" element={<BusinessProvider />} key={12} exact={true} />
        <Route path="/finances" element={<Finances />} key={13} exact={true} />
        <Route path="/marketing/campaign" element={<Campaign />} key={14} exact={true} />
        <Route path="/reporting/*" element={<Reporting />} key={15} exact={true} />
        <Route path="/admin" element={<Admin />} key={16} exact={true} />
        <Route path="/admin/user/*" element={<Security />} key={17} exact={true} />
        <Route path="/admin/agency" element={<AgencySettings />} key={18} exact={true} />
        <Route path="/admin/system" element={<SystemSettings />} key={19} exact={true} />
        <Route path="/admin-agency" element={<AdminAgency />} key={20} exact={true} />
        <Route path="/security/authority/*" element={<Authorities />} key={21} exact={true} />
        <Route path="/security/group/*" element={<Groups />} key={22} exact={true} />
        <Route path="/security/user/*" element={<Users />} key={23} exact={true} />
        <Route path="/contacts/profile" element={<ContactProfile />} key={29} exact={true} />
        <Route path="/commercial/contacts" element={<Contact />} key={30} exact={true} />
        <Route path="/accompagnement" element={<Accompagnement />} key={31} exact={true} />
        <Route path="/services-client" element={<ServicesClient />} key={32} exact={true} />
        <Route path="/form-accompagnement" element={<FormulaireAccompagnement />} key={33} exact={true} />
        <Route path="/suivi-accompagnement" element={<SuiviAccompagnement />} key={34} exact={true} />
        <Route path="/admission" element={<Admission />} key={35} exact={true} />
        <Route path="/form-admission" element={<FormulaireAdmission />} key={36} exact={true} />
        <Route path="/suivi-admission" element={<SuiviAdmission />} key={37} exact={true} />
        <Route path="/caution-bancaire" element={<CautionBancaire />} key={38} exact={true} />
        <Route path="/form-caution-bancaire" element={<FormulaireCautionBancaire />} key={39} exact={true} />
        <Route path="/suivi-cautionbancaire" element={<SuiviCautionBancaire />} key={40} exact={true} />
        <Route path="/formAssurance" element={<FormAssurance />} key={41} exact={true} />
        <Route path="/suiviassurance" element={<Suiviassurance />} key={42} exact={true} /> 
        <Route path="/assurance" element={<Assurance />} key={44} exact={true} />
        <Route path="/suivibilletAvion" element={<SuiviBilletAvion />} key={45} exact={true} />
        <Route path="/formbilletAvion" element={<FormBilletAvion />} key={46} exact={true} />
        <Route path="/billetAvion" element={<BilletAvion />} key={47} exact={true} />
        <Route path="/suivilogement" element={<SuiviLogement />} key={48} exact={true} />
        <Route path="/formlogement" element={<FormLogement />} key={49} exact={true} />
        <Route path="/logement" element={<Logement />} key={50} exact={true} />





        <Route path="/dashboard" element={<Dashboard />} key={25} exact={true} />
        <Route path="/" element={<Navigate to="/dashboard" />} key={26} exact={true} />
        <Route path="*" element={<Navigate to="/dashboard" />} key={27} exact={true} />
        <Route path="/index" element={<Navigate to="/dashboard" />} key={28} exact={true} />
       
      </Route>
    </ErrorBoundaryRoutes>
  );
};

export default Index;
