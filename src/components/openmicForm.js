import React from "react"

export default () => (
  <form
    name="contact"
    method="post"
    action="/thankyou"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
    </div>
    <div>
      <label htmlFor="message">What date and time slot?</label>
      <textarea name="message" id="message" rows="6" required />
    </div>
    <div>
      <input type="submit" value="Submit" />
      <input type="reset" value="Clear" />
    </div>
  </form>
)