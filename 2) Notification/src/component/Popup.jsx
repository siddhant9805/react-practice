import './Popup.css'
export function PopUp({ message, setIsVisible }) {

    return (
        <div className="popup">
            <div className="card">
                <button className="btn" onClick={() => setIsVisible(false)}>Close</button>
                <p>{message}</p>
            </div>
        </div>
    );
}