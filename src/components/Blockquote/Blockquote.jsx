import { Blockquote, Figcaption } from "../TextElements/text.element";

export const BlockquoteCite = (props) => {
    
    const {phrase, caption} = props.content;

    /* return(
        <figure className="text-end">
            <blockquote className="blockquote" style={{fontStyle: "italic", fontWeight: '300'}}>
                <p> "{phrase}" </p>
            </blockquote>
            <figcaption className="blockquote-footer">
                <cite> {caption} </cite>
            </figcaption>
        </figure>
    ) */

    return(
        <>
            <Blockquote>
                "{phrase}"
            </Blockquote>
            <Figcaption>
                <cite>- {caption} </cite>
            </Figcaption>
        </>
    )
}