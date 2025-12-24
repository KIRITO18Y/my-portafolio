import '@/components/Loading/Loading.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
export function Loading({ mensaje = "Cargando..." }) {
    return (
        <div className='loading-spinner'>
            <FontAwesomeIcon icon={faSpinner} className='fap-spinner' spin />
            <p>{mensaje}</p>
        </div>
    );
}