import styled from 'styled-components';
import { FormState } from '../Form';
import { useContext } from 'react';

const FormLeftWrapper = () => {
  const Handler = useContext(FormState);

  return (
    <FormLeft>
      <FormInput>
        <Label>Campaign Title</Label>
        <Input onChange={Handler.FormHandler} value={Handler.form.campaignTitle} placeholder='Campaign Title' name='campaignTitle'>
        </Input>
      </FormInput>
      <FormInput>
        <Label>Story</Label>
        <TextArea onChange={Handler.FormHandler} value={Handler.form.story} name="story" placeholder='Describe Your Story'>
        </TextArea>
      </FormInput>
    </FormLeft>
  )
}

const FormLeft = styled.div`
  width:48%;
`

const FormInput = styled.div`
  display:flex ;
  flex-direction:column;
  font-family:'poppins';
  margin-top:10px ;
`
const Input = styled.input`
  padding:15px;
  background-color:#fff;
  color:#000;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;
`

const TextArea = styled.textarea`
  padding:15px;
  background-color:#fff ;
  color:#000;
  margin-top:4px;
  border:none;
  border-radius:8px ;
  outline:none;
  font-size:large;
  max-width:100%;
  min-width:100%;
  overflow-x:hidden;
  min-height:160px ;
`

const Label = styled.label`
  color:${(props) => props.theme.labelcolor} ;
`

export default FormLeftWrapper;