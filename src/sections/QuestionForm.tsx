import React from 'react'
import Section from '../components/section/Section'
import { HeadingsTypography, NormalTypography } from '../components/typography/Typography'
import { Paragraphs, PlainLink, SectionImage, SectionTextContainer } from './SectionStyles'
import styled from 'styled-components'
import { useForm } from '@formspree/react'
import Input from '../components/input/Input'
import theme, { devices } from '../theme'
import { Envelope, Phone } from '@phosphor-icons/react/dist/ssr'
import Textarea from '../components/textarea/Textarea'
import Button from '../components/buttons/Button'
import { CheckCircle, CircleNotch, PaperPlaneTilt } from '@phosphor-icons/react'

const QuestionFormSection = () => {
  const [state, handleSubmit] = useForm("xbjnqdbb");

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  }

  return (
    <Section background="grey" id='fraga'>
      <SectionTextContainer narrow>
        <HeadingsTypography>Frågor & OSA</HeadingsTypography>
        <Paragraphs spacing="normal">
          <NormalTypography>Vänligen skicka in OSA eller frågor till oss via formuläret.</NormalTypography>
          <NormalTypography>
            <b>OSA</b> - Specificera antal personer och eventuella allergier i sällskapet.
          </NormalTypography>
        </Paragraphs>
        <ContactInfo>
          <ContactInfoItem>
            <Phone weight='fill' size={24} color={theme.colors.gold.regular} />
            <PlainLink href="tel:0700671376">
              <LinkText>0700-67 13 76</LinkText>
            </PlainLink>
          </ContactInfoItem>
        </ContactInfo>
      </SectionTextContainer>
      {state.succeeded ? (
        <SuccessMessage>
          <CheckCircle size={72} color="#22b120" weight="fill" />
          <Paragraphs spacing="small">
            <NormalTypography>Tack för ditt meddelande!</NormalTypography>
            <NormalTypography>Om du ställt en fråga så återkommer vi så snart vi kan.</NormalTypography>
          </Paragraphs>
        </SuccessMessage>
      ) : (
        <StyledForm onSubmit={(e) => submitForm(e)}>
          <InputRow>
            <Input
              id="Namn"
              name="Namn"
              label="Ditt namn"
              type="text"
              required
            />
            <Input
              id="Telefonnummer"
              name="Telefonnummer"
              label="Ditt telefonnummer"
              type="tel"
              required
            />
          </InputRow>
          <Textarea
            id='Fråga/OSA'
            name='Fråga/OSA'
            label='Fråga/OSA'
            required
            fullWidth
          />
          <Button 
            icon={state.submitting ? <CircleNotch size={24} color={theme.colors.common.white} /> : <PaperPlaneTilt size={24} weight='fill' color={theme.colors.common.white} />}
            color='gold'
            type='submit'
            fitContent
            disabled={state.submitting}
          >
            {state.submitting ? "Skickar..." : "Skicka"}
          </Button>
        </StyledForm>
      )}
    </Section>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.s};
  max-width: 500px;
  flex: 1;

  > button {
    align-self: flex-end;
  }
`;

const InputRow = styled.div`
  display: grid;
  gap: ${theme.spacing.s};
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.s};
  margin-top: ${theme.spacing.xs};
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs};
`;

const LinkText = styled.b`
  font-size: 18px;
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s};
  border: 1px solid ${theme.colors.grey.regular};
  max-width: 500px;
  height: fit-content;
  padding: ${theme.spacing.s};
  border-radius: 8px;
  background-color: ${theme.colors.common.white};
`;

export default QuestionFormSection