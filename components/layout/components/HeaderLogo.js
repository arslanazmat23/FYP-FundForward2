import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    //<Logo>FundForward</Logo>,
    <Logo1>FundForward</Logo1>
  )
}

// const Logo = styled.h1`
// display: flex;
//   font-weight: normal;
//   font-size: 40px;
//   margin-left: 11px;
//   margin-top: 10px
//   font-family: 'Damion';
//   letter-spacing: 1px;
//   cursor: pointer;
//   color:${(props) => props.theme.labelcolor};
// `
const Logo1 = styled.h4`
  font-weight: normal;
  font-size: 40px;
  margin-top: 30px;
  margin-left: 11px;
  font-family: 'Damion';
  letter-spacing: 1px;
  cursor: pointer;
  color:${(props) => props.theme.labelcolor};
`

export default HeaderLogo