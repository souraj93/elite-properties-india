const fs = require("fs");

const detailsPageConfig = [{
  TITLE_TAG: "Vinayak Amara Newtown | Premium 2BHK & 3BHK Apartments",
  META_DESCRIPTION: "Vinayak Amara in Newtown, Action Area 2, offers 2BHK & 3BHK flats with premium amenities, starting from ₹1.64 Cr.",
  HTML_FILE_NAME: "vinayak-amara",
  HEADER_BACKGROUND_IMAGE: "../images/projects/vinayak-amara/2.jpg",
  PROJECT_TITLE: "Vinayak Amara",
  PROJECT_ADDRESS: "Action Area II, Newtown, West Bengal 700160",
  PROJECT_LOGO_LINK: "../images/projects/vinayak-amara/logo.jpg",
  PROJECT_SHORT_ADDRESS: "Newtown, Kolkata, WB",
  RESIDENCE_TYPE: "Apartments",
  CONSTRUCTION_STATUS: "Under Construction",
  LAND_AREA: "2 Acres (Approx.)",
  HANDOVER_DATE: "July, 2029",
  PROJECT_FLOORS: "G+27 Storey",
  SITE_ADDRESS: "Vinayak Amara, Newtown, Kolkata",
  PROJECT_DESCRIPTION: "Experience luxury living like never before! From party lawns to a yoga and meditation room, and even homes thoughtfully designed with Vaastu principles in mind, you'll find it all at your preferred location at Vinayak Amara in Newtown Action Area 2. We offer next-level amenities and the much-needed serenity of a modern integrated residential complex. \n Choose from our 3 BHK apartments in Newtown Kolkata or opt for spacious 4 BHK luxury apartments, each featuring its own double-height sky garden and three sides open for exceptional views and ample natural light. \n Our twin towers are among the highest in the action area 2, standing tall in the Newtown skyline. With 82% open-to-sky space, you'll enjoy stunning vistas and fresh air. The modern design and beautiful landscaping reflect the global aesthetic of contemporary India, making it a place you'll be proud to call home. \n Enjoy the benefits of a truly unique living environment with convenience, security, and efficient space solutions all under one roof. If you're looking for luxury apartments in Newtown Kolkata, Vinayak Amara is the ideal choice. Get ready for an extraordinary living experience!",
  GALLERY_IMAGES: [
    "../images/projects/vinayak-amara/1.jpg",
    "../images/projects/vinayak-amara/2.jpg",
    "../images/projects/vinayak-amara/3.jpg",
    "../images/projects/vinayak-amara/4.jpg",
    "../images/projects/vinayak-amara/5.jpg",
    "../images/projects/vinayak-amara/6.jpg",
    "../images/projects/vinayak-amara/7.jpg",
    "../images/projects/vinayak-amara/8.jpg",
    "../images/projects/vinayak-amara/9.jpg",
    "../images/projects/vinayak-amara/10.jpg",
    "../images/projects/vinayak-amara/11.jpg",
    "../images/projects/vinayak-amara/12.jpg",
    "../images/projects/vinayak-amara/13.jpg",
  ],
  YOUTUBE_VIDEO_LINK: ["https://www.youtube.com/embed/9a2DxTIVizQ"],
  PROJECT_AMENITIES: [{
    img: "../images/home//1530800376.png",
    text: "Banquet Hall"
  }, {
    img: "../images/home//1639825879.png",
    text: "Club"
  }, {
    img: "../images/home//1564817817.png",
    text: "Gymnasium"
  }, {
    img: "../images/home//1622133878.png",
    text: "Indoor Games Room"
  }, {
    img: "../images/home//1540894194.png",
    text: "Multipurpose Court"
  }, {
    img: "../images/home//swimming-pool-1715582322.jpg",
    text: "Swimming Pool"
  }],
  PROJECT_SPECIFICATIONS: [{
    title: "Bedroom",
    items: [
      "Floor: Vitrified tiles in bedrooms.",
      "Walls: Wall Putty/POP Finish."
    ]
  }, {
    title: "Bathroom",
    items: [
      "Walls: Wall tiles up to door height",
      "Floor: Anti-skid Tiles",
      "Sanitaryware and CP fittings of",
      "reputed make"
    ]
  }, {
    title: "Kitchen",
    items: [
      "Walls: Wall tiles up to 2’ on counter wall",
      "Floor: Vitrified Tiles",
      "Counter: Granite counter",
      "Fitting/Fixtures: Stainless steel sink with",
      "reputed make fittings"
    ]
  }, {
    title: "Doors & Windows",
    items: [
      "Entrance Doors: Decorated flush doors",
      "Internal Doors: Flush doors",
      "Windows: aluminium windows",
    ]
  }, {
    title: "Living/Dining/Lobby/Passage Floor",
    items: [
      "Premium finish vitrified tiles Walls & Ceiling",
      "Wall Putty/POP Finish",
    ]
  }],
  PROJECT_BUDGET_TITLE: "Apartments",
  PROJECT_BUDGET_TABLE_HEADERS: [
    "Unit Type",
    "Size (Sq-Ft)",
    "Price Range (₹)",
  ],
  PROJECT_BUDGET_TABLE_ROWS: [{
    items: [
      "3 BHK",
      "1028 - 1516",
      "1.64 Cr Onwards",
    ]
  }, {
    items: [
      "4 BHK",
      "1028 - 1516",
      "2.32 Cr Onwards",
    ]
  }],
  LOCATION_LINES: [
    "07-0718, Action Area I, IIG",
    "Newtown, Kolkata",
    "West Bengal 700160",
  ],
  LOCATION_MAP_URL: "https://www.google.com/maps/place/Vinayak+Amara/@22.5776804,88.4935782,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020b79df5e05df:0xe2a51296e12db2ad!8m2!3d22.5776804!4d88.4961531!16s%2Fg%2F11sttp_c69?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D",
  DEVELOPER_LOGO: "../images/projects/vinayak-amara/dev-logo.jpg",
  DEVELOPER_TITLE: "Vinayak Group",
  CONTACT_US_MAP: "https://www.google.com/maps/place/11F,+04,+Street+Number+372,+Action+Area+I,+IIF,+Newtown,+Kolkata,+Chakpachuria,+West+Bengal+700156/@22.5863403,88.4838904,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020ac8535effff:0x2cfad415998af67e!8m2!3d22.5863403!4d88.4864653!16s%2Fg%2F11t_sfp1c8?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
  CONTACT_US_ADDRESS: "Kolkata Office Address: 11F, 04, Street No. 372 Action Area 1, \n Newtown Chakpachuria, West Bengal 700156",
  CONTACT_US_EMAIL: "elitepropertiesindia24@gmail.com",
  CONTACT_US_SECONDARY_PHONE: "+918583878747",
  CONTACT_US_PRIMARY_PHONE: "+918240266320",
  LINK_TO_OTHER_TEXT: "Dubai Real Estate Opportunities",
  LINK_TO_OTHER_URL: "../dubai",
  LINK_TO_HOME_URL: "../index",

}, {
  TITLE_TAG: "Forum Estates Aranya, Innovative Township, Phase I | Newtown - Kolkata",
  META_DESCRIPTION: "High-Security Living: Ensuring peace of mind, Forum Estates Aranya provides high-security living in one of Kolkata's most vibrant and sought-after communities.",
  HTML_FILE_NAME: "forum-estates",
  HEADER_BACKGROUND_IMAGE: "../images/projects/forum-estates/3.jpg",
  PROJECT_TITLE: "Forum Estates",
  PROJECT_ADDRESS: "Action Area IIB, Reckjoani, Newtown, West Bengal 700135",
  PROJECT_LOGO_LINK: "../images/projects/forum-estates/dev-logo.png",
  PROJECT_SHORT_ADDRESS: "Action Area IIB, Newtown, WB",
  RESIDENCE_TYPE: "Villa",
  CONSTRUCTION_STATUS: "Under Construction",
  LAND_AREA: "232 Acres (Appx.)",
  HANDOVER_DATE: "September, 2027",
  PROJECT_FLOORS: "",
  SITE_ADDRESS: "Forum Estates, Southern Bypass, Kolkata",
  PROJECT_DESCRIPTION: "Forum Estates redefines luxury living as Kolkata’s premier \"city within a city,\" where urban sophistication meets natural serenity. Imagine a home that grows with your family, seamlessly blending lush green spaces with cutting-edge amenities for a complete, vibrant lifestyle. Experience unparalleled privacy in spacious villas, thrive in state-of-the-art professional spaces, and unwind at the high street’s buzzing cafes, youth centers, and recreational facilities. Nestled in New Town, opposite the picturesque Eco Park, and surrounded by premier schools, hospitals, and shopping, Forum Estates is more than a residence—it’s a community crafted for life, learning, and limitless possibilities.",
  GALLERY_IMAGES: [
    "../images/projects/forum-estates/1.jpg",
    "../images/projects/forum-estates/2.jpg",
    "../images/projects/forum-estates/3.jpg",
    "../images/projects/forum-estates/4.jpg",
    "../images/projects/forum-estates/5.jpg",
    "../images/projects/forum-estates/6.jpg",
    "../images/projects/forum-estates/7.jpg",
    "../images/projects/forum-estates/8.jpg",
    "../images/projects/forum-estates/9.jpg",
  ],
  YOUTUBE_VIDEO_LINK: [],
  PROJECT_AMENITIES: [{
    img: "../images/home//1530800376.png",
    text: "Banquet Hall"
  }, {
    img: "../images/home//1639825879.png",
    text: "Club"
  }, {
    img: "../images/home//1564817817.png",
    text: "Gymnasium"
  }, {
    img: "../images/home//1622133878.png",
    text: "Indoor Games Room"
  }, {
    img: "../images/home//1540894194.png",
    text: "Multipurpose Court"
  }, {
    img: "../images/home//swimming-pool-1715582322.jpg",
    text: "Swimming Pool"
  }],
  PROJECT_SPECIFICATIONS: [],
  PROJECT_BUDGET_TITLE: "Villas",
  PROJECT_BUDGET_TABLE_HEADERS: [
    "Unit Type",
    "Size (Sq-Ft)",
    "Price Range (₹)",
  ],
  PROJECT_BUDGET_TABLE_ROWS: [{
    items: [
      "4 BHK - 8 BHK",
      "4080 - 13605",
      "4.45 Cr Onwards  - 13.18 Cr",
    ]
  }],
  LOCATION_LINES: [
    "Action Area IIB",
    "Reckjoani",
    "Newtown",
    "West Bengal 700135"
  ],
  LOCATION_MAP_URL: "https://www.google.com/maps/place/Forum+Estates/@22.5760839,88.3197996,12z/data=!4m10!1m2!2m1!1sforum+estates!3m6!1s0x3a02751521568e39:0xf684ee2df9e3cfe!8m2!3d22.6079214!4d88.4784693!15sCg1mb3J1bSBlc3RhdGVzkgETaG91c2luZ19kZXZlbG9wbWVudOABAA!16s%2Fg%2F11l75d0mc8?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
  DEVELOPER_LOGO: "../images/projects/forum-estates/dev-logo.png",
  DEVELOPER_TITLE: "Forum Group",
  CONTACT_US_MAP: "https://www.google.com/maps/place/11F,+04,+Street+Number+372,+Action+Area+I,+IIF,+Newtown,+Kolkata,+Chakpachuria,+West+Bengal+700156/@22.5863403,88.4838904,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020ac8535effff:0x2cfad415998af67e!8m2!3d22.5863403!4d88.4864653!16s%2Fg%2F11t_sfp1c8?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
  CONTACT_US_ADDRESS: "Kolkata Office Address: 11F, 04, Street No. 372 Action Area 1, \n Newtown Chakpachuria, West Bengal 700156",
  CONTACT_US_EMAIL: "elitepropertiesindia24@gmail.com",
  CONTACT_US_SECONDARY_PHONE: "+918583878747",
  CONTACT_US_PRIMARY_PHONE: "+918240266320",
  LINK_TO_OTHER_TEXT: "Dubai Real Estate Opportunities",
  LINK_TO_OTHER_URL: "../dubai",
  LINK_TO_HOME_URL: "../index"

},{
  TITLE_TAG: "Shobha Hartland Dubai | Luxury Villas with World-Class Amenities",
  META_DESCRIPTION: "Discover luxury living at Shobha Hartland. Spacious villas with premium facilities in a serene environment.",
  HTML_FILE_NAME: "shobha-hartland",
  HEADER_BACKGROUND_IMAGE: "../images/projects/shobha-hartland/2.jpg",
  PROJECT_TITLE: "Shobha Hartland",
  PROJECT_ADDRESS: "51 Adan St, Bukadra, Nad Al Sheba 1, Dubai, United Arab Emirates",
  PROJECT_LOGO_LINK: "../images/projects/shobha-hartland/dev-logo.png",
  PROJECT_SHORT_ADDRESS: "Bukadra, Dubai, United Arab Emirates",
  RESIDENCE_TYPE: "Apartments/ Villa/ Townhouses",
  CONSTRUCTION_STATUS: "-",
  LAND_AREA: "8588.72 sq.ft- 8591.88 sq.ft(Saleable area)",
  HANDOVER_DATE: "-",
  PROJECT_FLOORS: "-",
  SITE_ADDRESS: "Bukadra, Dubai, United Arab Emirates",
  PROJECT_DESCRIPTION: "Discover luxury living at Shobha Hartland. Spacious villas with premium facilities in a serene environment.",
  GALLERY_IMAGES: [
    "../images/projects/shobha-hartland/1.jpg",
    "../images/projects/shobha-hartland/2.jpg",
    "../images/projects/shobha-hartland/3.jpg",
    "../images/projects/shobha-hartland/4.jpg",
    "../images/projects/shobha-hartland/5.jpg",
    "../images/projects/shobha-hartland/6.jpg",
    "../images/projects/shobha-hartland/7.jpg",
    "../images/projects/shobha-hartland/8.jpg",
  ],
  YOUTUBE_VIDEO_LINK: ["https://www.youtube.com/embed/zEYwpHByxp4?si=vVuQnI2QGMHdgDbA"],
  PROJECT_AMENITIES: [{
    img: "../images/home//1530800376.png",
    text: "Banquet Hall"
  }, {
    img: "../images/home//1639825879.png",
    text: "Club"
  }, {
    img: "../images/home//1564817817.png",
    text: "Gymnasium"
  }, {
    img: "../images/home//1622133878.png",
    text: "Indoor Games Room"
  }, {
    img: "../images/home//1540894194.png",
    text: "Multipurpose Court"
  }, {
    img: "../images/home//swimming-pool-1715582322.jpg",
    text: "Swimming Pool"
  }],
  PROJECT_SPECIFICATIONS: [{
    title: "Kitchen",
    items: [
      "Flooring : Anti Skid Vitrified Tiles.",
      "Counter : Granite Slab with a stainless steel sink, wall tiles up to 2 ft. height on all around wall over granite counter.",
      "Water Filter Point, Exhaust Fan Point, Chimney Point.",
      "Provision for Outlets for Exhaust Fan / Chimney."
    ]
  }, {
    title: "Toilet",
    items: [
      "Flooring : Anti Skid Ceramic Tiles.",
      "Basin : Granite Basin Counter in all toilets Except Roof toilet.",
      "Wall : Dado in ceramic tiles up to door height 7 ft."
    ]
  }, {
    title: "Flooring",
    items: [
      "Vitrified Tiles flooring in Living & Dining, All Bedrooms & Staircase.",
      "Solar Reflective Tiles in Roof Area."
    ]
  }, {
    title: "Doors & Windows",
    items: [
      "Main Door : Flush Door with Duco Paint.",
      "Back Side : Flush Door with Enamel Paint.",
      "Windows : Anodized / Powder Coated Aluminium windows.",
      "Grill : Optional at extra cost."
    ]
  }],
  PROJECT_BUDGET_TITLE: "Bungalows",
  PROJECT_BUDGET_TABLE_HEADERS: [
    "Unit Type",
    "Size (Sq-Ft)",
    "Area Type",
    "Price Range (₹)",
    "Units"
  ],
  PROJECT_BUDGET_TABLE_ROWS: [{
    items: [
      "-",
      "-",
      "-",
      "-",
      ""
    ]
  }],
  LOCATION_LINES: [
    "51 Adan St, Bukadra",
    "Nad Al Sheba 1, Dubai",
    " United Arab Emirates"
  ],
  LOCATION_MAP_URL: "https://www.google.com/maps/place/Sobha+Hartland+II/@25.1701057,55.3275405,17z/data=!4m14!1m7!3m6!1s0x3e5f67ccb1ed9dcd:0x6b63ad637c80c2c0!2sEmarat-+Jatabiyah!8m2!3d25.1701057!4d55.3301154!16s%2Fg%2F1ts2yrr4!3m5!1s0x3e5f67d05c36a8f7:0xcee7a7404867d8f8!8m2!3d25.1721705!4d55.3321464!16s%2Fg%2F11kj962_zc?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  DEVELOPER_LOGO: "../images/projects/shobha-hartland/dev-logo.png",
  DEVELOPER_TITLE: "Sobha Realty",
  CONTACT_US_MAP: "https://www.google.com/maps/place/11F,+04,+Street+Number+372,+Action+Area+I,+IIF,+Newtown,+Kolkata,+Chakpachuria,+West+Bengal+700156/@22.5863403,88.4838904,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020ac8535effff:0x2cfad415998af67e!8m2!3d22.5863403!4d88.4864653!16s%2Fg%2F11t_sfp1c8?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
  CONTACT_US_ADDRESS: "Kolkata Office Address: 11F, 04, Street No. 372 Action Area 1, \n Newtown Chakpachuria, West Bengal 700156",
  CONTACT_US_EMAIL: "elitepropertiesindia24@gmail.com",
  CONTACT_US_SECONDARY_PHONE: "+918583878747",
  CONTACT_US_PRIMARY_PHONE: "+918240266320",
  LINK_TO_OTHER_TEXT: "Property Listings in Kolkata",
  LINK_TO_OTHER_URL: "../index",
  LINK_TO_HOME_URL: "../dubai"

}, {
  TITLE_TAG: "Damac Hills 2 Dubai | Luxury Villas/Apartments with Modern Amenities",
  META_DESCRIPTION: "Live in luxury at Damac Hills 2 - Spacious villas with modern amenities and green spaces in Dubai’s most peaceful community.",
  HTML_FILE_NAME: "damac-hills-2",
  HEADER_BACKGROUND_IMAGE: "../images/projects/damac-hills-2/2.jpg",
  PROJECT_TITLE: "Damac Hills 2",
  PROJECT_ADDRESS: " X9HM+CF - Al Yufrah 2, AKOYA - Dubai - United Arab Emirates",
  PROJECT_LOGO_LINK: "../images/projects/damac-hills-2/dev-logo.png",
  PROJECT_SHORT_ADDRESS: "AKOYA - Dubai - United Arab Emirates",
  RESIDENCE_TYPE: "Villas/ Apartments",
  CONSTRUCTION_STATUS: "-",
  LAND_AREA: "-",
  HANDOVER_DATE: "-",
  PROJECT_FLOORS: "-",
  SITE_ADDRESS: "Damac Hills 2, AKOYA - Dubai - United Arab Emirates",
  PROJECT_DESCRIPTION: "Live in luxury at Damac Hills 2 - Spacious villas with modern amenities and green spaces in Dubai’s most peaceful community.",
  GALLERY_IMAGES: [
    "../images/projects/damac-hills-2/1.jpg",
    "../images/projects/damac-hills-2/2.jpg",
    "../images/projects/damac-hills-2/3.jpg",
    "../images/projects/damac-hills-2/4.jpg",
    "../images/projects/damac-hills-2/5.jpg",
    "../images/projects/damac-hills-2/6.jpg",
    "../images/projects/damac-hills-2/7.jpg",
    "../images/projects/damac-hills-2/8.jpg",
    "../images/projects/damac-hills-2/9.jpg",
    "../images/projects/damac-hills-2/10.jpg",
  ],
  YOUTUBE_VIDEO_LINK: ["https://www.youtube.com/embed/0xrtJefoVH4?si=Z3Dvn450-xFynBuv"],
  PROJECT_AMENITIES: [{
    img: "../images/home//1530800376.png",
    text: "Banquet Hall"
  }, {
    img: "../images/home//1639825879.png",
    text: "Club"
  }, {
    img: "../images/home//1564817817.png",
    text: "Gymnasium"
  }, {
    img: "../images/home//1622133878.png",
    text: "Indoor Games Room"
  }, {
    img: "../images/home//1540894194.png",
    text: "Multipurpose Court"
  }, {
    img: "../images/home//swimming-pool-1715582322.jpg",
    text: "Swimming Pool"
  }],
  PROJECT_SPECIFICATIONS: [{
    title: "Kitchen",
    items: [
      "Flooring : Anti Skid Vitrified Tiles.",
      "Counter : Granite Slab with a stainless steel sink, wall tiles up to 2 ft. height on all around wall over granite counter.",
      "Water Filter Point, Exhaust Fan Point, Chimney Point.",
      "Provision for Outlets for Exhaust Fan / Chimney."
    ]
  }, {
    title: "Toilet",
    items: [
      "Flooring : Anti Skid Ceramic Tiles.",
      "Basin : Granite Basin Counter in all toilets Except Roof toilet.",
      "Wall : Dado in ceramic tiles up to door height 7 ft."
    ]
  }, {
    title: "Flooring",
    items: [
      "Vitrified Tiles flooring in Living & Dining, All Bedrooms & Staircase.",
      "Solar Reflective Tiles in Roof Area."
    ]
  }, {
    title: "Doors & Windows",
    items: [
      "Main Door : Flush Door with Duco Paint.",
      "Back Side : Flush Door with Enamel Paint.",
      "Windows : Anodized / Powder Coated Aluminium windows.",
      "Grill : Optional at extra cost."
    ]
  }],
  PROJECT_BUDGET_TITLE: "Bungalows",
  PROJECT_BUDGET_TABLE_HEADERS: [
    "Unit Type",
    "Size (Sq-Ft)",
    "Area Type",
    "Price Range (₹)",
    "Units"
  ],
  PROJECT_BUDGET_TABLE_ROWS: [{
    items: [
      "-",
      "-",
      "-",
      "-",
      ""
    ]
  }],
  LOCATION_LINES: [
    " X9HM+CF - Al Yufrah 2",
    "AKOYA, Dubai",
    "United Arab Emirates"
  ],
  LOCATION_MAP_URL: "https://www.google.com/maps?sca_esv=e02818271ce7f460&output=search&q=X9HM%2BCF+-+Al+Yufrah+2,+AKOYA+-+Dubai+-+United+Arab+Emirates&source=lnms&fbs=AEQNm0COtQ6qE5snXClm_cWqGTLX_jMP5V4l2v9LemFtanifXVoSDc4z6nO25TAUUgCi_PqCbebMxH2l70BIpVN1tqaoTHU6lwbH9DsAcppZt6T9NYgJhqN-CxUP6v-KgdRHi_aRy5fEF9y2ip7sLwrQOdVrPWz7g0rDeDpKrQmZgy69qnSLINuAz2_HdWCssNNrsaeTWfyoY8KICeLZKZDkB3w3c091Lg&entry=mc&ved=1t:200715&ictx=111",
  DEVELOPER_LOGO: "../images/projects/damac-hills-2/dev-logo.png",
  DEVELOPER_TITLE: "Damac",
  CONTACT_US_MAP: "https://www.google.com/maps/place/11F,+04,+Street+Number+372,+Action+Area+I,+IIF,+Newtown,+Kolkata,+Chakpachuria,+West+Bengal+700156/@22.5863403,88.4838904,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020ac8535effff:0x2cfad415998af67e!8m2!3d22.5863403!4d88.4864653!16s%2Fg%2F11t_sfp1c8?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
  CONTACT_US_ADDRESS: "Kolkata Office Address: 11F, 04, Street No. 372 Action Area 1, \n Newtown Chakpachuria, West Bengal 700156",
  CONTACT_US_EMAIL: "elitepropertiesindia24@gmail.com",
  CONTACT_US_SECONDARY_PHONE: "+918583878747",
  CONTACT_US_PRIMARY_PHONE: "+918240266320",
  LINK_TO_OTHER_TEXT: "Property Listings in Kolkata",
  LINK_TO_OTHER_URL: "../index",
  LINK_TO_HOME_URL: "../dubai"

}];

const htmlContentForKey = (key, element) => {
  if (key === "GALLERY_IMAGES") {
    return `<a class="gallery-item"
                  href=${element}>
                  <img src=${element} alt=""
                    title="">
                </a>`;
  } else if (key === "YOUTUBE_VIDEO_LINK") {
    return `<div class="text-center mb-3">
                <span class="heading_title text-dark fw-medium">Videos</span>
              </div>
              <div id="videoBlock" class="">
                <iframe class="project-yt-videos" src="${element}">
                </iframe>
              </div>`
  } else if (key === "PROJECT_AMENITIES") {
    return `<div class="features_item d-flex align-items-center">
                  <span class="feature_icon rounded-circle d-flex justify-content-center align-items-center">
                    <img src=${element.img} alt="Banquet Hall">
                  </span>
                  <span class="ps-2">${element.text}</span></span>
                </div>`
  } else if (key === "PROJECT_SPECIFICATIONS") {
    let items = "";
    element.items.forEach(each => {
      items += `<li>${each}</li>\n`
    });
    return `<div class="specification_items border-bottom pb-3 mb-3">
                <span class="d-block text-uppercase fw-medium text-dark mb-1">${element.title}</span>
                <ul class="speci_list">
                  ${items}
                </ul>
              </div>`
  } else if (key === "PROJECT_BUDGET_TABLE_HEADERS") {
    return `<th class="text-dark">${element}</th>`;
  } else if (key === "PROJECT_BUDGET_TABLE_ROWS") {
    let tds = "";
    element.items.forEach(each => {
      tds += `<td>${each}</td>\n`
    });
    return `<tr class="tr-block-units tr_block_943">${tds}</tr>\n`
  } else if (key === "LOCATION_LINES") {
    return `${element} <br />`
  }
  return "";
};

const generateHTML = () => {
  let str = '';
  detailsPageConfig.forEach(obj => {
  fs.readFile("./project-details-creator.html", "utf8", (err, data) => {
    if (err) {
      console.error("reading ", err);
      return;
    }
    
      for (let key in obj) {
        if (typeof obj[key] === 'string') {
          data = data.replaceAll(key, obj[key]);
        } else {
          str = '';
          if (obj[key].length) {
            obj[key].forEach(element => {
              str += htmlContentForKey(key, element);
            });
            if (key === "PROJECT_SPECIFICATIONS") {
              str = `<div class="details_info_block bg-white mb-4" id="Specifications">
                <div class="text-center mb-3">
                  <span class="heading_title text-dark fw-medium">Specifications</span>
                </div>
                ${str}
              </div>`
            }
          }
          data = data.replaceAll(key, str);
        }
  
      }
      fs.writeFile(`../project/${obj.HTML_FILE_NAME}.html`, data, (err) => {
        if (err) {
          console.error("writing ", err);
          return;
        }
        console.log('File written successfully!');
      });
    
    });
  });
};

generateHTML();