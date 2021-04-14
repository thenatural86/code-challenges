// A local underwriter has informed us that, when underwriting life insurance,
// it’s important to account for the client’s medical conditions,
// and make sure we adapt the quote price given the client’s medical risk.
// We feel awfully silly not having considered this prior, and want to get right on the task of building this feature.

// We organized our favorite underwriters in a room and asked them to hammer out a first pass at these rules,
// which we’ve converted into JSON for readability.

rules = {
  medicalRules: [
    { condition: 'heart-disease', type: 'add', factor: '10' },
    { condition: 'really-big-hair', type: 'add', factor: '7' },
    { condition: 'pet-alligator', type: 'knockout' },
    { condition: 'breathes-a-lot', type: 'multiply', factor: '1.01' },
  ],
}

// Each rule describes how a monthly quote price should be modified, given a medical condition experienced by the user.

// Please create a system which, given an initial base quote price, and a known medical condition for a client,
// calculates the change to that quote given the new medical underwriting rules.

// For the above rules, we expect conditions to impact quotes as suggested by the following:

let base_quote = 100.0
let condition = 'heart-disease'
// adjust_quote_for_risk(rules, base_quote, "breathes-a-lot")  # 101.0

// base_quote = 50.0
// adjust_quote_for_risk(rules, base_quote, "heart-disease")  # 60.0

const adjust_quote_for_risk = (rules, base_quote, condition) => {
  for (let element of rules.medicalRules) {
    let price = parseInt(base_quote) + parseInt(element.factor)
    if (element.condition === 'heart-disease') {
      console.log('#', price)
    } else if (element.condition === 'really-big-hair') {
      console.log('#', price)
    } else if (element.condition === 'pet-alligator') {
      price = 0
      console.log('#', price)
    } else if (element.condition === 'breathes-a-lot') {
      price = parseInt(base_quote) * 1.01
      console.log('#', price)
    }
  }
}

adjust_quote_for_risk(rules, base_quote, condition)
