import styled from "styled-components"

export default function TopBar(){
    return (
        <>
            <Header>
                <Container>
                    <div>
                        <h1>Codelândia</h1>
                        <p>Blog</p>
                    </div>
                    <div>
                        <ion-icon name="search"></ion-icon>
                        <input placeholder="Pesquisar no blog"></input>
                    </div>
                </Container>
            </Header>
        </>
    )
}

const Header = styled.div `
   width:100%; 
   height:250px;
   background-image: linear-gradient(to right, #574AE8,#3EA1DB);

   display: flex;
   justify-content: center;
   align-items: center;

   h1, p{
    font-family: "Lexend Deca";
    color:white;
    font-size: 24px;
   }
`

const Container = styled.div`
    width: 62.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;;
    

    div{
        display: flex;
        justify-content: space-between;
        position: relative;
    }

    input{
        width: 100%;
        height:65px;
        border-radius: 5px;
        padding-left: 60px;

        color:white;
        background: rgba(255, 255, 255, 0.2);
        font-family: 'Inter';
        font-weight: 500;
        font-size: 18px;
       
        border: none;

        &::-webkit-input-placeholder { /* Edge */
        color: #FFFFFF;
        opacity: 0.5;
        }

        &:focus{
            outline: none;
        }
    }

    ion-icon{
        position: absolute;
        font-size:24px;
        color:white;

        top:23px;
        left:15px;

        cursor: pointer;
    }



`