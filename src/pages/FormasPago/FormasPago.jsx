import { Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Container, Row } from "../../components/layout/grid.elements"
import { BoldText, Paragraph, Title } from "../../components/TextElements/text.element"

export const FormasPago = (props) => {
    return(
        <Container>
            <Row>
                <Title>
                    Formas de pago
                </Title>

                <Paragraph >
                    Para realizar el pago correspondiente del campamento, podrás optar por alguna de las siguientes opciones, eligiendo la más conveniente para vos:
                </Paragraph>

                <Paragraph fontWeight='500'>
                    &nbsp;&nbsp;1. Personalmente en nuestra Iglesia.
                </Paragraph>

                <Paragraph marginTop='1rem' fontWeight='500'>
                    &nbsp;&nbsp;2. Transferencia Bancaria o Pago Fácil.
                </Paragraph>

                <Paragraph>
                    Si optas por acercarte personalmente a la Iglesia Manantia de Vida, te dejamos la dirección de la misma <Link to='/contact-us'>aquí</Link>. Podés preguntar por alguno de los integrantes de la Comisión Organizadora.
                </Paragraph>

                <Paragraph>
                    Si optas por transferencia bancaria o por medio de pago fácil, comunicate con nosotros para enviarte los datos necesarios para realizar la operación -<Link to='/contact-us'>contactos</Link>-.
                </Paragraph>

                <Paragraph>
                    Una vez realizada la operación, en el caso de haber efectuado el pago a través de Pago Fácil, tendrás que enviarnos una foto del comprobante de pago; y en el caso de la Transferencia Bancaria, una captura de la transacción efectuada. Cualquiera se la situación, podes enviarnos la imagen vía E-mail o Whatsapp. Luego nosotros validaremos la operación y te informaremos la confirmación de tu inscripción al campamento.
                </Paragraph>

                <Alert style={{margin : '0', marginTop: '1.5rem', fontSize : '.8rem', position : 'inherit'}} variant='danger'>
                    <BoldText fontWeight='600' textTransform='uppercase'>¡Importante!</BoldText> No se realizarán devoluciones de dinero, a menos que por causa de la pandemia actual se deba volver a cuarentena estricta.
                </Alert>
            </Row>
        </Container>
    )
}