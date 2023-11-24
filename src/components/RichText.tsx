import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


const options={}

const RichText=({content})=>{
    return(
    <>
    {documentToReactComponents(content,options)}
    </>
    )
}
export default RichText