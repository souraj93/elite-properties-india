const fs = require("fs");

const kolHomeConfig = {
  PROJECTS_LISTING: [{
    urlToOpen: "./project/forum-estates",
    image: "./images/projects/forum-estates/3.jpg",
    title: "Forum Estates",
    developerName: "Forum Group",
    shortAddress: "Action Area IIB, Reckjoani, Newtown",
    configurations: "4 BHK - 8 BHK Villa",
    price: "4.45 Cr Onwards  - 13.18 Cr",
    buildUpAreaLabel: "Size (Sq-Ft)",
    buildUpArea: "627 - 1486 Sq.ft.",
    tagging: "buy_filter newProjects_filter search_forum search_estates search_forum_estates search_kolkata search_reckjoani search_newtown"
  }, {
    urlToOpen: "./project/vinayak-amara",
    image: "./images/projects/vinayak-amara/2.jpg",
    title: "Vinayak Amara",
    developerName: "Vinayak Group",
    shortAddress: "Newtown, Kolkata, WB",
    configurations: "3 BHK, 4 BHK Apartments",
    price: "1.64 Cr Onwards, 2.32 Cr Onwards",
    buildUpAreaLabel: "Size (Sq-Ft)",
    buildUpArea: "1028 - 1516",
    tagging: "buy_filter newProjects_filter search_vinayak search_amara search_vinayak_amara search_newtown search_kolkata"
  }],
  HOME_BANNER_IMAGE: [{
    image: "./images/home/banner-ads/diwali-offer.jpg",
    alt: "Diwali offer",
    urlToOpen: ""
  }, {
    image: "./images/projects/forum-estates/3.jpg",
    alt: "Forum Estates",
    urlToOpen: "./project/forum-estates"
  }, {
    image: "./images/projects/vinayak-amara/2.jpg",
    alt: "Vinayak Amara",
    urlToOpen: "./project/vinayak-amara"
  }],
  CONTACT_US_MAP: "https://www.google.com/maps/place/11F,+04,+Street+Number+372,+Action+Area+I,+IIF,+Newtown,+Kolkata,+Chakpachuria,+West+Bengal+700156/@22.5863403,88.4838904,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020ac8535effff:0x2cfad415998af67e!8m2!3d22.5863403!4d88.4864653!16s%2Fg%2F11t_sfp1c8?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
  CONTACT_US_ADDRESS: "Kolkata Office Address: 11F, 04, Street No. 372 Action Area 1, \n Newtown Chakpachuria, West Bengal 700156",
  CONTACT_US_EMAIL: "elitepropertiesindia24@gmail.com",
  CONTACT_US_PRIMARY_PHONE: "+918240266320",
  CONTACT_US_SECONDARY_PHONE: "+918583878747",
  LINK_TO_OTHER_TEXT: "Dubai Real Estate Opportunities",
  LINK_TO_OTHER_URL: "./dubai"
};

const dubaiHomeConfig = {
  PROJECTS_LISTING: [{
    urlToOpen: "./project/shobha-hartland",
    image: "./images/projects/shobha-hartland/2.jpg",
    title: "Shobha Hartland",
    developerName: "Merlin Group",
    shortAddress: "E M Bypass, Kolkata, WB",
    configurations: "2 BHK, 3 BHK, 4 BHK Apartments",
    price: "On Request",
    buildUpAreaLabel: "Size (Sq-Ft)",
    buildUpArea: "627 - 1486 Sq.ft.",
    tagging: "buy_filter newProjects_filter search_shobha search_hartland search_shobha search_hartland search_dubai"
  }, {
    urlToOpen: "./project/damac-hills-2",
    image: "./images/projects/damac-hills-2/2.jpg",
    title: "Damac Hills 2",
    developerName: "Merlin Group",
    shortAddress: "E M Bypass, Kolkata, WB",
    configurations: "2 BHK, 3 BHK, 4 BHK Apartments",
    price: "On Request",
    buildUpAreaLabel: "Size (Sq-Ft)",
    buildUpArea: "627 - 1486 Sq.ft.",
    tagging: "buy_filter newProjects_filter search_damac search_hills search_damac_hills search_dubai"
  }],
  HOME_BANNER_IMAGE: [{
    image: "./images/home/banner-ads/diwali-offer.jpg",
    alt: "Diwali offer",
    urlToOpen: ""
  }, {
    image: "./images/projects/shobha-hartland/2.jpg",
    alt: "Shobha Hartland",
    urlToOpen: "./project/shobha-hartland"
  }, {
    image: "./images/projects/damac-hills-2/2.jpg",
    alt: "Damac Hills 2",
    urlToOpen: "./project/damac-hills-2"
  }],
  CONTACT_US_MAP: "https://www.google.com/maps/place/11F,+04,+Street+Number+372,+Action+Area+I,+IIF,+Newtown,+Kolkata,+Chakpachuria,+West+Bengal+700156/@22.5863403,88.4838904,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020ac8535effff:0x2cfad415998af67e!8m2!3d22.5863403!4d88.4864653!16s%2Fg%2F11t_sfp1c8?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
  CONTACT_US_ADDRESS: "Kolkata Office Address: 11F, 04, Street No. 372 Action Area 1, \n Newtown Chakpachuria, West Bengal 700156",
  CONTACT_US_EMAIL: "elitepropertiesindia24@gmail.com",
  CONTACT_US_PRIMARY_PHONE: "+918240266320",
  CONTACT_US_SECONDARY_PHONE: "+918583878747",
  LINK_TO_OTHER_TEXT: "Property Listings in Kolkata",
  LINK_TO_OTHER_URL: "./index"
}


const htmlContentForKey = (key, element) => {
  if (key === "PROJECTS_LISTING") {
    return `<div class="premium_item bg-gray ${element.tagging}">
            <a href="${element.urlToOpen}">
              <div class="property_img position-relative">
                <img src="${element.image}"
                  alt=${element.title} title=${element.title} class="w-100">
              </div>
              <div class="property_content p-3">
                <span class="d-block project_name fw-medium text-dark mb-1">${element.title}</span>

                <div class="mb-1 text-info fs-13">
                  by ${element.developerName} </div>

                <div class="mb-2">
                  <img src="./images/home/pin-icon.svg" alt="">
                  <span class="text-dark">${element.shortAddress}</span>
                </div>
                <div class="config_block">
                  <span class="d-block fs-14 mb-1">Configurations</span>
                  <span class="d-block text-dark apart_text">${element.configurations}</span>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="config_block mt-2">
                      <span class="d-block fs-14 mb-1">${element.buildUpAreaLabel}</span>
                      <span class="d-block text-dark">${element.buildUpArea}</span>
                    </div>
                    <div class="config_block mt-2">
                      <span class="d-block fs-14">Price</span>
                      <span class="d-block">
                        <span class="text-dark fw-medium">${element.price}</span>
                      </span>
                    </div>
                  </div>
                  <div class="col-3">

                  </div>
                </div>

              </div>
            </a>
            <div class="property_share position-absolute bottom-0 start-0 w-100 d-flex">
              <a href="tel:+918240266320" title="Call Us: +918240266320" class="phone_share text-white">
                <img src="./images/home/wifi_calling.svg" width="20"
                  alt="Call Us">
                Call Us
              </a>
            </div>
          </div>`
  } else if (key === "HOME_BANNER_IMAGE") {
    return `<div class="slider_item">
          <a href=${element.urlToOpen ? `"${element.urlToOpen}"` : `"javascript:void(0)"`}>
            <div class="slider_overlay position-absolute h-100 w-100"></div>
            <img src="${element.image}" alt="${element.alt}"
              class="w-100">
          </a>
        </div>`;
    
  }
  return "";
};

const generateKolkataHTML = () => {
  fs.readFile("./index-creator.html", "utf8", (err, data) => {
    if (err) {
      console.error("reading ", err);
      return;
    }

    for (let key in kolHomeConfig) {
      if (typeof kolHomeConfig[key] === 'string') {
        data = data.replaceAll(key, kolHomeConfig[key]);
      } else {
        let str = '';
        kolHomeConfig[key].forEach(element => {
          str += htmlContentForKey(key, element);
        });
        data = data.replaceAll(key, str);
      }

    }
    fs.writeFile(`../index.html`, data, (err) => {
      if (err) {
        console.error("writing ", err);
        return;
      }
      console.log('File written successfully!');
    });
  });
};

const generateDubaiHTML = () => {
  fs.readFile("./index-creator.html", "utf8", (err, data) => {
    if (err) {
      console.error("reading ", err);
      return;
    }

    for (let key in dubaiHomeConfig) {
      if (typeof dubaiHomeConfig[key] === 'string') {
        data = data.replaceAll(key, dubaiHomeConfig[key]);
      } else {
        let str = '';
        dubaiHomeConfig[key].forEach(element => {
          str += htmlContentForKey(key, element);
        });
        data = data.replaceAll(key, str);
      }

    }
    fs.writeFile(`../dubai.html`, data, (err) => {
      if (err) {
        console.error("writing ", err);
        return;
      }
      console.log('File written successfully!');
    });
  });
};

generateKolkataHTML();
generateDubaiHTML();