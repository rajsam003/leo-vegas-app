import { styled } from "../../../../theme";

const NavigationItemWrapper = styled.div`
    background: ${({ theme }) => theme.colors.backgroundColor};
    display: block;
    margin: 0 7px;
    padding: 4px 8px;
    color: #fff;
    font-weight: 500;
    font-size: 0.8rem;
    border-radius: 10px;
    opacity: 1;
    white-space: nowrap;
`;

export default NavigationItemWrapper;
