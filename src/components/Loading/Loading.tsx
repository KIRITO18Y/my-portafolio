import '@/components/Loading/loading.css'
export function Loading() {
    return (
        <div className='loading-Screen'>
            <div className='loader'>
                <p>Cargando datos...</p>
            </div>
        </div>
    );
}