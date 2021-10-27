import react from 'react';
import styled from 'styled-components';


const NavDiv = styled.nav`
    // border: 3px solid red;
    // width: 90rem;
    margin-left: 15rem;
    display: flex;
   justify-content: flex-start;
`
const LinksUl = styled.ul`
    // border: 3px solid blue;
    // width: 50rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
`

const HeaderDiv = styled.div`
    // display: flex;
    // align-items: center;
    // border: 2px solid black;
    
`

const H1 = styled.h1`
    padding-left: 4rem;
    font-size: 2rem;
`
const LI = styled.li`
    &:hover > ul {
        background:#f6f6f6
        display:block
    }
    list-style-type: none;
  
    
`

const A = styled.a`
    text-decoration: none;
`

const UL2 = styled.ul`
    display:none;
    position:absolute;
    top:100%;
    left:0;
    background:#fff;
    padding:0
`

const Li3 = styled.li`
    float:none;
    width:200px;
`

function NavBar() {
    return (
        <>
         <NavDiv>
             <HeaderDiv>
                 <H1>Kingsman Construction</H1>
             </HeaderDiv>
             <LinksUl>
                 {/* <a>Home</a> */}
                 <LI><A href='#'>About Us</A>
                    <UL2>
                        <Li3><a href="#">sub menu 1</a></Li3>
                        <Li3><a href="#">sub menu 1</a></Li3>
                        <Li3><a href="#">sub menu 1</a></Li3>
                    </UL2>
                 </LI>
                 <A href='#'>Our Process</A>
                 <A href='#'>Gallery</A>
                 <A href='#'>Testimonials</A>
                 <A href='#'>Contact Us</A>
             </LinksUl>
         </NavDiv>
        </>
    )
}

export default NavBar;