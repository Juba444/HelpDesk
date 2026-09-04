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
function getPriority(priority){
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
            
        </article>
    )
}