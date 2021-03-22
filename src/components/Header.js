import React from 'react'
import styled from 'styled-components'

const Header = ({ hookList }) => {
    const onLogo = () => window.location.href = '/'

    return (
<<<<<<< HEAD
        <Wrapper>
            <Title onClick={onLogo}>
                Hook Master
            </Title>
            <br/>

=======
        <div style={{textAlign: "center", paddingBottom: "2rem"}}>
            <h1 onClick={onLogo} style={{cursor: "pointer"}}>
                Hook Master
            </h1>
            
>>>>>>> 3f500653866facbfcf25fbcca56bd52916f9fa69
            {
                hookList.map(item => 
                    <a href={`/${item}`} key={item} style={{margin: '0.5rem'}}> 
                        {item} 
                    </a>)
            }
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
    text-align: center;
    margin: 2rem 0 2rem 0;
`
const Title = styled.h1`
    display: inline;
    cursor: pointer;
    font-size: 60px;
    margin-bottom: 0.5rem;
    font-family: 'Do Hyeon', sans-serif;
`

export default Header;
