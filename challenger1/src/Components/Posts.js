import styled from "styled-components"
import {FiHeart} from 'react-icons/fi'

const data = [
    {date:"02 de jul, 2021", title:"Agora é oficial: o Windows 11 está vindo", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."},
    {date:"02 de jul, 2021", title:"Tim Berners-Lee vai leiloar código-fonte da web", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."}
]


export default function Posts(){

return (
    <>
        <Container>
                {data.map(post => 
                {return <Post>
                  <div >
                    <span className="date">
                        <p>{post.date}</p> <FiHeart color="blue" /> 
                    </span>
                    <h2>{post.title}</h2>
                    <p className="content">{post.content}</p>
                </div>      

                </Post>
                })}
        </Container>
    
    </>
)


}

const Container = styled.div`
margin-top:50px;
display: flex;
flex-direction: column;
align-items: center;

`

const Post = styled.div`
width: 62.5%;
height:auto;
background-color: white;
border-radius: 5px;
box-shadow: 0px 0px 10px rgba(19,19,31,0.05);
padding:25px;
font-family: 'Lexend Deca';
margin: 12px 0px;

h2{
    margin:15px 0px;
    font-size:26px;
    
}

span{
    display: flex;
    justify-content: space-between;
}

.content{
    color: #717171;
    font-size:18px;
    line-height: 32px;
    text-align: justify;
}

.date p{
    color:#717171;
}

&:last-child{
    margin-bottom: 150px;
}

`