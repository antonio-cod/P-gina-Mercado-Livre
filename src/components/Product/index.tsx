import React from "react";

import tshirtImage from "../../assets/tshirt.png";

import { Container, Row, Panel, Column, Gallery, Section, Description } from "./styles";

const Product: React.FC = () => {
    return (
        <Container>
            <Row>
            <a href="#">Compartilhar </a>
            <a href="#">Vender um igual</a>
            </Row>

            <Panel>
                <Column>
                <Gallery>
                    <img alt="T-Shirt" src={tshirtImage} />
                </Gallery>

                <Info />
                </Column>
                <Column>
                {/* <ProductAction /> */}
                {/* <SellerInfo /> */}

               
                <WarrantySection />
                <WarrantySection />
                <WarrantySection />
                </Column>
            </Panel>
        </Container>
    );
};

const WarrantySection = () => (
    <Section>
        <h4>Garantia</h4>

        <div>
            <span>
                <p className="title">Compra garantida com o Lorem Ipsum</p>
                <p className="description">Receba o produto que vocÊ está esperando ou devolvemos o seu dinheiro</p>
            </span>
            <span>
                <p className="title">Garantia do vendedor</p>
                <p className="description">Sem garantia</p>
            </span>
        </div>
        <a href="#">Saiba mais sobre a garantia</a>
    </Section>
)


const Info = () => (
    <Description>
        <h2>Descrição</h2>
        <p>
            Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. 
             Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, 
          quando um impressor desconhecido pegou uma galé do tipo e embaralhou para fazer um livro de amostra de tipos. 
          Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica,
         permanecendo essencialmente inalterado.
          Ele foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e,
         mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum.
         <br />
         <br />
         Itens inclusos: <br />
             - 1x LED <br />
             - 1x LED <br />
             - 1x LED <br />
             - 1x LED <br />
             - 1x LED <br />
              <br />
          É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página
         ao examinar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais
          ou menos normal, ao contrário de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês
           legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum 
           como seu texto de modelo padrão, e uma pesquisa por 'lorem ipsum' revelará muitos sites ainda em sua 
           infância. Várias versões evoluíram ao longo dos anos, 
         às vezes por acidente, às vezes de propósito (humor injetado e coisas do gênero).
        </p>

    </Description>

);

export default Product;