import { BlockquoteCite } from "../../components/Blockquote/Blockquote"
import { Container, Row } from "../../components/layout/grid.elements"
import { BoldText, Paragraph, Title } from "../../components/TextElements/text.element";
import unbroken from '../../assets/img/logo.jpg'
import jorgeRios from '../../assets/img/jorge-rios.jpeg'
import { Img } from "../../components/ImgElements/ImgElements";
import styles from './home.module.css'

export const Home = (props) => {

    const blockquote = {
        phrase : '¡Te haré inquebrantable como el diamante, inconmovible como la roca! No les tengas miedo ni te asustes...',
        caption : 'Ezequiel 3:9 NVI'
    }

    return(
        <Container>
            <Row >
                {/* <Title>
                    Campamento MDV 2022
                </Title> */}

                <Img src={unbroken} />

                <BlockquoteCite content= {blockquote} />

                <Paragraph>
                    Los diamantes son las piedras más duras y resistentes del mundo. No se hacen de la noche a la mañana, sino que requieren de un largo proceso de transformación. Comienza desde ser una simple roca a ser una piedra preciosa exhibiendo todo su brillo, belleza y pureza.
                </Paragraph>

                <Paragraph>
                    Actualmente, las personas queremos todo ya y no estamos dispuestos a esperar. Queremos lograr todo con el mínimo esfuerzo. 
                </Paragraph>

                <Paragraph>
                    Quizas nosotros nos veamos como simples rocas, pero Dios ve un diamante. El proceso será duro, y no todos estarán dispuestos a atravesarlo, pero es
                    lo necesario para llegar a cumplir con aquello que Dios ha preparado para cada uno.
                </Paragraph>

                <Paragraph textAlign='center' fontWeight='600'>
                    ¿Estas dispuesto a atravesar por ese proceso?
                </Paragraph>
                
            </Row>

            <Row marginTop='0'>
                <Title>
                    Información
                </Title>

                <Paragraph >
                    El Campamento MDV edición 2022 se llevará a cabo en la fecha del <BoldText>26 de Febrero al 1 de Marzo</BoldText>, el cual tendrá lugar en el Campamento Río Lozano.
                </Paragraph>

                <Paragraph>
                    Este campamento está disponible para mayores de <BoldText>15 años</BoldText>, sin excepciones.
                </Paragraph>

                <Paragraph>
                    Para este campamento, como predicador invitado contamos con <BoldText>Jorge Daniel Ríos</BoldText>.
                </Paragraph>

                <div className={styles.contentInfoPredicador}>
                    <img src={jorgeRios} alt="" />
                    <div>
                        <Paragraph fontWeight='300' fontStyle='italic'>
                            Pastor Jorge Daniel Ríos es Profesor del instituto Bíblico de Fe a nivel nacional. Es miembro de la Iglesia Bautista de Monte Grande Buenos Aires. Está casado con Patricia González y es padre de 3 hijos. Desarrolla su tarea ministerial de pastorado y misionera impactando la vidas de los hermanos mayores, jóvenes y niños, en el norte argentino y el litoral.
                        </Paragraph>
                    </div>
                </div>
            </Row>

            <Row marginTop='0'>
                <Title>
                    Costo de inscripción
                </Title>

                <Paragraph textAlign='center' fontWeight='500'>
                    Hasta el 10 de Enero <BoldText fontWeight='700'>$3800</BoldText> 
                </Paragraph>
                <Paragraph textAlign='center' marginTop='1rem' fontWeight='500'>
                    Hasta el 10 de Febrero  <BoldText fontWeight='700'>$4100</BoldText>
                </Paragraph>
                <Paragraph textAlign='center' marginTop='1rem' fontWeight='500'>
                    Hasta el 26 de Febrero  <BoldText fontWeight='700'>$4400</BoldText>
                </Paragraph>
            </Row>

            <Row marginTop='0'>
                <Title>
                    Lugar
                </Title>

                <Paragraph>
                    El campamento tendrá lugar en <BoldText>Campamento Río Lozano</BoldText>, ubicado en la localidad de Lozano de la Provincia de Jujuy.
                </Paragraph>

                <iframe title='Campamento Río Lozano' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14570.574767702825!2d-65.4200139!3d-24.0788489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce05a01e1adfe970!2sCampamento%20Rio%20Lozano%20-%20UBNOA!5e0!3m2!1ses!2sar!4v1639435188160!5m2!1ses!2sar" width="100%" height="300" style={{marginTop : '2rem'}}  loading="lazy"></iframe>
            </Row>
            
        </Container>
    )
}