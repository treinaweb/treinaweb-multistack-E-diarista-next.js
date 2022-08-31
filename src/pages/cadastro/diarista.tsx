import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import BreadCrumb from "UI/components/navigation/BreadCrumb/BreadCrumb";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import Link from "UI/components/navigation/Link/Link";
import useCadastroDiarista from "data/hooks/pages/cadastro/useCadastroDiarista.page";
import { BrawserService } from "data/services/BrawserService";

// import { Component } from '@styles/pages/cadastro/diarista.styled';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Diarista",
    },
  };
};

const Diarista: React.FC = () => {
  const { breadcrumbItems, step, setStep } = useCadastroDiarista();

  useEffect(() => {
    BrawserService.scrollToTop();
  }, [step]);

  return (
    <div>
      <SafeEnvironment />
      <BreadCrumb
        items={breadcrumbItems}
        selected={breadcrumbItems[step - 1]}
      />
      {step === 1 && (
        <PageTitle
          title="Precisamos conhecer um pouco sobre você!"
          subtitle={
            <span>
              Caso já tenha cadastro <Link href="/login">clique aqui</Link>
            </span>
          }
        />
      )}

      {step === 2 && (
        <PageTitle
          title="Quais cidades você atenderá?"
          subtitle={
            <span>
              Você pode escolher se aceita ou não um serviço. Então, não se
              preocupe se mora em uma grande cidade
            </span>
          }
        />
      )}
    </div>
  );
};

export default Diarista;
