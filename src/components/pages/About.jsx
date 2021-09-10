import styled from "styled-components"


const ContainerAbout = styled.div`

    .textAbout{
        width: calc(100% - 4rem);
        padding-left: 2rem;
    }

    @media screen and (min-width:678px){
        display: flex;

        .textAbout{
        width: 50%;
        }
    }

    img{
        max-width: 100%;
        border-radius:3rem;
    }
`;

const About = () => {

    return (
        <ContainerAbout>
            <div className="textAbout">
                <h2>Sobre nosotros</h2>
                <p>Iniciamos operaciones en 2020. Garantizamos productos frescos.
                    Ahorre tiempo comprando en nuestra aplicación y entregaremos los productos directamente a su hogar.</p>
               
            </div>
            <figure>
                <img src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_550/v1607770215/react-tutorial/supermarket/about.jpg"
                alt="Elephant at sunset"/>
                <figcaption><small>la venta de productos es simulada</small></figcaption>
            </figure>
        </ContainerAbout>
            )
}

            export default About
