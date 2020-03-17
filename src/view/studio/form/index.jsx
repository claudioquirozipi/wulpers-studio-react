import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_CONTACT } from "../../../qraphql/querys/constact";
import Swal from "sweetalert2";
//Img
import imgform from "../../../static/img/form/imgM1.png";
import iconform1 from "../../../static/img/form/iconM1.svg";
import iconform2 from "../../../static/img/form/iconM2.svg";
import iconform3 from "../../../static/img/form/iconM3.svg";
//Styled Components
import {
  ContainerForm,
  Header,
  FormContainer,
  InputContainer,
  ButtonContainer
} from "./styled";

async function handleSubmit(e, phone, email, web, addTodo) {
  e.preventDefault();
  try {
    await addTodo({
      variables: {
        input: {
          data: {
            name: phone,
            email: email,
            message: web
          }
        }
      }
    });
    e.target.reset();
    Swal.fire({
      icon: "success",
      title: "Message sent succesfully",
      showConfirmButton: false,
      timer: 1500
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "an error occurred"
    });
  }
}

function Form() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  function handlePhone(e) {
    setPhone(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleWeb(e) {
    setWeb(e.target.value);
  }

  const [addTodo, { data }] = useMutation(CREATE_CONTACT);
  return (
    <ContainerForm>
      <Header>
        <h2>Let's make it happen</h2>
      </Header>
      <FormContainer>
        <form onSubmit={e => handleSubmit(e, phone, email, web, addTodo)}>
          <img src={imgform} alt="Form" />
          <InputContainer>
            <img src={iconform1} alt="" />
            <input
              type="number"
              placeholder="Phone"
              onChange={handlePhone}
              required
            />
          </InputContainer>
          <InputContainer>
            <img src={iconform2} alt="" />
            <input
              type="text"
              placeholder="Email"
              onChange={handleEmail}
              required
            />
          </InputContainer>
          <InputContainer>
            <img src={iconform3} alt="" />
            <input
              type="text"
              placeholder="Web company"
              onChange={handleWeb}
              required
            />
          </InputContainer>
          <ButtonContainer>
            <button>Send</button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </ContainerForm>
  );
}
export default Form;
