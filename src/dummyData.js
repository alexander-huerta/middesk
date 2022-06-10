export const businessObjectSummary = {
  name: "Mid Desk",
  tin: {
    tin: "123410000"
  },
  website: {
    url: "https://www.middesk.com"
  },
  addresses: [
    {
      address_line1: "577 Howard St",
      address_line2: "Suite 400",
      city: "San Francisco",
      state: "CA",
      postal_code: "94105"
    }
  ]
};

export const businessObject = {
  "object": "business",
  "id": "845396e5-8cd6-460a-bb36-1bff97b9a673",
  "external_id": null,
  "name": "Middesk+Inc",
  "created_at": "2022-06-10T13:51:24.916Z",
  "updated_at": "2022-06-10T13:51:29.272Z",
  "status": "in_review",
  "tags": [],
  "requester": {
      "id": "de146b76-5419-4fc3-bc6c-107f4a72ce5a",
      "type": "account",
      "name": "n/a",
      "requested_at": "2022-06-10T13:51:24.978Z"
  },
  "assignee_id": "6a9f0022-e41f-4144-9cd8-f9f6978657fc",
  "review": {
      "object": "review",
      "id": "b25c6063-9a33-4df4-b532-7c59ebf5f44f",
      "created_at": "2022-06-10T13:51:25.688Z",
      "updated_at": "2022-06-10T13:51:26.412Z",
      "completed_at": null,
      "tasks": [
          {
              "category": "liens",
              "key": "liens",
              "label": "Liens",
              "message": "No Liens found",
              "name": "liens",
              "status": "success",
              "sub_label": "No Liens",
              "sources": []
          },
          {
              "category": "name",
              "key": "name",
              "label": "Business Name",
              "message": "Match identified to the submitted Business Name",
              "name": "name",
              "status": "success",
              "sub_label": "Verified",
              "sources": [
                  {
                      "id": "104064f1-6fe6-44f8-aae1-5f74128f23ae",
                      "type": "name",
                      "metadata": {
                          "name": "Middesk+Inc",
                          "submitted": true
                      }
                  }
              ]
          },
          {
              "category": "address",
              "key": "address_verification",
              "label": "Office Address",
              "message": "Match identified to the submitted Office Address",
              "name": "address",
              "status": "success",
              "sub_label": "Verified",
              "sources": [
                  {
                      "id": "9e80c986-2f6f-4a9d-b992-8dedba25d2ab",
                      "type": "address",
                      "metadata": {
                          "city": "San+Francisco",
                          "state": "CA",
                          "submitted": true,
                          "postal_code": "94105",
                          "full_address": "577 Howard St Suite 400, San+Francisco, CA 94105",
                          "address_line1": "577 Howard St Suite 400",
                          "address_line2": null
                      }
                  }
              ]
          },
          {
              "category": "address",
              "key": "address_deliverability",
              "label": "Office Address",
              "message": "The USPS is able to deliver mail to the submitted Office Address",
              "name": "address",
              "status": "success",
              "sub_label": "Deliverable",
              "sources": []
          },
          {
              "category": "address",
              "key": "address_property_type",
              "label": "Office Address",
              "message": "Submitted Office Address is a Commercial property",
              "name": "address",
              "status": "success",
              "sub_label": "Commercial",
              "sources": []
          },
          {
              "category": "sos",
              "key": "sos_match",
              "label": "SOS Filings",
              "message": "The business is Active in the state of the submitted Office Address",
              "name": "sos",
              "status": "success",
              "sub_label": "Submitted Active",
              "sources": []
          },
          {
              "category": "sos",
              "key": "sos_active",
              "label": "SOS Filings",
              "message": "1 of 1 filings are Active",
              "name": "sos",
              "status": "success",
              "sub_label": "Active",
              "sources": []
          },
          {
              "category": "sos",
              "key": "sos_domestic",
              "label": "SOS Filings",
              "message": "Active domestic filing found",
              "name": "sos",
              "status": "success",
              "sub_label": "Domestic Active",
              "sources": []
          },
          {
              "category": "tin",
              "key": "tin",
              "label": "TIN Match",
              "message": "The IRS has a record for the submitted TIN and Business Name combination",
              "name": "tin",
              "status": "success",
              "sub_label": "Found",
              "sources": []
          },
          {
              "category": "watchlist",
              "key": "watchlist",
              "label": "Watchlist",
              "message": "No Watchlist hits were identified",
              "name": "watchlist",
              "status": "success",
              "sub_label": "No Hits",
              "sources": []
          },
          {
              "category": "industry",
              "key": "industry",
              "label": "True Industry",
              "message": "This business likely does not operate in a high risk industry",
              "name": "industry",
              "status": "success",
              "sub_label": "No Hits",
              "sources": []
          },
          {
              "category": "website",
              "key": "website_verification",
              "label": "Website",
              "message": "Successfully found entity details on the submitted Website",
              "name": "website",
              "status": "success",
              "sub_label": "Verified",
              "sources": []
          },
          {
              "category": "website",
              "key": "website_status",
              "label": "Website",
              "message": "Website was Online when the business record was ordered",
              "name": "website",
              "status": "success",
              "sub_label": "Online",
              "sources": []
          },
          {
              "category": "bankruptcies",
              "key": "bankruptcies",
              "label": "Bankruptcies",
              "message": "The business has no bankruptcy filings",
              "name": "bankruptcies",
              "status": "success",
              "sub_label": "None Found",
              "sources": []
          }
      ],
      "assignee": {
          "object": "user",
          "id": "6a9f0022-e41f-4144-9cd8-f9f6978657fc",
          "name": "Alexander Huerta",
          "email": "alexghuerta92@gmail.com",
          "roles": [
              "admin",
              "member"
          ],
          "image_url": "//www.gravatar.com/avatar/fe303628d325ee5fd84b0f646a2cb70b?s=64&d=https%3A%2F%2Fapp-sandbox.middesk.com%2Fimages%2Fdefault-avatar.png",
          "last_login_at": "2022-06-09T17:43:45.733Z"
      }
  },
  "tin": {
      "name": "Middesk+Inc",
      "tin": "12-3410000",
      "mismatch": false,
      "unknown": false,
      "verified": true,
      "error": null,
      "updated_at": "2022-06-10T13:51:25.613Z",
      "business_id": "845396e5-8cd6-460a-bb36-1bff97b9a673"
  },
  "business_batch_id": null,
  "formation": {
      "entity_type": "CORPORATION",
      "formation_date": "2020-02-24",
      "formation_state": "CA",
      "created_at": "2022-06-10T13:51:25.363Z",
      "updated_at": "2022-06-10T13:51:25.363Z"
  },
  "website": {
      "object": "website",
      "id": "47840efd-0d7e-4ce2-b2ea-28c2d780d411",
      "business_id": "845396e5-8cd6-460a-bb36-1bff97b9a673",
      "url": "https://www.middesk.com",
      "status": "online",
      "title": "Lorem Ipsum",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "domain": {
          "domain": "middesk.com",
          "domain_id": "1234567890_DOMAIN_COM-VRSN",
          "creation_date": "2021-06-10 13:51:25 UTC",
          "expiration_date": "2023-06-10 13:51:25 UTC",
          "registrar": {
              "organization": "GoDaddy.com, LLC",
              "name": "GoDaddy.com, LLC",
              "url": "http://www.godaddy.com"
          }
      },
      "pages": [
          {
              "url": "https://www.middesk.com",
              "category": "home",
              "screenshot_url": "https://cdn-middesk-websites.com/1595276893.png"
          }
      ],
      "created_at": "2022-06-10T13:51:24.960Z",
      "updated_at": "2022-06-10T13:51:25.469Z",
      "business_name_match": true,
      "parked": false,
      "phone_numbers": [],
      "addresses": []
  },
  "watchlist": {
      "object": "watchlist",
      "id": "df8bd64a-3701-4a5e-a2a8-d8c8df4f4c91",
      "hit_count": 0,
      "agencies": [
          {
              "abbr": "OFAC",
              "name": "Office of Foreign Assets Control",
              "org": "U.S. Department of Treasury"
          },
          {
              "abbr": "BIS",
              "name": "Bureau of Industry and Security",
              "org": "U.S. Department of Commerce"
          },
          {
              "abbr": "DDTC",
              "name": "Directorate of Defense Trade Controls",
              "org": "U.S. Department of State"
          },
          {
              "abbr": "ISN",
              "name": "Bureau of International Security and Non-Proliferation",
              "org": "U.S. Department of State"
          }
      ],
      "lists": [
          {
              "object": "watchlist_source",
              "agency": "Bureau of Industry and Security",
              "agency_abbr": "BIS",
              "organization": "U.S. Department of Commerce",
              "title": "Denied Persons List",
              "abbr": "DPL",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Directorate of Defense Trade Controls",
              "agency_abbr": "DDTC",
              "organization": "U.S. Department of State",
              "title": "AECA/ITAR Debarred",
              "abbr": "DTC",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Bureau of Industry and Security",
              "agency_abbr": "BIS",
              "organization": "U.S. Department of Commerce",
              "title": "Entity List",
              "abbr": "EL",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Office of Foreign Assets Control",
              "agency_abbr": "OFAC",
              "organization": "U.S. Department of Treasury",
              "title": "Specially Designated Nationals",
              "abbr": "SDN",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Office of Foreign Assets Control",
              "agency_abbr": "OFAC",
              "organization": "U.S. Department of Treasury",
              "title": "Foreign Sanctions Evaders",
              "abbr": "FSE",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Bureau of International Security and Non-Proliferation",
              "agency_abbr": "ISN",
              "organization": "U.S. Department of State",
              "title": "Nonproliferation Sanctions",
              "abbr": "ISN",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Office of Foreign Assets Control",
              "agency_abbr": "OFAC",
              "organization": "U.S. Department of Treasury",
              "title": "Palestinian Legislative Council",
              "abbr": "PLC",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Office of Foreign Assets Control",
              "agency_abbr": "OFAC",
              "organization": "U.S. Department of Treasury",
              "title": "Sectoral Sanctions Identifications",
              "abbr": "SSI",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Bureau of Industry and Security",
              "agency_abbr": "BIS",
              "organization": "U.S. Department of Commerce",
              "title": "Unverified List",
              "abbr": "UVL",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Office of Foreign Assets Control",
              "agency_abbr": "OFAC",
              "organization": "U.S. Department of Treasury",
              "title": "Capta List",
              "abbr": "CAP",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Bureau of Industry and Security",
              "agency_abbr": "BIS",
              "organization": "U.S. Department of Commerce",
              "title": "Military End User",
              "abbr": "MEU",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Office of Foreign Assets Control",
              "agency_abbr": "OFAC",
              "organization": "U.S. Department of Treasury",
              "title": "Non-SDN Menu-Based Sanctions",
              "abbr": "NS-MBS",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Office of Foreign Assets Control",
              "agency_abbr": "OFAC",
              "organization": "U.S. Department of Treasury",
              "title": "Non-SDN Iranian Sanctions",
              "abbr": "NS-ISA",
              "results": []
          },
          {
              "object": "watchlist_source",
              "agency": "Office of Foreign Assets Control",
              "agency_abbr": "OFAC",
              "organization": "U.S. Department of Treasury",
              "title": "Non-SDN Communist Military Companies Sanctions",
              "abbr": "NS-CCMC",
              "results": []
          }
      ],
      "people": []
  },
  "bankruptcies": [],
  "certifications": [],
  "documents": [
      {
          "object": "document",
          "id": "1d6584bf-a09e-449d-b1d8-6e281aea88a3",
          "document_type": "Registration",
          "filename": "202016910451_REGISTRATION_2020-06-16",
          "content_type": "application/pdf",
          "size": 70011,
          "download_url": "https://storage.googleapis.com/middesk-sandbox/zklj8rfnh8za8ga4hqmdlbsozp48?GoogleAccessId=middesk-api%40project-middesk.iam.gserviceaccount.com&Expires=1654869635&Signature=s55IdZ2pHjz2aznfr7%2F7sJ2T7kUPk67bCwLEc3aSpf0Gnve1GGxflScqNO%2BqfiagcHAoVRNXyVWa5pvEciwLINPtivtPDkB2mz9yXjA6RiOc6SFM7T1AHR31bxW2uK4fssB3VwGr4mxbibbayXPF8MKNFKeLD0kHGBhind6n8vLhbwDQRh8Mciez9rUNTDmf7cZd4WVEt0ikdPGrRQs1UxYWJavSdmuQ0fuWhd6KKuwCPb6ymHmOE0AQazJLu8T9GlkrFWB1YJQLQsFXiCqMtub1ANDpokaMVCFfiF3ccH1qigxgeG72JT8tY54uMARp5zDGPFBOS49ckwfSICzu0w%3D%3D&response-content-disposition=inline%3B+filename%3D%22202016910451_REGISTRATION_2020-06-16%22%3B+filename%2A%3DUTF-8%27%27202016910451_REGISTRATION_2020-06-16&response-content-type=application%2Fpdf",
          "created_at": "2022-06-10T13:51:26.082Z",
          "source": {
              "type": "registration",
              "id": "b707e31e-419d-4250-96e7-a3eee952a154",
              "metadata": {
                  "state": "CA",
                  "status": "active"
              }
          },
          "filing_date": "2020-06-16T00:00:00.000Z"
      }
  ],
  "liens": [],
  "names": [
      {
          "object": "name",
          "id": "104064f1-6fe6-44f8-aae1-5f74128f23ae",
          "name": "Middesk+Inc",
          "submitted": true,
          "business_id": "845396e5-8cd6-460a-bb36-1bff97b9a673",
          "sources": [
              {
                  "id": "47840efd-0d7e-4ce2-b2ea-28c2d780d411",
                  "type": "website",
                  "metadata": {}
              },
              {
                  "id": "b707e31e-419d-4250-96e7-a3eee952a154",
                  "type": "registration",
                  "metadata": {
                      "state": "CA",
                      "status": "active",
                      "file_number": "FN-XXXXXXX",
                      "jurisdiction": "DOMESTIC"
                  }
              }
          ]
      }
  ],
  "addresses": [
      {
          "object": "address",
          "address_line1": "577 Howard St Suite 400",
          "address_line2": null,
          "city": "San+Francisco",
          "state": "CA",
          "postal_code": "94105",
          "full_address": "577 Howard St Suite 400, San+Francisco, CA 94105",
          "submitted": true,
          "id": "9e80c986-2f6f-4a9d-b992-8dedba25d2ab",
          "latitude": 40.52,
          "longitude": 30.4,
          "property_type": null,
          "deliverable": true,
          "deliverability_analysis": null,
          "street_view_available": false,
          "labels": [],
          "created_at": "2022-06-10T13:51:24.973Z",
          "updated_at": "2022-06-10T13:51:25.163Z",
          "registered_agent_name": null,
          "cmra": false,
          "business_id": "845396e5-8cd6-460a-bb36-1bff97b9a673",
          "sources": [
              {
                  "id": "b707e31e-419d-4250-96e7-a3eee952a154",
                  "type": "registration",
                  "metadata": {
                      "state": "CA",
                      "status": "active",
                      "file_number": "FN-XXXXXXX",
                      "jurisdiction": "DOMESTIC"
                  }
              }
          ]
      },
      {
          "object": "address",
          "address_line1": "354 Circle Ct",
          "address_line2": null,
          "city": "Bronx",
          "state": "NY",
          "postal_code": "10468",
          "full_address": "354 Circle Ct, Bronx, NY 10468",
          "submitted": false,
          "id": "8a6870e0-2984-476f-9b99-711a102f2836",
          "latitude": null,
          "longitude": null,
          "property_type": null,
          "deliverable": null,
          "deliverability_analysis": null,
          "street_view_available": null,
          "labels": [],
          "created_at": "2022-06-10T13:51:25.426Z",
          "updated_at": "2022-06-10T13:51:25.426Z",
          "registered_agent_name": null,
          "cmra": null,
          "business_id": "845396e5-8cd6-460a-bb36-1bff97b9a673",
          "sources": [
              {
                  "id": "b707e31e-419d-4250-96e7-a3eee952a154",
                  "type": "registration",
                  "metadata": {
                      "state": "CA",
                      "status": "active",
                      "file_number": "FN-XXXXXXX",
                      "jurisdiction": "DOMESTIC"
                  }
              }
          ]
      }
  ],
  "people": [],
  "phone_numbers": [],
  "profiles": [],
  "registrations": [
      {
          "object": "registration",
          "id": "b707e31e-419d-4250-96e7-a3eee952a154",
          "business_id": "845396e5-8cd6-460a-bb36-1bff97b9a673",
          "name": "Middesk+Inc",
          "status": "active",
          "jurisdiction": "DOMESTIC",
          "entity_type": "CORPORATION",
          "file_number": "FN-XXXXXXX",
          "addresses": [
              "577 HOWARD ST SUITE 400, SAN+FRANCISCO, CA 94105",
              "354 CIRCLE COURT,BRONX, NY 10468"
          ],
          "officers": [],
          "registered_agent": {},
          "registration_date": "2020-02-24",
          "state": "CA",
          "source": "https://bizfileonline.sos.ca.gov/search/business"
      }
  ],
  "orders": [
      {
          "object": "order",
          "id": "2ee051da-3887-433e-bbb7-dfcb457f00b6",
          "created_at": "2022-06-10T13:51:25.031Z",
          "updated_at": "2022-06-10T13:51:25.855Z",
          "completed_at": "2022-06-10T13:51:25.855Z",
          "status": "completed",
          "product": "liens"
      },
      {
          "object": "order",
          "id": "abd5b533-3cd8-448c-a07c-de59cc186682",
          "created_at": "2022-06-10T13:51:25.011Z",
          "updated_at": "2022-06-10T13:51:26.125Z",
          "completed_at": "2022-06-10T13:51:26.125Z",
          "status": "completed",
          "product": "documents"
      },
      {
          "object": "order",
          "id": "b23726c2-6b73-476b-91eb-b49b9ea5beb2",
          "created_at": "2022-06-10T13:51:24.993Z",
          "updated_at": "2022-06-10T13:51:25.812Z",
          "completed_at": "2022-06-10T13:51:25.812Z",
          "status": "completed",
          "product": "identity"
      },
      {
          "object": "order",
          "id": "710774e9-6f14-461e-a25d-de46662b4a15",
          "created_at": "2022-06-10T13:51:24.978Z",
          "updated_at": "2022-06-10T13:51:25.642Z",
          "completed_at": "2022-06-10T13:51:25.642Z",
          "status": "completed",
          "product": "tin"
      }
  ],
  "industry_classification": {
      "object": "industry_classification",
      "id": "04838f04-2d99-47fc-8921-cb6610071f1b",
      "status": "completed",
      "categories": [
          {
              "name": "Retail",
              "sector": "RETAIL",
              "category": "RETAIL",
              "score": 0.62405075,
              "high_risk": false
          },
          {
              "name": "Construction",
              "sector": "CONSTRUCTION",
              "category": "CONSTRUCTION",
              "score": 0.013767034,
              "high_risk": false
          }
      ],
      "website": {
          "url": "https://www.middesk.com",
          "status": "online",
          "parked": false
      },
      "created_at": "2022-06-10T13:51:25.506Z",
      "completed_at": "2022-06-10T13:51:25.533Z"
  },
  "subscription": null,
  "tax_exempt_organization": null,
  "fmcsa_registrations": []
}



