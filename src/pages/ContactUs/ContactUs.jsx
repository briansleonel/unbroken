import { ButtonLink } from "../../components/ButtonElements/ButtonElements"
import { Container, ContainerFlex, Row } from "../../components/layout/grid.elements"
import { BoldText, Paragraph, Title } from "../../components/TextElements/text.element"

export const ContactUs = (props) => {
    return(
        <Container>
            <Row>
                <Title>
                    Contacto
                </Title>

                <Paragraph >
                    Por cualquier duda o consulta que tengas, podés ponerte en contacto con nosotros mediante WhatsApp, accediendo a cualquiera de los siguientes enlaces:
                </Paragraph>

                <ContainerFlex>
                    <ButtonLink href="https://api.whatsapp.com/send?phone=543884341658&text=">Keren González</ButtonLink>
                    <ButtonLink href="https://api.whatsapp.com/send?phone=543884809343&text=">Rita Nuñez</ButtonLink>
                    <ButtonLink href="https://api.whatsapp.com/send?phone=543884762196&text=">Brian González</ButtonLink>
                </ContainerFlex>

                <Paragraph >
                    O si querés acercarte a la Iglesia Manantial de Vida y hablarnos personalmente, te dejamos la dirección:
                </Paragraph>

                <Paragraph>
                    Dirección: <BoldText>Las Palmeras N°249 - Barrio Alto Palpalá</BoldText>
                </Paragraph>
                <Paragraph marginTop='1rem'>
                    Localidad: <BoldText>Palpalá</BoldText>
                </Paragraph>

                <iframe title='MDV' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.72420460682!2d-65.21998245024719!3d-24.251423030645658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b07143fea6f4f%3A0xe8d6a4e45c853cf9!2sIglesia%20Bautista%20Manantial%20De%20Vida!5e0!3m2!1ses!2sar!4v1597777439866!5m2!1ses!2sar" width="100%" height="300" style={{marginTop : '2rem'}} aria-hidden="false"></iframe>
            </Row>
        </Container>
    )
}