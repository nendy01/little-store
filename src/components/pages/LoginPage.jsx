import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";

const Section = styled.section`
  height: calc( 100vh - 5rem);
  width: 100%;
  display: grid;
  place-items: center;

 form{
    background-color: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
     padding: 8rem 4rem;
     border-radius: 1rem;
     display: flex;
     flex-direction: column;
     align-items: center;
 }

  
  input{
      display: block;
      padding: .4rem .8rem;
      margin: .3rem auto;
      outline: none;
      border: none;
  }
  span{
      color: white;
  }

  input[type="submit"]{
      border: 2px solid #ba3fc5;
      background-color: transparent;
  }

  input:focus{
    outline: none;
    border: none;
  }
  .text-white{
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

const LoginPage = () => {
    const {login,user:userauth} = useContext(UserContext);
    const [b, setb] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data,e) => {

     let userdata = login(data);
    
     userdata ? setb(false) : setb(true);

     setTimeout(() => setb(false), 3000);

     e.target.reset();
  }

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit) } /* autocomplete="off" */ >
          <h2>inicie sección</h2>
        <input type="email"
          {...register("email", { required: true})}
        placeholder="email" />
        {errors.email && <span className="text-center">This field is required</span>}

        <input
          type="password"
          {...register("password", { required:true})}
        placeholder="password" />
        {errors.password && <span className="text-center">This field is required</span>}
        <input type="submit" value="enviar"/>
        {b && <span className="text-center">este usuario no existe</span>}
      <Link to="register" className="text-white">registrar</Link>
      </form>
        {userauth && <Redirect to="/"/>}
    </Section>
  );
};

export default LoginPage;
