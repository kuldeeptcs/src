export default {
  "frontData": {
    "id": "admin",
    "tag": "mdt-portal-app",
    "size": "large",
    "background": "auto",
    "link": "/apps/admin/",
    "status": 1,
    "mandatory": true,
    "content": {
      "title": "Admin",
      "text": "",
      "icon": "/apps/admin/img/logo/admin.svg",
      "lastLoginDate": "2013-11-14 08:54:00.0000000 +1:00"
    }
  },
  "rolesRights": {
    "Any": {
      "isRestricted": true,
      "roleResources": [
        {
          "action": "Admin",
          "resources": [ "OwnAccount" ]
        },
        {
          "action": "Write",
          "resources": [ "OwnAccount" ]
        },
        {
          "action": "Read",
          "resources": [ "OwnAccount" ]
        }
      ]
    },
    "SuperAdmin": {
      "isRestricted": true,
      "roleResources": [
        {
          "action": "Admin",
          "resources": [
            "Account",
            "ExternalUser",
            "InternalUser",
            "Profile",
            "Customer",
            "CycleCount",
            "Notification",
            "SalesRepAlignment"
          ]
        },
        {
          "action": "Write",
          "resources": [
            "ExternalUser",
            "InternalUser",
            "Profile",
            "Customer",
            "SalesRepAlignment",
            "Global"
          ]
        },
        {
          "action": "Read",
          "resources": [
            "ExternalUser",
            "InternalUser",
            "Profile",
            "Customer",
            "Notification",
            "SalesRepAlignment",
            "Global"
          ]
        }
      ]
    },
    "SeeqAdmin": {
      "isRestricted": true,
      "roleResources": [
        {
          "action": "Admin",
          "resources": []
        },
        {
          "action": "Write",
          "resources": [
            "Notification",
            "RegistrationFeature",
            "ReportingPreference",
            "Global"
          ]
        },
        {
          "action": "Read",
          "resources": [
            "Notification",
            "RegistrationFeature",
            "ReportingPreference",
            "Global"
          ]
        }
      ]
    },
    "LinqMonitoringAdmin": {
      "isRestricted": true,
      "roleResources": [
        {
          "action": "Admin",
          "resources": []
        },
        {
          "action": "Write",
          "resources": [
            "Notification",
            "PreferenceManagement",
            "Global"
          ]
        },
        {
          "action": "Read",
          "resources": [
            "Notification",
            "PreferenceManagement",
            "Global"
          ]
        }
      ]
    },
    "SuperLinqLMSAdmin": {
      "isRestricted": true,
      "roleResources": [
        {
          "action": "Admin",
          "resources": []
        },
        {
          "action": "Write",
          "resources": [
            "ExternalUser",
            "InternalUser",
            "Profile",
            "Customer",
            "Notification",
            "RegistrationFeature",
            "ReportingPreference",
            "PreferenceManagement",
            "SalesRepAlignment",
            "Global"
          ]
        },
        {
          "action": "Read",
          "resources": [
            "ExternalUser",
            "InternalUser",
            "Profile",
            "Customer",
            "Notification",
            "RegistrationFeature",
            "ReportingPreference",
            "PreferenceManagement",
            "SalesRepAlignment",
            "Global"
          ]
        }
      ]
    },
    "LocalAdmin": {
      "isRestricted": false,
      "roleResources": [
        {
          "action": "Admin",
          "resources": []
        },
        {
          "action": "Write",
          "resources": [
            "ExternalUser",
            "User",
            "Profile",
            "Notification",
            "Global",
            "AdditionalRoles"
          ]
        },
        {
          "action": "Read",
          "resources": [
            "ExternalUser",
            "User",
            "Profile",
            "Notification",
            "Global",
            "AdditionalRoles"
          ]
        }
      ]
    },
    "Admin": {
      "isRestricted": true,
      "roleResources": [
        {
          "action": "Admin",
          "resources": [ "Account", "Cart", "CycleCount", "Inventory", "Invoice", "Notification", "Order", "Portal", "ProductPrice", "Product", "Profile", "Wellknown", "StandingOrder", "Test", "Translation", "WishList" ]
        },
        {
          "action": "Write",
          "resources": [
            "Account",
             "Cart",
            "CycleCount",
            "Inventory",
            "Invoice",
            "Notification",
            "Order",
            "Portal",
            "ProductPrice",
            "Product",
            "Profile",
            "Wellknown",
            "StandingOrder",
            "Test",
            "Translation",
            "WishList",
            "Global"
          ]
        },
        {
          "action": "Read",
          "resources": [
            "Account",
             "Cart",
            "CycleCount",
            "Inventory",
            "Invoice",
            "Notification",
            "Order",
            "Portal",
            "ProductPrice",
            "Product",
            "Profile",
            "Wellknown",
            "StandingOrder",
            "Test",
            "Translation",
            "WishList",
            "Global"
          ]
        }
      ]
    }
  },
  "translationsGroups": [ "core", "user", "admin" ]
}
