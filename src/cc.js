export default {
  "frontData": {
    "id": "CC",
    "tag": "mdt-portal-app",
    "size": "large",
    "background": "auto",
    "link": "/apps/cc/",
    "status": 1,
    "mandatory": true,
    "content": {
      "title": "Channel((Connect))",
      "text": "Business visibility solution",
      "lastLoginDate": "2016-04-27T18:50:51.1073711+02:00",
      "icon": "/apps/cc/img/logo/cc_logo.svg"
    }
  },
  "rolesRights": {
    "Any": {
      
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
    "Admin": {
      
      "roleResources": [
        {
          "action": "Admin",
          "resources": [ "SalesOutApi" ]
        },
        {
          "action": "Write",
          "resources": [ "Inventory", "Product", "Partner" ]
        },
        {
          "action": "Read",
          "resources": [ "Inventory", "Product", "Account", "Customer", "Notification", "Profile", "ProductPrice", "WishList", "Document", "Partner" ]
        }
      ]
    },
    "Distributor": {
      
      "roleResources": [
        {
          "action": "Distributor",
          "resources": [ "SalesOutApi" ]
        },
        {
          "action": "Write",
          "resources": [ "Inventory", "Product", "Partner" ]
        },
        {
          "action": "Read",
          "resources": [ "Inventory", "Product", "Account", "Customer", "Notification", "Profile", "ProductPrice", "WishList", "Document", "Partner" ]
        }
      ]
    }
  },
  "translationsGroups": [ "core", "user", "cc" ]
}
