import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
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
   padding-right: 70px;
   box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        &.focused {
            background: #777;
            color: white; 
        }
    }
   
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    boder: none;
    outline: none;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    padding: 0 30px 0 20px;
    color: #666;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;s
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 230px;            
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2); 
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-heigth: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin{
        display: block;//只有block样式才能这样transform
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;         
        transform-origin: center center; //围绕中心点旋转
    }
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    margin-right: 10px;
    margin-bottom: 10px;
    float: left;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 2px;
    font-size: 12px;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    height: 38px;
    line-height: 38px;
    margin: 9px 5px 0 15px;
    padding: 0 20px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 14px;
    color: #ea6f5a;
    background-color: transparent;
    &.reg{
        color: #ea6f5a;
    }
    &.writting {
        color: #ffffff;
        background: #ea6f5a;
    }
`

