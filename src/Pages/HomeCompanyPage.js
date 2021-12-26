import React from "react";

import { Button } from "../Components/Button/Button";
import { Container } from "../Components/Container/Container";

export const HomeCompanyPage = () => {
  return (
    <Container>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form>
        <fieldset>
          <section>
            <h2>Nova empresa</h2>
            <Button />
            <Button />
          </section>
          <section>
            <div>
              <label>Razão Social</label>
              <input />
            </div>
            <div>
              <label>Nome fantasia</label>
              <input />
            </div>
            <div>
              <label>CNPJ</label>
              <input />
            </div>
            <div>
              <label>Razão Social</label>
              <input />
            </div>
            <div>
              <label>Email</label>
              <input />
            </div>
          </section>

          <section>
            <div>
              <label>CEP</label>
              <input />
            </div>
            <div>
              <label>Endereço</label>
              <input />
            </div>
            <div>
              <label>Número</label>
              <input />
            </div>
            <div>
              <label>Bairro</label>
              <input />
            </div>
            <div>
              <label>Cidade</label>
              <input />
            </div>
            <div>
              <label>Complemento</label>
              <input />
            </div>
          </section>

          <section>
            <div>
              <label>CEP</label>
              <input />
            </div>
            <div>
              <label>Endereço</label>
              <input />
            </div>
          </section>
        </fieldset>
      </form>
    </Container>
  );
};
