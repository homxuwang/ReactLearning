import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height:56px;
    background: url(${logoPic}); //引入图片时，要在上面以import的形式引入
    background-size: contain;
`;

export const Nav = styled.div`
   width: 945px;
   height:100%;
   margin: 0 auto;
   background: green;

`;