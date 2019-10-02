import React, { useState } from "react"
import styled, { css } from "styled-components"

import Swal from "sweetalert2"
import { Event } from "./Tracking/index"

import * as WebsiteText from "../copy"

const Button = styled.button`
  background: white;
  border-radius: 0.5em;
  border: 2px solid rgba(30, 13, 45, 0.03);
  margin-top: 5vh;
  padding: 1vh;
  display: block;
  min-width: 30vw;
  height: 3em;
  font-size: calc(8px + 2vmin);
  text-align: center;
  width: 60%;
  max-width: 60%;
  color: #0082c8;
`

const Container = styled.div`
  text-align: center;
  margin: 5%;
`
const FormTitle = styled.p`
  margin: 1vh;
  margin-bottom: 5vh;
  font-weight: bold;
  font-size: calc(4px + 3vmin);
`

const FormLabels = styled.p`
  margin: 1vh;
  font-weight: bold;
  font-size: calc(4px + 3vmin);
`

const FormInput = styled.input`
  background-color: #f0f0f0;
  height: 3em;
  min-width: 30vh;
  ${props =>
    props.larger &&
    css`
      height: 5.5em;
      min-width: 40vw;
    `}
`

const FormMessageInput = styled.textarea`
  background-color: #f0f0f0;
  height: 20vh;
  min-width: 40vw;
  border: 1px solid #aaa;
`

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const { name, email, message } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <Container>
      <FormTitle>{WebsiteText.default.form.title}</FormTitle>
      <FormLabels>{WebsiteText.default.form.firstInput}</FormLabels>
      <FormInput
        type="text"
        name="name"
        value={name}
        onChange={e => onChange(e)}
      />
      <FormLabels>{WebsiteText.default.form.secondInput}</FormLabels>
      <FormInput
        type="email"
        name="email"
        value={email}
        onChange={e => onChange(e)}
      />
      <FormLabels>{WebsiteText.default.form.thirdInput}</FormLabels>
      <FormMessageInput
        type="text"
        name="message"
        value={message}
        onChange={e => onChange(e)}
        larger
      />
      <div className="centerHorizontally">
        <Button
          onClick={() =>
            fetch("https://cakeseffiebk.herokuapp.com/cakes", {
              method: "post",
              body: JSON.stringify(formData),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            })
              .then(d =>
                setFormData({ ...formData, name: "", email: "", message: "" })
              )
              .then(d => Swal.fire("Thank you for your email!"))
              .then(d => Event("FORM", "Form Submitted", "HOME_PAGE"))
          }
        >
          <b>Send</b>
        </Button>
      </div>
    </Container>
  )
}

export default Form
