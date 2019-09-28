import React from 'react';

import {
  Container,
  Wrapper,
  Title,
  Subtitle,
  Content,
  ContactItem,
} from './styles';

export default function Contact() {
  return (
    <Wrapper>
      <Container>
        <Title>
          Entre em contato com a Alterdata e solicite uma demonstração
        </Title>
        <Subtitle>Junte-se aos mais de 500 mil usuários</Subtitle>

        <Content>
          <ContactItem>
            <h1>Fale com a gente e agende uma demonstração</h1>
            <a href="tel:08007041418">0800 704 1418</a>
          </ContactItem>

          <ContactItem>
            <h1>
              Ficou com alguma dúvida? <br />
              Nós te ligamos
            </h1>
            <a
              href="https://ctc.alterdata.com.br/clicktocall/clicktocall_form_v3.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar
            </a>
          </ContactItem>
        </Content>
      </Container>
    </Wrapper>
  );
}
