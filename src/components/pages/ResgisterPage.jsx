import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import jondoe from "../../assets/avatar.jpg" 

const Section = styled.section`
  height: calc(100vh - 5rem);
  width: 100%;
  display: grid;
  place-items: center;

  form {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    padding: 8rem 4rem;
    border-radius: 1rem;
    display: flex;
     flex-direction: column;
     align-items: center;
  }
  .containerImg {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
  }
  .imgForm {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  #file {
    display: none;
  }

  input {
    display: block;
    padding: 0.4rem 0.8rem;
    margin: 0.3rem auto;
    outline: none;
    border: none;
  }

  input {
    display: block;
    padding: 0.4rem 0.8rem;
    margin: 0.3rem auto;
    outline: none;
    border: none;
  }
  span {
    color: white;
  }

  input[type="submit"] {
    border: 2px solid #ba3fc5;
    background-color: transparent;
  }

  input:focus {
    outline: none;
    border: none;
  }
  .text-white{
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5rem;
  }
`;

const RegisterPage = () => {
  const { registers } = useContext(UserContext);
  const [boolean, setBoolean] = useState(false);
  const [boo, setBoo] = useState(false);
  const [source, setSource] = useState(jondoe);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const know = registers({ ...data, image: source,productsFav:[]});
    setBoolean(know);
    setBoo(!know);

    setTimeout(() => {
      setBoo(false);
    }, 3000);
  };

  const sourceImg = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", (e) => {
      setSource(e.target.result);
    });
  };

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)} /* autocomplete="off" */>
        
        <div className="containerImg">
          <label htmlFor="file">
          <img src={source} alt="foto-de-penfil" className="imgForm" />
          </label>
          <input type="file" onChange={sourceImg} id="file" name="imgregister"/>
        </div>

        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="name"
        />
        {errors.text && boo && <span>This field is required</span>}

        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="email"
        />
        {errors.email && <span>This field is required</span>}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" value="enviar" />

        {boo && <span>este usuario ya esta registrado</span>}
      <Link to="login" className="text-white">login</Link>
      </form>
      {boolean && <Redirect to="/" />}
    </Section>
  );
};

export default RegisterPage;
