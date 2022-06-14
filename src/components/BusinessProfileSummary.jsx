import '../App.css';
import { getBusiness } from '../api/getData.js';
import StatusBar from './StatusBar.jsx'

const BusinessProfileSummary = ({businessObjectSummary, setBusinessObject, setView, businessId}) => {

  const checkStatus = () => {
    getBusiness(businessId, (businessObject) => {
      // setBusinessObject(businessObject)
      setBusinessObject(response)
      setView('businessProfile')
    })
  }
  const hasBusinessData = businessObjectSummary.name.length;


  return (
    <div className="form-box">
      <StatusBar/>

      {hasBusinessData > 0 &&
      <p> Successfully added: {businessObjectSummary.name}</p>}

      {businessId  &&
      <p> Business ID: {businessId}</p>
      }

      <input
            type="submit"
            value="View full business profile"
            className="button"
            onClick={checkStatus}/>
    </div>
  );
}

export default BusinessProfileSummary;



const response = {
  "object": "business",
  "id": "25fa0da7-6de2-4d7c-bbc8-60db0ea31557",
  "external_id": null,
  "name": "Mid Desk",
  "created_at": "2022-06-14T17:28:43.229Z",
  "updated_at": "2022-06-14T17:28:47.448Z",
  "status": "in_review",
  "tags": [],
  "requester": {
      "id": "de146b76-5419-4fc3-bc6c-107f4a72ce5a",
      "type": "account",
      "name": "n/a",
      "requested_at": "2022-06-14T17:28:43.318Z"
  },
  "assignee_id": "6a9f0022-e41f-4144-9cd8-f9f6978657fc",
  "review": {
      "object": "review",
      "id": "4e4cb773-bd3b-41f3-84c0-ad27a1397126",
      "created_at": "2022-06-14T17:28:44.000Z",
      "updated_at": "2022-06-14T17:28:44.720Z",
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
                      "id": "419a6aa4-5505-4cdb-8aae-f7cef4b9b684",
                      "type": "name",
                      "metadata": {
                          "name": "Mid Desk",
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
                      "id": "6dc37f32-7e3f-49d5-a638-9dd1237fda91",
                      "type": "address",
                      "metadata": {
                          "city": "San Francisco",
                          "state": "CA",
                          "submitted": true,
                          "postal_code": "94105",
                          "full_address": "577 Howard St Suite 400, San Francisco, CA 94105",
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
          "last_login_at": "2022-06-14T16:42:10.785Z"
      }
  },
  "tin": {
      "name": "Mid Desk",
      "tin": "12-3410000",
      "mismatch": false,
      "unknown": false,
      "verified": true,
      "error": null,
      "updated_at": "2022-06-14T17:28:43.915Z",
      "business_id": "25fa0da7-6de2-4d7c-bbc8-60db0ea31557"
  },
  "business_batch_id": null,
  "formation": {
      "entity_type": "CORPORATION",
      "formation_date": "2020-02-24",
      "formation_state": "CA",
      "created_at": "2022-06-14T17:28:43.701Z",
      "updated_at": "2022-06-14T17:28:43.701Z"
  },
  "website": {
      "object": "website",
      "id": "f626eafe-754f-4b89-9b8c-db55edfb8072",
      "business_id": "25fa0da7-6de2-4d7c-bbc8-60db0ea31557",
      "url": "https://www.middesk.com",
      "status": "online",
      "title": "Lorem Ipsum",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "domain": {
          "domain": "middesk.com",
          "domain_id": "1234567890_DOMAIN_COM-VRSN",
          "creation_date": "2021-06-14 17:28:43 UTC",
          "expiration_date": "2023-06-14 17:28:43 UTC",
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
      "created_at": "2022-06-14T17:28:43.290Z",
      "updated_at": "2022-06-14T17:28:43.810Z",
      "business_name_match": true,
      "parked": false,
      "phone_numbers": [],
      "addresses": []
  },
  "watchlist": {
      "object": "watchlist",
      "id": "51fa7ffe-2707-4bf5-b194-a6f32d562302",
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
          "id": "cff5a334-6094-4234-a63f-723f2308c73d",
          "document_type": "Registration",
          "filename": "202016910451_REGISTRATION_2020-06-16",
          "content_type": "application/pdf",
          "size": 70011,
          "download_url": "https://storage.googleapis.com/middesk-sandbox/2ot4z6dvtv9dd2qj8b1tmx2n0cth?GoogleAccessId=middesk-api%40project-middesk.iam.gserviceaccount.com&Expires=1655228501&Signature=DmPJxbkXqF%2BJLlYRNr6Xkrqbx70SBKBWZivXUFV%2Fc%2FYUZ3%2ByQBjGkAwZH4xe8wf5z%2BcApHetUO%2Fru8ivfK5qaNNmO%2BmUga14Xr%2F%2Bqt7KZB4lyDJ4ZP9eGj3XxKpaxsgIy4hV9WbR%2B6NyVqT3uCs9qqHaHiUJMsEXtCl%2FiTjBc45ctL0gGvC6WmBjioqWGz73CXr7AGXD3jfeMfmfcZ3wlQ6thaJeN23Xg0qKYzxvHz2l3UtCik%2Fg9g72xhHCE446ZGFqLkPDQwH9VUN12oIXjVAcukyWFGvAUqdJIJmd8l%2FVr1PwftImNAz24B9Qk%2B7FdnuAzsyVKrdGpjo4JDjwXA%3D%3D&response-content-disposition=inline%3B+filename%3D%22202016910451_REGISTRATION_2020-06-16%22%3B+filename%2A%3DUTF-8%27%27202016910451_REGISTRATION_2020-06-16&response-content-type=application%2Fpdf",
          "created_at": "2022-06-14T17:28:44.402Z",
          "source": {
              "type": "registration",
              "id": "3b893bde-cb34-4083-a009-bc7a73c2fbf0",
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
          "id": "419a6aa4-5505-4cdb-8aae-f7cef4b9b684",
          "name": "Mid Desk",
          "submitted": true,
          "business_id": "25fa0da7-6de2-4d7c-bbc8-60db0ea31557",
          "sources": [
              {
                  "id": "f626eafe-754f-4b89-9b8c-db55edfb8072",
                  "type": "website",
                  "metadata": {}
              },
              {
                  "id": "3b893bde-cb34-4083-a009-bc7a73c2fbf0",
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
          "city": "San Francisco",
          "state": "CA",
          "postal_code": "94105",
          "full_address": "577 Howard St Suite 400, San Francisco, CA 94105",
          "submitted": true,
          "id": "6dc37f32-7e3f-49d5-a638-9dd1237fda91",
          "latitude": 40.52,
          "longitude": 30.4,
          "property_type": null,
          "deliverable": true,
          "deliverability_analysis": null,
          "street_view_available": false,
          "labels": [],
          "created_at": "2022-06-14T17:28:43.312Z",
          "updated_at": "2022-06-14T17:28:43.533Z",
          "registered_agent_name": null,
          "cmra": false,
          "business_id": "25fa0da7-6de2-4d7c-bbc8-60db0ea31557",
          "sources": [
              {
                  "id": "3b893bde-cb34-4083-a009-bc7a73c2fbf0",
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
          "id": "bb584c07-2b99-4ccc-b3e3-90cd58ff2e36",
          "latitude": null,
          "longitude": null,
          "property_type": null,
          "deliverable": null,
          "deliverability_analysis": null,
          "street_view_available": null,
          "labels": [],
          "created_at": "2022-06-14T17:28:43.766Z",
          "updated_at": "2022-06-14T17:28:43.766Z",
          "registered_agent_name": null,
          "cmra": null,
          "business_id": "25fa0da7-6de2-4d7c-bbc8-60db0ea31557",
          "sources": [
              {
                  "id": "3b893bde-cb34-4083-a009-bc7a73c2fbf0",
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
          "id": "3b893bde-cb34-4083-a009-bc7a73c2fbf0",
          "business_id": "25fa0da7-6de2-4d7c-bbc8-60db0ea31557",
          "name": "Mid Desk",
          "status": "active",
          "jurisdiction": "DOMESTIC",
          "entity_type": "CORPORATION",
          "file_number": "FN-XXXXXXX",
          "addresses": [
              "577 HOWARD ST SUITE 400, SAN FRANCISCO, CA 94105",
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
          "id": "851074ab-b204-467a-8f88-6b631e99c168",
          "created_at": "2022-06-14T17:28:43.380Z",
          "updated_at": "2022-06-14T17:28:44.176Z",
          "completed_at": "2022-06-14T17:28:44.176Z",
          "status": "completed",
          "product": "liens"
      },
      {
          "object": "order",
          "id": "2a846532-8ee5-49e9-bf66-c3ab084d1cab",
          "created_at": "2022-06-14T17:28:43.358Z",
          "updated_at": "2022-06-14T17:28:44.435Z",
          "completed_at": "2022-06-14T17:28:44.435Z",
          "status": "completed",
          "product": "documents"
      },
      {
          "object": "order",
          "id": "e4e69a65-e1bf-4f6d-bf57-d5d4fffb7a3a",
          "created_at": "2022-06-14T17:28:43.340Z",
          "updated_at": "2022-06-14T17:28:44.132Z",
          "completed_at": "2022-06-14T17:28:44.132Z",
          "status": "completed",
          "product": "identity"
      },
      {
          "object": "order",
          "id": "546d904b-5316-4b98-9b49-34c19709b624",
          "created_at": "2022-06-14T17:28:43.318Z",
          "updated_at": "2022-06-14T17:28:43.947Z",
          "completed_at": "2022-06-14T17:28:43.947Z",
          "status": "completed",
          "product": "tin"
      }
  ],
  "industry_classification": {
      "object": "industry_classification",
      "id": "f308e661-53db-4b38-81e0-46bf464aa17e",
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
      "created_at": "2022-06-14T17:28:43.847Z",
      "completed_at": "2022-06-14T17:28:43.874Z"
  },
  "subscription": null,
  "tax_exempt_organization": null,
  "fmcsa_registrations": []
}
