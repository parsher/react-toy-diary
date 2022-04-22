import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";


const StyledLayout = styled.div`
    width: 20vw;
    text-align: cetner;
    margin: auto;
`;

const StyledMain = styled.main`
    min-height: calc(100vh - 120px);
    margin-top: 10px;
`

export default function Layout({ children }) {
    return (
        <StyledLayout>
            <Header />

            <StyledMain>
                {children}
            </StyledMain>

            <Footer />
        </StyledLayout>
    )
}