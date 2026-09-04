function ticket(props){
    return(
    <article>
        <h2>{props.title}</h2>
        <p>Pokuj: {props.room}</p>
        <p>Priority: {props.priority}</p>
        <p>Status: {props.status}</p>
    </article>);
}
function App(){
    return(
    <main className="container">
        <Ticket
            title = "Problem z monitorem"
            room = "10"
            priority = "średni"
            status = "otwarte"
        />
        <Ticket
            title = "Drukarka robi brr"
            room = "20"
            priority = "średnie"
            status = "otwarte"
        />
    </main>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

const tickets = [
    {
        id: 1,
        title: "Problem z monitorem",
        room: "10",
        priority: "średni",
        status: "otwarte",
    },
    {
        id: 2,
        title: "Drukarka robi brr",
        room: "20",
        priority: "średnie",
        status: "otwarte",
    },
];
function getPriorityName(priority){
    const names = {
        high: "wysoki",
        medium: "średni",
        low: "niski",
    }
    return names[priority] ?? "nieznany";
}
function getStatusName(status){
    const names={
        open: "otwarty",
        progress: "w realizacji",
        closed: "zamnknięty",
    }
    return names[status] ?? "nieznany";
}

function Ticket({ticket}){
    return (
        <article className= "ticket">
            <span className="ticked-id">#{ticket.id}</span>
            <div>
                <h3 className="ticket-title">#{ticket.title}</h3>
                <div className="ticket-meta">
                    <span>{ticket.room}</span>
                    <span>Priorytet: {getPriorityName(ticket.priority)}</span>
                    <span>Status: {getStatusName(ticket.status)}</span>
                </div>
            </div>
            <div className="ticket-badge">
                <span className={'badge priority-$ticket.priority'}>
                    {getPriorityName(ticket.priority)}
                </span>
                <span className={'badge priority-$ticket.status'}>
                    {getPriorityName(ticket.status)}
                </span>
            </div>
        </article>
    );
}
function TicketList({items}){
    if((items.lengh === 0)){
        return <div className="empty-state"> Brak zgłoszeń</div>;
    }
    return(
        <div className="ticket-list">
            {items.map((ticket)=>(
                <Ticket></Ticket>
            )
            }
        </div>
    );
}