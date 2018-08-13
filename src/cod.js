export default{
    "frontData": {
      "id": "COD",
      "tag": "mdt-portal-app-icon",
      "size": "large",
      "background": "auto",
      "link": "/apps/cod/#/catalog/",
      "status": 1,
      "mandatory": true,
      "content": {
        "title": "COD",
        "text": "Catalog On Demand",
        "icon": "/apps/cod/img/logo/catalog_request.svg",
        "lastLoginDate": "2016-02-03T14:14:25.6277522+01:00"
      }
    },
    "rolesRights": {
      "Any": {
  
        "roleResources": [
          {
            "action": "Admin",
            "resources": [
              "OwnAccount"
            ]
          },
          {
            "action": "Write",
            "resources": [
              "OwnAccount"
            ]
          },
          {
            "action": "Read",
            "resources": [
              "OwnAccount"
            ]
          }
        ]
      },
      "Admin": {
  
        "roleResources": [
          {
            "action": "Admin",
            "resources": [
              "Account",
              "Customer",
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
              "WishList"
            ]
          },
          {
            "action": "Write",
            "resources": [
              "Account",
              "Customer",
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
              "WishList"
            ]
          },
          {
            "action": "Read",
            "resources": [
              "Account",
              "Customer",
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
              "WishList"
            ]
          }
        ]
      },
      "Nurse": {
  
        "roleResources": [
          {
            "action": "Write",
            "resources": [
              "WishList",
              "CycleCount",
              "Customer"
            ]
          },
          {
            "action": "Read",
            "resources": [
              "WishList",
              "Account",
              "Customer",
              "CycleCount",
              "Inventory",
              "Invoice",
              "Notification",
              "Order",
              "Product",
              "Profile"
            ]
          }
        ]
      },
      "Purchaser": {
  
        "roleResources": [
          {
            "action": "Admin",
            "resources": [
              "CycleCount"
            ]
          },
          {
            "action": "Write",
            "resources": [
              "Customer",
              "CycleCount",
              "Inventory",
              "Invoice",
              "Order",
              "Product",
              "StandingOrder",
              "WishList",
              "OwnAccount"
            ]
          },
          {
            "action": "Read",
            "resources": [
              "CycleCount",
              "Inventory",
              "Invoice",
              "Order",
              "Product",
              "StandingOrder",
              "WishList",
              "Account",
              "Customer",
              "Notification",
              "Profile",
              "ProductPrice"
            ]
          }
        ]
      },
      "BackOffice": {
  
        "roleResources": [
          {
            "action": "Admin",
            "resources": [
              "CycleCount"
            ]
          },
          {
            "action": "Write",
            "resources": [
              "Customer",
              "CycleCount",
              "Inventory",
              "Invoice",
              "Order",
              "Product",
              "StandingOrder",
              "WishList",
              "OwnAccount"
            ]
          },
          {
            "action": "Read",
            "resources": [
              "CycleCount",
              "Inventory",
              "Invoice",
              "Order",
              "Product",
              "StandingOrder",
              "WishList",
              "Account",
              "Customer",
              "Notification",
              "Profile",
              "ProductPrice"
            ]
          }
        ]
      },
      "SalesMarketing": {
  
        "roleResources": [
          {
            "action": "Admin",
            "resources": [
              "CycleCount"
            ]
          },
          {
            "action": "Write",
            "resources": [
              "Customer",
              "CycleCount",
              "Inventory",
              "Invoice",
              "Order",
              "Product",
              "StandingOrder",
              "WishList",
              "OwnAccount"
            ]
          },
          {
            "action": "Read",
            "resources": [
              "CycleCount",
              "Inventory",
              "Invoice",
              "Order",
              "Product",
              "StandingOrder",
              "WishList",
              "Account",
              "Customer",
              "Notification",
              "Profile",
              "ProductPrice"
            ]
          }
        ]
      }
    },
    "translationsGroups": [
      "core",
      "user",
      "cod"
    ]
  }
  