import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ROLE_CONTACT,
  ROLE_PROFILE,
  ROLE_CHAT,
  ROLE_MAILBOX,
  ROLE_SERVICE,
  ROLE_BUSINESS_PROVIDER,
  ROLE_FINANCE,
  ROLE_MARKETING,
  ROLE_REPORTING,
  ROLE_ADMIN,
  ROLE_ADMIN_AGENCY,
  ROLE_DASHBOARD,
  ROLE_AGENDA,
} from "../routes/roles";

import { hasAnyAuthority } from "../store/auth";

const Navdata = () => {
  const history = useNavigate();

  const account = useSelector((state) => state.authentication.account);

  const [isDashboard, setIsDashboard] = useState(false);
  const [isContacts, setIsContacts] = useState(false);
  const [isContactProfile, setIsContactProfile] = useState(false);
  const [isAgenda, setIsAgenda] = useState(false);
  const [isEmailMenu, setIsEmailMenu] = useState(false);
  const [isChatMenu, setIsChatMenu] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isBusinessProvider, setIsBusinessProvider] = useState(false);
  const [isFinances, setIsFinances] = useState(false);
  const [isMarketing, setIsMarketing] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [isAdministration, setIsAdministration] = useState(false);
  const [isSecurity, setIsSecurity] = useState(false);
  const [isCommercial, setIsCommercial] = useState(false);
  const [isCurrentState, setIsCurrentState] = useState("Contacts");

  const computeIsAuthorized = (roles) => hasAnyAuthority(roles, account);

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id)) document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (isCurrentState !== "Contacts") {
      setIsContacts(false);
    }
  }, [history, isCurrentState, isContacts]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Tableau de bord",
      icon: "ri-dashboard-2-fill",
      link: "/#",
      stateVariables: isDashboard,
      isAuthorized: computeIsAuthorized([ROLE_DASHBOARD]),
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIsCurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    {
      id: "commercial",
      label: "Commercial",
      icon: "ri-lock-2-fill",
      link: "/#",
      stateVariables: isCommercial,
      isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
      click: function (e) {
        e.preventDefault();
        setIsCommercial(!isCommercial);
        setIsCurrentState("Commercial");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "agenda",
          label: "Agenda",
          link: "/commercial/agenda",
          parentId: "commercial",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
        {
          id: "contacts",
          label: "Contacts",
          link: "/commercial/contacts",
          parentId: "commercial",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
        {
          id: "opportunites",
          label: "Opportunités",
          link: "/commercial/opportunites",
          parentId: "commercial",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
        {
          id: "devis",
          label: "Devis",
          link: "/commercial/devis",
          parentId: "commercial",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
        {
          id: "catalogue-produits",
          label: "Catalogue produits",
          link: "/commercial/catalogue-produits",
          parentId: "commercial",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
      ],
    },
    {
      id: "contacts",
      label: "Contacts",
      icon: "ri-contacts-book-2-fill",
      link: "/contacts",
      stateVariables: isContacts,
      isAuthorized: computeIsAuthorized([ROLE_CONTACT]),
      click: function (e) {
        e.preventDefault();
        setIsContacts(!isContacts);
        setIsCurrentState("Contacts");
        updateIconSidebar(e);
      },
    },
    {
      id: "contacts-profile",
      label: "Contact profile",
      icon: "ri-contacts-book-2-fill",
      link: "/contacts/profile",
      stateVariables: isContactProfile,
      isAuthorized: computeIsAuthorized([ROLE_CONTACT]),
      click: function (e) {
        e.preventDefault();
        setIsContactProfile(!isContactProfile);
        setIsCurrentState("Contact profile");
        updateIconSidebar(e);
      },
    },
    {
      id: "agenda",
      label: "Agenda",
      icon: "ri-calendar-fill",
      link: "/agenda",
      stateVariables: isAgenda,
      isAuthorized: computeIsAuthorized([ROLE_AGENDA]),
      click: function (e) {
        e.preventDefault();
        setIsAgenda(!isAgenda);
        setIsCurrentState("Agenda");
        updateIconSidebar(e);
      },
    },
    {
      id: "apps-mailbox",
      label: "Messages",
      icon: "ri-mail-send-fill",
      link: "/apps-mailbox",
      stateVariables: isEmailMenu,
      isAuthorized: computeIsAuthorized([ROLE_MAILBOX]),
      click: function (e) {
        e.preventDefault();
        setIsEmailMenu(!isEmailMenu);
        setIsCurrentState("Email");
        updateIconSidebar(e);
      },
    },
    {
      id: "apps-chat",
      label: "Messenger",
      icon: "ri-chat-2-fill",
      link: "/apps-chat",
      stateVariables: isChatMenu,
      isAuthorized: computeIsAuthorized([ROLE_CHAT]),
      click: function (e) {
        e.preventDefault();
        setIsChatMenu(!isChatMenu);
        setIsCurrentState("Chat");
        updateIconSidebar(e);
      },
    },
    {
      id: "services",
      label: "Mes Services",
      icon: "ri-server-fill ",
      link: "/services",
      stateVariables: isServices,
      isAuthorized: computeIsAuthorized([ROLE_SERVICE]),
      click: function (e) {
        e.preventDefault();
        setIsServices(!isServices);
        setIsCurrentState("Services");
        updateIconSidebar(e);
      },
    },
    {
      id: "business-provider",
      label: "Business Provider",
      icon: "ri-briefcase-fill ",
      link: "/business-provider",
      stateVariables: isBusinessProvider,
      isAuthorized: computeIsAuthorized([ROLE_BUSINESS_PROVIDER]),
      click: function (e) {
        e.preventDefault();
        setIsBusinessProvider(!isBusinessProvider);
        setIsCurrentState("BusinessProvider");
        updateIconSidebar(e);
      },
    },
    {
      id: "finances",
      label: "Finances",
      icon: "ri-money-euro-circle-fill",
      link: "/finances",
      stateVariables: isFinances,
      isAuthorized: computeIsAuthorized([ROLE_FINANCE]),
      click: function (e) {
        e.preventDefault();
        setIsFinances(!isFinances);
        setIsCurrentState("Finances");
        updateIconSidebar(e);
      },
    },
    {
      id: "marketing",
      label: "Marketing",
      icon: "ri-message-2-fill",
      link: "/#",
      stateVariables: isMarketing,
      isAuthorized: computeIsAuthorized([ROLE_MARKETING]),
      click: function (e) {
        e.preventDefault();
        setIsMarketing(!isMarketing);
        setIsCurrentState("Marketing");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "campaign",
          label: "Campaign",
          link: "/marketing/campaign",
          parentId: "marketing",
          isAuthorized: computeIsAuthorized([ROLE_MARKETING]),
        },
      ],
    },
    {
      id: "reporting",
      label: "Reporting",
      icon: "ri-database-fill ",
      link: "/reporting",
      stateVariables: isReporting,
      isAuthorized: computeIsAuthorized([ROLE_REPORTING]),
      click: function (e) {
        e.preventDefault();
        setIsReporting(!isReporting);
        setIsCurrentState("Reporting");
        updateIconSidebar(e);
      },
    },
    {
      id: "admin",
      label: "Administration",
      icon: "ri-settings-5-fill",
      link: "/#",
      stateVariables: isAdministration,
      isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
      click: function (e) {
        e.preventDefault();
        setIsAdministration(!isAdministration);
        setIsCurrentState("Administration");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "admin-user",
          label: "Utilisateur",
          link: "/admin/user",
          parentId: "admin",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
        {
          id: "admin-agency",
          label: "Paramètre agence",
          link: "/admin/agency",
          parentId: "admin",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
        {
          id: "admin-user",
          label: "Paramètres système",
          link: "/admin/system",
          parentId: "admin",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
      ],
    },

    {
      id: "security",
      label: "Sécurité",
      icon: "ri-lock-2-fill",
      link: "/#",
      stateVariables: isSecurity,
      isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
      click: function (e) {
        e.preventDefault();
        setIsSecurity(!isSecurity);
        setIsCurrentState("Sécurité");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "authority",
          label: "Autorisations",
          link: "/security/authority",
          parentId: "security",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
        {
          id: "group",
          label: "Groupes",
          link: "/security/group",
          parentId: "security",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
        {
          id: "user",
          label: "Utilisateurs",
          link: "/security/user",
          parentId: "security",
          isAuthorized: computeIsAuthorized([ROLE_ADMIN]),
        },
      ],
    },
    {
      id: "admin-agency",
      label: "Administration Agency",
      icon: "ri-settings-5-fill",
      link: "/admin-agency",
      stateVariables: isAdministration,
      isAuthorized: computeIsAuthorized([ROLE_ADMIN_AGENCY]),
      click: function (e) {
        e.preventDefault();
        setIsAdministration(!isAdministration);
        setIsCurrentState("Administration-Agency");
        updateIconSidebar(e);
      },
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
