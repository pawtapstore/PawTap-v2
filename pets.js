// One entry per pet. The key (rex, luna, ...) is what goes in the tag's link:
//   https://YOURDOMAIN/?p=rex
// Keys: lowercase letters and numbers only, no spaces.
//
// To add a pet: copy one whole block (from the key to its closing "},"),
// paste it below, change the key and the details, and add the photo to the
// photos folder. Keep the commas exactly as they are.
//
// Everything in this file is public, so never put anything private here.

window.PETS = {

  rex: {
    name: "Džeris",
    phone: "+37128295975",          // with country code, no spaces
    whatsapp: "",                    // optional, same format; leave "" to hide the button
    photo: "photos/rex.jpg",
    lost: false,                     // change to true if Rex goes missing
    lostMessage: "",                 // optional custom banner; leave "" for the default
    lead: "",                        // optional intro line; leave "" for the default
    details: [
      ["Owner", "Timo"],
      ["Breed and colour", "brunais sunis, bruns"],
      ["Medical needs", "None"],
      ["Vet", "VET NAME AND PHONE"],
      ["Notes", "Friendly, but may be nervous around strangers."]
    ]
  },

  luna: {
    name: "Luna",
    phone: "+000000000000",
    whatsapp: "",
    photo: "photos/luna.jpg",
    lost: false,
    lostMessage: "",
    lead: "",
    details: [
      ["Owner", "OWNER FIRST NAME"],
      ["Breed and colour", "BREED, COLOUR"],
      ["Medical needs", "Needs medication twice a day - please call me."]
    ]
  }

};
