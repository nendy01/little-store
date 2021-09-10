import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { UserContext } from "./context/UserContext";

const Section = styled.section`
  
  display: grid;
  place-items: center;
  padding-top: 1rem;

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

const EditUser = ({user,setIsvisible}) => {
  const [boo, setBoo] = useState(false);
  const [source, setSource] = useState(user?.image);
  const {Users,editUser} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data,e) => {

    const newData = {
      ...data,
      image:source,
    }
    const find = Users.find(dataUser => dataUser.password === newData.lastpassword);
    if (find) {
      editUser(newData)
      setIsvisible(false)
    } else {
      setBoo(true)
    }
    setTimeout(() => {
      setBoo(false)
    }, 3000);
    e.target.reset();
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

        <h3>solo llene los nuevos<br/> datos que desa modificar</h3>

        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="nuevo nombre "
        />
        {errors.text && <span>This field is required</span>}

        <input
          type="email"
          {...register("email")}
          placeholder="nuevo email"
        />
        {errors.email && <span>This field is required</span>}


        <input
          type="password"
          {...register("password")}
          placeholder="new password"
        />
        {errors.passwordnew && <span>This field is required</span>}

        <input
          type="password"
          {...register("lastpassword")}
          placeholder="antigua contraseña"
        />
        {errors.lastpassword && <span>This field is required</span>}
        <input type="submit" value="enviar" />

        {boo && <span>last password is incorrect</span>}
      </form>
    </Section>
  );
};

export default EditUser;