import { useState } from "react";
import { useForm } from "react-hook-form";

import ProductImg from "../assets/productImg.png";
import TYPES from "./context/TYPES";


const FormCreateProduct = ({dispatch,know}) => {
    console.log(know);
    const [imgproduct, setImgproduct] = useState(ProductImg);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const sourceImg = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
    
        fileReader.addEventListener("load", (e) => {
          setImgproduct(e.target.result);
        });
      };

      const onSubmit = (data,e) => {
        const { name,price,description } = data;
        console.log(know.Products.length);
        const product = { name,price,description,imageUrl:imgproduct,id:++know.Products.length};
        console.log(know);
    
        const yes = JSON.parse(localStorage.getItem("restaurants")).find(res => res.id === know.id);
        const edit = { ...know, Products: [...yes.Products, product] };
        dispatch({type:TYPES.addProduct,payload:edit});
        e.target.reset()
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="containerImg">
            <label htmlFor="fileImg">
            <img src={imgproduct} alt="foto-de-penfil" className="imgForm" />
            </label>
            <input type="file" onChange={sourceImg} id="fileImg" />
          </div>

          <h2>crear producto</h2>
          <input {...register("name", { required: true })} placeholder="name"/>
          {errors.name && <span className="text-center">This field is required</span> }

          <input {...register("price", { required: true })} placeholder="price"/>
          {errors.price && <span className="text-center">This field is required</span> }

          <textarea {...register("description", { required: true })} cols="25" rows="5" placeholder="description"/>
          {errors.description && <span className="text-center">This field is required</span> }


          <input type="submit" value="agregar" />
        </form>
    )
}

export default FormCreateProduct
