import React, { useState, useCallback } from 'react';
import ThankYouPage from '../ThankYouPage/ThankYouPage';
import * as Yup from 'yup';
import {
  ModalWrapper,
  ModalErrorField,
  Form,
  Input,
  Button,
  FormLabel,
  InputContainer,
  TextArea,
} from './Modal.styled';

import { useFormik } from 'formik';

type ModalProps = {
  statusToggle: boolean;
  setIsToggle: (status: boolean) => void;
};

interface FormValues {
  name: string;
  phone: string;
  text: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Обовʼязкове поле')
    .min(2, 'Імʼя має бути більше 2 символів')
    .max(15, 'Імʼя має бути менше 15 символів')
    .matches(
      /^[А-ЯІЄЇҐа-яієїґA-Za-z'`"ʼ*]+$/gm,
      'Імʼя може містити тільки букви'
    ),
  phone: Yup.string()
    .required('Обовʼязкове поле')
    .matches(/^380\d{9}$/gm, 'Номер телефону має бути в форматі 380XXXXXXXXX'),
  text: Yup.string()
    .required('Обовʼязкове поле')
    .min(10, 'Повідомлення має бути більше 10 символів')
    .max(100, 'Повідомлення має бути менше 100 символів'),
});

export default function Modal({ statusToggle, setIsToggle }: ModalProps) {
  const [isOpenThankYouPage, setisOpenThankYouPage] = useState<boolean>(false);
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      phone: '',
      text: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setisOpenThankYouPage(true);
      try {
        const response = await fetch('/api/form', {
          method: 'POST',
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        throw new Error(`HTTP error! status: ${error}`);
      }
    },
  });

  const isToogleThankYouPage = useCallback(() => {
    return !isOpenThankYouPage ? (
      <Form onSubmit={formik.handleSubmit}>
        <InputContainer>
          <FormLabel htmlFor="name">Імʼя</FormLabel>
          <Input type="name" id="name" {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name ? (
            <ModalErrorField>{formik.errors.name}</ModalErrorField>
          ) : null}
        </InputContainer>
        <InputContainer>
          <FormLabel htmlFor="phone">Телефон</FormLabel>
          <Input
            placeholder="380XXXXXXXXX"
            type="phone"
            id="phone"
            {...formik.getFieldProps('phone')}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <ModalErrorField>{formik.errors.phone}</ModalErrorField>
          ) : null}
        </InputContainer>
        <InputContainer>
          <FormLabel htmlFor="text">Повідомлення</FormLabel>
          <TextArea id="text" {...formik.getFieldProps('text')} />
          {formik.touched.text && formik.errors.text ? (
            <ModalErrorField>{formik.errors.text}</ModalErrorField>
          ) : null}
        </InputContainer>

        <Button type="submit">Відправити</Button>
      </Form>
    ) : (
      <ThankYouPage />
    );
  }, [isOpenThankYouPage, formik]);

  return (
    <ModalWrapper>
      {isToogleThankYouPage()}
      <Button close="close" onClick={() => setIsToggle(false)}>
        Закрити
      </Button>
    </ModalWrapper>
  );
}
