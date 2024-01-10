import { dragOverHandler, dropHandler } from '@/lib/drag-drop';

function Imagen({ children, img }) {
    const imageStyles = {
        display: 'block',
        aspectRatio: 1.62,
        width: '324px',
        height: '200px',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '10px', // Agrega borde redondeado de 10px
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' // Agrega una sombra suave
    };

    return (
        <form id="preview" >
            <img
                id='imgPreview'
                src={img}
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
                style={imageStyles} />

            {children}
        </form>
    );
}

export default Imagen;
