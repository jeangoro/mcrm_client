const actionTypeCssClassNameMap = new Map();

actionTypeCssClassNameMap.set("SEND_MESSAGE", { name: "Envoyer un message", className: "mdi mdi-message-arrow-right" });
actionTypeCssClassNameMap.set("SECURITY_ADD_OR_REMOVE_AUTHORITY", { name: "Ajouter/retirer une autorisation", className: "mdi mdi-account-key" });
actionTypeCssClassNameMap.set("SECURITY_GET_STATUS", { name: "Voir le status", className: "mdi mdi-security" });
actionTypeCssClassNameMap.set("LINK_USER_EMPLOYEE", { name: "Link user employee", className: "mdi mdi-link-variant-plus" });
actionTypeCssClassNameMap.set("UNLINK_SERVICE_PROVIDER", { name: "Détacher apporteur A", className: "mdi mdi-link-variant-minus", title: "Détacher un apporteur d'affaire" });
actionTypeCssClassNameMap.set("LINK_SERVICE_PROVIDER", { name: "Attacher apporteur A", className: "mdi mdi-link-variant-plus", title: "Attacher un apporteur d'affaire" });
actionTypeCssClassNameMap.set("SECURITY_RESENT_CODE", { name: "Renvoyer le code", className: "mdi mdi-email-sync-outline" });
actionTypeCssClassNameMap.set("SECURITY_ACTIVATE", { name: "Activer le compte", className: "mdi mdi-account-check" });
actionTypeCssClassNameMap.set("SECURITY_RESET_PASSWORD", { name: "Reinitialiser le MP", className: "mdi mdi-lock-reset", title: "Reinitialiser le mot de passe" });
actionTypeCssClassNameMap.set("SECURITY_DEACTIVATE", { name: "Désactiver le compte", className: "mdi mdi-account-cancel" });
actionTypeCssClassNameMap.set("SECURITY_ADD_OR_REMOVE_GROUP", { name: "Ajouter/retirer un groupe", className: "mdi mdi-account-group", title: "Ajouter ou retirer un groupe" });

export default actionTypeCssClassNameMap;
