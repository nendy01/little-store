import { useContext, useState } from "react"
import styled from "styled-components"
import {UserContext} from "../context/UserContext"
import EditUser from "../EditUser";

const ViewContainer = styled.div`
    text-align: center;
.center-perfil{
    display: grid;
    justify-items: center;
}
    .photo{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    .flex{
        margin-top: 2rem;
       display: grid;
       grid-template-columns: repeat(auto-fit,minmax(256px, 1fr));
       justify-items: center;
        width: 100%;
        img{
            border-radius: 50%;
        }
    }
    .title-product{
        font-size: 1.5rem;
    }
    .button-editar{
        padding:.5rem 1rem;
    background-color: #f50057;
    color: #fff;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
    margin-right: 1rem;
    }
`;



const View = () => {
    const [isvisible, setIsvisible] = useState(false)
    const {user} = useContext(UserContext);

    const handlevisible = () => {
        setIsvisible(!isvisible)
    }

    return (
        <ViewContainer>
           { user &&
            <>
                <div className="center-perfil">
                    <img src={user?.image} alt="foto del usuario" className="photo"/>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                    <button text="editar" className="button-editar" onClick={handlevisible}>Editar</button>
                </div>
                   {isvisible && <EditUser user={user} setIsvisible={setIsvisible}/>}

                <div>
                    {user?.productsFav?.length <= 0 ? <h3 className="title-product">no tienes productos favoritos</h3>
                    :
                    <>
                    <h3 className="title-product">estos son tus productos</h3>
                    <div className="flex">
                        {user?.productsFav?.map(product =>( 
                        <div key={product.id}>
                            <img src={product.imageUrl} alt={product.name}/>
                            <h2>{product.name}</h2>
                        </div>))
                        }
                    </div>
                    </>
                    }
                </div>
            </>
           }
        </ViewContainer>
    )
}

export default View
