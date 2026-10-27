/* ============================================================
   ClearCycle — ALL CONTENT LIVES IN THIS ONE FILE
   ------------------------------------------------------------
   To update the site you only ever edit this file.
   No coding knowledge is needed to change the collection date.
   Just change the text inside the quote marks below.
   ============================================================ */


/* ---------- 1. NEXT SOCIETY COLLECTION ----------
   Change the date and place here. Nothing else.        */

const LAST_UPDATED = "27 October 2026";

const COLLECTION = {
  date: "CHANGE ME",
  place: "CHANGE ME"
};


/* ---------- 2. DROP OFF POINTS ----------
   Only add a point here if you have found its name on the
   MPCB authorised recyclers register. Put the date you
   checked it in "checked", and measure the distance from
   the society in Google Maps (C1 Step 4).                               */

const DROP_POINTS = [
  {
    name: "Oberoi Sky City",
    address: "S. V. Road, Goregaon (W), Mumbai",
    distance: "CHECK",
    checked: "26 October 2026"
  },
  {
    name: "Hub Mall",
    address: "Link Road, Andheri (W), Mumbai",
    distance: "CHECK",
    checked: "26 October 2026"
  },
  {
    name: "R-City Mall",
    address: "L.B.S. Marg, Ghatkopar (W), Mumbai",
    distance: "CHECK",
    checked: "26 October 2026"
  }
];


/* ---------- 3. THE ITEM LIST ----------
   name      = what the item is called
   terms     = every word a resident might actually type
   category  = plain English group, used by the checkboxes
   cpcb      = the official CPCB category from the E-Waste Rules 2022 (A2)
   ewaste    = true or false
   todo      = one sentence telling them what to do
   resale    = true if it may still be worth money         */

const ITEMS = [

  { name: "Mobile phone", terms: ["phone","mobile","cell","smartphone","handset","iphone","android"],
    category: "Phones", cpcb: "IT and telecommunication equipment", ewaste: true, resale: true,
    todo: "Wipe your data, then drop it at a collection point or the society collection." },

  { name: "Charger", terms: ["charger","wire","cable","adaptor","adapter","plug","power brick","chargers"],
    category: "Chargers", cpcb: "IT and telecommunication equipment", ewaste: true, resale: false,
    todo: "Take it to a collection point or hand it in at the society collection." },

  { name: "USB cable", terms: ["usb","cable","wire","cord","lead","data cable"],
    category: "Cables", cpcb: "IT and telecommunication equipment", ewaste: true, resale: false,
    todo: "Take it to a collection point or hand it in at the society collection." },

  { name: "Extension board", terms: ["extension","extension board","spike guard","power strip"],
    category: "Cables", cpcb: "IT and telecommunication equipment", ewaste: true, resale: false,
    todo: "Take it to a collection point or hand it in at the society collection." },

  { name: "Laptop", terms: ["laptop","computer","notebook","macbook","pc"],
    category: "Laptops", cpcb: "IT and telecommunication equipment", ewaste: true, resale: true,
    todo: "Wipe your data, then drop it at a collection point or the society collection." },

  { name: "Tablet", terms: ["tablet","ipad","tab"],
    category: "Laptops", cpcb: "IT and telecommunication equipment", ewaste: true, resale: true,
    todo: "Wipe your data, then drop it at a collection point or the society collection." },

  { name: "Computer monitor", terms: ["monitor","screen","display","cpu"],
    category: "Laptops", cpcb: "IT and telecommunication equipment", ewaste: true, resale: false,
    todo: "Take it to a collection point. Screens must not go in the normal bin." },

  { name: "Power bank", terms: ["power bank","powerbank","battery pack","portable charger"],
    category: "Batteries", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Take it to a collection point. Never put a swollen power bank in the bin." },

  { name: "AA or AAA battery", terms: ["battery","batteries","cell","aa","aaa","pencil cell"],
    category: "Batteries", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Collect them in a jar, then take them to a collection point." },

  { name: "Button cell battery", terms: ["button cell","watch battery","coin cell","coin battery"],
    category: "Batteries", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Take it to a collection point. These leak badly if left in a drawer." },

  { name: "CFL bulb", terms: ["cfl","bulb","light","lamp","cfl bulb"],
    category: "Bulbs", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Wrap it in paper so it cannot break, then take it to a collection point." },

  { name: "LED bulb", terms: ["led","bulb","light","lamp","led bulb"],
    category: "Bulbs", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Take it to a collection point. It does not go in the normal bin." },

  { name: "Tube light", terms: ["tube light","tubelight","tube","fluorescent"],
    category: "Bulbs", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Wrap it carefully so it cannot break, then take it to a collection point." },

  { name: "Earphones", terms: ["earphones","headphones","earbuds","airpods","headset","earphone"],
    category: "Other", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Take them to a collection point or hand them in at the society collection." },

  { name: "Bluetooth speaker", terms: ["speaker","bluetooth speaker","sound box","soundbar"],
    category: "Other", cpcb: "Consumer electrical and electronics", ewaste: true, resale: true,
    todo: "Wipe any saved devices, then drop it at a collection point." },

  { name: "Smart watch", terms: ["watch","smartwatch","smart watch","fitness band","fitbit"],
    category: "Other", cpcb: "Consumer electrical and electronics", ewaste: true, resale: true,
    todo: "Wipe your data, then drop it at a collection point." },

  { name: "WiFi router", terms: ["router","wifi","wi-fi","modem","wifi box","internet box"],
    category: "Other", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Reset it to factory settings, then take it to a collection point." },

  { name: "Set top box", terms: ["set top box","settop","dth","cable box","tata sky","dish"],
    category: "Other", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Return it to your provider if rented, otherwise take it to a collection point." },

  { name: "Remote control", terms: ["remote","remote control","tv remote"],
    category: "Other", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Take out the batteries, then take both to a collection point." },

  { name: "Keyboard", terms: ["keyboard","keys"],
    category: "Other", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Take it to a collection point or hand it in at the society collection." },

  { name: "Computer mouse", terms: ["mouse","computer mouse"],
    category: "Other", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Take it to a collection point or hand it in at the society collection." },

  { name: "Printer", terms: ["printer","scanner","xerox machine"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: false,
    todo: "Remove the cartridge first, then take both to a collection point." },

  { name: "Printer cartridge", terms: ["cartridge","ink","toner","ink cartridge"],
    category: "Other", cpcb: "Consumer electrical and electronics", ewaste: true, resale: false,
    todo: "Take it to a collection point. Ink must not go in the normal bin." },

  { name: "Electric iron", terms: ["iron","press","clothes iron","istri"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: false,
    todo: "Take it to a collection point or hand it in at the society collection." },

  { name: "Mixer grinder", terms: ["mixer","grinder","mixie","blender","juicer"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: false,
    todo: "Take it to a collection point or hand it in at the society collection." },

  { name: "Electric kettle", terms: ["kettle","electric kettle"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: false,
    todo: "Take it to a collection point or hand it in at the society collection." },

  { name: "Toaster", terms: ["toaster","sandwich maker","griller"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: false,
    todo: "Take it to a collection point or hand it in at the society collection." },

  { name: "Hair dryer", terms: ["hair dryer","hairdryer","dryer","straightener"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: false,
    todo: "Take it to a collection point or hand it in at the society collection." },

  { name: "Table fan", terms: ["fan","table fan","pedestal fan","ceiling fan"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: false,
    todo: "Take it to a collection point. It is too large for the society collection." },

  { name: "Microwave oven", terms: ["microwave","oven","otg"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: true,
    todo: "Take it to a collection point. Call ahead as it is heavy." },

  { name: "Television", terms: ["tv","television","led tv","smart tv","telly"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: true,
    todo: "Log out of all accounts, then arrange a drop off. It is too large for the society collection." },

  { name: "Refrigerator", terms: ["fridge","refrigerator","freezer"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: true,
    todo: "Take it to a collection point. Call ahead as it needs special handling." },

  { name: "Washing machine", terms: ["washing machine","washer","washing"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: true,
    todo: "Take it to a collection point. Call ahead as it needs special handling." },

  { name: "Air conditioner", terms: ["ac","air conditioner","split ac","window ac"],
    category: "Appliances", cpcb: "Large and small electrical equipment", ewaste: true, resale: true,
    todo: "Call the collection point first. The gas inside must be removed safely." },

  /* These are NOT e-waste. They are here so the site can say no clearly. */

  { name: "Plastic bottle", terms: ["bottle","plastic bottle","water bottle"],
    category: "Other", ewaste: false, resale: false,
    todo: "This is not e-waste. Put it in your dry waste bin." },

  { name: "Cardboard box", terms: ["cardboard","box","carton"],
    category: "Other", ewaste: false, resale: false,
    todo: "This is not e-waste. Put it in your dry waste bin." },

  { name: "Old newspaper", terms: ["newspaper","paper","raddi","magazine"],
    category: "Other", ewaste: false, resale: false,
    todo: "This is not e-waste. Give it to the raddiwala or put it in dry waste." }

];
