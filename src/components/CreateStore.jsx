import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {RestaurantsContext} from "../components/context/RestaurantsContext"
import TYPES from "./context/TYPES";
import { Redirect } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import store from "../assets/store.jpg"

const Section = styled.section`
  min-height: 80vh;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: transparent;

 form{
    background-color: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
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
  #file,#fileImg {
    display: none;
  }

  input {
    display: block;
    padding: 0.4rem 0.8rem;
    margin: 0.3rem auto;
    outline: none;
    border: none;
  }
  textarea{
    resize: none;
  }
  textarea:focus{
    outline: none;
  }

  input {
    display: block;
    padding: 0.4rem 0.8rem;
    margin: 0.3rem auto;
    outline: none;
    border: none;
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

  .text-white{
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  @media screen and (min-width:678px){
   
  }
`;

const CreateStore = () => {
  const [source, setSource] = useState(store);
  const {dispatch} = useContext(RestaurantsContext);
  const [boo, setBoo] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data,e) => {
    const res = {...data,image:source}
    dispatch({type:TYPES.addstore,payload:res})
    setBoo(true)
     e.target.reset();
  }

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
      <form onSubmit={ handleSubmit(onSubmit) }>

       <div className="containerImg">
          <label htmlFor="file">
          <img src={source} alt="foto-de-penfil" className="imgForm" />
          </label>
          <input type="file" onChange={sourceImg} id="file" />
        </div> 

          <h2>crear tienda</h2>
          <input {...register("name", { required: true })} />
        {errors.name && <span className="text-center">This field is required</span>}

        <input type="submit" value="agregar"/>
        {boo && <Redirect to="/products"/>}

      </form>

      <CreateProduct/>

    </Section>
  );
};

export default CreateStore; 
