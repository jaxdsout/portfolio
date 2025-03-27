import { useParams } from "react-router-dom"

function Project () {
    const { id } = useParams();
    console.log(id);

    if (id === '1') return (
        <div>
            <p className="text-white">ATLAS</p>
        </div>
    )

    if (id === '2') return (
        <div>
            <p className="text-white">SUBSTREAM</p>
        </div>
    )

    if (id === '3') return (
        <div>
            <p className="text-white">THE GALLERY</p>
        </div>
    )
}

export default Project