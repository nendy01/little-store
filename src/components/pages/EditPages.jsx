import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import CreateStore from "../CreateStore";
import DeletePages from "./DeletePages";
const ContainerEdit = styled.article`
    .text-center{
        margin: 2rem auto;
        text-align: center;
        display: flex;
        justify-content: space-around;
        
        a{
            color: #ffffff;
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
        padding:.5rem 1rem;
        border: 2px solid #F50057;
        border-radius: 1rem;
        }
    }
`;

const EditPages = () => {
    const {path,url} = useRouteMatch();

    return (
        <ContainerEdit>
        <div className="text-center">
        <Link to={`${url}/crear`}>crear</Link>
        <Link to={`${url}/eliminar`}>eliminar</Link>
        </div>
        <Switch>
            <Route path={`${path}/crear`}>
              <CreateStore/>
            </Route>
            <Route path={`${path}/eliminar`}>
                <DeletePages/>
            </Route>
        </Switch>
        </ContainerEdit>
    )
}

export default EditPages
