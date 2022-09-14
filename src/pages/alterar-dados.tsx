import React from "react";
import { GetStaticProps } from "next";
import { useAlterarDados } from "data/hooks/pages/useAlterarDados.page";
import { FormProvider } from "react-hook-form";
import {
  AddressForm,
  UserDataForm,
  UserFormContainer,
} from "UI/components/inputs/UserForm/UserForm";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import { Box, Button, Paper, Typography } from "@mui/material";
import { FormContainer } from "@styles/pages/alterar-dados.styled";
import { UserType } from "data/@types/UserInterface";
import FinalcialForm from "UI/components/inputs/UserForm/forms/FiancialForm";
import ContactForm from "UI/components/inputs/UserForm/forms/ContactForm";
import { CitiesForm } from "UI/components/inputs/UserForm/forms/CitiesForm";

// import { Component } from '@styles/pages/alterar-dados.styled';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "AlterarDados",
    },
  };
};

const AlterarDados: React.FC = () => {
  const { formMethods, user } = useAlterarDados();
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={() => {}}>
        <UserFormContainer>
          <PageTitle title="Alterar dados cadastrais" />
          <Paper>
            <Typography sx={{ pt: 14, pb: 2 }} align={"center"}>
              Dados pessoais
            </Typography>
            <FormContainer>
              <UserDataForm />
            </FormContainer>
          </Paper>

          {user.tipo_usuario === UserType.Diarista && (
            <Paper>
              <Typography sx={{ pt: 14, pb: 2 }} align={"center"}>
                Financeiro
              </Typography>
              <FormContainer>
                <FinalcialForm />
              </FormContainer>
            </Paper>
          )}

          <Paper>
            <Typography sx={{ pt: 14, pb: 2 }} align={"center"}>
              Dados de acesso
            </Typography>
            <FormContainer>
              <ContactForm />
            </FormContainer>
          </Paper>

          {user.tipo_usuario === UserType.Diarista && (
            <>
              <Paper>
                <Typography sx={{ pt: 14, pb: 2 }} align={"center"}>
                  Endereço
                </Typography>
                <FormContainer>
                  <AddressForm />
                </FormContainer>
              </Paper>

              <Paper>
                <Typography sx={{ pt: 14, pb: 2 }} align={"center"}>
                  Cidades
                </Typography>
                <FormContainer>
                  <CitiesForm estado="RJ" />
                </FormContainer>
              </Paper>
            </>
          )}

          <Box sx={{ mt: 2, mb: 8, textAlign: "center" }}>
            <Button
              variant={"contained"}
              color={"secondary"}
              size={"large"}
              type={"submit"}
            >
              Salvar
            </Button>
          </Box>
        </UserFormContainer>
      </form>
    </FormProvider>
  );
};

export default AlterarDados;
