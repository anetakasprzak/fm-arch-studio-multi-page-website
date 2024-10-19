"use client";

import "./page.styled";
import {
  ContactHeroImageWrapper,
  ContactHeroWrapper,
  ContactSection,
  ContactSpan,
  Form,
  FormButton,
  HeroContactText,
  HeroHeading,
  HeroTextBox,
  InputWrapper,
  Textarea,
  TextInput,
  Error,
} from "./page.styled";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <ContactHeroWrapper>
        <ContactHeroImageWrapper>
          <source
            srcSet="/assets/contact/desktop/image-hero.jpg"
            media="(min-width: 48em)"
          />
          <source
            srcSet="/assets/contact/tablet/image-hero.jpg"
            media="(min-width: 35em)"
          />
          <source
            srcSet="/assets/contact/mobile/image-hero.jpg"
            media="(min-width: 15em)"
          />
          <img src="/assets/contact/mobile/image-hero.jpg" alt="hero image" />
        </ContactHeroImageWrapper>

        <HeroTextBox>
          <ContactSpan>Contact</ContactSpan>
          <HeroHeading>
            Tell us about
            <br /> your project
          </HeroHeading>
          <HeroContactText>
            We&apos;d love to hear more about your project. Please, leave a
            message below or give us a call. We have two offices, one in Texas
            and one in Tennessee. If you find yourself nearby, come say hello!
          </HeroContactText>
        </HeroTextBox>
      </ContactHeroWrapper>
      <ContactSection>
        <HeroHeading>Connect with us</HeroHeading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <TextInput
              type="text"
              placeholder="Name"
              hasError={errors.name}
              {...register("name", { required: "Can't be empty" })}
            />
            {errors.name && <Error>{errors.name.message}</Error>}
          </InputWrapper>

          <InputWrapper>
            <TextInput
              type="email"
              placeholder="Email"
              hasError={errors.email}
              {...register("email", {
                required: "Can't be empty",
              })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </InputWrapper>

          <InputWrapper>
            <Textarea
              hasError={errors.message}
              placeholder="Message"
              {...register("message", { required: "Can't be empty" })}
            />
            {errors.message && <Error>{errors.message.message}</Error>}
          </InputWrapper>

          <FormButton type="submit" />
        </Form>
      </ContactSection>
    </>
  );
};

export default ContactPage;
